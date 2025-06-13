import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useLoginStore } from "@/store/store";
import LanguageSelector from "./LanguageSelector";

interface SearchBarProps {
  q?: string;
  className?: string;
}

export default function SearchBar({ q, className }: SearchBarProps) {
  const navigate = useNavigate();
  const [query, setQuery] = useState(q ?? "");
  const addHistory = useLoginStore((state) => state.addHistory);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query !== "") {
      addHistory(query);
      navigate(`/results?q=${query}&p=1`);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex items-center rounded-full overflow-hidden border-2 border-zinc-400 w-full max-w-sm ",
        className
      )}
    >
      <LanguageSelector />
      <Input
        className='flex-1 dark:bg-background border-none focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none pl-2 pr-4 py-2'
        type='text'
        placeholder='Search...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button
        type='submit'
        className='h-full rounded-r-full py-2.5 bg-lime-500 hover:bg-lime-600 text-white'
      >
        <Search />
      </Button>
    </form>
  );
}

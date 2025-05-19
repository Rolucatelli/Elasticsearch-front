import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";
import AlertModal from "./modals/AlertModal";
import { useLoginStore } from "@/store/store";

interface SearchBarProps {
  q?: string;
  className?: string;
}

export default function SearchBar({ q, className }: SearchBarProps) {
  const navigate = useNavigate();
  const [query, setQuery] = useState(q ?? "");
  const addHistory = useLoginStore((state) => state.addHistory);

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (query !== "") {
      addHistory(query);
      navigate(`/results?q=${query}&p=1`);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex w-full max-w-sm items-center space-x-2", className)}
    >
      <Input
        className='bg-background'
        type='text'
        placeholder='Search...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {q !== "" ? (
        <Button type='submit' className='hover:cursor-pointer'>
          <Search />
        </Button>
      ) : (
        <AlertModal>
          <Button type='submit' className='hover:cursor-pointer'>
            <Search />
          </Button>
        </AlertModal>
      )}
    </form>
  );
}

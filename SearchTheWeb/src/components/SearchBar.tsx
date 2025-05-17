import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  q?: string;
  className?: string;
}

export default function SearchBar({ q, className }: SearchBarProps) {
  const navigate = useNavigate();
  const [query, setQuery] = useState(q ?? "");

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    navigate(`/results?q=${query}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex w-full max-w-sm items-center space-x-2", className)}
    >
      <Input
        type='text'
        placeholder='Search...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type='submit'>
        <Search />
      </Button>
    </form>
  );
}

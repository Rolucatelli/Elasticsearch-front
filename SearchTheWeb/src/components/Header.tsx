import { Avatar } from "@radix-ui/react-avatar";
import { CircleUserRound, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { useLoginStore } from "@/store/store";
import UserDropdown from "./UserDropdown";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  const username = useLoginStore((state) => state.username);

  return (
    <header className='py-4 px-8 flex justify-between border-b-1 border-zinc-500'>
      <div className='flex'>
        <Link to='/'>
          <Home className='size-6 text-zinc-500' />
        </Link>
      </div>
      <div className='gap-10 flex items-center'>
        <ThemeToggle />
        {username ? (
          <UserDropdown>
            <Avatar className='size-14'>
              <CircleUserRound className='size-6 text-cyan-400' />
            </Avatar>
          </UserDropdown>
        ) : (
          <CircleUserRound className='size-6 text-zinc-500' />
        )}
      </div>
    </header>
  );
}

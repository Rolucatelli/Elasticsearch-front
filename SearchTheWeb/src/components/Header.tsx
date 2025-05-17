import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  user: string;
}

export default function Header({ user }: HeaderProps) {
  return (
    <header className='bg-primary py-4 px-8 flex justify-between'>
      <div className='flex'>
        <Link
          to='/'
          className='bg-green-500 p-3 rounded-md text-zinc-100 self-center'
        >
          <Home />
        </Link>
      </div>
      <div className='gap-10 flex'>
        <span className='text-xl font-semibold capitalize self-center'>
          {user}
        </span>
        <Avatar className='size-14'>
          <AvatarImage src={`https://github.com/${user}.png`} />
        </Avatar>
      </div>
    </header>
  );
}

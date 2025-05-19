import { Avatar } from "@radix-ui/react-avatar";
import { CircleUserRound, Home } from "lucide-react";
import { Link } from "react-router-dom";
import LoginForm from "./modals/LoginForm";
import { useLoginStore } from "@/store/store";
import UserDropdown from "./UserDropdown";

export default function Header() {
  const username = useLoginStore((state) => state.username);

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
      <div className='gap-10 flex items-center'>
        <span className='text-xl capitalize'>{username ?? <LoginForm />}</span>

        {username ? (
          <UserDropdown>
            <Avatar className='size-14'>
              <CircleUserRound className='size-14 text-cyan-400' />
            </Avatar>
          </UserDropdown>
        ) : (
          <CircleUserRound className='size-14 text-gray-400' />
        )}
      </div>
    </header>
  );
}

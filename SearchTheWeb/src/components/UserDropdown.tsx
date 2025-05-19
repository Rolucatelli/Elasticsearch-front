import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { type ReactNode } from "react";
import LogoutModal from "./modals/LogoutModal";
import { useLoginStore } from "@/store/store";
import { Link } from "react-router-dom";

export default function UserDropdown({ children }: { children?: ReactNode }) {
  const history = useLoginStore((state) => state.history);
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
        <DropdownMenuContent className='w-56'>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>History</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className='text-zinc-400'>
                  {history && history.length > 0
                    ? history.slice(0, 5).map((q) => (
                        <Link to={`/results?q=${q}&p=1`}>
                          <DropdownMenuItem className='capitalize' key={q}>
                            {q}
                          </DropdownMenuItem>
                        </Link>
                      ))
                    : "No recent searches"}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className='text-zinc-950'>
                    More...
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <LogoutModal>
            <DropdownMenuItem
              variant='destructive'
              onSelect={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              Log out
              <DropdownMenuShortcut>L</DropdownMenuShortcut>
            </DropdownMenuItem>
          </LogoutModal>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

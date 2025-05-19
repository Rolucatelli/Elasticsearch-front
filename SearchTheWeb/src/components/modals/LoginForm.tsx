import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { useLoginStore } from "@/store/store";

export default function LoginForm() {
  const logIn = useLoginStore((state) => state.logIn);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") ?? "";
    const password = formData.get("password") ?? "";
    logIn(username.toString(), password.toString());
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Log In</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Log In</DialogTitle>
          <DialogDescription>
            Log in your account to have access to all features.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='username' className='text-right'>
                Username
              </Label>
              <Input
                type='text'
                id='username'
                name='username'
                placeholder='Maybe try your GitHub username...'
                className='col-span-3'
                required
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='password' className='text-right'>
                Password
              </Label>
              <Input
                type='password'
                id='password'
                name='password'
                placeholder='********'
                required
                className='col-span-3'
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant='secondary' type='submit'>
              Sign In
            </Button>
            <Button type='submit'>Log In</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

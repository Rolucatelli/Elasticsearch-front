import { Link } from "react-router-dom";
export default function Header({ children }) {
  let btnStyle = "r-2 p-4 text-blue-200";

  return (
    <header className='bg-blue-600 w-dvw p-0 h-[8dvh] flex'>
      <Link to='/' className={btnStyle + " bg-green-500"}>
        Home
      </Link>
    </header>
  );
}

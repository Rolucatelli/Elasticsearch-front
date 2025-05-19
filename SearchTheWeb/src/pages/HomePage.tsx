import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import logo from "@/assets/search the web.png";

export default function HomePage() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex flex-1 items-center justify-center mb-20'>
        <img className='fixed -z-10' src={logo} />
        <SearchBar className='pt-10 mt-16' />
      </div>
    </div>
  );
}

import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";

export default function HomePage() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header user='rolucatelli' />
      <div className='flex flex-1 items-center justify-center'>
        <SearchBar />
      </div>
    </div>
  );
}

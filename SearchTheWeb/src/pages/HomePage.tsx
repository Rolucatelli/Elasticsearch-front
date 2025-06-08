import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import logo from "@/assets/logo.svg";
import logoDark from "@/assets/logo-dark.svg";
import Footer from "@/components/Footer";
import { useTheme } from "@/components/theme-provider";

export default function HomePage() {
  const { theme } = useTheme();
  return (
    <div className='flex flex-col min-h-screen select-none'>
      <Header />
      <div className='flex flex-col flex-1 items-center justify-center mb-32'>
        <img
          className='-z-10 transition-colors duration-1000 ease-in-out'
          src={theme === "light" ? logo : logoDark}
        />
        <SearchBar />
      </div>
      <Footer />
    </div>
  );
}

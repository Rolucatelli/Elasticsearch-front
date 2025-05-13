import SearchBar from "../components/SearchBar";
import centerImage from "../assets/image.png";

export default function Home() {
  return (
    <>
      <section className='mt-48 flex flex-col items-center justify-center'>
        <img
          src={centerImage}
          alt='Logo Search'
          className='mb-0 w-96 object-contain'
        />

        <SearchBar />
      </section>
    </>
  );
}

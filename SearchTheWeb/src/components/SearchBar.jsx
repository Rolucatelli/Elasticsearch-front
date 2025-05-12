import { useState } from "react";
import centerImage from "../assets/image.png";
import Button from "./Button";

export default function SearchBar() {
  const [searchQuerry, setSearchQuerry] = useState("");

  function handleClick() {
    console.log(searchQuerry);
  }

  return (
    <section className='mt-48 flex flex-col items-center justify-center'>
      <img
        src={centerImage}
        alt='Imagem centralizada'
        className='mb-0 w-96 object-contain'
      />
      <div>
        <input
          className='p-2 h-12 border-blue-200 border-2 mr-2'
          type='text'
          placeholder='Search: ...'
          onChange={(event) => setSearchQuerry(event.target.value)}
        />
        <Button
          onClick={handleClick}
          className='bg-green-500 rounded-md h-12 text-gray-50 p-2 ml-2'
        >
          Search!
        </Button>
      </div>
    </section>
  );
}

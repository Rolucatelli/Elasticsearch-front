import { useContext } from "react";
import { SearchContext } from "../store/search-context";
import { Link, useNavigate } from "react-router-dom";

export default function SearchBar(props) {
  const { querry, setQuerry } = useContext(SearchContext);
  const navigate = useNavigate();

  function handleClick() {
    console.log(querry);
    navigate("/search");
  }

  return (
    <div {...props}>
      <input
        className='p-2 h-12 w-sm border-blue-200 border-2 m-2'
        type='text'
        value={querry}
        placeholder='Search...'
        onChange={(event) => setQuerry(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleClick();
          }
        }}
      />

      <button
        onClick={handleClick}
        className='rounded-md mt-5 p-3 text-gray-50 bg-green-500 cursor-pointer'
      >
        Search!
      </button>
    </div>
  );
}

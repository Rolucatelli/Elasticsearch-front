import { useContext } from "react";
import { SearchContext } from "../store/search-context";
import { Link, useNavigate } from "react-router-dom";
import searchIcon from "../assets/magnifying-glass-solid.svg";

export default function SearchBar(props) {
  const { querry, setQuerry } = useContext(SearchContext);
  const navigate = useNavigate();

  function handleClick() {
    console.log(querry);
    navigate("/search");
  }

  return (
    <div {...props}>
      <div className='flex items-center mt-6'>
        <input
          className='p-2 h-12 w-sm border-blue-200 border-2 mr-2'
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
          className='rounded-md p-3 text-gray-50 bg-green-500 cursor-pointer flex items-center justify-center'
        >
          <img src={searchIcon} className='w-6 h-6' />
        </button>
      </div>
    </div>
  );
}

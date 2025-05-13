import DUMMY_SEARCHS from "../app/dummy.js";
import SearchBar from "../components/SearchBar";

export default function ResultsPage() {
  return (
    <>
      <SearchBar className='m-4' />
      <h2>Results: </h2>
      <ul>
        {DUMMY_SEARCHS.map((result) => {
          return (
            <li>
              <a href={result.url}>
                <h3>{result.title}</h3>
              </a>
              <p>{result.suggestedContent}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

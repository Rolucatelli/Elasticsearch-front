import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
interface ResultsInterface {
  query: string;
  results: {
    title: string;
    url: string;
    content: string;
    dt_creation: string;
    reading_time: number;
  }[];
}

export default function ResultsPage() {
  const query = useQuery().get("q");
  const [results, setResults] = useState<ResultsInterface["results"]>([]);

  useEffect(() => {
    axios
      .post("http://localhost:5000/api/v1/search", { q: query })
      .then((res) => {
        const data = res.data as ResultsInterface; // Cast the response data to your interface
        setResults(data.results);
      })
      .catch((error) => {
        console.error("Error fetching results:", error);
      });
  }, [query]);

  return (
    <div className='flex flex-col min-h-screen'>
      <Header user='rolucatelli' />
      <SearchBar className='mx-16 my-8' q={query ?? undefined} />
      <ul className='px-16 pt-4'>
        {results.map((result) => (
          <li className='py-4' key={result.title}>
            <h3 className='text-primary font-bold text-xl'>
              <a href={result.url}>{result.title}</a>
            </h3>
            <p className='text-xs'>{result.url}</p>
            <p className='w-1/2'>{result.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

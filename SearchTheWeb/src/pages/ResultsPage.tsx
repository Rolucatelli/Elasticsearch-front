import Header from "@/components/Header";
import ResultsPagination from "@/components/ResultsPagination";
import SearchBar from "@/components/SearchBar";
import { Skeleton } from "@/components/ui/skeleton";

import DUMMY_RESULTS from "@/dummy";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
// interface ResultsInterface {
//   query: string;
//   results: {
//     title: string;
//     url: string;
//     content: string;
//     dt_creation: string;
//     reading_time: number;
//   }[];
// }
interface ResultsInterface {
  totalResults: number;
  page: number;
  resultsList: {
    title: string;
    url: string;
    content: string;
    dt_creation: string;
    reading_time: number;
  }[];
}

export default function ResultsPage() {
  const query = useQuery().get("q");
  const page = useQuery().get("p");
  const [results, setResults] = useState<ResultsInterface["resultsList"]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`http://localhost:8080/v1/search?q=${query}&p=${page}`) // Esse é o backend do Flávio
      // .get(`http://localhost:5000/api/v1/search?q=${query}`)    // Esse é o backend nosso
      .then((res) => {
        const data = res.data as ResultsInterface;
        setResults(data.resultsList);
      })
      .catch((error) => {
        console.error("Error fetching results:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query]);

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <SearchBar className='mx-16 my-8' q={query ?? undefined} />
      <ul className='px-16 pt-4'>
        {isLoading
          ? Array.from({ length: 5 }).map((_, idx) => (
              <li key={idx} className='py-4 space-y-2'>
                <Skeleton className='h-6 w-1/3' />
                <Skeleton className='h-4 w-1/4' />
                <Skeleton className='h-4 w-1/2' />
              </li>
            ))
          : DUMMY_RESULTS.map((result) => (
              // :results.map((result) => (
              <li className='py-4' key={result.title}>
                <h3 className='text-primary font-bold text-xl'>
                  <a href={result.url}>{result.title}</a>
                </h3>
                <p className='text-xs text-gray-700'>{result.url}</p>
                <p className='w-1/2 text-[0.9rem]'>{result.content}</p>
              </li>
            ))}
      </ul>
      <ResultsPagination />
    </div>
  );
}

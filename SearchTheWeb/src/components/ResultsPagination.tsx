import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function ResultsPagination() {
  const query = useQuery().get("q");
  const page = parseInt(useQuery().get("p") || "1", 10);
  return (
    <Pagination className='p-4'>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={page === 1 ? "hidden" : undefined}
            href={`/results?q=${query}&p=${page - 1}`}
          />
        </PaginationItem>
        <PaginationItem className={page <= 2 ? "hidden" : undefined}>
          <PaginationLink href={`/results/?q=${query}&p=${page - 2}`}>
            {page - 2}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className={page === 1 ? "hidden" : undefined}>
          <PaginationLink href={`/results/?q=${query}&p=${page - 1}`}>
            {page - 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            className='border-primary'
            isActive
            href={`/results/?q=${query}&p=${page}`}
          >
            {page}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={`/results/?q=${query}&p=${page + 1}`}>
            {page + 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={`/results/?q=${query}&p=${page + 2}`}>
            {page + 2}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href={`/results?q=${query}&p=${page + 1}`} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

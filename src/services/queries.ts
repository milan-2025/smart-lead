import { useQuery } from "@tanstack/react-query";
import { getAllLeads } from "./api";

export function useGetAllLeadsQuery(
  page: number,
  limit: number,
  filterValue: string
) {
  return useQuery({
    queryKey: ["leads", { page, limit, filterValue }],
    queryFn: () => getAllLeads(page, limit, filterValue),
  });
}

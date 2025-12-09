import { useQuery } from "@tanstack/react-query";
import { getAllLeads } from "./api";

export function useGetAllLeadsQuery(page: number, limit: number) {
  return useQuery({
    queryKey: ["leads", { page, limit }],
    queryFn: () => getAllLeads(page, limit),
  });
}

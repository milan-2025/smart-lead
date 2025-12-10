import type { getLeadsResponse, Lead } from "@/types/lead";
import axios from "axios";

const localbaseURL = "http://localhost:3000";
const axiosInstance = axios.create({ baseURL: localbaseURL });

export const verifyAndAddNames = async (names: string[]) => {
  return (
    await axiosInstance.post<Lead[]>("/api/verify-add-users", {
      names: names,
    })
  ).data;
};

export const getAllLeads = async (
  page: number,
  limit: number,
  filterValue: string
) => {
  let url = `/api/all-leads?page=${page}&limit=${limit}`;
  if (filterValue == "All") {
  } else {
    url = url + `&filterValue=${filterValue}`;
  }
  return (await axiosInstance.get<getLeadsResponse>(url)).data;
};

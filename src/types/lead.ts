export interface Lead {
  name: string;
  country: string;
  status: "Verified" | "To Check";
  probability: number;
  createdAt: string;
  _id: string;
}

export interface getLeadsResponse {
  page: number;
  limit: number;
  noOfPages: number;
  total: number;
  leads: Lead[];
}

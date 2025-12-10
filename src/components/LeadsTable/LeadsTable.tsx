import {
  Table,
  TableBody,
  // TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { getLeadsResponse } from "@/types/lead";
import { Button } from "../ui/button";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { formatUtcToReadableTime } from "@/util/helpers";

const LeadsTable: React.FC<{
  data: getLeadsResponse;
  page: number;
  setPage: (state: number | ((oldState: number) => number)) => void;
}> = ({ data, page, setPage }) => {
  const calculateLowerIndex = (page: number, limit: number) => {
    let lowerIndex = (page - 1) * limit + 1;
    return lowerIndex;
  };

  const calculateUpperIndex = (page: number, limit: number) => {
    // let limit = 5
    let higherIndex = limit * page;
    if (page == data?.noOfPages) {
      higherIndex = data.total;
    }
    return higherIndex;
  };

  const handlePrevious = () => {
    if (page == 1) return;
    setPage((oldState: number) => oldState - 1);
  };

  const handleNext = () => {
    if (page == data?.noOfPages) return;
    setPage((oldState: number) => oldState + 1);
  };
  return (
    <>
      <Table className="p-2">
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Country</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Probability (score)</TableHead>
            <TableHead>Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.leads.map((lead) => {
            return (
              <TableRow key={lead.name}>
                <TableCell className="font-medium">{lead.name}</TableCell>
                <TableCell>{lead.country}</TableCell>
                <TableCell>{lead.status}</TableCell>
                <TableCell>{lead.probability}</TableCell>
                <TableCell>{formatUtcToReadableTime(lead.createdAt)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
        <TableFooter className="mt-2">
          <TableRow>
            <TableCell colSpan={3}>{`Showing ${calculateLowerIndex(
              data.page,
              data.limit
            )} - ${calculateUpperIndex(data.page, data.limit)} of total ${
              data.total
            } leads`}</TableCell>
            <TableCell colSpan={2}>
              <div className="flex flex-row justify-end items-center space-x-3">
                <Button
                  disabled={page == 1}
                  onClick={handlePrevious}
                  className="bg-blend-darken hover:bg-black"
                >
                  <ArrowBigLeft /> Previous
                </Button>
                <Button
                  disabled={page == data.noOfPages}
                  onClick={handleNext}
                  className="bg-emerald-400 hover:bg-emerald-400/70"
                >
                  Next <ArrowBigRight />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
};

export default LeadsTable;

import Container from "@/components/Container/Container";
import FilterDropdown from "@/components/FilterDropdown/FilterDropdown";
import LeadsTable from "@/components/LeadsTable/LeadsTable";
import LoadingScreen from "@/components/LodingSccreen/LoadingScreen";
import { useGetAllLeadsQuery } from "@/services/queries";
// import { Container } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const AllLeads: React.FC = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const [filterValue, setFilterValue] = useState("All");
  const getAllLeadsQuery = useGetAllLeadsQuery(page, limit, filterValue);

  if (getAllLeadsQuery.isError) {
    console.log("error while getting leads---", getAllLeadsQuery.error);

    toast.error("Some error while getting leads.", {
      classNames: {
        toast: "!bg-red-400 !text-neutral-100 !border-0",
      },
      position: "top-right",
    });
  }

  if (getAllLeadsQuery.data) {
    console.log("data from get all leads ---", getAllLeadsQuery.data);
  }

  return (
    <Container>
      {getAllLeadsQuery.isLoading && <LoadingScreen />}
      <div className="flex flex-col w-full items-center">
        <div className="mt-7 md:w-2/3 w-full text-right">
          <FilterDropdown
            filterValue={filterValue}
            setFilterValue={setFilterValue}
          />
        </div>
        <div className="mt-7 md:w-2/3 w-full rounded-xl border p-2 shadow-xl">
          {getAllLeadsQuery.data && getAllLeadsQuery.data.leads.length > 0 && (
            <LeadsTable
              page={page}
              setPage={setPage}
              data={getAllLeadsQuery.data}
            />
          )}
          {getAllLeadsQuery.data && getAllLeadsQuery.data.leads.length == 0 && (
            <h2 className="text-lg text-neutral-600">
              No leads to Show, add some first.
            </h2>
          )}
        </div>
      </div>
    </Container>
  );
};

export default AllLeads;

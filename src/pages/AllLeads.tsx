import Container from "@/components/Container/Container";
import { useGetAllLeadsQuery } from "@/services/queries";
// import { Container } from "lucide-react";
import { useState } from "react";

const AllLeads: React.FC = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const getAllLeadsQuery = useGetAllLeadsQuery(page, limit);

  if (getAllLeadsQuery.isLoading) {
    return <>Loading....</>;
  }

  if (getAllLeadsQuery.isError) {
    return <>Error while getting leads.</>;
  }

  if (getAllLeadsQuery.data) {
    console.log("data from get all leads ---", getAllLeadsQuery.data);
  }

  return (
    <Container>
      <div>All - leads</div>
    </Container>
  );
};

export default AllLeads;

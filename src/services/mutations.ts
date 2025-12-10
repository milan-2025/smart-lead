import { useMutation, useQueryClient } from "@tanstack/react-query";
import { verifyAndAddNames } from "./api";
import { useNavigate } from "react-router-dom";

export function useVerifyAddLeadsMutate() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (names: string[]) => verifyAndAddNames(names),
    onSettled: (data, error) => {
      if (error) {
        console.log("error while adding names---", error);
      }
      if (data) {
        console.log("data after adding---", data);
        queryClient
          .invalidateQueries({
            queryKey: ["leads"],
          })
          .then(() => {
            console.log("in navigate");
            navigate("/all-leads");
          })
          .catch((err) => {
            console.log("err--", err);
          });
      }
    },
  });
}

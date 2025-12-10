import { useMutation, useQueryClient } from "@tanstack/react-query";
import { verifyAndAddNames } from "./api";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function useVerifyAddLeadsMutate() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (names: string[]) => verifyAndAddNames(names),
    onSettled: (data, error) => {
      if (error) {
        console.log("error while adding names---", error);
        toast.error("Some error while adding leads.", {
          classNames: {
            toast: "!bg-red-400 !text-neutral-100 !border-0",
          },
          position: "top-right",
        });
      }
      if (data) {
        console.log("data after adding---", data);
        queryClient
          .invalidateQueries({
            queryKey: ["leads"],
          })
          .then(() => {
            console.log("in navigate");
            toast.success("Leads Added", {
              classNames: {
                toast: "!bg-green-500 !text-neutral-100 !border-0",
              },
              position: "top-right",
            });
            navigate("/all-leads");
          })
          .catch((err) => {
            console.log("err--", err);
          });
      }
    },
  });
}

import { useMutation } from "@tanstack/react-query";
import { verifyAndAddNames } from "./api";

export function useVerifyAddLeadsMutate() {
  return useMutation({
    mutationFn: (names: string[]) => verifyAndAddNames(names),
    onSettled: (data, error) => {
      if (error) {
        console.log("error while adding names---", error);
      }
      if (data) {
        console.log("data after adding---", data);
      }
    },
  });
}

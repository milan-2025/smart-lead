import { useVerifyAddLeadsMutate } from "@/services/mutations";
import LoadingScreen from "@/components/LodingSccreen/LoadingScreen";
import { useState } from "react";
const SendBatchList: React.FC = () => {
  const [namesString, setNamesString] = useState("");

  const verifyAddLeadsMutation = useVerifyAddLeadsMutate();
  const handleNormalizeApi = () => {
    if (namesString.trim().length == 0) {
      alert("enter names first.");
      return;
    }

    let names = namesString.split(";").map((name) => {
      return name.trim();
    });

    // removing blank names

    names = names.filter((name) => {
      if (name.length > 0) {
        return true;
      }
    });

    console.log("names---", names);
    verifyAddLeadsMutation.mutate(names);
  };

  const handleKeyDown = (event: {
    key: string;
    preventDefault: () => void;
  }) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };
  return (
    <>
      {verifyAddLeadsMutation.isPending && <LoadingScreen />}
      <div className="w-full flex justify-center">
        <div className="mt-8 bg-bg-navbar p-4 flex flex-col w-full md:w-2/3 rounded-2xl  shadow-xl">
          <label>Enter first names seperated by semi-colon (;)</label>
          <textarea
            className="mt-2 border p-2"
            placeholder="Eg:- Milan; Rahul; Lakshay;"
            onKeyDown={handleKeyDown}
            onChange={(e) => {
              setNamesString(e.target.value);
            }}
            rows={5}
          ></textarea>
          <button
            className="mt-3 ml-auto bg-emerald-400 text-white p-2 rounded hover:bg-emerald-400/80 cursor-pointer"
            onClick={handleNormalizeApi}
          >
            Add Leads
          </button>
        </div>
      </div>
    </>
  );
};

export default SendBatchList;

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";

const FilterDropdown: React.FC<{
  filterValue: string;
  setFilterValue: (state: string) => void;
}> = ({ filterValue, setFilterValue }) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-blend-darken hover:bg-black ml-auto">
            Filter By Status ({filterValue})
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Status</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className={
              filterValue == "All"
                ? "bg-neutral-100 rounded cursor-pointer"
                : "cursor-pointer"
            }
            onClick={() => {
              setFilterValue("All");
            }}
          >
            All
          </DropdownMenuItem>
          <DropdownMenuItem
            className={
              filterValue == "Verified"
                ? "bg-neutral-100 rounded cursor-pointer"
                : "cursor-pointer"
            }
            onClick={() => {
              setFilterValue("Verified");
            }}
          >
            Verified
          </DropdownMenuItem>
          <DropdownMenuItem
            className={
              filterValue == "To Check"
                ? "bg-neutral-100 rounded cursor-pointer"
                : "cursor-pointer"
            }
            onClick={() => {
              setFilterValue("To Check");
            }}
          >
            To Check
          </DropdownMenuItem>
          {/* <DropdownMenuItem>Subscription</DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default FilterDropdown;

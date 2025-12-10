import {
  Sheet,
  SheetContent,
  SheetHeader,
  //   SheetDescription,
  //   SheetHeader,
  //   SheetTitle,
  //   SheetTrigger,
} from "@/components/ui/sheet";
import { NavLink } from "react-router-dom";

const NavbarDrawer: React.FC<{
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  handleClose: () => void;
  links: {
    link: string;
    label: string;
  }[];
}> = ({ isOpen, setIsOpen, handleClose, links }) => {
  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        {/* <SheetTrigger>Open</SheetTrigger> */}
        <SheetContent>
          <SheetHeader></SheetHeader>
          <div onClick={handleClose} className="flex flex-col gap-3 p-4">
            {links.map((link) => {
              return (
                <NavLink
                  to={link.link}
                  key={link.label}
                  className={({ isActive }) => {
                    return isActive
                      ? "bg-emerald-400 rounded-xl cursor-pointer p-3 text-white"
                      : "bg-neutral-100 rounded-xl p-3 cursor-pointer text-neutral-600";
                  }}
                >
                  {link.label}
                </NavLink>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default NavbarDrawer;

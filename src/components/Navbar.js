import Image from "next/image";
import BusLogo from "../../public/busLogo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { VscAccount } from "react-icons/vsc";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="bg-white h-24 flex items-center justify-between">
      <div className="flex items-center">
        <div className="text-[1.1rem] ml-[3rem]">BookBus</div>
        <div className="h-[1.25rem] bg-[#e0e0e0] mx-[3.5rem] w-[1px]"></div>
        <Image src={BusLogo} className="w-[6.5rem] rounded-md" />
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger className="mr-[2rem] flex justify-center items-center outline-none">
            <VscAccount className="text-[1.3rem] mr-1.5" />
            Account
            <MdKeyboardArrowDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Dashboard</DropdownMenuItem>
            <DropdownMenuItem>Ticket Booking</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;

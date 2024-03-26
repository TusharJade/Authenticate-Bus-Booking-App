import Image from "next/image";
import BusBg from "../../public/busBg.png";
import BusLogo from "../../public/busLogo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { VscAccount } from "react-icons/vsc";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Home() {
  return (
    <div>
      <nav className="bg-white h-24 border border-purple-900 flex items-center justify-between">
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
      <div className="relative">
        <div className="w-full flex items-center justify-center absolute top-[6rem] font-sans">
          <div className="text-[#ffffff] text-[2rem] font-bold">
            India's No. 1 Online Bus Ticket Booking Site
          </div>
        </div>
        <div className="absolute top-[6rem]">
          <div className="bg-white"></div>
          <button className="bg-[#d84e55] text-white w-[4rem] h-[3rem] rounded-r-full">
            SERCH BUSES
          </button>
        </div>
        <Image src={BusBg} />
      </div>
    </div>
  );
}

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
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Navbar = ({ stops, setError }) => {
  const router = useRouter();
  return (
    <nav className="bg-white h-24 flex items-center justify-between shadow">
      <div className="flex items-center">
        <Link className="text-[1.1rem] ml-[1.5rem] sm:ml-[3rem]" href="/">
          BookBus
        </Link>
        <div className="h-[1.25rem] bg-[#e0e0e0] mx-4 sm:mx-[3.5rem] w-[1px]"></div>
        <Link href="/">
          <Image
            src={BusLogo}
            className="w-[3.7rem] sm:w-[6.5rem] rounded-md"
          />
        </Link>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger className="mr-[1.5rem] sm:mr-[2rem] flex justify-center items-center outline-none">
            <VscAccount className="text-[1.3rem] mr-1.5" />
            Account
            <MdKeyboardArrowDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href="/dashboard">Dashboard</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              {stops && setError ? (
                <button
                  onClick={() => {
                    stops.start.length > 0 && stops.end.length > 0
                      ? router.push("/booking")
                      : toast.error(
                          "Please select both destinations to start booking"
                        ) && setError(true);
                  }}
                >
                  Ticket Booking
                </button>
              ) : (
                <Link href="/booking">Ticket Booking</Link>
              )}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;

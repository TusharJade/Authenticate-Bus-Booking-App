import Image from "next/image";
import BusBg from "../../public/busBg.png";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <div className="w-full flex items-center justify-center absolute top-[6rem] font-sans">
          <div className="text-[#ffffff] text-[2rem] font-bold">
            India's No. 1 Online Bus Ticket Booking Site
          </div>
        </div>
        <div className="absolute top-[11rem] flex w-full justify-center items-center font-sans">
          <label
            htmlFor="start"
            className="bg-white w-[13rem] cursor-pointer h-[7.5rem] rounded-l-[2rem] flex-col flex justify-center items-center"
          >
            <span className="text-gray-400 text-[15px] mr-auto ml-6">From</span>
            <input
              id="start"
              className="mt-1 ml-6 w-[88%] outline-none font-medium cursor-pointer text-[1.3rem]"
            />
          </label>

          <label
            htmlFor="end"
            className="bg-white w-[13rem] cursor-pointer h-[7.5rem] flex-col flex justify-center items-center border border-l-gray-200"
          >
            <span className="text-gray-400 text-[15px] mr-auto ml-6">To</span>
            <input
              id="end"
              className="mt-1 ml-6 w-[88%] font-medium outline-none cursor-pointer text-[1.3rem]"
            />
          </label>

          <button className="bg-[#d84e55] text-white w-[15rem] h-[120px] font-bold text-[1.3rem] rounded-r-[2rem]">
            SERCH BUSES
          </button>
        </div>
        <Image src={BusBg} className="" />
      </div>
    </div>
  );
}

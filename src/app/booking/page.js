import Navbar from "@/components/Navbar";
import { MdStarRate } from "react-icons/md";
import { TbSteeringWheel } from "react-icons/tb";

const page = () => {
  return (
    <div className="bg-gray-50 h-[100vh]">
      <Navbar />
      <div className="border border-[#ddd] mx-4 pl-3 pr-6 py-2 ">
        <div className="flex relative">
          <div className="min-w-max pb-10">
            <div className="text-[0.9063rem] font-medium">
              SHRI MAMATA TRAVELS
            </div>
            <div className="text-[0.75rem] text-gray-400 mt-4">
              A/C Sleeper (2+1)
            </div>
          </div>
          <div className="flex gap-12 justify-end w-full">
            <div className="text-[0.9375rem] font-light">
              Starts from INR <span className="font-bold">450</span>
            </div>
            <div className="bg-green-500 w-11 h-5 text-white rounded flex justify-center items-center">
              <span className="mb-[2px]">
                <MdStarRate />
              </span>
              <span className="text-[13px]">4.2</span>
            </div>
            <div className="text-[14px] font-light">
              5 <span className="text-[#7e7e8c]">Seats available</span>
            </div>
          </div>
          <button className="absolute bottom-0 right-0 text-[0.875rem] font-light bg-[#d84e55] px-5 py-1 text-white ml-auto mt-auto">
            View Seats
          </button>
        </div>
        <div>
          <div className="text-white bg-red-600 text-[14px] font-light max-w-max mx-auto px-3 py-1">
            Click on an Available seat to proceed with your transaction
          </div>
          <div className="font-light text-[14.5px]">Lower Deck</div>
          <div className="bg-white h-[12rem] w-[22rem] border-l-gray-500 border-l-[6px]">
            <TbSteeringWheel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

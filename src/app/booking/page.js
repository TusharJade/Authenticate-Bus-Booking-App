"use client";

import BusDetailsComponent from "@/components/BusDetailsComponent";
import Navbar from "@/components/Navbar";
import { useBusBookingContext } from "@/context/BusBookingContext";
import { BsArrowRight } from "react-icons/bs";

const page = () => {
  const { busData } = useBusBookingContext();
  return (
    <div className="pb-6">
      <Navbar />

      <div className="font-bold text-[15px] pl-5 mt-6">
        Kalyan to Mumbai Bus
      </div>
      <div className="border-y mt-2 py-4 pl-5 mb-6 border-[#ddd] text-[14px] font-medium flex items-center">
        <span>Kalyan</span>
        <BsArrowRight className="mx-2" />
        <span>Mumbai</span>
        <button className="border border-[#3e3e52] rounded bg-[#e8e8e8] py-1 px-6 ml-6 font-light">
          Modify
        </button>
      </div>

      <div className="flex gap-4 flex-col">
        {busData.map((busData) => (
          <BusDetailsComponent busData={busData} />
        ))}
      </div>
    </div>
  );
};

export default page;

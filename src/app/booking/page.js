"use client";

import BusDetailsComponent from "@/components/BusDetailsComponent";
import Navbar from "@/components/Navbar";
import { BsArrowRight } from "react-icons/bs";

const page = () => {
  const busData = [
    {
      busName: "SHRI MAMATA TRAVELS",
      fare: 450,
      seatsAvailable: 5,
      rating: 4.2,
      seatsBooked: [
        {
          seatNunmber: 0,
          booked: false,
          gender: "",
          Name: "",
          email: "",
          dateOfBooking: "",
        },
      ],
    },
  ];

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

      <BusDetailsComponent />
    </div>
  );
};

export default page;

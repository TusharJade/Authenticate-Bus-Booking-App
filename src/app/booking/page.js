"use client";

import BusDetailsComponent from "@/components/BusDetailsComponent";
import Navbar from "@/components/Navbar";
import { useBusBookingContext } from "@/context/BusBookingContext";
import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";

const page = () => {
  const { busData, dateAndLocation } = useBusBookingContext();
  const [modifty, setModify] = useState({
    state: false,
    location: {
      start: "",
      end: "",
    },
  });

  useEffect(() => {
    setModify((prev) => ({
      ...prev,
      location: {
        start: JSON.parse(localStorage.getItem("INFO")).location.start,
        end: JSON.parse(localStorage.getItem("INFO")).location.end,
      },
    }));
  }, []);

  const searchHandle = () => {
    localStorage.setItem(
      "INFO",
      JSON.stringify({
        date: JSON.parse(localStorage.getItem("INFO")).date,
        location: modifty.location,
      })
    );
  };

  return (
    <div className="pb-6">
      <Navbar />

      <div className="font-bold text-[15px] pl-5 mt-6">
        {modifty.location.start} to {modifty.location.end} Buses
      </div>
      <div className="border-y mt-2 py-4 pl-5 mb-6 border-[#ddd] text-[14px] font-medium flex items-center">
        {!modifty.state && <span>{modifty.location.start}</span>}
        {modifty.state && (
          <input
            className="outline-none border-b border-gray-700 w-16"
            value={modifty.location.start}
            onChange={(e) =>
              setModify((prev) => ({
                ...prev,
                location: { ...prev.location, start: e.target.value },
              }))
            }
          />
        )}
        <BsArrowRight className="mx-2" />
        {!modifty.state && <span>{modifty.location.end}</span>}
        {modifty.state && (
          <input
            className="outline-none border-b border-gray-700 w-16"
            value={modifty.location.end}
            onChange={(e) =>
              setModify((prev) => ({
                ...prev,
                location: { ...prev.location, end: e.target.value },
              }))
            }
          />
        )}
        {modifty.state && (
          <button
            className="border text-white rounded bg-[#d84e55] py-1 px-6 ml-6 font-light"
            onClick={() => {
              setModify((prev) => ({ ...prev, state: false }));
              searchHandle();
            }}
          >
            Search
          </button>
        )}
        {!modifty.state && (
          <button
            className="border border-[#3e3e52] rounded bg-[#e8e8e8] py-1 px-6 ml-6 font-light"
            onClick={() => setModify((prev) => ({ ...prev, state: true }))}
          >
            Modify
          </button>
        )}
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

"use client";

import Image from "next/image";
import BusBg from "../../public/busBg.png";
import Navbar from "@/components/Navbar";
import { SlCalender } from "react-icons/sl";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import { startOfDay, addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Home() {
  const [date, setDate] = useState(new Date());
  const [stops, setStops] = useState({
    start: "",
    end: "",
  });
  const [error, setError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem(
      "INFO",
      JSON.stringify({
        date: date,
        location: stops,
      })
    );
  }, [date, stops]);
  return (
    <div>
      <Navbar stops={stops} setError={setError} />
      <div className="relative sm:block flex items-center justify-center sm:h-auto h-[75vh]">
        <div className="w-full flex items-center justify-center absolute top-[5rem] lg:top-[3rem] font-sans">
          <div className="text-[#ffffff] text-[1.8rem] sm:block hidden lg:text-[2rem] font-bold">
            India's No. 1 Online Bus Ticket Booking Site
          </div>
        </div>
        <div className="sm:absolute sm:top-[11rem] flex w-full justify-center items-center sm:flex-row flex-col font-sans px-8">
          <label
            htmlFor="start"
            className="bg-white w-full px-5 sm:p-0 sm:border-none border border-gray-200 sm:w-[10rem] lg:w-[13rem] cursor-pointer h-[4.5rem] sm:h-[7.5rem] rounded-none sm:rounded-l-[2rem] flex-col flex justify-center items-center"
            onClick={() => setError(false)}
          >
            <span
              className={`mr-auto ml-6 ${
                error ? "text-red-600" : "text-gray-400"
              }`}
            >
              From
            </span>
            <input
              id="start"
              className="mt-1 ml-0 sm:ml-6 w-[88%] outline-none font-medium cursor-pointer text-[1.3rem]"
              onChange={(e) =>
                setStops((prev) => ({ ...prev, start: e.target.value }))
              }
            />
          </label>

          <label
            htmlFor="end"
            className="bg-white w-full sm:w-[10rem] px-5 sm:p-0 lg:w-[13rem] cursor-pointer h-[4.5rem] sm:h-[7.5rem] flex-col flex justify-center items-center border border-l-gray-200"
            onClick={() => setError(false)}
          >
            <span
              className={`mr-auto ml-6 ${
                error ? "text-red-600" : "text-gray-400"
              }`}
            >
              To
            </span>
            <input
              id="end"
              className="mt-1 ml-0 sm:ml-6 w-[88%] font-medium outline-none cursor-pointer text-[1.3rem]"
              onChange={(e) =>
                setStops((prev) => ({ ...prev, end: e.target.value }))
              }
            />
          </label>

          <label className="bg-white w-full sm:w-[10rem] lg:w-[13rem] relative cursor-pointer h-[4.5rem] sm:h-[7.5rem] flex-col flex justify-center items-start border border-l-gray-200">
            <div className="ml-11 sm:ml-6 flex items-center justify-start">
              <div>
                <SlCalender className="text-[1.5rem]" />
              </div>
              <div className="flex flex-col ml-4 items-start">
                <span className="text-gray-400 ">Date</span>
                <span className="text-[1.2rem]">
                  {format(date, "dd MMM")}{" "}
                  <span className="sm:hidden inline">
                    {" "}
                    {format(date, "yyyy")}
                  </span>
                </span>
                <span className="text-[15px] text-gray-700 sm:block hidden">
                  {format(date, "yyyy")}
                </span>
              </div>
            </div>
            <div className="absolute sm:top-0 top-12 right-40 sm:right-0">
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                className="hidden"
                minDate={startOfDay(addDays(new Date(), 1))}
                shouldCloseOnSelect={true}
              />
            </div>
          </label>

          <button
            className="bg-[#d84e55] text-white w-full sm:w-[11rem] lg:w-[15rem] h-[3.2rem] sm:h-[120px] font-semibold sm:font-bold text-[1rem] sm:text-[1.3rem] rounded-none sm:rounded-r-[2rem] mt-8 sm:mt-0"
            onClick={() =>
              stops.start.length > 0 && stops.end.length > 0
                ? router.push("/booking")
                : toast.error("Please select both destinations") &&
                  setError(true)
            }
          >
            SERCH BUSES
          </button>
        </div>
        <Image
          src={BusBg}
          className="h-[28rem] lg:h-full sm:block hidden"
          alt="bg"
        />
      </div>
    </div>
  );
}

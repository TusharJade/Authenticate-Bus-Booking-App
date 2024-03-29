import { useBusBookingContext } from "@/context/BusBookingContext";
import React from "react";
import { toast } from "react-toastify";

const Seats = ({
  currentSelected,
  setCurrentSelected,
  seat,
  startingSeat,
  deck,
  busNumber,
}) => {
  const { busData } = useBusBookingContext();
  const selectedBusData = busData.find((prev) => prev.busNumber === busNumber);
  // console.log("sa", selectedBusData);
  return (
    <>
      {Array(seat)
        .fill(startingSeat)
        .map((num, n) => num + n + deck)
        .map((item) => (
          <button
            className={`border-[1.5px] border-gray-300 h-[25px] w-12 relative ${
              currentSelected.includes(item) && "bg-gray-600"
            } ${
              selectedBusData.seatsBooked.find(
                (prev) => prev.seatNum === item
              ) && "bg-[#cbcbcb]"
            } ${
              selectedBusData.seatsBooked.find(
                (prev) => prev.seatNum === item && prev.gender === "Female"
              ) && "bg-[#f1a9a0]"
            }`}
            disabled={selectedBusData.seatsBooked.find(
              (prev) => prev.seatNum === item
            )}
            onClick={() =>
              currentSelected.includes(item)
                ? setCurrentSelected((seat) =>
                    seat.filter((seatNum) => seatNum !== item)
                  )
                : currentSelected.length > 5
                ? toast.error(
                    "The maximum number of seats that can be selected is 6"
                  )
                : setCurrentSelected((seat) => [...seat, item])
            }
          >
            {currentSelected.includes(item) && (
              <div className="absolute text-[9px] leading-none left-[12.5px] top-[7px] text-white">
                {item}
              </div>
            )}
            <div className="border-[1.5px] border-gray-300 w-[7.5px] h-[14px] rounded-[2px] ml-auto my-1 mr-[2px]"></div>
          </button>
        ))}
    </>
  );
};

export default Seats;

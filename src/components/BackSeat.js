import React from "react";
import { toast } from "react-toastify";

const BackSeat = ({ currentSelected, setCurrentSelected, seatNum }) => {
  return (
    <div
      className={`border-[1.5px] border-gray-300 h-12 w-[24px] cursor-pointer relative ${
        currentSelected.includes(seatNum) && "bg-gray-600"
      }`}
      onClick={() =>
        currentSelected.includes(seatNum)
          ? setCurrentSelected((seat) =>
              seat.filter((prevSeat) => prevSeat !== seatNum)
            )
          : currentSelected.length > 5
          ? toast.error("The maximum number of seats that can be selected is 6")
          : setCurrentSelected((seat) => [...seat, seatNum])
      }
    >
      {currentSelected.includes(seatNum) && (
        <div className="absolute text-[9px] -left-0.5 top-4 text-white rotate-90">
          {seatNum}
        </div>
      )}
      <div className="border-[1.5px] border-gray-300 w-[7px] h-6 rounded-[2px] ml-auto mt-2.5 mr-[2px]"></div>
    </div>
  );
};

export default BackSeat;

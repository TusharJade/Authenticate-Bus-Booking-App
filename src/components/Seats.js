import React from "react";
import { toast } from "react-toastify";

const Seats = ({
  currentSelected,
  setCurrentSelected,
  seat,
  startingSeat,
  deck,
}) => {
  return (
    <>
      {Array(seat)
        .fill(startingSeat)
        .map((num, n) => num + n + deck)
        .map((item) => (
          <div
            className={`border-[1.5px] border-gray-300 h-[25px] w-12 cursor-pointer relative ${
              currentSelected.includes(item) && "bg-gray-600"
            }`}
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
          </div>
        ))}
    </>
  );
};

export default Seats;

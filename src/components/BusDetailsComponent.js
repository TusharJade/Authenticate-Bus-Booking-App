import { MdStarRate } from "react-icons/md";
import { TbSteeringWheel } from "react-icons/tb";
import { useState } from "react";

const BusDetailsComponent = () => {
  const [seatsView, setSeatsView] = useState(false);
  return (
    <>
      {/* buses */}
      <div className="border border-[#ddd] mx-4">
        {/* basic bus details */}
        <div className="flex relative bg-white pl-3 pr-6 py-2 ">
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
          <button
            className={`absolute bottom-0 right-0 text-[0.875rem] font-light px-5 py-1 text-white ml-auto mt-auto ${
              seatsView ? "bg-[#747f8d]" : "bg-[#d84e55]"
            }`}
            onClick={() => setSeatsView(!seatsView)}
          >
            {seatsView ? <span>Hide Seats</span> : <span>View Seats</span>}
          </button>
        </div>

        {seatsView && (
          <div className="w-full flex items-center justify-center pb-5 bg-[#ededed]">
            {/* seats booking */}
            <div className="mt-5">
              <div className="text-white bg-red-600 text-[14px] font-light max-w-max px-3 py-1">
                Click on an Available seat to proceed with your transaction
              </div>
              {/* lower deck */}
              <div>
                <div className="font-light text-[14.5px] mt-4">Lower Deck</div>
                <div className="bg-white h-[12rem] w-[25rem] border-l-gray-500 border-l-[6px] relative">
                  <div className="pt-5 pl-1">
                    <TbSteeringWheel className="-rotate-90 text-gray-300 text-[1.4rem]" />
                  </div>
                  <div className="absolute w-[2px] h-[90%] bg-gray-300 top-3 left-7"></div>
                  <div className="flex gap-3.5 ml-10 absolute top-5 flex-wrap">
                    {Array(10)
                      .fill(0)
                      .map(() => (
                        <div className="border-[1.5px] border-gray-300 h-[25px] w-12 cursor-pointer">
                          <div className="border-[1.5px] border-gray-300 w-[7.5px] h-[14px] rounded-[2px] ml-auto my-1 mr-[2px]"></div>
                        </div>
                      ))}
                  </div>
                  <div className="absolute top-14 right-[1.0625rem]">
                    <div className="border-[1.5px] border-gray-300 h-12 w-[24px] cursor-pointer">
                      <div className="border-[1.5px] border-gray-300 w-[7px] h-6 rounded-[2px] ml-auto mt-2.5 mr-[2px]"></div>
                    </div>
                  </div>
                  <div className="flex gap-3.5 ml-10 absolute top-[130px]">
                    {Array(5)
                      .fill(0)
                      .map(() => (
                        <div className="border-[1.5px] border-gray-300 h-[25px] w-12 cursor-pointer">
                          <div className="border-[1.5px] border-gray-300 w-[7.5px] h-[14px] rounded-[2px] ml-auto my-1 mr-[2px]"></div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              {/* upper deck */}
              <div>
                <div className="font-light text-[14.5px] mt-4 mb-1">
                  Upper Deck
                </div>
                <div className="bg-white h-[12rem] w-[25rem] border-l-gray-500 border-l-[6px] relative">
                  <div className="flex gap-3.5 ml-10 absolute top-10 flex-wrap">
                    {Array(10)
                      .fill(0)
                      .map(() => (
                        <div className="border-[1.5px] border-gray-300 h-[25px] w-12 cursor-pointer">
                          <div className="border-[1.5px] border-gray-300 w-[7.5px] h-[14px] rounded-[2px] ml-auto my-1 mr-[2px]"></div>
                        </div>
                      ))}
                  </div>
                  <div className="absolute top-28 right-[1.0625rem]">
                    <div className="border-[1.5px] border-gray-300 h-12 w-[24px] cursor-pointer">
                      <div className="border-[1.5px] border-gray-300 w-[7px] h-6 rounded-[2px] ml-auto mt-2.5 mr-[2px]"></div>
                    </div>
                  </div>
                  <div className="flex gap-3.5 ml-10 absolute top-[9.375rem]">
                    {Array(5)
                      .fill(0)
                      .map(() => (
                        <div className="border-[1.5px] border-gray-300 h-[25px] w-12 cursor-pointer">
                          <div className="border-[1.5px] border-gray-300 w-[7.5px] h-[14px] rounded-[2px] ml-auto my-1 mr-[2px]"></div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            {/* symbols of booking */}
            <div className="ml-20 mb-auto mt-10">
              <div className="font-sans font-bold mb-1">SEAT LEGEND</div>
              {["Available", "Female", "Unavailable"].map((item, i) => (
                <div className="flex gap-x-2 items-center" key={i}>
                  <div
                    className={`border border-gray-300 w-6 h-[14px] rounded-[2px] ${
                      item === "Available"
                        ? "bg-[#FFFFFF]"
                        : item === "Female"
                        ? "bg-[#f1a9a0]"
                        : "bg-[#cbcbcb]"
                    }`}
                  ></div>
                  <div>{item}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BusDetailsComponent;

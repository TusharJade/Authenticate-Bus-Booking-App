"use client";

import Navbar from "@/components/Navbar";
import TicketCard from "@/components/TicketCard";
import { useBusBookingContext } from "@/context/BusBookingContext";

const page = () => {
  const { busData } = useBusBookingContext();
  return (
    <div>
      <Navbar />
      {busData.find((prevBus) => prevBus?.seatsBooked?.length > 0) ? (
        <div className="flex flex-wrap m-6 gap-x-5 gap-y-2">
          {busData?.map((prevBus) =>
            prevBus?.seatsBooked?.length > 0
              ? prevBus?.seatsBooked?.map((busTicket, num) => (
                  <TicketCard
                    busTicket={busTicket}
                    ticketNum={num}
                    busNum={prevBus?.busNumber}
                  />
                ))
              : null
          )}
        </div>
      ) : (
        <div className="text-[1.25rem] mt-6 text-center text-gray-800">
          You haven't booked any ticket yet.
        </div>
      )}
    </div>
  );
};

export default page;

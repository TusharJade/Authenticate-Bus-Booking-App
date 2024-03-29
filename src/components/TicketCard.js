import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { useBusBookingContext } from "@/context/BusBookingContext";
import { toast } from "react-toastify";

const TicketCard = ({ busTicket, ticketNum, busNum }) => {
  const { busData, setBusData } = useBusBookingContext();
  const [edit, setEdit] = useState({
    state: false,
    name: "",
    email: "",
  });

  useEffect(() => {
    setEdit({ state: false, name: busTicket.name, email: busTicket.gmail });
  }, []);

  useEffect(() => {
    localStorage.setItem("BUSINFO", JSON.stringify(busData));
  }, [busData]);

  const deleteHandler = () => {
    setBusData((prevBus) =>
      prevBus?.map((prev) =>
        prev?.busNumber === busNum
          ? {
              ...prev,
              seatsBooked: prev?.seatsBooked?.filter(
                (seat) => seat?.id !== busTicket?.id
              ),
            }
          : prev
      )
    );
  };

  const editHandler = () => {
    if (edit.state) {
      setEdit((prev) => ({ ...prev, state: false }));
      setBusData((prevBus) =>
        prevBus?.map((prev) =>
          prev?.busNumber === busNum
            ? {
                ...prev,
                seatsBooked: prev?.seatsBooked?.map((seat) =>
                  seat?.id === busTicket?.id
                    ? { ...seat, name: edit.name, gmail: edit.email }
                    : seat
                ),
              }
            : prev
        )
      );
      toast.success("Ticket edited successfully");
    } else {
      setEdit((prev) => ({ ...prev, state: true }));
    }
  };

  return (
    <div className="max-h-[20rem] overflow-auto scrollbar-container w-[24rem]">
      <div className="bg-white shadow border border-gray-200 px-4 py-2 mb-4">
        <div className="flex gap-2 items-center">
          <div className="text-gray-600">Ticket No. {ticketNum + 1}</div>
          <div className="w-[2px] h-3.5 bg-gray-400"></div>
          <div className="font-medium">Seat No. {busTicket?.seatNum}</div>
          <div className="w-[2px] h-3.5 bg-gray-400"></div>
          <div className="font-medium">Bus No. {busNum}</div>
        </div>

        <div className="mt-4 text-[15px] flex flex-col gap-2">
          <div className="text-gray-600">
            Name:{" "}
            {edit.state ? (
              <input
                className="outline-none border border-gray-400 rounded px-2 py-0.5"
                value={edit.name}
                onChange={(e) =>
                  setEdit((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            ) : (
              <span className="text-black">{busTicket?.name}</span>
            )}
          </div>
          <div className="text-gray-600">
            Email:{" "}
            {edit.state ? (
              <input
                className="outline-none border border-gray-400 rounded px-2 py-0.5"
                value={edit.email}
                onChange={(e) =>
                  setEdit((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            ) : (
              <span className="text-black">{busTicket?.gmail}</span>
            )}
          </div>
          <div className="text-gray-600">
            Date of Booking:
            <span className="text-black">
              {" "}
              {format(busTicket?.date, "do MMM yyyy")}
            </span>
          </div>
        </div>
        <div className="flex justify-between mt-1">
          <button
            className="text-white font-light text-[14.5px] bg-[#727272] py-1 w-24 rounded mt-4"
            onClick={editHandler}
          >
            {edit.state ? "Done" : "Edit"}
          </button>
          <Dialog>
            <DialogTrigger>
              <button className="text-white font-light text-[14.5px] bg-[#d84e55] py-1 w-24 rounded mt-4">
                Delete
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your booked seat.
                </DialogDescription>
              </DialogHeader>
              <DialogClose>
                <button
                  className="text-white font-light text-[14.5px] bg-[#d84e55] py-1 w-max px-4 rounded mt-1"
                  onClick={deleteHandler}
                >
                  Delete this booking
                </button>
              </DialogClose>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;

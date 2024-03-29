import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useBusBookingContext } from "@/context/BusBookingContext";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

const SeatBookingContainer = ({
  currentSelected,
  busDataPrev,
  setCurrentSelected,
}) => {
  const { busData, setBusData } = useBusBookingContext();
  const [userData, setUserData] = useState([
    { name: "", gender: "", gmail: "", seatNum: "" },
  ]);
  const closeRef = useRef();

  useEffect(() => {
    const newData = currentSelected.map((seatNum) => ({
      name: "",
      gender: "",
      gmail: "",
      seatNum: seatNum,
    }));
    setUserData(newData);
  }, [currentSelected]);

  const submitHandler = (e) => {
    e.preventDefault();
    setBusData((prev) =>
      prev.map((newBusData) =>
        newBusData.busNumber === busDataPrev.busNumber
          ? {
              ...newBusData,
              tickets: [...newBusData.tickets, userData],
              seatsBooked: [...newBusData.seatsBooked, ...userData],
            }
          : newBusData
      )
    );
    toast.success(
      "Ticket booked successful check dashboard view to see tickit"
    );
    setCurrentSelected([]);
    localStorage.setItem(
      "BUSINFO",
      JSON.stringify(
        busData.map((prevBus) =>
          prevBus.busNumber === busDataPrev.busNumber
            ? {
                ...prevBus,
                tickets: [...prevBus.tickets, userData],
                seatsBooked: [...prevBus.seatsBooked, ...userData],
              }
            : prevBus
        )
      )
    );
    closeRef.current.click();
  };

  return (
    <div className="bg-white w-[18rem] pb-3 px-4 mt-28 shadow-md">
      <div className="font-medium mt-2">Boarding & Dropping</div>
      <div className="relative text-[14px] mt-3.5 mb-5">
        <div className="w-1 h-1 bg-black rounded-full"></div>
        <div className="border-dashed border-[0.1px] border-gray-500 absolute -left-2.5 top-4 w-6 rotate-90"></div>
        <div className="w-1 h-1 bg-gray-400 rounded-full mt-[25px]"></div>
        <span className="absolute -top-2 left-2.5">
          {JSON.parse(localStorage.getItem("INFO")).location.start}
        </span>
        <span className="absolute top-5 left-2.5">
          {JSON.parse(localStorage.getItem("INFO")).location.end}
        </span>
      </div>
      <div className="border-y mt-2 py-3 border-[#ddd] text-[14px] font-medium flex justify-between items-center">
        <span className="text-[15px] font-medium">Seat No.</span>
        <span>
          {currentSelected.map((num, i) => (i === 0 ? num : `, ${num}`))}
        </span>
      </div>
      <div className="text-[15px] font-medium mt-2">Fare Details</div>
      <div className="flex justify-between text-[12.5px] mt-1">
        <div>Amount</div>
        <div className="font-semibold">
          INR {currentSelected.length * busDataPrev.fare}
        </div>
      </div>

      <Dialog>
        <DialogTrigger>
          <button className="text-white font-light text-[14.5px] bg-[#d84e55] py-1 w-[16rem] mt-4">
            Proceed To Book
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Passenger Details</DialogTitle>
            <DialogDescription>
              Please fill the details of the passengers
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={submitHandler}>
            <div className="max-h-[20rem] overflow-auto scrollbar-container">
              {currentSelected.map((seatNum, i) => (
                <div
                  className="bg-white shadow border border-gray-200 text-[13px] px-4 py-2 mb-4"
                  key={i}
                >
                  <div className="flex gap-2 items-center">
                    <div className="text-gray-600">Passenger {i + 1}</div>
                    <div className="w-[2px] h-3.5 bg-gray-400"></div>
                    <div className="font-medium">Seat {seatNum}</div>
                  </div>

                  <div className="mt-2">
                    <label htmlFor={`${"Name" + i}`} className="text-gray-500">
                      Name
                    </label>
                    <input
                      id={`${"Name" + i}`}
                      required
                      className="w-full outline-none border border-gray-300 rounded-sm mt-1.5 py-1 px-2"
                      onChange={(e) =>
                        setUserData((user) =>
                          user.map((prevUser) =>
                            prevUser.seatNum === seatNum
                              ? { ...prevUser, name: e.target.value }
                              : prevUser
                          )
                        )
                      }
                    />
                  </div>

                  <div className="mt-3">
                    <label htmlFor={`${"Gmail" + i}`} className="text-gray-500">
                      Gmail
                    </label>
                    <input
                      id={`${"Gmail" + i}`}
                      type="gmail"
                      required
                      className="w-full outline-none border border-gray-300 rounded-sm mt-1.5 py-1 px-2"
                      onChange={(e) =>
                        setUserData((user) =>
                          user.map((prevUser) =>
                            prevUser.seatNum === seatNum
                              ? { ...prevUser, gmail: e.target.value }
                              : prevUser
                          )
                        )
                      }
                    />
                  </div>

                  <div className="mt-3 mb-2">
                    <div className="text-gray-500">Gender</div>
                    <div className="mt-1.5 flex items-center">
                      <input
                        type="radio"
                        id={`${"Male" + i}`}
                        value="Male"
                        name={`${"gender" + i}`}
                        className="cursor-pointer"
                        required
                        onChange={(e) =>
                          setUserData((user) =>
                            user.map((prevUser) =>
                              prevUser.seatNum === seatNum
                                ? { ...prevUser, gender: "Male" }
                                : prevUser
                            )
                          )
                        }
                      />
                      <label
                        htmlFor={`${"Male" + i}`}
                        className="ml-1 text-gray-800"
                      >
                        Male
                      </label>
                    </div>
                    <div className="mt-1 flex items-center">
                      <input
                        type="radio"
                        id={`${"Female" + i}`}
                        value="Female"
                        name={`${"gender" + i}`}
                        className="cursor-pointer"
                        required
                        onChange={(e) =>
                          setUserData((user) =>
                            user.map((prevUser) =>
                              prevUser.seatNum === seatNum
                                ? { ...prevUser, gender: "Female" }
                                : prevUser
                            )
                          )
                        }
                      />
                      <label
                        htmlFor={`${"Female" + i}`}
                        className="ml-1 text-gray-800"
                      >
                        Female
                      </label>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center">
              <DialogClose ref={closeRef}></DialogClose>
              <button
                className="text-white font-light text-[14.5px] bg-[#d84e55] py-1 w-24 rounded mt-4"
                type="submit"
              >
                Book
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SeatBookingContainer;

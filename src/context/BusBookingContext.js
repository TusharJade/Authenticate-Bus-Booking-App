"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const BusBookingContext = createContext(null);

export const BusBookingContextProvider = ({ children }) => {
  const [busData, setBusData] = useState([
    {
      busNumber: 4930,
      busName: "SHRI MAMATA TRAVELS",
      fare: 450,
      seatsAvailable: 32,
      rating: 4.2,
      seatsBooked: [],
      tickets: [],
    },
    {
      busNumber: 9039,
      busName: "Rameshwar travels",
      fare: 800,
      seatsAvailable: 32,
      rating: 4.4,
      seatsBooked: [],
      ticket: [],
    },
    {
      busNumber: 8502,
      busName: "Hey Rajeshwar Travels",
      fare: 550,
      seatsAvailable: 32,
      rating: 3.9,
      seatsBooked: [],
      ticket: [],
    },
  ]);

  useEffect(() => {
    if (localStorage.getItem("BUSINFO")) {
      setBusData(JSON.parse(localStorage.getItem("BUSINFO")));
    }
  }, []);

  return (
    <BusBookingContext.Provider value={{ busData, setBusData }}>
      {children}
    </BusBookingContext.Provider>
  );
};

export const useBusBookingContext = () => useContext(BusBookingContext);

// {
//     seatNunmber: 0,
//     booked: false,
//     gender: "",
//     Name: "",
//     email: "",
//     dateOfBooking: "",
// },

"use client";

import React, { createContext, useContext, useState } from "react";

const BusBookingContext = createContext(null);

export const BusBookingContextProvider = ({ children }) => {
  const [busData, setBusData] = useState([
    {
      busNumber: 1,
      busName: "SHRI MAMATA TRAVELS",
      fare: 450,
      seatsAvailable: 32,
      rating: 4.2,
      seatsBooked: [],
    },
    {
      busNumber: 2,
      busName: "Rameshwar travels",
      fare: 800,
      seatsAvailable: 32,
      rating: 4.4,
      seatsBooked: [],
    },
    {
      busNumber: 3,
      busName: "Hey Rajeshwar Travels",
      fare: 550,
      seatsAvailable: 32,
      rating: 3.9,
      seatsBooked: [],
    },
  ]);
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

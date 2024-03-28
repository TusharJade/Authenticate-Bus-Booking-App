import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BusBookingContextProvider } from "@/context/BusBookingContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BookBus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#fefefe]`}>
        <BusBookingContextProvider>{children}</BusBookingContextProvider>
        <ToastContainer />
      </body>
    </html>
  );
}

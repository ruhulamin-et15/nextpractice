//use this component index.js in React

import { Roboto } from "next/font/google"; //font
import "./globals.css"; // use index.css in React
import "bootstrap/dist/css/bootstrap.min.css"; //bootstrap
import { MyProvider } from "@/store/myContext";
import { Toaster } from "react-hot-toast";

// font
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ minHeight: "650px" }} className={roboto.className}>
        <h1 className="text-center">Header</h1>
        <MyProvider>{children}</MyProvider>
        <Toaster />
      </body>
      <h1 className="text-center">Footer</h1>
    </html>
  );
}

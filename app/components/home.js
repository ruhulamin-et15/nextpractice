import Link from "next/link";
import React from "react";
import { FaWpforms } from "react-icons/fa";

const Main = () => {
  return (
    <div>
      <Link className="btn btn-primary" href="/form">
        Form <FaWpforms />
      </Link>
    </div>
  );
};

export default Main;

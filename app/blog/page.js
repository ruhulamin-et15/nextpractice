"use client";
import React, { useState } from "react";

const blog = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button className="btn btn-success m-1" onClick={handleIncrement}>
        Increment
      </button>
      <button className="btn btn-warning" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
};

export default blog;

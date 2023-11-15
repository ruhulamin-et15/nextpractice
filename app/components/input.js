"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Input = () => {
  const [bookName, setBookName] = useState("");
  const [bookTopic, setBookTopic] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setBookName("");
    setBookTopic("");
    router.push("/show");
    // data fetch post in submit function
    try {
      const data = await fetch("/api/book/new", {
        method: "POST",
        body: JSON.stringify({ name: bookName, topic: bookTopic }),
      });
      if (data) {
        toast.success("Created Successfully");
      } else {
        toast.error("Created Failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Book Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="bookName">
            Book Name:
            <input
              className="form-control m-2"
              type="text"
              name="bookName"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="bookTopic">
            Book Title:
            <input
              type="text"
              className="form-control m-2"
              name="bookTopic"
              value={bookTopic}
              onChange={(e) => setBookTopic(e.target.value)}
              required
            />
          </label>
        </div>
        <button className="btn btn-success m-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Input;

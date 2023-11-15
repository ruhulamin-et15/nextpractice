"use client";
import React, { useEffect, useState } from "react";
import Info from "../components/info";
import toast from "react-hot-toast";

const page = () => {
  const [books, setBooks] = useState([]);

  const fetchBook = async () => {
    const response = await fetch("/api/book");
    const data = await response.json();
    setBooks(data);
  };

  useEffect(() => {
    fetchBook();
  }, []);

  const handleDelete = async (book) => {
    console.log(book);

    const confirmed = confirm("are you sure delete this book?");
    if (confirmed) {
      try {
        const data = await fetch(`/api/book/${book._id.toString()}`, {
          method: "DELETE",
        });
        if (data) {
          toast.success("Deleted Successfully");
        } else {
          toast.error("something wrong when deleted!");
        }
        const filterBooks = books.filter((item) => item._id !== book._id);
        setBooks(filterBooks);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleUpdate = async (book, newBookName, newBookTitle) => {
    try {
      const response = await fetch(`/api/book/${book._id}`, {
        method: "PATCH",
        body: JSON.stringify({
          bookName: newBookName,
          bookTopic: newBookTitle,
        }),
      });
      if (response.ok) {
        fetchBook();
        toast.success("Updated Successfully");
      } else {
        toast.error("something went wrong when updating");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {books.length}
      {books.map((book) => (
        <Info
          key={book._id}
          book={book}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        ></Info>
      ))}
    </div>
  );
};

export default page;

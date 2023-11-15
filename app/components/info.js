"use client";
import React, { useState } from "react";

const Info = ({ book, handleDelete, handleUpdate }) => {
  const [updateBookName, setUpdateBookName] = useState("");
  const [updateBookTitle, setUpdateBookTitle] = useState("");
  const { name, topic } = book;
  return (
    <div>
      <p>Book Name: {name}</p>
      <p>Book Title: {topic}</p>
      <input
        placeholder="Enter Book Name"
        className="form-control w-50 mb-3"
        type="text"
        value={updateBookName}
        onChange={(e) => {
          setUpdateBookName(e.target.value);
        }}
      />
      <input
        placeholder="Enter Book Title"
        className="form-control w-50 mb-3"
        type="text"
        value={updateBookTitle}
        onChange={(e) => {
          setUpdateBookTitle(e.target.value);
        }}
      />
      <div>
        <button
          className="btn btn-danger mb-4"
          onClick={() => {
            handleDelete(book);
          }}
        >
          Delete
        </button>

        <button
          className="btn btn-success mb-4 ms-2"
          onClick={() => {
            handleUpdate(book, updateBookName, updateBookTitle);
          }}
        >
          Update
        </button>
      </div>

      <br />
    </div>
  );
};

export default Info;

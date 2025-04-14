// src/components/Home.jsx
import React from "react";
import BookCard from "./BookCard";
import books from "../booksData";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <button
        onClick={() => navigate("/add-book")}
        className="add-book-button"
      >
        Add Book
      </button>
      <h1>Book Library</h1>
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;


import React from "react";
import { useNavigate } from "react-router-dom";
import "./AddBook.css"; 

const AddBook = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Book submitted (hypothetically)!");
    navigate("/");
  };

  return (
    <div className="add-book-form-container">
      <h2>Add a New Book</h2>
      <form className="add-book-form" onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" required />
        </label>
        <label>
          Author:
          <input type="text" name="author" required />
        </label>
        <label>
          Description:
          <textarea name="description" required />
        </label>
        <label>
          Cover Image URL:
          <input type="url" name="coverImage" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBook;

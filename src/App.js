import React, { useState } from "react";
import "./App.css";

function App({ books }) {
  return (
    <div className="App">
      <Books books={books} />
    </div>
  );
}

function Books({ books }) {
  return (
    <div>
      <h1>Books!</h1>
      <div className="App">
        {books.map((book) => (
          <div className="book-list">
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <img src={book.coverImageUrl} className="cover-art" alt="cover" />
            <p>{book.shortDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

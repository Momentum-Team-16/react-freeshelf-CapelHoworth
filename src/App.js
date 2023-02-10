import React, { useState } from "react";
import "./App.css";
import placeholder from "./ImageError.jpeg";

const fixBrokenImage = (e) => {
  e.target.src = placeholder;
};

function App({ books }) {
  return (
    <div className="App">
      {books.map((book) => (
        <Books book={book} />
      ))}
      ;
    </div>
  );
}

function Books({ book }) {
  const [showResults, setShowResults] = useState(false);
  const onExpand = () => setShowResults(!showResults);
  return (
    <div>
      <h1>Books!</h1>
      <div className="App">
        <div className="book-list">
          <div>
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <img
              src={book.coverImageUrl}
              className="cover-art"
              alt="cover"
              onError={fixBrokenImage}
            />
            <br />
            <button onClick={onExpand}>Show Book Bio</button>
            {showResults === true && <div>{book.shortDescription}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

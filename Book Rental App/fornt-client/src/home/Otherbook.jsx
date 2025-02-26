import React, { useEffect, useState } from "react";
import BookCards from "../components/BookCards";

const Otherbook = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(6, 12)));
  }, []);
  return (
    <>
      <div>
        <BookCards books={books} headline="Dusri Kitabe" />
      </div>
    </>
  );
};

export default Otherbook;

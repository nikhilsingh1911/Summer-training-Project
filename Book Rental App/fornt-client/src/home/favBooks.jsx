import React, { useEffect, useState } from "react";

const FavBooks = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => console.log(data), []);
  });
  return (
    <>
      <div>Favbooks</div>
    </>
  );
};

export default FavBooks;

import { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
const Shop = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="mt-28 px-4 lg:px24">
      <h2 className="text-5xl font-bold text-center">All Books are here</h2>
      <div className="grid gap-9 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {books.map((book) => (
          // <Card className="max-w-sm">
          //   <img className="h-70 w-auto" src={book.imageURL} alt="image 1" />
          //   <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          //     <p>{book.bookTitle}</p>
          //   </h5>
          //   <p className="font-normal text-gray-700 dark:text-gray-400">
          //     <p>{book.bookDescription}</p>
          //     <p>{book.price}</p>
          //   </p>
          // </Card>
          <Card className="max-w-sm">
            <img className="h-70 w-auto" src={book.imageURL} alt="image 1" />
            <Link to={`book/${book._id}`}>
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {book.bookTitle}
              </h5>
            </Link>
            <div className="flex items-center justify-between">
              <span className="text-1xl font-semibold text-gray-500 dark:text-white">
                {book.price}
              </span>
            </div>
            <button className="bg-blue-600 text-2xl font-semibold mt-8 mb-0 p-1 text-white">
              Buy Now
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;

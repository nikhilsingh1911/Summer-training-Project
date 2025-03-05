import { useState, useEffect } from "react";
import { FaCartShopping } from "react-icons/fa6";
const Shop = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center">All Books are here</h2>
      <div className="grid gap-9 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {/* {books.map((book) => {
          <div key={book._id}>
            <h1>{book.price}</h1>;
          </div>;

          console.log(book.price);
        })} */}
        {books.length > 0 ? ( // ✅ Check if books exist
          books.map((book) => (
            <div key={book._id || book.bookTitle}>
              {" "}
              {/* ✅ Ensure unique key */}
              {/* <h1>{bok.bookTitle}</h1> ✅ Display title */}
              {/* <p>Price: {bok.price}</p> ✅ Display price */}
              {/* {console.log("Book Price:", bok.price)} ✅ Debugging price */}
              <div className="relative">
                <img src={book.imageURL} alt="" />
                <div className="absolute top-3 right-3 bg-blue-200 hover:bg-blue-300 p-2 rounded">
                  <FaCartShopping />
                </div>
              </div>
              <div>
                <div>
                  <h3 className="font-medium">{book.bookTitle}</h3>
                  <p className="text-gray-500">{book.authorName}</p>
                </div>
                <div>
                  <p>{book.price}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-xl">No books found!</p> // ✅ Display if no books
        )}
      </div>
    </div>
  );
};

export default Shop;

import { Button, Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ManageBooks = () => {
  const [allBooks, setallBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setallBooks(data));
  }, []);
  // to delete the book
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/book/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book is deleted Successfully!!!");
        // setallBooks(data);
      });
  };
  return (
    <div className="px-4 my-12">
      <div className="mb-8 text-3xl font-bold"> Manage Your Books?</div>
      <Table
        striped
        className="absolute left-0 top-0 lg:w-[1180px] h-full rounded drop-shadow-md dark:bg-black"
      >
        <Table.Head className="text-left">
          <Table.HeadCell className="px-4">Book Id</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Authon Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="">Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {allBooks.map((book, index) => (
          <Table.Body className="divide-y" key={book._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
              </Table.Cell>
              {/* break-words whitespace-normal is used here to wrap the text to new line so that the text of one cell should not overlap with other cells text */}
              <Table.Cell className="font-medium max-w-xs whitespace-normal text-gray-900 dark:text-white">
                {book.bookTitle}
              </Table.Cell>
              <Table.Cell className="whitespace-normal max-w-[50px]">
                {book.authorName}
              </Table.Cell>
              <Table.Cell className="whitespace-normal max-w-[40px]">
                {book.category}
              </Table.Cell>
              <Table.Cell>{book.price}</Table.Cell>
              <Table.Cell>
                <Link
                  to={`/admin/dashboard/edit-books/${book._id}`}
                  className="font-medium text-cyan-600 hover:underline mr-5 dark:text-cyan-500"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(book._id)}
                  className="text-red-600 hover:bg-red-700 hover:text-white dark:text-red-300 hover:border border-red-600 rounded-sm transtion duration-500 font-semibold px-4 py-1"
                >
                  Delete
                </button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
  );
};
export default ManageBooks;

import { useLoaderData, useParams } from "react-router-dom";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { useState } from "react";
import { Select } from "flowbite-react";
const Editbooks = () => {
  const { id } = useParams();
  const {
    bookTitle,
    authorName,
    imageURL,
    bookDescription,
    bookPdfUrl,
    price,
  } = useLoaderData();

  const bookCategories = [
    "Ficton",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self Health",
    "Memior",
    "Business",
    "Education",
    "Manga",
    "Comics",
    "Science",
    "Travel",
    "Religon",
    "Art & Design",
  ];
  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );
  const handleChangeSelectedValue = (e) => {
    // console.log(e.target.value);
    setSelectedBookCategory(e.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfUrl = form.bookPdfUrl.value;
    const price = form.price.value;

    const updateBookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPdfUrl,
      price,
    };
    // console.log(bookObj);
    // Updating data in Database
    fetch(`http://localhost:5000/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateBookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book Details Updated Successfully!!!");
      });
  };
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update Book Details</h2>
      <form
        onSubmit={handleUpdate}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        {/* First Row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              placeholder="Book Name"
              required
              defaultValue={bookTitle}
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              type="text"
              placeholder="Author Name"
              required
              defaultValue={authorName}
            />
          </div>
        </div>
        {/* Secon Row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Image" />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              type="text"
              placeholder="Imgae URL"
              required
              defaultValue={imageURL}
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputStart" value="Genre" />
            </div>
            <Select
              id="inputState"
              name="category"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((Option) => (
                <option key={Option} value={Option}>
                  {Option}
                </option>
              ))}
            </Select>
          </div>
        </div>
        {/* Third Row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookPdfUrl" value="Book Pdf" />
            </div>
            <TextInput
              id="bookPdfUrl"
              name="bookPdfUrl"
              type="text"
              placeholder="Upload Book Pdf URL"
              required
              defaultValue={bookPdfUrl}
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="price" value="Price" />
            </div>
            <TextInput
              id="price"
              name="price"
              type="text"
              placeholder="Book Price"
              required
              defaultValue={price}
            />
          </div>
        </div>
        <div className="">
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Despcription" />
          </div>
          <Textarea
            id="bookDescription"
            name="bookDescription"
            type="text"
            placeholder="Max 200 words"
            required
            rows={3}
            defaultValue={bookDescription}
          />
        </div>
        <Button type="submit" className="text-white bg-blue-600 text-center">
          Update Details
        </Button>
      </form>
    </div>
  );
};

export default Editbooks;

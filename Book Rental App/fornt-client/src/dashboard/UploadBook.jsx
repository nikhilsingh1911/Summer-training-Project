import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Select } from "flowbite-react";
const UploadBook = () => {
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
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload A Book</h2>
      <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
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
            />
          </div>
        </div>
        <div className="">
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Despcription" />
          </div>
          <TextInput
            id="bookDescription"
            name="bookDescription"
            type="text"
            placeholder="Max 200 words"
            required
          />
        </div>
        <div>
          <button className="bg-blue-600 text-white w-full p-2 text-2xl">
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadBook;

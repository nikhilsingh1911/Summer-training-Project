import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
const BookCards = ({ headline, books }) => {
  return (
    <>
      <div className="my-16 px-4 lg:px-24">
        <h2 className="text-5xl text-center font-bold text-black my-5">
          {headline}
        </h2>

        {/* Defing Cards */}
        <div className="mt-12">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            //   modules={[Pagination]}
            className="mySwiper"
            style={{ width: "100%", height: "100%" }}
          >
            {books.map((book) => (
              <SwiperSlide key={book._id}>
                <Link to={`book/${book._id}`}>
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
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default BookCards;

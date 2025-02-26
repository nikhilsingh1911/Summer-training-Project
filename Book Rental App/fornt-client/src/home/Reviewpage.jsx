import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { Avatar } from "flowbite-react";
import avotor from "../assets/profile.jpg";
import { IoIosStarOutline } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Navigation } from "swiper/modules";
const Reviewpage = () => {
  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug">
        <span className="text-blue-900">हमारे</span>
        <span className="text-red-600"> ग्राहक</span>
      </h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="shaw-2xl bg-white py-8 px-4 md:m-5 rounded-1g border">
          <div className="space-y-6">
            <div className="text-amber-500 flex gap-2">
              <IoMdStar />
              <IoMdStar />
              <IoMdStarHalf />
              <IoIosStarOutline />
              <IoIosStarOutline />
            </div>
            <div className="mt-7">
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                veritatis porro iure unde voluptate ducimus eveniet saepe
                accusantium harum laudantium quaerat autem vitae, provident
                repudiandae.
              </p>
              <Avatar
                img={avotor}
                rounded
                alt="avator of avotor"
                className="w-10 mb-5 flex justify-items-center"
              />
              <h5 className="text-lg font-medium"> Tony singh</h5>
              <p className="text-base">CEO of Jgar</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shaw-2xl bg-white py-8 px-4 md:m-5 rounded-1g border">
          <div className="space-y-6">
            <div className="text-amber-500 flex gap-2">
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
            </div>
            <div className="mt-7">
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                veritatis porro iure unde voluptate ducimus eveniet saepe
                accusantium harum laudantium quaerat autem vitae, provident
                repudiandae.
              </p>
              <Avatar
                img={avotor}
                rounded
                alt="avator of avotor"
                className="w-10 mb-5 flex justify-items-center"
              />
              <h5 className="text-lg font-medium">Computer Ji</h5>
              <p className="text-base">CEO of Bela Panti</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Reviewpage;

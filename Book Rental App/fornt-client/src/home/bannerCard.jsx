import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./bannerCard.css";

import image1 from "../images/60652997.jpg";
import image2 from "../images/60654349.jpg";
import image3 from "../images/60784546.jpg";
import image4 from "../images/60784549.jpg";
import image5 from "../images/61431922.jpg";
import image6 from "../images/61718053.jpg";
import image7 from "../images/62047984.jpg";
import image8 from "../images/62848145.jpg";
import image9 from "../images/65916344.jpg";
import image10 from "../images/63133205.jpg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const BannerCard = () => {
  return (
    <>
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
        //   navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image1} alt="1 img" className="swipperImages" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="1 img" className="swipperImages" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="1 img" className="swipperImages" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="1 img" className="swipperImages" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} alt="1 img" className="swipperImages" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image6} alt="1 img" className="swipperImages" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image7} alt="1 img" className="swipperImages" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image8} alt="1 img" className="swipperImages" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image9} alt="1 img" className="swipperImages" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image10} alt="1 img" className="swipperImages" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BannerCard;

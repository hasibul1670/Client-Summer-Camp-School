import { Link } from "react-router-dom";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay]);

import { default as slide1, default as slide4 } from "../../assets/home/01.jpg";
import slide2 from "../../assets/home/02.png";
import { default as slide3, default as slide5 } from "../../assets/home/03.jpg";
import slide6 from "../../assets/home/06.jpg";

import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"Enroll -&- Learn- "}
        heading={"Enroll in Courses "}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        modules={[Pagination]}
        autoplay={{ delay: 1000 }} // Adjust the delay as desired (in milliseconds)
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <Link to=" course/programming">
            <img src={slide1} alt="" />
            <h3 className="text-4xl uppercase text-center -mt-16 text-white">
              Programming
            </h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to=" course/photography">
            <img src={slide2} alt="" />
            <h3 className="text-4xl uppercase text-center -mt-16 text-white">
              Photography
            </h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to=" course/design">
            <img src={slide3} alt="" />
            <h3 className="text-4xl uppercase text-center -mt-16 text-white">
              Design
            </h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to=" course/foreign-language">
            <img src={slide4} alt="" />
            <h3 className="text-4xl uppercase text-center -mt-16  text-white">
              Foreign Language
            </h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to=" course/art-craft">
            <img src={slide5} alt="" />
            <h3 className="text-4xl uppercase text-center -mt-16 text-white">
              Art & Craft
            </h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to=" course/martial-art">
            <img src={slide6} alt="" />
            <h3 className="text-4xl uppercase text-center -mt-16 text-white">
              Martial Art
            </h3>
          </Link>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;

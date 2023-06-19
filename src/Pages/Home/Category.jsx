import { Link } from "react-router-dom";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay]);

import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle heading={"New Launced Courses "}></SectionTitle>
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
            <div className="card card-side justify-center w-64 border-solid border-2 border-sky-500 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to Enroll on Jetflix app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline btn-info">Enroll</button>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to=" course/programming">
            <div className="card card-side justify-center w-64 border-solid border-2 border-sky-500 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to Enroll on Jetflix app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline btn-info">Enroll</button>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to=" course/programming">
            <div className="card card-side justify-center w-64 border-solid border-2 border-sky-500 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to Enroll on Jetflix app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline btn-info">Enroll</button>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to=" course/programming">
            <div className="card card-side justify-center w-64 border-solid border-2 border-sky-500 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to Enroll on Jetflix app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline btn-info">Enroll</button>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to=" course/programming">
            <div className="card card-side justify-center w-64 border-solid border-2 border-sky-500 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to Enroll on Jetflix app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline btn-info">Enroll</button>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../assets/home/01.jpg";
import img2 from "../../assets/home/02.png";
import img3 from "../../assets/home/03.jpg";
import img4 from "../../assets/home/06.jpg";
import img5 from "../../assets/home/07.jpg";

const Banner = () => {
  return (
    <Carousel
      showThumbs={true}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <div>
        <img src={img1} className="carousel-image" alt="Image 1" />
      </div>
      <div>
        <img src={img2} className="carousel-image" alt="Image 2" />
      </div>
      <div>
        <img src={img3} className="carousel-image" alt="Image 3" />
      </div>
      <div>
        <img src={img4} className="carousel-image" alt="Image 4" />
      </div>
      <div>
        <img src={img5} className="carousel-image" alt="Image 5" />
      </div>
    </Carousel>
  );
};

export default Banner;

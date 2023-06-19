
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import img1 from '../../assets/home/01.jpg';
import img2 from '../../assets/home/02.png';
import img3 from '../../assets/home/03.jpg';
import img4 from '../../assets/home/06.jpg';
import img5 from '../../assets/home/07.jpg';
import ImagePreLoader from "./../../Helpers/ImagePreLoader";

const Banner = () => {
  const imageUrls = [img1, img2, img3, img4, img5];

  return (
    <>
      <ImagePreLoader imageUrls={imageUrls} />
      <Carousel showThumbs={true} showStatus={false} autoPlay={true} interval={1500}>
        <div>
          <LazyLoadImage src={img1} className="carousel-image" alt="Image 1" />
        </div>
        <div>
          <LazyLoadImage src={img2} className="carousel-image" alt="Image 2" />
        </div>
        <div>
          <LazyLoadImage src={img3} className="carousel-image" alt="Image 3" />
        </div>
        <div>
          <LazyLoadImage src={img4} className="carousel-image" alt="Image 4" />
        </div>
        <div>
          <LazyLoadImage src={img5} className="carousel-image" alt="Image 5" />
        </div>
      </Carousel>
    </>
  );
};

export default Banner;

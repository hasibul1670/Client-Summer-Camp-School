import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Lottie from "lottie-react";

import academic from "../../assets/animation/108347-designer.json";
import art from "../../assets/animation/110586-line-art.json";
import sports from "../../assets/animation/61182-ball-sport.json";
import specialized from "../../assets/animation/77349-creativity.json";
import programming from "../../assets/animation/programming-animation.json";

const CategoryCard = () => {
  const [isSingleColumn, setIsSingleColumn] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSingleColumn(window.innerWidth < 300); 
    };

    window.addEventListener("resize", handleResize);


    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cardData = [
    {
      linkTo: "lifeskills",
      animationData: programming,
      cardTitle: "Life Skills",
    },
    {
      linkTo: "sports",
      animationData: sports,
      cardTitle: "Sports and Fitness",
    },

    {
      linkTo: "art",
      animationData: art,
      cardTitle: "Arts and Creativity",
    },
    {
      linkTo: "specialized ",
      animationData: specialized,
      cardTitle: "Specialized Interests",
    },
    {
      linkTo: "academicEnrichment",
      animationData: academic,
      cardTitle: "Academic Enrichment",
    },
  ];

  return (
    <div className="flex justify-center px-4">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {isSingleColumn
          ? cardData.map((card, index) => (
              <Link to={card.linkTo} key={index}>
                <button className="w-full h-full btn btn-outline btn-info shadow-xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300">
                  <h3 className="font-firacode font-bold">{card.cardTitle}</h3>
                </button>
              </Link>
            ))
          : cardData.map((card, index) => (
              <Link to={card.linkTo} key={index}>
                <div className="card w-64 bg-base-100 shadow-xl hover:shadow-3xl ">
                  <div className="card-animation px-4">
                    <Lottie animationData={card.animationData} loop={true} />
                  </div>
                  <figure className="">
                    <Lottie
                      src={card?.imageSrc}
                      alt={card.cardTitle}
                      className="rounded-xl transition-transform duration-300 hover:scale-110"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <p className="card-title text-cyan-500 ">
                      {card.cardTitle}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default CategoryCard;

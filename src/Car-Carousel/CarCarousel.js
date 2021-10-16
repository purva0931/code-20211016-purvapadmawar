import React from "react";
import Style from "./CarCarousel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarCarousel = ({ products }) => {
  const imgStyle = (color) => {
    return {
      borderLeft: `solid 5px ${color}`,
      borderRadius: "3px",
    };
  };
  return (
    <section className={Style.carousel}>
      <Carousel autoPlay showThumbs={false} infiniteLoop>
        {products
          .sort((a, b) => a.feature_order - b.feature_order)
          .map((product) => (
            <a to={`/product/${product.id}`} key={product.id}>
              <img
                src={product.image1}
                alt={product.description}
                style={imgStyle(product.backgroundColor)}
                className={Style.carouselImg}
              />
              <p className="legend">{product.title}</p>
            </a>
          ))}
      </Carousel>
    </section>
  );
};

export default CarCarousel;

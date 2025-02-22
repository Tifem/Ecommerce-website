import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Hero.css";

const Hero = () => {
const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        // Extracting image URLs from products
        const productImages = data.slice(0, 8).map((item) => ({
          image: item.image,
          title: item.title,
        }));
        setProducts(productImages);
      })
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <>
      <div className="category">
        <button className="category-btn">OUR CATEGORIES</button>
        <h2>
          Finding Best Products Now <br></br>in Your Fingertips
        </h2>
        {products.length > 0 ? (
          <Slider {...settings}>
            {products.map((product, index) => (
              <div key={index} className="slide">
                <img
                  src={product.image}
                  alt={product.title}
                  className="slide-image"
                />
                <p className="slide-title">{product.title}</p>
              </div>
            ))}
          </Slider>
        ) : (
          <p>Loading images...</p>
        )}
      </div>
    </>
  );
};

export default Hero;

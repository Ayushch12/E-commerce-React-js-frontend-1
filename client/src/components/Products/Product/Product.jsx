


import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";


const Product = ({ data, id }) => {
    const navigate = useNavigate();
    return (
        <div
            className="product-card"
            onClick={() => navigate("/product/" + id)}
        >
            <div className="thumbnail">
                <img
                    src={
                        process.env.REACT_APP_DEV_URL +
                        data.img.data[0].attributes.url
                    }
                />
            </div>
            <div className="prod-details">
                <span className="name">{data.title}</span>
                <span className="price">&#8377;{data.price}</span>
            </div>
        </div>
    );
};

export default Product;






/*

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";
import "./Product.scss";

const Product = ({ data, id }) => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setSelectedImage(index),
  };

  return (
    <div className="product-card" onClick={() => navigate("/product/" + id)}>
      <Slider {...settings}>
        {data.img.data.map((image, index) => (
          <div key={index}>
            <img
              src={process.env.REACT_APP_DEV_URL + image.attributes.url}
              alt={data.title}
            />
          </div>
        ))}
      </Slider>
      <div className="prod-details">
        <span className="name">{data.title}</span>
        <span className="price">&#8377;{data.price}</span>
      </div>
      <div className="thumbnail-carousel">
        {data.img.data.map((image, index) => (
          <div
            key={index}
            className={`thumbnail ${
              index === selectedImage ? "active" : ""
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={process.env.REACT_APP_DEV_URL + image.attributes.url}
              alt={data.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;

/*









//import prod from "../../../assets/images/img1.png"

/*
const Product = () => {
    return (
        <div className=" product-card">
            <div className="thumbnail">
            <img src={prod} alt=" cvbnmnbv ghjh" />
            </div>

            <div className="Prod-details">
                <span className="name">Product name</span>
                <span className="price">$499</span>
            </div>
        </div>
    )
};

export default Product;
*/





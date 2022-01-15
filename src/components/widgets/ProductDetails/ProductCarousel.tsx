import React from "react";
import "bootstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";
import "../../../assets/css/product_carousel.css";

const ProductCarousel = () => {
  return (
    <div>
      <Carousel showArrows={true} showIndicators={false}>
        <div className="image">
          <img src="https://cf.shopee.vn/file/7556e874cf766f3cb340e632c684def1" />
        </div>
        <div className="image">
          <img src="https://cf.shopee.vn/file/d05bac8361e1ff7ae83bf9855dcde2a3" />
        </div>
        <div className="image">
          <img src="https://cf.shopee.vn/file/d05bac8361e1ff7ae83bf9855dcde2a3" />
        </div>
        <div className="image">
          <img src="https://cf.shopee.vn/file/b8c36cdcb50d58a62f362fb6cfed124c" />
        </div>
        <div className="image">
          <img src="https://cf.shopee.vn/file/b8c36cdcb50d58a62f362fb6cfed124c" />
        </div>
        <div className="image">
          <img src="https://cf.shopee.vn/file/b8c36cdcb50d58a62f362fb6cfed124c" />
        </div>
      </Carousel>
    </div>
  );
};

export default ProductCarousel;

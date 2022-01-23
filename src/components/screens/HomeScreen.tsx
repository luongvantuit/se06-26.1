import React from "react";
import "../../assets/css/home.css";
import banner from "../../assets/img/home/banner.jpg";
import Product from "../widgets/Product";

const product = {
  name: "Earpods Bluetooth i12 TWS 5.0 wireless i12 with HIFI sound quality",
  category: "Technology",
  description:
    "The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles ",
  imageUrl: {
    cover: "https://cf.shopee.vn/file/7556e874cf766f3cb340e632c684def1",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "",
  },
  brand: "No Brand",
  warrantyType: "None",
  price: 499000,
  saleOff: 69,
  stock: 999,
  skuCode: "EPXH121621VNA",
  color: "",
  size: "",
  weight: 500,
  parcelSize: {
    width: 5,
    length: 10,
    height: 5,
  },
  shippingType: "Fast",
  sale: 1,
};
export default function HomeScreen() {
  return (
    <div>
      <div className="container">
        <div
          id="carouselExampleControls"
          className="carousel slide banner-home"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={banner} />
            </div>
            <div className="carousel-item">
              <img src={banner} />
            </div>
            <div className="carousel-item">
              <img src={banner} />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="row row-new">
          <div className="col-12">
            <h1 style={{ fontSize: "25px" }}>New products</h1>
          </div>
          <Product product={product}></Product>
          <Product product={product}></Product>
        </div>
        <div className="row row-1">
          <div className="col-lg-2 col-md-3 col-sm-4 col-12 col-category">
            <div className="category-home category-laptop">
              <p className="title-category">Laptop</p>
              <a className="see-all">See all products</a>
            </div>
          </div>

          <Product product={product}></Product>
          <Product product={product}></Product>
          <Product product={product}></Product>
          <Product product={product}></Product>
          <Product product={product}></Product>

          <div className="row row-2">
            <div className="col-lg-2 col-md-3 col-sm-4 col-12 col-category">
              <div className="category-home category-laptop">
                <p className="title-category">Laptop</p>
                <a className="see-all">See all products</a>
              </div>
            </div>

            <Product product={product}></Product>
            <Product product={product}></Product>
            <Product product={product}></Product>
            <Product product={product}></Product>
            <Product product={product}></Product>
          </div>
          <div className="row row-3">
            <div className="col-lg-2 col-md-3 col-sm-4 col-12 col-category">
              <div className="category-home category-laptop">
                <p className="title-category">Laptop</p>
                <a className="see-all">See all products</a>
              </div>
            </div>
            <Product product={product}></Product>
            <Product product={product}></Product>
            <Product product={product}></Product>
            <Product product={product}></Product>
            <Product product={product}></Product>
          </div>
        </div>
        <div className="row row-3">
          <div className="col-lg-2 col-md-3 col-sm-4 col-12 col-category">
            <div className="category-home category-shoe">
              <p className="title-category">Shoe</p>
              <a className="see-all">See all products</a>
            </div>
          </div>
        </div>
        <div className="row row-4">
          <div className="col-lg-2 col-md-3 col-sm-4 col-12 col-category">
            <div className="category-home category-laptop">
              <p className="title-category">Laptop</p>
              <a className="see-all">See all products</a>
            </div>
          </div>

          <Product product={product}></Product>
          <Product product={product}></Product>
          <Product product={product}></Product>
          <Product product={product}></Product>
          <Product product={product}></Product>
        </div>
        <div className="row row-5">
          <div className="col-lg-2 col-md-3 col-sm-4 col-12 col-category">
            <div className="category-home category-laptop">
              <p className="title-category">Laptop</p>
              <a className="see-all">See all products</a>
            </div>
          </div>

          <Product product={product}></Product>
          <Product product={product}></Product>
          <Product product={product}></Product>
          <Product product={product}></Product>
          <Product product={product}></Product>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-lg-4">
            <div className="container">
              <div className="item__header">
                <div className="icon-wrapper--circle">
                  <i className="fas fa-headset"></i>
                </div>
              </div>
              <div className="item__content">
                <div className="content__header">
                  <h3>Product support</h3>
                </div>
                <div className="content__body">
                  <p>
                    Up to 3 years on-site warranty available for your peace of
                    mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="container">
              <div className="item__header">
                <div className="icon-wrapper--circle">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <div className="item__content">
                <div className="content__header">
                  <h3>Personal Account</h3>
                </div>
                <div className="content__body">
                  <p>
                    With big discounts, free delivery and a dedicated support
                    specialist.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="container">
              <div className="item__header">
                <div className="icon-wrapper--circle">
                  <svg
                    width="26"
                    height="27"
                    viewBox="0 0 26 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.2047 1.22977C25.1293 1.04194 24.9844 0.89041 24.8001 0.806715C24.6158 0.723019 24.4063 0.713599 24.2152 0.780413C24.0242 0.847227 23.8662 0.985132 23.7742 1.16544C23.6823 1.34574 23.6633 1.55457 23.7214 1.74847C24.9291 5.21947 22.5319 7.81167 20.7041 9.20007L19.9657 8.14187C19.7174 7.78697 19.1623 7.49187 18.7307 7.48667L14.5863 7.50487C14.08 7.52016 13.5873 7.67198 13.1602 7.94427L0.948006 16.5074C0.663949 16.7073 0.470671 17.0116 0.410489 17.3537C0.350307 17.6957 0.428126 18.0477 0.626906 18.3326L6.17661 26.273C6.59261 26.8645 7.25691 26.793 7.84971 26.3796L20.0619 17.8152C20.4129 17.5669 20.8185 17.0313 20.9615 16.6218L22.2589 12.5333C22.4019 12.1251 22.3148 11.5024 22.0665 11.1475L21.6167 10.5027C24.0711 8.62157 26.6191 5.29747 25.2047 1.22977V1.22977ZM19.5224 13.3952C19.2974 13.5527 19.0436 13.6643 18.7755 13.7236C18.5074 13.783 18.2302 13.7889 17.9597 13.7411C17.6893 13.6933 17.431 13.5927 17.1994 13.445C16.9679 13.2973 16.7678 13.1054 16.6104 12.8804C16.2918 12.4249 16.1669 11.8617 16.2632 11.3143C16.3595 10.7668 16.669 10.28 17.1239 9.96057C17.4805 9.71073 17.9063 9.57856 18.3416 9.58252C18.777 9.58648 19.2003 9.72638 19.5523 9.98267C19.1987 10.1959 18.9556 10.3207 18.9101 10.3402C18.749 10.417 18.6187 10.5463 18.5406 10.7069C18.4626 10.8674 18.4414 11.0497 18.4805 11.2239C18.5196 11.3981 18.6168 11.5539 18.756 11.6656C18.8952 11.7774 19.0683 11.8385 19.2468 11.8391C19.3586 11.8391 19.473 11.8131 19.5809 11.7624C19.8331 11.6428 20.1035 11.5011 20.3856 11.3334C20.4505 11.7235 20.4039 12.1239 20.2512 12.4887C20.0985 12.8535 19.8459 13.1677 19.5224 13.3952V13.3952Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className="item__content">
                <div className="content__header">
                  <h3>Amazing savings</h3>
                </div>
                <div className="content__body">
                  <p>
                    Up to 70% off new Products, you can be sure of the best
                    price.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>   
  );
}
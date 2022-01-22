import React from "react";
import "../../assets/css/category.css";
import laptop from "../../assets/img/home/laptop_1.jpg";
import banner_category from "../../assets/img/home/cate-banner.jpg";
import ads from "../../assets/img/home/ads.jpg";
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

export default function Category() {
  return (
    <div className="container wrapper-category">
      <div className="cate-banner">
        <img src={banner_category} />
      </div>
      <h4 className="category-name">Laptop (20)</h4>
      <div>
        {/* Button trigger modal */}
        <button
          type="button"
          className="btn btn-primary btn-modal"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Filter
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="filters filters-modal">
                <p className="p_filters">Filters</p>
                <button>Clear filter</button>
                <div className="filter-type">
                  <div className="filter-title">
                    <p>Category</p>
                    <i className="fas fa-chevron-up" />
                  </div>
                  <div className="filter-item">
                    <p>CUSTOM PCS</p>
                    <p>15</p>
                  </div>
                  <div className="filter-item">
                    <p>MSI ALL-IN-ONE PCS</p>
                    <p>20</p>
                  </div>
                  <div className="filter-item">
                    <p>Dell</p>
                    <p>35</p>
                  </div>
                </div>
                <div className="filter-type">
                  <div className="filter-title">
                    <p>Price</p>
                    <i className="fas fa-chevron-up" />
                  </div>
                  <div className="filter-item">
                    <p>$0.00 - $1,000.00</p>
                    <p>15</p>
                  </div>
                  <div className="filter-item">
                    <p>$1,000.00 - $2,000.00</p>
                    <p>20</p>
                  </div>
                  <div className="filter-item">
                    <p>$2,000.00 - $3,000.00</p>
                    <p>35</p>
                  </div>
                  <div className="filter-item">
                    <p>$3,000.00 - $4,000.00</p>
                    <p>15</p>
                  </div>
                  <div className="filter-item">
                    <p>$4,000.00 - $5,000.00</p>
                    <p>20</p>
                  </div>
                  <div className="filter-item">
                    <p>$5,000.00 And Above</p>
                    <p>35</p>
                  </div>
                </div>
                <div className="filter-type">
                  <div className="filter-title">
                    <p>Color</p>
                    <i className="fas fa-chevron-up" />
                  </div>
                  <div className="btn-color">
                    <button className="color color-1" />
                    <button className="color color-2" />
                  </div>
                </div>
                <div className="filter-type">
                  <div className="filter-title">
                    <p>Filter Name</p>
                    <i className="fas fa-chevron-up" />
                  </div>
                  <button className="apply-filters">Apply Filters (2)</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content d-flex">
        <div className="content-left">
          <a className="back">
            <i className="fas fa-chevron-left" />
            Back
          </a>
          <div className="filters">
            <p className="p_filters">Filters</p>
            <button>Clear filter</button>
            <div className="filter-type">
              <div className="filter-title">
                <p>Category</p>
                <i className="fas fa-chevron-up" />
              </div>
              <div className="filter-item">
                <p>CUSTOM PCS</p>
                <p>15</p>
              </div>
              <div className="filter-item">
                <p>MSI ALL-IN-ONE PCS</p>
                <p>20</p>
              </div>
              <div className="filter-item">
                <p>Dell</p>
                <p>35</p>
              </div>
            </div>
            <div className="filter-type">
              <div className="filter-title">
                <p>Price</p>
                <i className="fas fa-chevron-up" />
              </div>
              <div className="filter-item">
                <p>$0.00 - $1,000.00</p>
                <p>15</p>
              </div>
              <div className="filter-item">
                <p>$1,000.00 - $2,000.00</p>
                <p>20</p>
              </div>
              <div className="filter-item">
                <p>$2,000.00 - $3,000.00</p>
                <p>35</p>
              </div>
              <div className="filter-item">
                <p>$3,000.00 - $4,000.00</p>
                <p>15</p>
              </div>
              <div className="filter-item">
                <p>$4,000.00 - $5,000.00</p>
                <p>20</p>
              </div>
              <div className="filter-item">
                <p>$5,000.00 And Above</p>
                <p>35</p>
              </div>
            </div>
            <div className="filter-type">
              <div className="filter-title">
                <p>Color</p>
                <i className="fas fa-chevron-up" />
              </div>
              <div className="btn-color">
                <button className="color color-1" />
                <button className="color color-2" />
              </div>
            </div>
            <div className="filter-type">
              <div className="filter-title">
                <p>Filter Name</p>
                <i className="fas fa-chevron-up" />
              </div>
              <button className="apply-filters">Apply Filters (2)</button>
            </div>
          </div>
          <img src={ads} />
        </div>
        <div className="content-right">
          <div className="sort-show d-flex">
            <small>Items 1-35 of 61</small>
            <div className="sort d-flex">
              <div className="sort-show-item sort-by d-flex">
                <small>Sort By: </small>
                <select name="sort" id="sort">
                  <option value="position">Position</option>
                  <option value="price">Price</option>
                </select>
              </div>
              <div className="sort-show-item show d-flex">
                <small>Show: </small>
                <select name="sort" id="show">
                  <option value="24_per_page">5 per page</option>
                  <option value="24_per_page">10 per page</option>
                  <option value="24_per_page">15 per page</option>
                  <option value="24_per_page">20 per page</option>
                  <option value="24_per_page">25 per page</option>
                  <option value="24_per_page">30 per page</option>
                </select>
              </div>
            </div>
          </div>
          <div className="current-cate d-flex">
            <div className="current-cate-item d-flex">
              <p>CUSTOM PCS</p>
              <small>(24)</small>
              <i className="fas fa-times-circle" />
            </div>
            <button className="clear-all">Clear All</button>
          </div>
          <div className="row row-1">
            <Product product={product}></Product>
            <Product product={product}></Product>
            <Product product={product}></Product>
            <Product product={product}></Product>
            <Product product={product}></Product>

            <div className="row row-2">
              <Product product={product}></Product>
              <Product product={product}></Product>
              <Product product={product}></Product>
              <Product product={product}></Product>
              <Product product={product}></Product>
              <Product product={product}></Product>
            </div>
            <div className="row row-3">
              <Product product={product}></Product>
              <Product product={product}></Product>
              <Product product={product}></Product>
              <Product product={product}></Product>
              <Product product={product}></Product>
              <Product product={product}></Product>
            </div>
          </div>
          <div className="row row-4">
            <Product product={product}></Product>
            <Product product={product}></Product>
            <Product product={product}></Product>
            <Product product={product}></Product>
            <Product product={product}></Product>
            <Product product={product}></Product>
          </div>
          <div className="row row-5">
            <Product product={product}></Product>
            <Product product={product}></Product>
            <Product product={product}></Product>
            <Product product={product}></Product>
            <Product product={product}></Product>
            <Product product={product}></Product> 
          </div>
        </div>
      </div>
    </div>
  );
}

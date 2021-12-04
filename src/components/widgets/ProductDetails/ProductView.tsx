import React from "react";
import Ratings from "./Ratings";
import "../../../assets/css/product_view.css";
import SaleoffTag from "./SaleoffTag";
import Delivery from "./Delivery";
import Quantity from "./Quantity";
import ButtonGreen from "../ButtonGreen";

const ProductView = () => {
  return (
    <div>
      <div className="container mt-4">
          <h3 className="product-name">
            Earpods Bluetooth i12 TWS 5.0 wireless i12 with HIFI sound quality
          </h3>
          <div className="info">
            <Ratings ratingPoint={4.5} />
            <div className="separator"></div>
            <div className=" review">
              <p>
                <span className="review__quantity">234</span> reviews
              </p>
            </div>
            <div className="separator"></div>

            <div className=" sold">
              <p>
                <span className="sold__quantity">2345</span> sold
              </p>
            </div>
          </div>
          <div className="product-price display-flex align-items-center">
            <div className="price-original ">499.000 VND</div>
            <div className="price-saleoff">299.000 VND</div>
            <SaleoffTag percent="30" />
          </div>
          <Delivery address="123 Street City Country"></Delivery>
          <Quantity></Quantity>

          <div className=" payment-btn d-flex flex-row  ">
            <ButtonGreen name="Add to cart" />
            <ButtonGreen name="Buy Now" />
          </div>
        </div>
    </div>
  );
};

export default ProductView;

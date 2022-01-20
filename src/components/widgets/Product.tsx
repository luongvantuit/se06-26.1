import React from "react";
import { Product } from "../../IProduct";
const Product = (props: { product: Product }) => {
  return (
    <div className="col-lg-2 col-md-3 col-sm-4 col-6 product product-1">
      <div className="in-stock d-flex">
        <i className="fa fa-check-circle" />
        <p>
          <a>in stock</a>
        </p>
      </div>
      <div className="img-product">
        <img src={props.product.imageUrl.cover} alt={props.product.name} />
      </div>
      <div className="star d-flex">
        <span className="fa fa-star checked checked1" />
        <span className="fa fa-star checked checked2" />
        <span className="fa fa-star checked checked3" />
        <span className="fa fa-star checked checked4" />
        <span className="fa fa-star checked checked5" />
        <p>
          <a>Reviews (4)</a>
        </p>
      </div>
      <h5>
        <a>{props.product.name}</a>
      </h5>
      <p className="cost">{props.product.price}</p>
      <h4 className="sale">
        {(props.product.price * props.product.saleOff) / 100}
      </h4>
    </div>
  );
};

export default Product;

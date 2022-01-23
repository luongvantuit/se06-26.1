import React from "react";
const Product = (props: any) => {
  return (
    <div className="col-lg-2 col-md-3 col-sm-4 col-6 product product-1">
      <div className="in-stock d-flex">
        <i className="fa fa-check-circle" />
        <p>
          <a>in stock</a>
        </p>
      </div>
      <div className="img-product">
        <img src={props.product.photos[0]} alt={props.product.name} />
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
        <a>{props.product.displayName}</a>
      </h5>
      <p className="cost">{props.product.price}vnd</p>
      <h4 className="sale">
        {(props.product.price * 70) / 100} vnd
      </h4>
    </div>
  );
};

export default Product;

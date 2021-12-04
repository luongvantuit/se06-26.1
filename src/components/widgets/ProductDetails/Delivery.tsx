import React from "react";
import '../../../assets/css/delivery.css'
const Delivery = (props:{address: string}) => {
  return (
    <div>
      <div className="product-delivery mt-3">
        <p>Delivery</p>
        <div className="delivery-location mt-3">
          <i className="fas fa-map-marker-alt col-sm-1"></i>
          <p className="address">
            {props.address}
          </p>
        </div>
        <div className="delivery-fee mt-3 mb-2">
          <i className="fas fa-shipping-fast col-sm-1"></i>
          <p className="fee-reduction">
            Delivery fee is 30% off for over 1000$ orders
          </p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;

import React from "react";
import '../../../assets/css/delivery.css'
const Delivery = (props:{address: string}) => {
  return (
    <div>
      <div className="product-delivery">
        <p>Delivery</p>
        <div className="delivery-location pt-3">
          <i className="fas fa-map-marker-alt col-sm-1"></i>
          <p className="address">
            {props.address}
          </p>
        </div>
        <div className="delivery-fee pb-2">
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

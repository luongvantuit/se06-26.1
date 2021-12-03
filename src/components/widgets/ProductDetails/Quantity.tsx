import React from 'react'
import '../../../assets/css/quantity.css'
const Quantity = () => {
    return (
        <div>
            <div className="product-quantity">
            <p>Quantity</p>
            <div className="quantity d-flex">
              <div className="qtt-btn decrease">
                <i className="fas fa-minus"></i>
              </div>
              <input type="number" />
              <div className="qtt-btn increase">
                <i className="fas fa-plus"></i>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Quantity

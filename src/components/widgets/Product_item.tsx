import React from "react";
import "../../assets/css/home.css";
import laptop from "../../assets/img/home/laptop_1.jpg";


export default function Product_item(){    
    return(
        <div className="">
            <div className="in-stock d-flex">
                <i className="fa fa-check-circle" />
                <p><a>in stock</a></p>
        </div>
        <div className="img-product">
            <img src={laptop} />
        </div>
            <div className="evaluate d-flex">
            <div className="star">
                <span className="fa fa-star checked checked1" />
                <span className="fa fa-star checked checked2" />
                <span className="fa fa-star checked checked3" />
                    <span className="fa fa-star checked checked4" />
                    <span className="fa fa-star checked checked5" />    
            </div>
                <p><a>Reviews (4)</a></p>
            </div>
                <h5><a>Acer Aspire 5 A515-46-R14K Slim Laptop</a></h5>
            <div className="price price-sold d-flex">
                <p className="cost">$499.00</p>
                <p className="sold">Đã bán: 30</p>
            </div>
            <div className="price price-address d-flex">
                <h4 className="sale">$499.00</h4>
                <a className="address">Hà Nội</a>
            </div>    
        </div>
    )
}


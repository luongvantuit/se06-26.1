import React from 'react'
import 'bootstrap'


const ProductCarousel = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="d-block w-100" src="https://cf.shopee.vn/file/7556e874cf766f3cb340e632c684def1" alt="First slide"></img>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src="https://cf.shopee.vn/file/d05bac8361e1ff7ae83bf9855dcde2a3" alt="Second slide"></img>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src="https://cf.shopee.vn/file/da2d55dd94b91af9f858c25f9711f17c" alt="Third slide"></img>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src="https://cf.shopee.vn/file/b8c36cdcb50d58a62f362fb6cfed124c" alt="Third slide"></img>
                    </div>
                </div>
                
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
    
}

export default ProductCarousel

import React from 'react'


const ProductOutline = () => {
    return (
        
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 product product-1">
                <div className="in-stock d-flex">
                    <i className="fa fa-check-circle" />
                    <p><a>in stock</a></p>
                </div>
                <div className="img-product">
                    
                    <img src="https://salt.tikicdn.com/cache/400x400/ts/product/f7/80/81/07e4daa7d4bd3ba47cb29b287f877c46.jpg"/>
                </div>
                <div className="star d-flex">
                    <span className="fa fa-star checked checked1" />
                    <span className="fa fa-star checked checked2" />
                    <span className="fa fa-star checked checked3" />
                    <span className="fa fa-star checked checked4" />
                    <span className="fa fa-star checked checked5" />
                    <p><a>Reviews (4)</a></p>
                </div>
                <h5><a>Asolo Women's TPS 520 GV EVO</a></h5>
                <p className="cost">499.000 vnđ</p>
                <h4 className="sale">499.000 vnđ</h4>
                </div>
        
    )
}

export default ProductOutline

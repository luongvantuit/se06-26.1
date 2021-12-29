import React from 'react'
import '../../../assets/css/saleoff_tag.css'

const SaleoffTag = (props:{percent: string}) => {
    return (
        <div>
            <div className="saleoff-tag d-flex ">
              <span className="sale-percent">{props.percent} %</span>
            </div>
        </div>
    )
}

export default SaleoffTag

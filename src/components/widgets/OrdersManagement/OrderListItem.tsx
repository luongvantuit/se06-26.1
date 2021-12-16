import React from 'react'
import { Product } from '../../../Product'
import { Order } from '../../../Order'

const OrderListItem = (props: {order: Order}) => {
    return (
        <div className='orderListItem'>
            <tr className="row">
                <th className="orderProduct ">
                    <div className="orderProductImg" >
                        <img src={props.order.product.imageUrl.cover} alt={props.order.product.name} />
                        <div className="d-flex">
                            <h3 className="orderProductName">{props.order.product.name}</h3>
                            <p className="skuCode">{props.order.product.skuCode}</p>
                        </div>
                    </div>
                </th>
                <th>{props.order.customer}</th>
                <th>{props.order.payment}</th>
                <th>{props.order.status}</th>
                <th>{props.order.shipping}</th>
                <th>{props.order.action}</th>

            </tr>
        </div>
    )
}

export default OrderListItem

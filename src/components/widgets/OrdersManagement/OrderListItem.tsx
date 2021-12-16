import React from 'react'
import { Order } from '../../../Order'
import '../../../assets/css/order_list_item.css'


const OrderListItem = (props: {order: Order}) => {
    return (
        
            <tr>
                <td className="orderProduct d-flex align-items-center">
                    <div className="orderProductImg" >
                        <img src={props.order.product.imageUrl.cover} alt={props.order.product.name} style={{width:'64px', marginRight:'8px'}}/>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-start"  style={{maxWidth:'300px'}}>
                        <p className="orderProductName text-align-left">{props.order.product.name}</p>
                        <p className="skuCode">{props.order.product.skuCode}</p>
                    </div>
                </td>
                <td>{props.order.customer}</td>
                <td>{props.order.payment}</td>
                <td>{props.order.status}</td>
                <td>{props.order.product.shippingType}</td>
                <td>{props.order.action}</td>
            </tr>
        
    )
}

export default OrderListItem

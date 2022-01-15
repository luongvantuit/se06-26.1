import React from 'react'
import { isPropertySignature, walkUpBindingElementsAndPatterns } from 'typescript'
import '../../assets/css/shoppingcart.css' 
import Footer from '../widgets/Footer'
import cart from '../../assets/img/img-shopping-cart/cart.jpg'

export default function ShoppingCart(){
    return(
        <div className="container shopping-cart">
            <div className="bread-crumbs">
                <a className="crumb1">Home</a>
                <i className="fas fa-angle-right" />
                <a className="crumb1">Shopping Cart</a>
            </div>
            <h4 className="category-name cart-title">Shopping Cart</h4>
            <div className="row">
                <div className="col-md-9 cart-left">
                    <table className="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">Item</th>
                        <th scope="col" className="cart-img" />
                        <th scope="col">Price</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Subtotal</th>
                        <th scope="col" />
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row" className="cart-img"><img src={cart} alt="Cart" /></th>
                        <td className="info-product">MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM,
                            1TB SSD</td>
                        <td>$4,349.00</td>
                        <td className="qty">1</td>
                        <td>$13,047.00</td>
                        <td>
                            <button><i className="fas fa-times" /></button>
                            <button><i className="fas fa-pencil-alt" /></button>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row" className="cart-img"><img src={cart} alt="cart" /></th>
                        <td className="info-product">MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM,
                            1TB SSD</td>
                        <td>$4,349.00</td>
                        <td className="qty">1</td>
                        <td>$13,047.00</td>
                        <td>
                            <button><i className="fas fa-times" /></button>
                            <button><i className="fas fa-pencil-alt" /></button>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row" className="cart-img"><img src={cart} alt="cart" /></th>
                        <td className="info-product">MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM,
                            1TB SSD</td>
                        <td>$4,349.00</td>
                        <td className="qty">1</td>
                        <td>$13,047.00</td>
                        <td>
                            <button><i className="fas fa-times" /></button>
                            <button><i className="fas fa-pencil-alt" /></button>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row" className="cart-img"><img src={cart} alt="cart" /></th>
                        <td className="info-product">MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM,
                            1TB SSD</td>
                        <td>$4,349.00</td>
                        <td className="qty">1</td>
                        <td>$13,047.00</td>
                        <td>
                            <button><i className="fas fa-times" /></button>
                            <button><i className="fas fa-pencil-alt" /></button>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row" className="cart-img"><img src={cart} alt="cart" /></th>
                        <td className="info-product">MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM,
                            1TB SSD</td>
                        <td>$4,349.00</td>
                        <td className="qty">1</td>
                        <td>$13,047.00</td>
                        <td>
                            <button><i className="fas fa-times" /></button>
                            <button><i className="fas fa-pencil-alt" /></button>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div className="col-md-3 cart-right">
                    <div className="summary">
                        <h5>Summary</h5>
                        <h6>Estimate Shipping and Tax</h6>
                        <small>Enter your destination to get a shipping estimate.</small>
                        <div className="cart-address city">
                            <label>Province/City</label>
                            <select name="cars" id="cars">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div className="cart-address city">
                            <label>District</label>
                            <select name="district" id="district">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div className="cart-address city">
                            <label>Commune</label>
                            <select name="commune" id="commune">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div className="cart-address city">
                            <label>Details</label>
                            <input className="details-address" type="text" placeholder="Street, building, house number" />
                        </div>
                        <div className="discount-code">
                            <h6>Apply Discount Code</h6>
                            <label>Enter discount code</label>
                            <input type="text" placeholder="Enter discount code" />
                            <button>Apply Discount</button>
                        </div>
                    <hr />
                    <div className="costs">
                        <div className="cost-item cost-subtotal">
                            <p>Subtotal</p>
                            <p>$13,047.00</p>
                            </div>
                            <div className="cost-item cost-shipping">
                            <p>Shipping</p>
                            <p>$21.00</p>
                            </div>
                            <div className="cost-item cost-tax">
                            <p>Tax</p>
                            <p>$1.91</p>
                            </div>
                            <div className="cost-item cost-gst">
                            <p>GST(10%)</p>
                            <p>$1.91</p>
                            </div>
                            <div className="cost-item cost-order-total">
                            <p>Order Total</p>
                            <p className="total">$13,068.00</p>
                            </div>
                            <button className="costs-checkout">Proceed to Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 
import React, { Fragment, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IProduct } from "../../IProduct";
import SideNav from "../widgets/SideNav";
import "../../assets/css/my_product.css";

const product = {
  name: "Earpods Bluetooth i12 TWS 5.0 wireless i12 with HIFI sound quality",
  category: "Technology",
  description:
    "The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles ",
  imageUrl: {
    cover: "https://cf.shopee.vn/file/7556e874cf766f3cb340e632c684def1",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "",
  },
  brand: "No Brand",
  warrantyType: "None",
  price: 499000,
  saleOff: 69,
  stock: 999,
  skuCode: "EPXH121621VNA",
  color:'',
  size:'',
  weight: 500,
  parcelSize: {
    width: 5,
    length: 10,
    height: 5,
  },
  shippingType: "Fast",
  sale: 1,
};
const ProductListItem = (props:any) => {
  const [product,setProduct] = useState<Array<IProduct>>([])
  useEffect(()=> {
    const productApi = 'http://localhost:9000/api/products'
    const fetchProduct= async() => {
        try {
          fetch(productApi)
          .then(response => {
            console.log(response)
            return response.json()
          }).then(data =>{
            setProduct(data)
          })
          
        } catch (error) {
          console.log("error", error);
        }
    }
    fetchProduct()
  },[])
  return (
    
    <Fragment>
      {product.map(item =>(<tr key={item.sid} style={{ backgroundColor: "#eee" }}>
      <td>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="productCheck"
          ></input>
        </div>
      </td>
      <td className="Product d-flex align-items-center">
        <div className="ProductImg">
          <img
            src={''}
            alt={item.displayName}
            style={{ width: "64px", marginRight: "8px" }}
          />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-start">
          <p className="ProductName text-align-left">{item.displayName}</p>
        </div>
      </td>
      <td className="text-center">
        <p className="skuCode">[{item.sid}]</p>
      </td>
      <td className="text-center">
        <p>{item.categories}</p>
      </td>
      <td className="text-center">{item.state}</td>
      <td
        className="d-flex flex-column text-center"
        style={{ fontSize: "12px" }}
      >
        <Link to='/AddProduct'>Edit</Link>
        <Link to='/AddProduct'>View detail</Link>
      </td>
    </tr>))}
    </Fragment>
  );
};
const MyProduct = () => {
    const productCheckAll = document.getElementById('productCheckAll')
    function handleCheckAll(){
        console.log(productCheckAll)
    }
  return (
    <div>
      <SideNav></SideNav>
      <div
        className="myProducts"
      >
        <div
          className="searchProducts"
        >
          <h3>Search Product</h3>
          <div className="form-group row">
            <div className="col-sm-3">
              <select className="form-control" id="categories">
                <option>Name</option>
                <option>SKU code</option>
                <option>Product Code</option>
              </select>
            </div>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                id="productName"
                value=""
                placeholder="Enter"
              ></input>
            </div>
            <div className="searchProductBtn button__green">Search</div>
          </div>
        </div>
        <div
          className="listProduct mt-5"
        >
          <div className="table-resposive-md">
            <div className="table table-hover table-bordered mt-4">
              <thead>
                <tr>
                  <th scope="col">
                    <div className="form-group form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="productCheckAll"
                        checked
                      ></input>
                    </div>
                  </th>
                  <th scope="col">Product Name</th>
                  <th scope="col">SKU Code</th>
                  <th scope="col">Price</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody className="productList">
                <ProductListItem product={product}></ProductListItem>
                <ProductListItem product={product}></ProductListItem>
                <ProductListItem product={product}></ProductListItem>
                <ProductListItem product={product}></ProductListItem>
                <ProductListItem product={product}></ProductListItem>
                <ProductListItem product={product}></ProductListItem>
                <ProductListItem product={product}></ProductListItem>
                <ProductListItem product={product}></ProductListItem>
                <ProductListItem product={product}></ProductListItem>
                <ProductListItem product={product}></ProductListItem>
              </tbody>
            </div>
          </div>
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center pb-4">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">
                    <i className="fas fa-chevron-left"></i>
                  </span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>

              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">
                    <i className="fas fa-chevron-right"></i>
                  </span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="product-selected row justify-content-between">
            <div className="form-group form-check col-sm-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="productCheckAll"
                onChange={handleCheckAll}
              ></input>
              <label className="form-check-label" htmlFor="productCheckAll">
                Select All
              </label>
            </div>
                
            <div className="deleteBtn button__green col-sm-9 ">Delete</div>
            <div className="deleteBtn button__green col-sm-9 ">Create New Product</div>

          </div>
        </div>
      </div>
    </div>
  );
};


export default MyProduct;

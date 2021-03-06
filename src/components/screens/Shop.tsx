import React from "react";
import "../../assets/css/shop.css";
import Avatar from "../../assets/img/home/clothes.jpg";
import Product from "../widgets/Product";
import { IShop } from "../../IShop";

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
  color: "",
  size: "",
  weight: 500,
  parcelSize: {
    width: 5,
    length: 10,
    height: 5,
  },
  shippingType: "Fast",
  sale: 1,
};

export const ShopDisplay = (shop: IShop) => {
  return (
    <div className="col-md-4 background-shop">
      <div className="avt-shop">
        <img src={shop.displayPhoto} alt="shop"/>
        <div className="name-shop" style={{backgroundImage:`${shop.displayPhotoCover}`,backgroundSize:'cover',backgroundPosition:'top center'}}>
          <h5 className="shopName">{shop.displayName}</h5>
          <small className="onlineTime">Online 5 minutes ago</small>
        </div>
      </div>
      <div className="follow-chat">
        <button type="submit">+ Follow</button>
        <button>Chat</button>
      </div>
    </div>
  );
};

export const ShopStatistic = (shop: IShop) => {
  return (
    <div className="shopStatistic">
      <div className="col-md-4 info-shop">
        <div className="info-shop-product">
          <svg
            enableBackground="new 0 0 15 15"
            viewBox="0 0 15 15"
            x={0}
            y={0}
            strokeWidth={0}
            className="shopee-svg-icon"
          >
            <path d="m13 1.9c-.2-.5-.8-1-1.4-1h-8.4c-.6.1-1.2.5-1.4 1l-1.4 4.3c0 .8.3 1.6.9 2.1v4.8c0 .6.5 1 1.1 1h10.2c.6 0 1.1-.5 1.1-1v-4.6c.6-.4.9-1.2.9-2.3zm-11.4 3.4 1-3c .1-.2.4-.4.6-.4h8.3c.3 0 .5.2.6.4l1 3zm .6 3.5h.4c.7 0 1.4-.3 1.8-.8.4.5.9.8 1.5.8.7 0 1.3-.5 1.5-.8.2.3.8.8 1.5.8.6 0 1.1-.3 1.5-.8.4.5 1.1.8 1.7.8h.4v3.9c0 .1 0 .2-.1.3s-.2.1-.3.1h-9.5c-.1 0-.2 0-.3-.1s-.1-.2-.1-.3zm8.8-1.7h-1v .1s0 .3-.2.6c-.2.1-.5.2-.9.2-.3 0-.6-.1-.8-.3-.2-.3-.2-.6-.2-.6v-.1h-1v .1s0 .3-.2.5c-.2.3-.5.4-.8.4-1 0-1-.8-1-.8h-1c0 .8-.7.8-1.3.8s-1.1-1-1.2-1.7h12.1c0 .2-.1.9-.5 1.4-.2.2-.5.3-.8.3-1.2 0-1.2-.8-1.2-.9z" />
          </svg>
          <p>
            Products: <a>211</a>
          </p>
        </div>
        <div className="info-shop-follow">
          <svg
            enableBackground="new 0 0 15 15"
            viewBox="0 0 15 15"
            x={0}
            y={0}
            className="shopee-svg-icon"
          >
            <g>
              <circle
                cx={7}
                cy="4.5"
                fill="none"
                r="3.8"
                strokeMiterlimit={10}
              />
              <line
                fill="none"
                strokeLinecap="round"
                strokeMiterlimit={10}
                x1={12}
                x2={12}
                y1="11.2"
                y2="14.2"
              />
              <line
                fill="none"
                strokeLinecap="round"
                strokeMiterlimit={10}
                x1="10.5"
                x2="13.5"
                y1="12.8"
                y2="12.8"
              />
              <path
                d="m1.5 13.8c0-3 2.5-5.5 5.5-5.5 1.5 0 2.9.6 3.9 1.6"
                fill="none"
                strokeLinecap="round"
                strokeMiterlimit={10}
              />
            </g>
          </svg>
          <p>
            Follow: <a>6</a>
          </p>
        </div>
        <div className="info-shop-rechat">
          <svg
            enableBackground="new 0 0 15 15"
            viewBox="0 0 15 15"
            x={0}
            y={0}
            className="shopee-svg-icon"
          >
            <g>
              <polygon
                fill="none"
                points="14 10.8 7 10.8 3 13.8 3 10.8 1 10.8 1 1.2 14 1.2"
                strokeLinejoin="round"
                strokeMiterlimit={10}
              />
              <circle cx={4} cy="5.8" r={1} stroke="none" />
              <circle cx="7.5" cy="5.8" r={1} stroke="none" />
              <circle cx={11} cy="5.8" r={1} stroke="none" />
            </g>
          </svg>
          <p>
            Chat response rate: <a>80%</a>
          </p>
        </div>
      </div>
      <div className="col-md-4 info-shop">
        <div className="info-shop-followed">
          <svg
            enableBackground="new 0 0 15 15"
            viewBox="0 0 15 15"
            x={0}
            y={0}
            className="shopee-svg-icon"
          >
            <g>
              <circle cx="5.5" cy={5} fill="none" r={4} strokeMiterlimit={10} />
              <path
                d="m8.4 7.5c.7 0 1.1.7 1.1 1.6v4.9h-8v-4.9c0-.9.4-1.6 1.1-1.6"
                fill="none"
                strokeLinejoin="round"
                strokeMiterlimit={10}
              />
              <path
                d="m12.6 6.9c.7 0 .9.6.9 1.2v5.7h-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
              />
              <path
                d="m9.5 1.2c1.9 0 3.5 1.6 3.5 3.5 0 1.4-.9 2.7-2.1 3.2"
                fill="none"
                strokeLinecap="round"
                strokeMiterlimit={10}
              />
            </g>
          </svg>
          <p>
            Followers: <a>6k</a>
          </p>
        </div>
        <div className="info-shop-evaluate">
          <svg
            enableBackground="new 0 0 15 15"
            viewBox="0 0 15 15"
            x={0}
            y={0}
            className="shopee-svg-icon icon-rating"
          >
            <polygon
              fill="none"
              points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
            />
          </svg>
          <p>
            Comment: <a>4.6 (10k comments)</a>
          </p>
        </div>
        <div className="info-shop-time">
          <svg
            enableBackground="new 0 0 15 15"
            viewBox="0 0 15 15"
            x={0}
            y={0}
            className="shopee-svg-icon"
          >
            <g>
              <circle
                cx="6.8"
                cy="4.2"
                fill="none"
                r="3.8"
                strokeMiterlimit={10}
              />
              <polyline
                fill="none"
                points="9.2 12.5 11.2 14.5 14.2 11"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
              />
              <path
                d="m .8 14c0-3.3 2.7-6 6-6 2.1 0 3.9 1 5 2.6"
                fill="none"
                strokeLinecap="round"
                strokeMiterlimit={10}
              />
            </g>
          </svg>
          <p>
            Join: <a>2 years</a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default function Shop() {
  return (
    <div className="container shop-wrapper">
      <div className="row">
        <div className="col-md-4 background-shop">
          <div className="avt-shop">
            <img src={Avatar} alt="shop"/>
            <div className="name-shop">
              <h5 className="shopName">Saga</h5>
              <small className="onlineTime">Online 5 minutes ago</small>
            </div>
          </div>
          <div className="follow-chat">
            <button type="submit">+ Follow</button>
            <button>Chat</button>
          </div>
        </div>
        <div className="col-md-4 info-shop">
          <div className="info-shop-product">
            <svg
              enableBackground="new 0 0 15 15"
              viewBox="0 0 15 15"
              x={0}
              y={0}
              strokeWidth={0}
              className="shopee-svg-icon"
            >
              <path d="m13 1.9c-.2-.5-.8-1-1.4-1h-8.4c-.6.1-1.2.5-1.4 1l-1.4 4.3c0 .8.3 1.6.9 2.1v4.8c0 .6.5 1 1.1 1h10.2c.6 0 1.1-.5 1.1-1v-4.6c.6-.4.9-1.2.9-2.3zm-11.4 3.4 1-3c .1-.2.4-.4.6-.4h8.3c.3 0 .5.2.6.4l1 3zm .6 3.5h.4c.7 0 1.4-.3 1.8-.8.4.5.9.8 1.5.8.7 0 1.3-.5 1.5-.8.2.3.8.8 1.5.8.6 0 1.1-.3 1.5-.8.4.5 1.1.8 1.7.8h.4v3.9c0 .1 0 .2-.1.3s-.2.1-.3.1h-9.5c-.1 0-.2 0-.3-.1s-.1-.2-.1-.3zm8.8-1.7h-1v .1s0 .3-.2.6c-.2.1-.5.2-.9.2-.3 0-.6-.1-.8-.3-.2-.3-.2-.6-.2-.6v-.1h-1v .1s0 .3-.2.5c-.2.3-.5.4-.8.4-1 0-1-.8-1-.8h-1c0 .8-.7.8-1.3.8s-1.1-1-1.2-1.7h12.1c0 .2-.1.9-.5 1.4-.2.2-.5.3-.8.3-1.2 0-1.2-.8-1.2-.9z" />
            </svg>
            <p>
              S???n ph???m: <a>6k</a>
            </p>
          </div>
          <div className="info-shop-follow">
            <svg
              enableBackground="new 0 0 15 15"
              viewBox="0 0 15 15"
              x={0}
              y={0}
              className="shopee-svg-icon"
            >
              <g>
                <circle
                  cx={7}
                  cy="4.5"
                  fill="none"
                  r="3.8"
                  strokeMiterlimit={10}
                />
                <line
                  fill="none"
                  strokeLinecap="round"
                  strokeMiterlimit={10}
                  x1={12}
                  x2={12}
                  y1="11.2"
                  y2="14.2"
                />
                <line
                  fill="none"
                  strokeLinecap="round"
                  strokeMiterlimit={10}
                  x1="10.5"
                  x2="13.5"
                  y1="12.8"
                  y2="12.8"
                />
                <path
                  d="m1.5 13.8c0-3 2.5-5.5 5.5-5.5 1.5 0 2.9.6 3.9 1.6"
                  fill="none"
                  strokeLinecap="round"
                  strokeMiterlimit={10}
                />
              </g>
            </svg>
            <p>
              Follow: <a>6</a>
            </p>
          </div>
          <div className="info-shop-rechat">
            <svg
              enableBackground="new 0 0 15 15"
              viewBox="0 0 15 15"
              x={0}
              y={0}
              className="shopee-svg-icon"
            >
              <g>
                <polygon
                  fill="none"
                  points="14 10.8 7 10.8 3 13.8 3 10.8 1 10.8 1 1.2 14 1.2"
                  strokeLinejoin="round"
                  strokeMiterlimit={10}
                />
                <circle cx={4} cy="5.8" r={1} stroke="none" />
                <circle cx="7.5" cy="5.8" r={1} stroke="none" />
                <circle cx={11} cy="5.8" r={1} stroke="none" />
              </g>
            </svg>
            <p>
              Chat response rate: <a>80%</a>
            </p>
          </div>
        </div>
        <div className="col-md-4 info-shop">
          <div className="info-shop-followed">
            <svg
              enableBackground="new 0 0 15 15"
              viewBox="0 0 15 15"
              x={0}
              y={0}
              className="shopee-svg-icon"
            >
              <g>
                <circle
                  cx="5.5"
                  cy={5}
                  fill="none"
                  r={4}
                  strokeMiterlimit={10}
                />
                <path
                  d="m8.4 7.5c.7 0 1.1.7 1.1 1.6v4.9h-8v-4.9c0-.9.4-1.6 1.1-1.6"
                  fill="none"
                  strokeLinejoin="round"
                  strokeMiterlimit={10}
                />
                <path
                  d="m12.6 6.9c.7 0 .9.6.9 1.2v5.7h-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit={10}
                />
                <path
                  d="m9.5 1.2c1.9 0 3.5 1.6 3.5 3.5 0 1.4-.9 2.7-2.1 3.2"
                  fill="none"
                  strokeLinecap="round"
                  strokeMiterlimit={10}
                />
              </g>
            </svg>
            <p>
              followers: <a>6k</a>
            </p>
          </div>
          <div className="info-shop-evaluate">
            <svg
              enableBackground="new 0 0 15 15"
              viewBox="0 0 15 15"
              x={0}
              y={0}
              className="shopee-svg-icon icon-rating"
            >
              <polygon
                fill="none"
                points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
              />
            </svg>
            <p>
              Evaluate: <a>4.6 (10k evaluate)</a>
            </p>
          </div>
          <div className="info-shop-time">
            <svg
              enableBackground="new 0 0 15 15"
              viewBox="0 0 15 15"
              x={0}
              y={0}
              className="shopee-svg-icon"
            >
              <g>
                <circle
                  cx="6.8"
                  cy="4.2"
                  fill="none"
                  r="3.8"
                  strokeMiterlimit={10}
                />
                <polyline
                  fill="none"
                  points="9.2 12.5 11.2 14.5 14.2 11"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit={10}
                />
                <path
                  d="m .8 14c0-3.3 2.7-6 6-6 2.1 0 3.9 1 5 2.6"
                  fill="none"
                  strokeLinecap="round"
                  strokeMiterlimit={10}
                />
              </g>
            </svg>
            <p>
              Join: <a>2 years</a>
            </p>
          </div>
        </div>
      </div>
      <div className="product-shop">
        <div className="row row-1">
          <Product product={product}></Product>

          <Product product={product}></Product>

          <Product product={product}></Product>

          <Product product={product}></Product>

          <Product product={product}></Product>
          <Product product={product}></Product>
        </div>
        <div className="row row-2">
          <Product product={product}></Product>

          <Product product={product}></Product>

          <Product product={product}></Product>

          <Product product={product}></Product>

          <Product product={product}></Product>
          <Product product={product}></Product>
        </div>
        <div className="row row-3">
          <Product product={product}></Product>

          <Product product={product}></Product>

          <Product product={product}></Product>

          <Product product={product}></Product>

          <Product product={product}></Product>
          <Product product={product}></Product>
        </div>
      </div>
    </div>
  );
}

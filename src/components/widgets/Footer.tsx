import React from "react";
import "../../assets/css/footer.css";
import payment1 from "../../assets/img/payment-methods/light/payment1.svg";
import payment2 from "../../assets/img/payment-methods/light/payment2.svg";
import payment3 from "../../assets/img/payment-methods/light/payment3.svg";
import payment4 from "../../assets/img/payment-methods/light/payment4.svg";
import payment5 from "../../assets/img/payment-methods/light/payment5.svg";

export default function Footer() {
  return (
    <div className="footer pt-5">
      <div className="container">
        <div className="row subscription display-flex justify-content-center align-items-center ">
          <div className="col-lg-7 col-md-12 col-sm-12">
            <h3>Subscribe To Our Lastest Deal, Products,...</h3>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12">
            <div className="row display-flex justify-content-center align-items-center">
              <div className="col-9 col-sm-8">
                <input
                  type="email"
                  className="email-input"
                  placeholder="Your email"
                ></input>
              </div>
              <div className="col-3 col-sm-4 btn-subscribe">
                <button type="submit">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row category">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <p className="category__header">New Arrivals</p>
                <ul className="category__list">
                  <li className="list-item">
                    <a href="#">Laptops</a>
                  </li>
                  <li className="list-item">
                    <a href="#">PCs</a>
                  </li>
                  <li className="list-item">
                    <a href="#">Funiture</a>
                  </li>
                  <li className="list-item">
                    <a href="#">Beauty</a>
                  </li>
                  <li className="list-item">
                    <a href="#">Clothes</a>
                  </li>
                  <li className="list-item">
                    <a href="#">Baby</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6">
                <p className="category__header">New Arrivals</p>
                <ul className="category__list">
                  <li className="list-item">
                    <a href="#">Laptops</a>
                  </li>
                  <li className="list-item">
                    <a href="#">PCs</a>
                  </li>
                  <li className="list-item">
                    <a href="#">Funiture</a>
                  </li>
                  <li className="list-item">
                    <a href="#">Beauty</a>
                  </li>
                  <li className="list-item">
                    <a href="#">Clothes</a>
                  </li>
                  <li className="list-item">
                    <a href="#">Baby</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6">
                <p className="category__header">New Arrivals</p>
                <ul className="category__list">
                  <li className="list-item">
                    <a href="#">Laptops</a>
                  </li>
                  <li className="list-item">
                    <a href="#">PCs</a>
                  </li>
                  <li className="list-item">
                    <a href="#">Funiture</a>
                  </li>
                  <li className="list-item">
                    <a href="#">Beauty</a>
                  </li>
                  <li className="list-item">
                    <a href="#">Clothes</a>
                  </li>
                  <li className="list-item">
                    <a href="#">Baby</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6">
                <p className="category__header">New Arrivals</p>
                <ul className="category__list">
                  <li className="list-item">
                    <a href="#">Laptops</a>
                  </li>
                  <li className="list-item">
                    <a href="#">PCs</a>
                  </li>
                  <li className="list-item">
                    <a href="#">Funiture</a>
                  </li>
                  <li className="list-item">
                    <a href="#">Beauty</a>
                  </li>
                  <li className="list-item">
                    <a href="#">Clothes</a>
                  </li>
                  <li className="list-item">
                    <a href="#">Baby</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <p className="category__header">Address</p>
            <ul className="category__list">
              <li className="list-item">
                Address : <span>1234 Street Adress City Address, 1234</span>
              </li>
              <li className="list-item">
                Phones : <span>(00) 1234 5678</span>
              </li>
              <li className="list-item">
                E-mail : <span>se06@email.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row socials align-items-center justify-content-center">
          <div className="container">
            <div className="socials-group text-white">
              <i className="fab fa-facebook-square"></i>
              <i className="fab fa-instagram"></i>
            </div>
            <div className="payment align-items-center">
              <div className="brand">
                <img src={payment1} alt="" />
              </div>
              <div className="brand">
                <img src={payment2} alt="" />
              </div>
              <div className="brand">
                <img src={payment3} alt="" />
              </div>
              <div className="brand">
                <img src={payment4} alt="" />
              </div>
              <div className="brand">
                <img src={payment5} alt="" />
              </div>
            </div>
            <div className="copyright mb-0  text-center">
              <p>
                Copyright <i className="far fa-copyright"></i> 2021 SE06 Co Ltd.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

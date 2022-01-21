import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/css/user.css";
import payment1 from "../../assets/img/payment-methods/light/payment1.svg";
import payment2 from "../../assets/img/payment-methods/light/payment2.svg";
import payment3 from "../../assets/img/payment-methods/light/payment3.svg";
import payment4 from "../../assets/img/payment-methods/light/payment4.svg";
import payment5 from "../../assets/img/payment-methods/light/payment5.svg";

export const UserDisplay = (props:{width: number, 
                            height: number,
                            imageUrl:string,
                            displayName:string}) => {
  return (
    <div className="user d-flex align-items-center justify-content-center">
      <div
        className="userImg"
        style={{
          border: "none",
          backgroundImage: `url('${props.imageUrl}')`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          borderRadius: "50%",
          width: `${props.width}px`,
          height: `${props.height}px`,
        }}
      ></div>
      <div
        className="userDisplayName"
        style={{ fontSize: "14px", marginLeft: "8px" ,textDecoration:'none'}}
      >{props.displayName}
      </div>
    </div>
  );
};
export function UserNav() {
  return (
    <div className="user-nav">
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-light"
        style={{ width: "280px" }}
      >
        <UserDisplay width={32} height={32} imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF3f4-ZFXn4tMJI7o4K2Jevg4flyxRwJQpvQ&usqp=CAU" displayName={'Name'}></UserDisplay>
        <hr></hr>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#/MyAccount" className="nav-link active" aria-current="page">
            <i className="fas fa-user"></i>
              My Account
            </a>
          </li>
          <li>
            <a href="#/Notifications" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              Notifications
            </a>
          </li>
          <li>
            <a href="#/Orders" className="nav-link link-dark">
            <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.9814 2.33388C19.3802 2.33388 19.7034 2.66638 19.7034 3.07763V3.32613H23.7957C24.1639 3.32613 24.4677 3.61051 24.5127 3.97801L24.5177 4.07076V24.922C24.5177 25.3333 24.1953 25.6666 23.7965 25.6666H4.53847C4.13968 25.6666 3.81641 25.3341 3.81641 24.9229V4.07076C3.81641 3.65951 4.13968 3.32526 4.53847 3.32526H8.62986V3.07763C8.62986 2.69788 8.90562 2.38463 9.26198 2.33826L9.35277 2.33301L18.9814 2.33388ZM19.7034 9.03638C19.7034 9.44763 19.381 9.78013 18.9822 9.78013H16.0931C15.6943 9.78013 15.3711 9.44763 15.3711 9.03638C15.3711 8.34951 14.8323 7.79388 14.1679 7.79388C13.5027 7.79388 12.9639 8.34951 12.9639 9.03638C12.9639 9.44763 12.6415 9.78013 12.2427 9.78013H9.35362C8.95483 9.78013 8.63156 9.44763 8.63156 9.03638L8.63071 4.81538H5.26222V24.1774H23.0736V4.81626L19.7034 4.81538V9.03638ZM16.5454 14.4666C16.8271 14.1761 17.2844 14.1761 17.567 14.4666C17.8486 14.7571 17.8486 15.2288 17.567 15.5201L13.7148 19.4918C13.4331 19.7823 12.9766 19.7823 12.6941 19.4918L10.768 17.5055C10.4863 17.215 10.4863 16.7434 10.768 16.452C11.0506 16.1615 11.5079 16.1615 11.7896 16.452L13.2049 17.9115L16.5454 14.4666ZM18.2593 3.82313H10.0757V8.29088H11.6199C11.9339 7.14463 12.9554 6.30463 14.1679 6.30463C15.3796 6.30463 16.4011 7.14463 16.7159 8.29088H18.2602V3.82401L18.2593 3.82313Z"
                  fill="black"
                />
              </svg>
              Orders
            </a>
          </li>
          <li>
            <a href="#/Seller" className="nav-link link-dark">
            <i className="fas fa-store"></i>
              My Shop
            </a>
          </li>
          <li>
            <a href="/SignIn " className="nav-link link-dark">
            <i className="fas fa-sign-out-alt"></i>
              Sign out
            </a>
          </li>
        </ul>
        <hr></hr>
        
        
      </div>
    </div>
  );
}

export default function User() {
  return (
    <div>
      <div id="main-1">
        <div className="container">
          <div className="row mb-3">
            <p className="my">My Dashboard</p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-4">
              <div className="container mb-5">
                <form className="form">
                  <ol>
                    <li>
                      <b>Account Dashboard</b>
                    </li>
                    <li>Acount Information</li>
                    <li>Address Book</li>
                    <li>My Orders</li>
                    <li>
                      <div className="ke"></div>
                    </li>
                    <li>My Downloadable Products</li>
                    <li>Stored Payment Methods</li>
                    <li>Billing Agrements</li>
                    <li>My Wish List</li>
                    <li>
                      <div className="ke"></div>
                    </li>
                    <li>My Product Reviews</li>
                    <li>Newsletter Subscriptions</li>
                  </ol>
                </form>
              </div>
            </div>
            <div className="col-lg-9 col-sm-8 ">
              <div className="container right">
                <p className="acount_b">Account Information</p>
                <div className="ke"></div>
                <div className="row">
                  <div className="col-7">
                    <p className="contact_b">Contact Information</p>
                    <p className="alex">
                      Alex Driver
                      <br />
                      ExampeAdress@gmail.com
                    </p>
                    <div>
                      <a href="#" className="edit">
                        Edit
                      </a>
                      <a href="#" className="edit">
                        Change Password
                      </a>
                    </div>
                  </div>
                  <div className="col-5">
                    <p className="contact_b">Newsletters</p>
                    <p className="alex">
                      You don't subscribe to our newsletter
                    </p>
                    <a href="#" className="edit">
                      Edit
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2 col-3 col-3">
                    <p className="acount_b">Address Book</p>
                  </div>
                  <div className="col-2 col-3 col-4">
                    <a href="#" className="edit">
                      Menage Addresses
                    </a>
                  </div>
                </div>
                <div className="ke"></div>

                <div className="row">
                  <div className="col-7">
                    <p className="contact_b">Default Billing Address</p>
                    <p className="alex">
                      You have not set a default billing address
                    </p>
                    <a href="#" className="edit">
                      Edit Address
                    </a>
                  </div>
                  <div className="col-5">
                    <p className="contact_b">Default Shipping Address</p>
                    <p className="alex">
                      You have not set a default shipping address
                    </p>
                    <a href="#" className="edit">
                      Edit Address
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 mb-5">
            <div className="col-lg-4">
              <div className="container">
                <div className="item__header">
                  <div className="icon-wrapper--circle">
                    <i className="fas fa-headset"></i>
                  </div>
                </div>
                <div className="item__content">
                  <div className="content__header">
                    <h3>Product support</h3>
                  </div>
                  <div className="content__body">
                    <p>
                      Up to 3 years on-site warranty available for your peace of
                      mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="container">
                <div className="item__header">
                  <div className="icon-wrapper--circle">
                    <i className="fas fa-user"></i>
                  </div>
                </div>
                <div className="item__content">
                  <div className="content__header">
                    <h3>Personal Account</h3>
                  </div>
                  <div className="content__body">
                    <p>
                      With big discounts, free delivery and a dedicated support
                      specialist.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="container">
                <div className="item__header">
                  <div className="icon-wrapper--circle">
                    <svg
                      width="26"
                      height="27"
                      viewBox="0 0 26 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25.2047 1.22977C25.1293 1.04194 24.9844 0.89041 24.8001 0.806715C24.6158 0.723019 24.4063 0.713599 24.2152 0.780413C24.0242 0.847227 23.8662 0.985132 23.7742 1.16544C23.6823 1.34574 23.6633 1.55457 23.7214 1.74847C24.9291 5.21947 22.5319 7.81167 20.7041 9.20007L19.9657 8.14187C19.7174 7.78697 19.1623 7.49187 18.7307 7.48667L14.5863 7.50487C14.08 7.52016 13.5873 7.67198 13.1602 7.94427L0.948006 16.5074C0.663949 16.7073 0.470671 17.0116 0.410489 17.3537C0.350307 17.6957 0.428126 18.0477 0.626906 18.3326L6.17661 26.273C6.59261 26.8645 7.25691 26.793 7.84971 26.3796L20.0619 17.8152C20.4129 17.5669 20.8185 17.0313 20.9615 16.6218L22.2589 12.5333C22.4019 12.1251 22.3148 11.5024 22.0665 11.1475L21.6167 10.5027C24.0711 8.62157 26.6191 5.29747 25.2047 1.22977V1.22977ZM19.5224 13.3952C19.2974 13.5527 19.0436 13.6643 18.7755 13.7236C18.5074 13.783 18.2302 13.7889 17.9597 13.7411C17.6893 13.6933 17.431 13.5927 17.1994 13.445C16.9679 13.2973 16.7678 13.1054 16.6104 12.8804C16.2918 12.4249 16.1669 11.8617 16.2632 11.3143C16.3595 10.7668 16.669 10.28 17.1239 9.96057C17.4805 9.71073 17.9063 9.57856 18.3416 9.58252C18.777 9.58648 19.2003 9.72638 19.5523 9.98267C19.1987 10.1959 18.9556 10.3207 18.9101 10.3402C18.749 10.417 18.6187 10.5463 18.5406 10.7069C18.4626 10.8674 18.4414 11.0497 18.4805 11.2239C18.5196 11.3981 18.6168 11.5539 18.756 11.6656C18.8952 11.7774 19.0683 11.8385 19.2468 11.8391C19.3586 11.8391 19.473 11.8131 19.5809 11.7624C19.8331 11.6428 20.1035 11.5011 20.3856 11.3334C20.4505 11.7235 20.4039 12.1239 20.2512 12.4887C20.0985 12.8535 19.8459 13.1677 19.5224 13.3952V13.3952Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
                <div className="item__content">
                  <div className="content__header">
                    <h3>Amazing savings</h3>
                  </div>
                  <div className="content__body">
                    <p>
                      Up to 70% off new Products, you can be sure of the best
                      price.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Body --> */}

      <div>
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
                  <div className="col-3 col-sm-4">
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
            <div className="row socials">
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
                    Copyright <i className="far fa-copyright"></i> 2021 SE06 Co
                    Ltd.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

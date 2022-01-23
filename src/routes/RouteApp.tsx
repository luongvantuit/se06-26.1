import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/widgets/Nav";
import SignInScreen from "../components/screens/SignInScreen";
import SignUpScreen from "../components/screens/SignUpScreen";
import HomeScreen from "../components/screens/HomeScreen";
import ContactScreen from "../components/screens/ContactScreen";
import ServiceScreen from "../components/screens/ServiceScreen";
import Category from "../components/screens/Category";
import Payment from "../components/screens/Payment";
import ProductDetails from "../components/screens/ProductDetails";
import AddProduct from "../components/screens/AddProduct";
import OrdersManagement from "../components/screens/OrdersManagement";
import Card from "../components/screens/Card";
import Cart from "../components/screens/Cart";
import User from "../components/screens/User";
import MyProduct from "../components/screens/MyProduct";
import UserOrder from "../components/screens/UserOrder";
import Notifications from "../components/screens/Notifications";
import Seller from "../components/screens/Seller";
import Shop from "../components/screens/Shop";

export default function RouteApp() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/" component={HomeScreen}>
        </Route>
        <Route exact path="/home" component={HomeScreen}>
        </Route>
        <Route exact path="/service">
          <ServiceScreen></ServiceScreen>
        </Route>
        <Route exact path="/contact">
          <ContactScreen></ContactScreen>
        </Route>
        <Route exact path="/userorder">
          <UserOrder></UserOrder>
        </Route>
        <Route exact path="/signin">
          <SignInScreen></SignInScreen>
        </Route>
        <Route exact path="/signup">
          <SignUpScreen></SignUpScreen>
        </Route>
        <Route exact path="/category">
          <Category></Category>
        </Route>
        <Route exact path="/cart">
          <Cart></Cart>
        </Route>
        <Route exact path="/seller">
          <Seller></Seller>
        </Route>
        <Route exact path="/payment">
          <Payment></Payment>
        </Route>
        <Route exact path="/productdetails">
          <ProductDetails></ProductDetails>
        </Route>
        <Route exact path="/addproduct">
          <AddProduct></AddProduct>
        </Route>
        <Route exact path="/myproduct">
          <MyProduct></MyProduct>
        </Route>
        <Route exact path="/myorders">
          <OrdersManagement></OrdersManagement>
        </Route>
        <Route exact path="/user">
          <User></User>
        </Route>
        <Route exact path="/card">
          <Card></Card> 
        </Route>
        <Route exact path="/notifications">
          <Notifications></Notifications>
        </Route>
        <Route exact path="/shop">
          <Shop></Shop>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

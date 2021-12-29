import React from 'react'
import { HashRouter , Switch, Route} from 'react-router-dom'
import Header from '../components/widgets/Nav'
import SignInScreen from '../components/screens/SignInScreen'
import SignUpScreen from '../components/screens/SignUpScreen'
import HomeScreen from '../components/screens/HomeScreen'
import ContactScreen from '../components/screens/ContactScreen'
import ServiceScreen from '../components/screens/ServiceScreen'
import Category from '../components/screens/Category'
import ShoppingCart from '../components/screens/ShoppingCart'
import Payment from '../components/screens/Payment'
import ProductDetails from '../components/screens/ProductDetails'
import AddProduct from '../components/screens/AddProduct'
import OrdersManagement from '../components/screens/OrdersManagement'
import SideNav from '../components/widgets/SideNav'

export default function RouteApp() {
    return (
        <HashRouter>
            <Header />
            
            <Switch>
                <Route exact path='/HomeScreen'>
                    <HomeScreen></HomeScreen>
                </Route>
                <Route exact path='/ServiceScreen'>
                    <ServiceScreen></ServiceScreen>
                </Route>
                <Route exact path='/ContactScreen'>
                    <ContactScreen></ContactScreen>
                </Route>
                <Route exact path='/OrderScreen'>
                    {/* <OrderScreen></OrderScreen> */}
                </Route>
                <Route exact path='/CartScreen'>
                    {/* <CartScreen></CartScreen> */}
                </Route>
                <Route exact path='/SignInScreen'>
                    <SignInScreen></SignInScreen>
                </Route>
                <Route exact path='/SignUpScreen'>
                    <SignUpScreen></SignUpScreen>
                </Route>
                <Route exact path='/Category'>
                    <Category></Category>
                </Route>
                <Route exact path='/ShoppingCart'>
                    <ShoppingCart></ShoppingCart>
                </Route>
                <Route exact path='/Payment'>
                    <Payment></Payment>
                </Route>
                <Route exact path='/ProductDetails'>
                    <ProductDetails></ProductDetails>
                </Route>
                <Route exact path='/AddProduct'>
                    <AddProduct></AddProduct>
                </Route>
                <Route exact path='/AddProduct'>
                    <AddProduct></AddProduct>
                </Route>
                <Route exact path='/OrdersManagement'>
                    <OrdersManagement></OrdersManagement>
                </Route>
            </Switch> 
        </HashRouter>
    )
}

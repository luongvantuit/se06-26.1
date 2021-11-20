import React from 'react';
import { Route, Switch, Link, HashRouter } from 'react-router-dom';
import RouterApp from './routes/RouteApp';
import 'bootstrap'
import _404 from './components/screens/_404'
import Footer from './components/widgets/Footer';
import ProductDetails from './components/screens/ProductDetails'
function App() {
  return (
    
    <>
      <RouterApp />
      <Footer></Footer>
      <ProductDetails></ProductDetails>
    </>
  );
}
export default App



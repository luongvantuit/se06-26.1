import React from 'react';
import { Route, Switch, Link, HashRouter } from 'react-router-dom';
import RouterApp from './routes/RouteApp';
import 'bootstrap'
import Nav from './components/widgets/Nav';
import Header from './components/widgets/Nav';
import SignInScreen from './components/screens/SignInScreen';
import _404 from './components/screens/_404'
import Footer from './components/widgets/Footer';
import SignUpScreen from './components/screens/SignUpScreen';
import ContactScreen from './components/screens/ContactScreen';
import ServiceScreen from './components/screens/ServiceScreen';
import Notifications from './components/screens/Notifications';

function App() {
  return (
    
    <>
      <RouterApp />
  
    </>
  );
}
export default App



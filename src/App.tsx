import React from 'react';
import { Route, Switch, Link, HashRouter } from 'react-router-dom';
import RouterApp from './routes/RouteApp';
import 'bootstrap'
import Nav from './components/widgets/Nav';
import Header from './components/widgets/Nav';
import SignInScreen from './components/screens/SignInScreen';
import User from './components/screens/User';
import ContactScreen from './components/screens/ContactScreen';
import Notifications from './components/screens/Notifications';

function App() {
  return (
    
    <>
      <RouterApp />
      {/* <Notifications></Notifications> */}
    </>
  );
}

export default App;


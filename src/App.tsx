import React from 'react';
import { Route, Switch, Link, HashRouter } from 'react-router-dom';
import RouterApp from './routes/RouteApp';
import 'bootstrap'
import Nav from './components/widgets/Nav';
import Header from './components/widgets/Nav';
import SignInScreen from './components/screens/SignInScreen';

function App() {
  return (
    
    <>
      <RouterApp />
      
    </>
  );
}

export default App;


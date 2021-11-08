import React from 'react';
import { Route, Switch, Link, HashRouter } from 'react-router-dom';
import RouterApp from './routes/RouteApp';
import 'bootstrap'
import SignInScreen from './components/screens/SignInScreen';
import _404  from './components/screens/_404';


function App() {
  return (
    <>
    <RouterApp />
    <_404></_404>
    </>
  );
}
export default App



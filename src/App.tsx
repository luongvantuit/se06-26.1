import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import Home from './pages'
import Service from './pages'
import Contact from './pages'
import SignIn from './pages'


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route  path='/Home' exact component={Home}></Route>
        <Route  path='/Service' exact component={Service}></Route>
        <Route  path='/Contact' exact component={Contact}></Route>
        <Route exact path='/Order'></Route>
        <Route exact path='/Cart'></Route>
        <Route exact path='/SignIn' component={SignIn}></Route>
        <Route exact path='/SignUp'></Route>
        
      </Switch>
    </Router>
  );
}

export default App;


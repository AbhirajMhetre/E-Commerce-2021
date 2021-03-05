import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './container/Home/Home';
// import Header from './components/Header/Header';
import Cart from './container/Cart/Cart';
import SignUp from './components/Auth/SignUp/SignUp';
import SignIn from './components/Auth/SignIn/SignIn';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route path="/users/login" exact component={SignIn}/>
          <Route path="/users" exact component={SignUp}/>
          <Route path="/orders" exact component={Cart} />
          <Route path="/products" component={Home} />
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

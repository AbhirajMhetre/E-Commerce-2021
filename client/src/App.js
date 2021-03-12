import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import {Route, Switch} from "react-router-dom";


import Error from "./ErrorPage";
import AdminUI from "./components/AdminUI/AdminUI";
import Login from "./auth/Login";
import Register from "./auth/Register";
import InitialPage from "./components/InitialPage/InitialPage";
import Cart from "./components/Cart/Cart";


function App() {
  return (
    <div className="App">
   
      <Switch>
        <Route exact path="/" component={InitialPage}/>
        <Route path="/products" component={Header}/>
       
        <Route path="/admin-ui" component={AdminUI}/>
        <Route path="/users/login" component={Login}/> 
        <Route path="/users" component={Register}/> 
        <Route path="/cart" component={Cart}/> 
        <Route component={Error}/>
      </Switch>
  
      
    </div>
  );
}

export default App;

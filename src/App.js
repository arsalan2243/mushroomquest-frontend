import React from 'react';
import './App.css';


import Home from "./pages/index";
import {Route, Switch} from "react-router-dom";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import ForgotPasswordPage from "./pages/forgotPassword";
import Sliders from "./pages/sliders";
import PrivateRoute from './components/PrivateRoute';



function App() {
  return (
    <Switch>

      <PrivateRoute exact path="/sliders" component={Sliders}/>
        <Route  exact path="/signup" component={SignUpPage}/>
        <Route  exact path="/signin" component={SignInPage}/>
        <Route  exact path="/forgot" component={ForgotPasswordPage}/>
      <Route  exact path="/" component={Home}/>

    </Switch>
  );
}

export default App;

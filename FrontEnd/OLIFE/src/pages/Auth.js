import React, { Component } from "react";
import LoginModal from "react-login-modal";
import  { Redirect } from 'react-router-dom'
 
export default class Auth extends Component {
    constructor(props){
        super(props); 
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);  
    }

    handleLogin(username, password) {

         this.props.loginUser({username: username, password:password});
    }

    handleLogout() {
        this.props.logoutUser();
    }
 
  render() {
    
    return (
    <div className="container">
      <LoginModal
        //handleSignup={this.handleSignup}
        handleLogin={this.handleLogin}
        buttonColor={"#52AE64"}
        //disabledButtonColor={"#C7E4CD"}
        buttonHoverColor={"#A7D5B0"}
        fontFamily={"roboto"}
        errorMessage={"Incorrect username or password"}
        errorEnable={this.props.auth.errorLogin}
      />
      </div>
    );
  }
}
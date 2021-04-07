import React, { Component } from "react";


import Home from '../pages/Home';
import {Switch,Route,Redirect , withRouter } from 'react-router-dom';
import About from '../pages/AboutUs';
import Header from '../components/HeaderComponent';
import Footer from '../components/FooterComponent';
import SignIn from '../components/SignInComponent';

import { connect} from 'react-redux';
import { loginUser, logoutUser} from '../redux/ActionCreators';


const mapStateToProps = state => {
    return {
      auth: state.auth,
      about_data:state.about_data
    }
}

const mapDispatchToProps = (dispatch) => ({

  loginUser: (creds) => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser()),
});





class Main extends Component 
{

    
  constructor(props){
    super(props);
  }


    render()
    {
        return(

        <div >
        <Header/>

        <Switch>
            <Route path="/home" component={Home} />
            <Route exact path="/about" component={() => <About about_data={this.props.aboutData}/>}/>
            <Route exact path="/signin" component={() => <SignIn auth={this.props.auth} 
                                                                 loginUser={this.props.loginUser} 
                                                                 logoutUser={this.props.logoutUser}
                                                        />}/>
            <Redirect to="/home"/>
        </Switch>

        <br></br>
        <Footer/>
        </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
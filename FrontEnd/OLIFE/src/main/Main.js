import { Component } from 'react';
import Home from '../pages/Home';
import {Switch,Route,Redirect, withRouter} from 'react-router-dom';
import About from '../pages/AboutUs';
import Header from '../components/HeaderComponent';
import Footer from '../components/FooterComponent';
import Temperature from '../pages/Temperature';
import Notes from '../pages/Notes';
import Team from '../pages/Team';
import Rain from '../pages/Rain'
import Gaz from '../pages/Gaz'
import Wind from '../pages/Wind'
import SignIn from '../components/SignInComponent';
import { connect} from 'react-redux';
import { loginUser, logoutUser} from '../redux/ActionCreators';
import '../CSS/About.css';
import '../CSS/Dashboard.css';
import '../CSS/SideNav.css';

const mapStateToProps = state => {
    return {
      auth: state.auth,
      isAuthenticated:state.auth.isAuthenticated,
      about_data:state.about_data
    }
}

const mapDispatchToProps = (dispatch) => ({

  loginUser: (creds) => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser()),
});



class Main extends Component {
  constructor(props){
    super(props); 

  }


    render()
    {
      if(this.props.auth.isAuthenticated){
        return(

        <div >
        <Header auth={this.props.auth} logoutUser={this.props.logoutUser}/>

        <Switch>
        <Route path="/home" component={() => <Home auth={this.props.auth} />} />
        <Route exact path="/about" component={About}/>
        <Route exact path="/temperature" component={Temperature}/>
        <Route exact path="/notes" component={Notes}/>
        <Route exact path="/team" component={Team}/>
        <Route exact path="/rain" component={Rain}/>
        <Route exact path="/gaz" component={Gaz}/>
        <Route exact path="/wind" component={Wind}/>
        <Route exact path="/signin" component={() => <SignIn auth={this.props.auth} 
                                                            loginUser={this.props.loginUser} 
                                                            logoutUser={this.props.logoutUser}
                                                  />}/>
        <Redirect to="/home"/>
        </Switch>

        
        </div>
        );
    }
    else{
      return(

        <div >
        <Header auth={this.props.auth} />

        <Switch>
        <Route path="/home" component={() => <Home auth={this.props.auth} />} />
        <Route exact path="/about" component={About}/>
        <Route exact path="/team" component={Team}/>
        <Route exact path="/signin" component={() => <SignIn auth={this.props.auth} 
                                                            loginUser={this.props.loginUser} 
                                                            logoutUser={this.props.logoutUser}
                                                  />}/>
        <Redirect to="/home"/>
        </Switch>

        
        </div>
        );
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
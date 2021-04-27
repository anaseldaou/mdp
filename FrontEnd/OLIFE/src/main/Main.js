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
import { connect} from 'react-redux';
import { loginUser, logoutUser} from '../redux/SignInCreators';
import '../CSS/About.css';
import '../CSS/Dashboard.css';
import '../CSS/SideNav.css';

import {fetchAvgTempPerSemaine,fetchAvgTempAujourdhui} from '../redux/TemperatureCreators';

const mapStateToProps = state => {
    return {
      auth: state.auth,
      //isAuthenticated:state.auth.isAuthenticated,
      about_data:state.about_data,
      temperature:state.temperature,
    }
}

const mapDispatchToProps = (dispatch) => ({

  loginUser: (creds) => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser()),
  fetchAvgTempPerSemaine : (parameter,echelle) => dispatch(fetchAvgTempPerSemaine(parameter,echelle)),
  fetchAvgTempAujourdhui:(parameter,echelle) => dispatch(fetchAvgTempAujourdhui(parameter,echelle))
});



class Main extends Component {
  constructor(props){
    super(props); 

  }

  componentDidMount()
  {
    this.props.fetchAvgTempPerSemaine("Temperature","perDay/7");
    this.props.fetchAvgTempAujourdhui("Temperature","perHour/24");
  }


    render()
    {
      if(this.props.auth.isAuthenticated){
        return(

        <div >
        <Header auth={this.props.auth} loginUser={this.props.loginUser} logoutUser={this.props.logoutUser}/>

        <Switch>
        <Route path="/home" component={() => <Home auth={this.props.auth} />} />
        <Route exact path="/about" component={About}/>
        <Route exact path="/temperature" component={() => <Temperature TemperatureData_Semaine={this.props.temperature.TemperatureData_Semaine} 
                                                                        TemperatureData_Aujourdhui={this.props.temperature.TemperatureData_Aujourdhui}/>} />
        
        <Route exact path="/notes" component={Notes}/>
        <Route exact path="/team" component={Team}/>
        <Route exact path="/rain" component={Rain}/>
        <Route exact path="/gaz" component={Gaz}/>
        <Route exact path="/wind" component={Wind}/>
        <Redirect to="/home"/>
        </Switch>

        
        </div>
        );
    }
    else{
      return(

        <div >
        <Header auth={this.props.auth} loginUser={this.props.loginUser} logoutUser={this.props.logoutUser} />

        <Switch>
        <Route path="/home" component={() => <Home auth={this.props.auth} />} />
        <Route exact path="/about" component={About}/>
        <Route exact path="/team" component={Team}/>
        <Redirect to="/home"/>
        </Switch>

        
        </div>
        );
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
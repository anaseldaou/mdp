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

import {fetchAvgTempPerSemaine,fetchAvgTempAujourdhui,fetchAvgTempPerAnnee} from '../redux/TemperatureCreators';
import {fetchAvgPluvioPerSemaine,fetchAvgPluvioAujourdhui,fetchAvgPluvioPerAnnee} from '../redux/PluvioCreators';
import {fetchAvgWindSpeedPerSemaine,fetchAvgWindSpeedPerMonth,fetchAvgWindSpeedPerAnnee} from '../redux/WindSpeedCreators';

const mapStateToProps = state => {
    return {
      auth: state.auth,
      //isAuthenticated:state.auth.isAuthenticated,
      about_data:state.about_data,
      temperature:state.temperature,
      pluvio:state.pluvio,
      wind:state.wind
    }
}

const mapDispatchToProps = (dispatch) => ({

  loginUser: (creds) => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser()),

  fetchAvgTempPerSemaine : (parameter,echelle) => dispatch(fetchAvgTempPerSemaine(parameter,echelle)),
  fetchAvgTempAujourdhui:(parameter,echelle) => dispatch(fetchAvgTempAujourdhui(parameter,echelle)),
  fetchAvgTempPerAnnee:(parameter,echelle) => dispatch(fetchAvgTempPerAnnee(parameter,echelle)),

  fetchAvgPluvioPerSemaine:(parameter,echelle) => dispatch(fetchAvgPluvioPerSemaine(parameter,echelle)),
  fetchAvgPluvioAujourdhui:(parameter,echelle) => dispatch(fetchAvgPluvioAujourdhui(parameter,echelle)),
  fetchAvgPluvioPerAnnee:(parameter,echelle) => dispatch(fetchAvgPluvioPerAnnee(parameter,echelle)),

  fetchAvgWindSpeedPerSemaine:(parameter,echelle) => dispatch(fetchAvgWindSpeedPerSemaine(parameter,echelle)),
  fetchAvgWindSpeedPerMonth:(parameter,echelle) => dispatch(fetchAvgWindSpeedPerMonth(parameter,echelle)),
  fetchAvgWindSpeedPerAnnee:(parameter,echelle) => dispatch(fetchAvgWindSpeedPerAnnee(parameter,echelle))
});



class Main extends Component {
  constructor(props){
    super(props); 

  }

  componentDidMount()
  {
    //GET TEMPERATURE DATA
    this.props.fetchAvgTempPerSemaine("Temperature","perDay/7");
    this.props.fetchAvgTempAujourdhui("Temperature","perHour/24");
    this.props.fetchAvgTempPerAnnee("Temperature","perMonth/12");

    //GET PLUVIO DATA
    this.props.fetchAvgPluvioPerSemaine("Pluvio","perDay/7");
    this.props.fetchAvgPluvioAujourdhui("Pluvio","perHour/24");
    this.props.fetchAvgPluvioPerAnnee("Pluvio","perMonth/12");

    //GET WINDSPEED DATA
    this.props.fetchAvgWindSpeedPerSemaine("WindSpeed","perDay/7");
    this.props.fetchAvgWindSpeedPerMonth("WindSpeed","perDay/30");
    this.props.fetchAvgWindSpeedPerAnnee("WindSpeed","perMonth/7");
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
                                                                        TemperatureData_Aujourdhui={this.props.temperature.TemperatureData_Aujourdhui}
                                                                        TemperatureData_Annee={this.props.temperature.TemperatureData_Annee}/>} />
        
        <Route exact path="/notes" component={Notes}/>
        <Route exact path="/team" component={Team}/>
        <Route exact path="/rain" component={() => <Rain RainData_Semaine={this.props.pluvio.RainData_Semaine} 
                                                                        RainData_Aujourdhui={this.props.pluvio.RainData_Aujourdhui}
                                                                        RainData_Annee={this.props.pluvio.RainData_Annee}/>}/>
        <Route exact path="/gaz" component={Gaz}/>
        <Route exact path="/wind" component={() => <Wind WindData_Semaine={this.props.wind.WindData_Semaine} 
                                                                        WindData_Mois={this.props.wind.WindData_Mois}
                                                                        WindData_Annee={this.props.wind.WindData_Annee}/>}/>
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
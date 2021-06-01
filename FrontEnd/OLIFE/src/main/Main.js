import { Component } from 'react';
import Home from '../pages/Home';
import {Switch,Route,Redirect, withRouter} from 'react-router-dom';
import About from '../pages/AboutUs';
import Header from '../components/HeaderComponent';
import Footer from '../components/FooterComponent';
import Temperature from '../pages/Temperature';
import Notes from '../pages/Notes';
import Team from '../pages/Team';
import Rain from '../pages/Rain';
import Gaz from '../pages/Gaz';
import Wind from '../pages/Wind';
import { connect} from 'react-redux';
import { loginUser, logoutUser} from '../redux/SignInCreators';
import '../CSS/About.css';
import '../CSS/Dashboard.css';
import '../CSS/SideNav.css';

import {fetchAvgTempPerSemaine,fetchAvgTempAujourdhui,fetchAvgTempPerAnnee,fetchAvgTempDerniereHeure , fetchAvgHumiditeDerniereHeure} from '../redux/TemperatureCreators';
import {fetchAvgPluvioPerSemaine,fetchAvgPluvioAujourdhui,fetchAvgPluvioPerAnnee} from '../redux/PluvioCreators';
import {fetchAvgWindSpeedPerSemaine,fetchAvgWindSpeedPerMonth,fetchAvgWindSpeedPerAnnee , fetchAvgWindSpeedAujourdhui} from '../redux/WindSpeedCreators';
import {
fetchAvgCO2PerSemaine,
fetchAvgSO2PerSemaine,
fetchAvgSO2PerAnnee,
fetchAvgCO2PerAnnee,
fetchAvgPPMPerSemaine,
fetchAvgPPMPerMois,
fetchAvgPPMDernierHeure
}
from '../redux/GazCreators';

const mapStateToProps = state => {
    return {
      auth: state.auth,
      //isAuthenticated:state.auth.isAuthenticated,
      about_data:state.about_data,
      temperature:state.temperature,
      pluvio:state.pluvio,
      wind:state.wind,
      gaz:state.gaz
    }
}

const mapDispatchToProps = (dispatch) => ({

  loginUser: (creds) => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser()),

  fetchAvgTempPerSemaine : (parameter,echelle) => dispatch(fetchAvgTempPerSemaine(parameter,echelle)),
  fetchAvgTempAujourdhui:(parameter,echelle) => dispatch(fetchAvgTempAujourdhui(parameter,echelle)),
  fetchAvgTempPerAnnee:(parameter,echelle) => dispatch(fetchAvgTempPerAnnee(parameter,echelle)),
  fetchAvgTempDerniereHeure:(parameter,echelle) => dispatch(fetchAvgTempDerniereHeure(parameter,echelle)),
  fetchAvgHumiditeDerniereHeure:(parameter,echelle) => dispatch(fetchAvgHumiditeDerniereHeure(parameter,echelle)),

  fetchAvgPluvioPerSemaine:(parameter,echelle) => dispatch(fetchAvgPluvioPerSemaine(parameter,echelle)),
  fetchAvgPluvioAujourdhui:(parameter,echelle) => dispatch(fetchAvgPluvioAujourdhui(parameter,echelle)),
  fetchAvgPluvioPerAnnee:(parameter,echelle) => dispatch(fetchAvgPluvioPerAnnee(parameter,echelle)),

  fetchAvgWindSpeedPerSemaine:(parameter,echelle) => dispatch(fetchAvgWindSpeedPerSemaine(parameter,echelle)),
  fetchAvgWindSpeedPerMonth:(parameter,echelle) => dispatch(fetchAvgWindSpeedPerMonth(parameter,echelle)),
  fetchAvgWindSpeedPerAnnee:(parameter,echelle) => dispatch(fetchAvgWindSpeedPerAnnee(parameter,echelle)),
  fetchAvgWindSpeedAujourdhui:(parameter,echelle) => dispatch(fetchAvgWindSpeedAujourdhui(parameter,echelle)),

  fetchAvgCO2PerSemaine:(parameter,echelle) => dispatch(fetchAvgCO2PerSemaine(parameter,echelle)),
  fetchAvgSO2PerSemaine:(parameter,echelle) => dispatch(fetchAvgSO2PerSemaine(parameter,echelle)),
  fetchAvgCO2PerAnnee:(parameter,echelle) => dispatch(fetchAvgCO2PerAnnee(parameter,echelle)),
  fetchAvgSO2PerAnnee:(parameter,echelle) => dispatch(fetchAvgSO2PerAnnee(parameter,echelle)),
  fetchAvgPPMPerSemaine:(parameter,echelle) => dispatch(fetchAvgPPMPerSemaine(parameter,echelle)),
  fetchAvgPPMPerMois:(parameter,echelle) => dispatch(fetchAvgPPMPerMois(parameter,echelle)),
  fetchAvgPPMDernierHeure:(parameter,echelle) => dispatch(fetchAvgPPMDernierHeure(parameter,echelle))
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
    this.props.fetchAvgTempDerniereHeure("Temperature","perHour/1");
    this.props.fetchAvgHumiditeDerniereHeure("Humidity","perHour/1");

    //GET PLUVIO DATA
    this.props.fetchAvgPluvioPerSemaine("Pluvio","perDay/7");
    this.props.fetchAvgPluvioAujourdhui("Pluvio","perHour/24");
    this.props.fetchAvgPluvioPerAnnee("Pluvio","perMonth/12");

    //GET WINDSPEED DATA
    this.props.fetchAvgWindSpeedPerSemaine("WindSpeed","perDay/7");
    this.props.fetchAvgWindSpeedPerMonth("WindSpeed","perDay/30");
    this.props.fetchAvgWindSpeedPerAnnee("WindSpeed","perMonth/7");
    this.props.fetchAvgWindSpeedAujourdhui("WindSpeed","perDay/1");

    //GET GAZ DATA
    this.props.fetchAvgCO2PerSemaine("CO2","perDay/7");
    this.props.fetchAvgSO2PerSemaine("SO2","perDay/7");
    this.props.fetchAvgCO2PerAnnee("CO2","perMonth/12");
    this.props.fetchAvgSO2PerAnnee("SO2","perMonth/12");
    this.props.fetchAvgPPMPerSemaine("PPM","perWeek/1");
    this.props.fetchAvgPPMPerMois("PPM","perMonth/1");
    this.props.fetchAvgPPMDernierHeure("PPM","perHour/1")
  }


    render()
    {
      if(this.props.auth.isAuthenticated){
        return(

        <div >
        <Header auth={this.props.auth} loginUser={this.props.loginUser} logoutUser={this.props.logoutUser}/>

        <Switch>
        <Route path="/home" component={() => <Home auth={this.props.auth} temperature={this.props.temperature} wind={this.props.wind} pluvio={this.props.pluvio} gaz={this.props.gaz} />} />
        <Route exact path="/about" component={About}/>
        <Route exact path="/temperature" component={() => <Temperature auth={this.props.auth} TemperatureData_Semaine={this.props.temperature.TemperatureData_Semaine} 
                                                                        TemperatureData_Aujourdhui={this.props.temperature.TemperatureData_Aujourdhui}
                                                                        TemperatureData_Annee={this.props.temperature.TemperatureData_Annee}/>} />
        
        <Route exact path="/notes" component={Notes}/>
        <Route exact path="/team" component={Team}/>
        <Route exact path="/rain" component={() => <Rain auth={this.props.auth} RainData_Semaine={this.props.pluvio.RainData_Semaine} 
                                                                        RainData_Aujourdhui={this.props.pluvio.RainData_Aujourdhui}
                                                                        RainData_Annee={this.props.pluvio.RainData_Annee}/>}/>
        <Route exact path="/gaz" component={() => <Gaz auth={this.props.auth} gaz={this.props.gaz}/>}/>
        
        <Route exact path="/wind" component={() => <Wind  auth={this.props.auth} WindData_Semaine={this.props.wind.WindData_Semaine} 
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
        <Route path="/home" component={() => <Home auth={this.props.auth} temperature={this.props.temperature} wind={this.props.wind} pluvio={this.props.pluvio} gaz={this.props.gaz} />} />
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
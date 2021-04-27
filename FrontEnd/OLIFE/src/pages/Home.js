import { Component } from 'react';
import { Chart } from 'primereact/chart';
import TableCom from '../components/TableComponent';
import KnobCom from '../components/KnobComponent';
import FormDialog from '../components/DialogComponent';
import '../CSS/Dashboard.css'
import { Avg_Humidite_Aujourdui,Avg_Temperature_Aujourdui,TemperatureData_Aujourdhui ,TemperatureOptions_Aujourdhui} from '../mockData/TemperatureService';
import {Avg_WindSpeed_Ajourdhui,WindData_Semaine, WindOptions_Semaine} from '../mockData/WindService';
import {Avg_Rain_Aujourdhui,RainData_Aujourdhui,RainOptions_Aujourdhui} from '../mockData/RainService'
import {Data_Intensity} from '../mockData/IntensiteService'
import SideNav from '../components/SideNavComponent'
import { Button } from 'primereact/button'


//import { Avg_Temperature_Aujourdui} from '../shared/Temperature';



class Home extends Component{
  constructor(props){
    super(props);
    this.state={
      isSignedIn:false,
      //Avg_Temperature_Aujourdui:0
    }
    this.ToWhite = this.ToWhite.bind(this);
    this.ToBlack = this.ToBlack.bind(this);

    console.log("first respone is " + Avg_Temperature_Aujourdui);
  }

  ToWhite() {
    document.body.style.backgroundColor = "white";
    document.body.style.color= "black";
  }

  ToBlack() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "rgba(250,192,46,255)";
  }


//   componentDidMount(){
//     this.setState({Avg_Temperature_Aujourdui:Avg_Temperature_Aujourdui});
//     console.log("second respone is " + Avg_Temperature_Aujourdui);
// }


render(){
  return(
      <div className="container-fluid">
        <div className="row">
            <div className="margin-1">
              <Button icon="pi pi-angle-double-left" className="margin-1 p-button-rounded p-button-secondary" onClick={this.ToBlack} />
            </div>
            <div className="margin-1">
              <Button icon="pi pi-angle-double-right" className="margin-1 p-button-rounded p-button-warning" onClick={this.ToWhite} />
            </div>
          </div>
            <SideNav auth={this.props.auth} />
            <FormDialog auth={this.props.auth} />

      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <br></br>
                <br></br>
                <br></br>
                <div className="card-custom">
                  <h2 className="card-subtitle mb-2"><bold>Temperature</bold></h2>
                  <h1 className="card-title">{Avg_Temperature_Aujourdui}°C &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><img src="assets/images/temperatureIcon.webp" width="25%"/></span></h1>
                </div>
              </div>
              <div className="col-12">
                <div className="card-custom">
                  <h2 className="card-subtitle mb-2"><bold>humidité</bold></h2>
                  <h1 className="card-title">{Avg_Humidite_Aujourdui}% &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><img src="assets/images/humidity-icon.png" width="25%"/></span></h1>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-9">
            <div className="card-custom">
              <h2 className="card-subtitle mb-2"><bold>Temperature Aujourd'hui en °C</bold></h2>
              <Chart type="line" data={TemperatureData_Aujourdhui} options={TemperatureOptions_Aujourdhui}/>
            </div>
          </div>
        </div>

        <br></br>
        <div class="row">
          <div className="col-md-9">
              <div className="card-custom center">
                <h2 className="card-subtitle mb-2"><bold>Vitesse du Vent cette semaine en Km/h</bold></h2>
                <Chart type="line" data={WindData_Semaine} />
                <br></br>
                <h4><bold>Moyenne de la vitesse du vent Aujourd'hui en Km/h: {Avg_WindSpeed_Ajourdhui} km/h</bold></h4>
              </div>
          </div>

          <div class="col-md-3">
              <KnobCom />
          </div>
        </div>

        <div class="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12">
                <TableCom />
              </div>
              <div className="col-md-12">
                <br></br>
                <div className="card-custom">
                <h4 className="card-subtitle mb-2"><bold>Intensité du rayonnement solaire en Watt/m2</bold></h4>
                  <Chart type="line" data={Data_Intensity} />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div className="row">
              <div className="col-md-12">
                <div className="card-custom">
                  <h2 className="card-subtitle mb-2 center"><bold>Pluie cumulée sur les dernières 24h</bold></h2>
                  <br></br>
                  <Chart type="bar" data={RainData_Aujourdhui} />
                  <br></br>
                  <h2> <bold>Pluis Cumule la derniere heure</bold></h2>
                  <h1>{Avg_Rain_Aujourdhui}ml <span><img src="assets/images/rain-icon.png" width="10%"/></span></h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Home;
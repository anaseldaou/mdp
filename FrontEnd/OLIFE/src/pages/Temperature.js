import {Component} from "react";
import { Chart } from 'primereact/chart';
import {TemperatureData_Annee, TemperatureOptions_Annee,
     /*TemperatureData_Semaine,*/ TemperatureOptions_Semaine,
     /* TemperatureData_Aujourdhui,*/ TemperatureOptions_Aujourdhui} from '../mockData/TemperatureService';
import { temperatureLabels } from '../Labels/TemperatureLabels';
import '../CSS/Dashboard.css'
import Title from '../components/TitleComponent';

import { VictoryBoxPlot, VictoryChart } from 'victory';


export default function Temperature(props){
  //   constructor(props)
  //   {
  //     super(props);
  //   }
  //   componentDidMount(){
  //     // this.setState({TemperatureData_Annee: TemperatureData_Annee,
  //     //                 TemperatureData_Semaine:TemperatureData_Semaine,
  //     //                 TemperatureData_Aujourdhui:TemperatureData_Aujourdhui
  //     //               });
  // }
  //  render(){
      return(
        <div  className="container">
          <div className="row">
            <Title title="Temperature" image="/assets/images/temperatureIcon.webp"/>
          </div>


          <div className="row">
            <div class="col-md-12">
                <div className="card-custom">
                    <h1>{temperatureLabels.temperature_aujourdhui}</h1>
                    <Chart type="line" data={props.TemperatureData_Aujourdhui} options={TemperatureOptions_Aujourdhui}/>
                </div>
            </div>
             <div class="col-md-6">
              <br></br>
              <br></br>
              <div className="card-custom">
                  <h1>{temperatureLabels.temperature_semaine}</h1>
                  <Chart type="line" data={props.TemperatureData_Semaine} options={TemperatureOptions_Semaine} />
              </div>
            </div>
            <div class="col-md-6">
              <div className="card-custom">
                <h1>{temperatureLabels.temperature_semaine}</h1>
                <VictoryChart domainPadding={10}>
                  <VictoryBoxPlot
                    labels
                    labelOrientation="bottom"
                    boxWidth={10}
                    data={[
                      { x: "Mon", y: [14, 15, 18, 15]},
                      { x: "Tue", y: [14,16, 18, 16]},
                      { x: "Wed", y: [14 ,17, 19,16] },
                      { x: "Thu", y: [15, 18, 18, 17] },
                      { x: "Fri", y: [17, 19, 19,15] },
                      { x: "Sat", y: [13, 15, 15, 14] },
                      { x: "Sun", y: [19,18,17,17] },
                    ]}
                  />
                </VictoryChart>
              </div>
            </div>

          </div>

          <div className="row">
            <div class="col-md-6">
              <div className="card-custom">
                <h1>{temperatureLabels.temperature_annee}</h1>
                <VictoryChart domainPadding={10}>
                  <VictoryBoxPlot
                    labels
                    labelOrientation="bottom"
                    boxWidth={15}
                    data={[

                      { x: "Jan", y: [3, 5, 17, 18] },

                      { x: "Fev", y: [1, 4, 22, 22] },

                      { x: "Mars", y: [13, 15, 25, 25] },

                      { x: "Avr", y: [15,17,27,33,36] },

                      { x: "Mai", y: [14,17,26,33,39] },

                      { x: "Jui", y: [25, 27, 33, 36,38] },

                      { x: "Aout", y: [24,26,33,35,40] },

                      { x: "Sep", y: [15,20,23,26,29] },

                      { x: "Oct", y: [14,15,16,23,25] },

                      { x: "Nov", y: [10,12,16,17,22] },

                      { x: "Dec", y: [3,7,12,14,16] },

                    ]}
                  />
                </VictoryChart>
              </div>
            </div>
              <div class="col-md-6">
                  <br></br>
                  <br></br>
                  <div className="card-custom">
                    <h1>{temperatureLabels.temperature_annee}</h1>
                    <Chart type="line" data={TemperatureData_Annee} options={TemperatureOptions_Annee} />
                  </div>
              </div>
          </div>
        </div>
      );
                  
}
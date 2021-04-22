import { Chart } from 'primereact/chart';
import {TemperatureData_Annee, TemperatureOptions_Annee,
     TemperatureData_Semaine, TemperatureOptions_Semaine,
      TemperatureData_Aujourdhui, TemperatureOptions_Aujourdhui} from '../shared/TemperatureService';
import { temperatureLabels } from '../Labels/TemperatureLabels';
import '../CSS/Dashboard.css'
import Title from '../components/TitleComponent';

import { VictoryBoxPlot, VictoryChart } from 'victory';


export default function Temperature(){
      return(
        <div  className="container">
          <div className="row">
            <Title title="Temperature Data" image="/assets/images/temperatureIcon.webp"/>
          </div>

          <div className="row">
            <div class="col-md-12">
                <div className="card-custom">
                    <h1>{temperatureLabels.temperature_aujourdhui}</h1>
                    <Chart type="line" data={TemperatureData_Aujourdhui} options={TemperatureOptions_Aujourdhui}/>
                </div>
            </div>
             <div class="col-md-6">
              <br></br>
              <br></br>
              <div className="card-custom">
                  <h1>{temperatureLabels.temperature_semaine}</h1>
                  <Chart type="line" data={TemperatureData_Semaine} options={TemperatureOptions_Semaine} />
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
                      { x: "Mon", y: [1, 2, 3, 5] },
                      { x: "Tue", y: [3, 2, 8, 10] },
                      { x: "Wed", y: [2, 8, 6, 5] },
                      { x: "Thu", y: [1, 3, 2, 9] },
                      { x: "Fri", y: [1, 3, 2, 9] },
                      { x: "Sat", y: [1, 3, 2, 9] },
                      { x: "Sun", y: [1, 3, 2, 9] },
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
                      { x: "Jan", y: [1, 2, 3, 5] },
                      { x: "Fev", y: [3, 2, 8, 10] },
                      { x: "Mars", y: [2, 8, 6, 5] },
                      { x: "Avr", y: [1, 3, 2, 9] },
                      { x: "Mai", y: [1, 3, 2, 9] },
                      { x: "Jui", y: [1, 3, 2, 9] },
                      { x: "Aout", y: [1, 3, 2, 9] },
                      { x: "Sep", y: [1, 3, 2, 9] },
                      { x: "Oct", y: [1, 3, 2, 9] },
                      { x: "Nov", y: [1, 3, 2, 9] },
                      { x: "Dec", y: [1, 3, 2, 9] },
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
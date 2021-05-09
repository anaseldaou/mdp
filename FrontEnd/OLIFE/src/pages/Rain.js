import { Chart } from 'primereact/chart';
import Title from '../components/TitleComponent';
//import {RainData_Semaine,RainOptions_Semaine} from '../shared/RainService';
import {/*RainData_Annee*/RainOptions_Annee,
        /*RainData_Aujourdhui0*/RainOptions_Aujourdhui,
        /*RainData_Semaine,*/RainOptions_Semaine} from '../mockData/RainService';

        import SideNav from '../components/SideNavComponent';
import { VictoryBoxPlot, VictoryChart ,VictoryTheme,VictoryScatter} from 'victory';
import '../CSS/Dashboard.css'




export default function Rain(props) {
  return(
    <div className="container-fluid">
    <SideNav auth={props.auth} />
    <div className="container">
      <div className="row">
        <Title title="Pluie " image="/assets/images/rain-icon.png"/>
      </div>

      <div className="row">
          <div class="col-md-12">
            <div className="card-custom">
              <h1>Pluie dans les dernières 24h</h1>
              <Chart type="bar" data={props.RainData_Aujourdhui} options={RainOptions_Aujourdhui} />
            </div>
          </div>
      </div>
      <div className="row">
          <div class="col-md-12">
            <div className="card-custom">
              <h1>Pluie cette semaine</h1>
              <Chart type="bar" data={props.RainData_Semaine} options={RainOptions_Semaine} />
            </div>
          </div>
          <div className="col-md-12">
            <div className="card-custom">
              <h1>Pluie cette année</h1>
              <Chart type="radar" data={props.RainData_Annee} options={RainOptions_Annee} />
            </div>
          </div>
          {/* <div class="col-md-12">
              <div className="card-custom">
                <h1>Precipitations Annee</h1>
                <VictoryChart>
                  <VictoryBoxPlot
                    labels
                    labelOrientation="top"
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
          </div> */}
      </div>
    </div>
    </div>
  );
}
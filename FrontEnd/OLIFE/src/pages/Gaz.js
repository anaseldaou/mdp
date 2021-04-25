import {Component} from 'react'
import {CO2Data_Cette_Annee,CO2Options_Cette_Annee,
  SO2Data_Cette_Annee,SO2Options_Cette_Annee,
      CO2Data_Semaine,GazOptions_Semaine,SO2Data_Semaine,
      GazOptions_Derniers_12_Mois,GazData_Derniers_12_Mois,
      GazData_Particule_Micron_Semaine,GazOptions_Particule_Micron_Semaine,
      GazData_Particule_Micron_Mois,GazOptions_Particule_Micron_Mois } from '../mockData/GazService';
import { Chart } from 'primereact/chart';
import Title from '../components/TitleComponent'
import {GazLabels} from '../Labels/GazLabels';
import '../CSS/Dashboard.css'

import { VictoryBoxPlot, VictoryChart } from 'victory';


export default function Gaz(){
  return(
    <div className="container">
        <div className="row">
        <Title title={GazLabels.title} image="/assets/images/gas.png"/>
      </div>


      <div className="row">
        <div className="col-md-6">
          <div className="card-custom">
            <h1>{GazLabels.CO2_semaine}</h1>
            <Chart type="horizontalBar" data={CO2Data_Semaine} options={GazOptions_Semaine} />
          </div>
          
        </div>

        <div className="col-md-6">
          <div className="card-custom">
            <h1>{GazLabels.SO2_semaine}</h1>
            <Chart type="horizontalBar" data={SO2Data_Semaine} options={GazOptions_Semaine} />
          </div>
          
        </div>

        <div className="col-md-6">
          <div className="card-custom">
            <h1>{GazLabels.CO2_Cette_Anne}</h1>
            <Chart type="bar" data={CO2Data_Cette_Annee} options={CO2Options_Cette_Annee} />
          </div>
        </div>

        <div className="col-md-6">
          <div className="card-custom">
            <h1>{GazLabels.SO2_Cette_Anne}</h1>
            <Chart type="bar" data={SO2Data_Cette_Annee} options={SO2Options_Cette_Annee} />
          </div>
        </div>

        {/* <div className="col-md-12">
          <div className="card-custom">
            <h1>{GazLabels.gaz_annee}</h1>
            <Chart type="bar" data={GazData_Derniers_12_Mois} options={GazOptions_Derniers_12_Mois} />
          </div>
        </div> */}
        <div class="col-md-12">

<div className="card-custom">

  <h1>CO2 Annee 2021 en PPM</h1>

  <VictoryChart>

    <VictoryBoxPlot

      labels

      labelOrientation="top"

      boxWidth={15}

      data={[

        { x: "Jan", y: [400, 400, 410, 410,420] },

        { x: "Fev", y: [405, 410, 411, 415,415] },

        { x: "Mars", y: [400, 400, 410, 412,412] },

        { x: "Avr", y: [400, 401, 403, 405,410] },

        { x: "Mai", y: [402, 405, 409, 410,413] },

        { x: "Jui", y: [415, 416, 420, 425,430] },

        { x: "Aout", y: [410, 412, 415, 415,420] },

        { x: "Sep", y: [403, 405, 410, 411,412] },

        { x: "Oct", y: [401, 402, 409, 410,412] },

        { x: "Nov", y: [402, 404, 408, 410,415] },

        { x: "Dec", y: [400, 402, 410, 410,420] },

      ]}

    />

  </VictoryChart>

</div>

</div>

        <div className="col-md-6">
          <div className="card-custom">
            <h1>{GazLabels.micron_semaine}</h1>
            <Chart type="doughnut" data={GazData_Particule_Micron_Semaine} options={GazOptions_Particule_Micron_Semaine} />
          </div>
        </div>

        <div className="col-md-6">
          <div className="card-custom">
            <h1>{GazLabels.micron_mois}</h1>
            <Chart type="pie" data={GazData_Particule_Micron_Mois} options={GazOptions_Particule_Micron_Mois} />
          </div>
        </div>
      </div>
    </div>
  );
}

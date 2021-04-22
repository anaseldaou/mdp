import {Component} from 'react'
import {GazData_Last_30_Days,GazOptions_Last_30_Days,
      GazData_Semaine,GazOptions_Semaine,
      GazOptions_Derniers_12_Mois,GazData_Derniers_12_Mois,
      GazData_Particule_Micron_Semaine,GazOptions_Particule_Micron_Semaine,
      GazData_Particule_Micron_Mois,GazOptions_Particule_Micron_Mois } from '../shared/GazService';
import { Chart } from 'primereact/chart';
import Title from '../components/TitleComponent'
import {GazLabels} from '../Labels/GazLabels';

import '../CSS/Dashboard.css'

export default function Gaz(){
  return(
    <div className="container">
        <div className="row">
        <Title title={GazLabels.title} image="/assets/images/gas.png"/>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="card-custom">
            <h1>{GazLabels.gaz_semaine}</h1>
            <Chart type="horizontalBar" data={GazData_Semaine} options={GazOptions_Semaine} />
          </div>
        </div>

        <div className="col-md-12">
          <div className="card-custom">
            <h1>{GazLabels.gaz_last30_Days}</h1>
            <Chart type="bar" data={GazData_Last_30_Days} options={GazOptions_Last_30_Days} />
          </div>
        </div>

        <div className="col-md-12">
          <div className="card-custom">
            <h1>{GazLabels.gaz_annee}</h1>
            <Chart type="bar" data={GazData_Derniers_12_Mois} options={GazOptions_Derniers_12_Mois} />
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

import {Component} from 'react'
import { Chart } from 'primereact/chart';
import {WindData_Semaine, WindOptions_Semaine,
    WindData_Annee,WindOptions_Annee,
    WindData_Mois,WindOptions_Mois} from '../shared/WindService';
import {PluvioDataPerMonth} from '../shared/pluvioData';
import CardExample from '../components/CardComponent'
import Title from '../components/TitleComponent';
import '../CSS/Dashboard.css';

export default function Wind(){
    return(
      <div className="container">
        <div className="row">
          <Title title="Wind Data" image="/assets/images/wind_data.webp"/>
        </div>
        <div className="row">
          <div className="col-md-5">
            <CardExample title="Vitesse du Vent Aujourd'hui" data="36km/h"/>
          </div>
          <div className="col-md-5">
            <CardExample title="Direction du Vent" data="28° 56°"/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card-custom">
                <h1>Wind Data cette semaine</h1>
                <Chart type="radar" data={WindData_Semaine} options={WindOptions_Semaine} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card-custom">
                <h1>Wind Data ce mois</h1>
                <Chart type="line" data={WindData_Mois} options={WindOptions_Mois} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card-custom">
              <h1>Wind Data last 12 months</h1>
              <Chart type="line" data={WindData_Annee} options={WindOptions_Annee} />
            </div>
          </div>
        </div>
      </div>
    );
}
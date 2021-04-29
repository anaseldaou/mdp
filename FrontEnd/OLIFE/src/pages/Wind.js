import {Component} from 'react'
import { Chart } from 'primereact/chart';
import {WindOptions_Semaine,WindOptions_Annee,WindOptions_Mois} from '../mockData/WindService';
import CardExample from '../components/CardComponent'
import Title from '../components/TitleComponent';



export default function Wind(props){
    return(
      <div className="container">
        <div className="row">
          <Title title="Vitesse du Vent" image="/assets/images/wind_data.webp"/>
        </div>
        
        <div className="row">
         
            <CardExample title="Vitesse du Vent Aujourd'hui" data="13km/h"/>
            <CardExample title="Direction du Vent" data="22° 14°"/>
          
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card-custom">
                <h1>Vitesse du Vent cette semaine</h1>
                <Chart type="radar" data={props.WindData_Semaine} options={WindOptions_Semaine} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card-custom">
                <h1>Vitesse du Vent ce mois</h1>
                <Chart type="line" data={props.WindData_Mois} options={WindOptions_Mois} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card-custom">
              <h1>Vitesse du Vent cette annee</h1>
              <Chart type="line" data={props.WindData_Annee} options={WindOptions_Annee} />
            </div>
          </div>
        </div>
      </div>
    );
}
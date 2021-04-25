import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import '../CSS/Dashboard.css'

import { Knob } from "primereact/knob";
import {Component} from 'react';
import {GazLabels} from  '../Labels/GazLabels';

import {Avg_So2_Aujourdhui,Avg_Co2_Aujourdhui,Avg_No2_Aujourdhui} from '../mockData/GazService';


export default function KnobCom(){
  return(
    <div className="card-custom">
        <br></br>
      <div className="p-grid p-formgrid p-text-center center">
        <h2>{GazLabels.title}</h2>
        <br></br>
        <div>
          <h4><bold>CO2</bold></h4>
          <Knob min={0} max={800} value={Avg_Co2_Aujourdhui} valueTemplate={"{value}ppm"} readOnly />
        </div>
        <div>
          <h4><bold>SO2</bold></h4>
          <Knob value={Avg_So2_Aujourdhui} valueTemplate={"{value}ppm"} readOnly />
        </div>
        <div>
          <h4><bold>NO2</bold></h4>
          <Knob value={Avg_No2_Aujourdhui} valueTemplate={"{value}ppm"} readOnly />
        </div>
      </div>
    </div>
  );
}

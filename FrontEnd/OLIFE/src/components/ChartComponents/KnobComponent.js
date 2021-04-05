import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";

import { Knob } from "primereact/knob";
import {Component} from 'react';


class KnobCom extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
    <div>
      <div className="card">
        <div className="p-grid p-formgrid p-text-center center">
        <h2>Gas Data</h2>
          <div className="p-field p-col-4 p-md-4 ">
            <h4>CO2</h4>
            <Knob value={42} valueTemplate={"{value}ppm"} readOnly />
          </div>
          <div>
            <h4>SO2</h4>
            <Knob value={52} valueTemplate={"{value}ppm"} readOnly />
          </div>
          <div className="p-field p-col-4 p-md-4">
            <h4>NO2</h4>
            <Knob value={67} valueTemplate={"{value}ppm"} readOnly />
          </div>
        </div>
      </div>
    </div>
    );
  }
}
export default KnobCom
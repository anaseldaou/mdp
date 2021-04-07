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

        <div className="card-body">
          <br></br>
        <div className="p-grid p-formgrid p-text-center center">
        <h2><bold>Gas Data</bold></h2>
        <br></br>
          <div>
            <h4><bold>CO2</bold></h4>
            <Knob value={42} valueTemplate={"{value}ppm"} readOnly />
          </div>
          <div>
            <h4><bold>SO2</bold></h4>
            <Knob value={52} valueTemplate={"{value}ppm"} readOnly />
          </div>
          <div>
            <h4><bold>NO2</bold></h4>
            <Knob value={67} valueTemplate={"{value}ppm"} readOnly />
          </div>
        </div>
      </div>
    </div>
    );
  }
}
export default KnobCom
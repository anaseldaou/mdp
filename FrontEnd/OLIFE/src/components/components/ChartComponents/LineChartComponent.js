import {Component} from 'react';
import { Chart } from 'primereact/chart';

class LineChart extends Component {
  constructor(props){
    super(props);
  }

  render(){

    const Data = {
      labels:this.props.labels,
      datasets: this.props.dataset_info
      };

    const options= this.props.options;

    return(
      <div class="col-md-12">
        <div className="card">
            <Chart type="line" data={Data} options={options} />
          </div>
      </div>
    );
  }
}
export default LineChart;
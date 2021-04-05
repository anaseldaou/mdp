import {Component} from 'react';
import { Chart } from 'primereact/chart';

class BarChart extends Component {
  constructor(props){
    super(props);
  }

  render(){
  const Data = {
    labels: this.props.labels,
    datasets: this.props.datasets
    };

    const options=this.props.options;
        return(
          <div>
            <div className="card">
                <Chart type="bar" data={Data} options={options} />
              </div>
          </div>
        );
  }
}
export default BarChart ;
import {Component} from 'react';
import { Chart } from 'primereact/chart';
import {getY} from '../service/dashboardService'
import KnobCom from './ChartComponents/KnobComponent';
import '../CSS/Dashboard.css'
import CardExample from './ChartComponents/CardComponent';
import LineChart from './ChartComponents/LineChartComponent';

class Temperature extends Component {
    constructor(props){
      super(props);
    }

    render(){
      const basicData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sensor Temperature Data year 2021',
                backgroundColor: 'blue',
                data: getY()
            },
            {
                label: 'Average Temperature Values',
                backgroundColor: '#FFA726',
                data: getY()
            }
        ]
      };
      const optionsToday= {
        title: {
            display: true,
            text: 'Temperature today',
            fontSize: 16
        },
        legend: {
            position: 'top'
        }
    };

      const options = {
        title: {
            display: true,
            text: 'Data from Sensor today vs Average last Year',
            fontSize: 16
        },
        legend: {
            position: 'top'
        }
    };

    const lineStylesData = {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      datasets: [
          {
              label: 'This Week',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: 'red'
          },
          {
              label: 'Last Year Same Week',
              data: [28, 48, 40, 19, 86, 27, 90],
              fill: true,
              borderDash: [5, 5],
              borderColor: 'blue'
          },
      ]
  };

  const optionsLineStyle = {
    title: {
        display: true,
        text: 'Temperature this Week vs Average Temperature Last Year',
        fontSize: 16
    },
    legend: {
        position: 'top'
    }
};

  const basicData_1= {
    labels: ['0:00', '1:00', '3:00', '4:00', '5:00', '6:00', '7:00'],
    datasets: [
        {
            label: 'Temperature Today',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'blue'
        },

    ]
  };

      return(
        <div  className="container">
          <div className="p-col-10 div-style">

            <div className="row">
              <div className="col-md-12">
                <h1>Temperature Data<span><img src="assets/images/temperatureIcon.webp" width="10%"/></span></h1>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <CardExample title="Avg. Temperature Today" info="26°C"/>
              </div>
              <div className="col-md-4">
                <CardExample title="Temperature Today" info="29°C"/>
              </div>
              <div className="col-md-4">
                <CardExample title="Difference" info="3°C"/>
              </div>
            </div>

          <div className="row">
            <div class="col-md-6">
                <div className="card">
                    <Chart type="line" data={basicData_1} options={optionsToday}/>
                </div>
            </div>

             <div class="col-md-6">
              <div className="card">
                  <Chart type="line" data={lineStylesData} options={optionsLineStyle} />
              </div>
            </div>
          </div>

          <div className="row">
            <div class="col-md-6">
              <div className="card">
                <Chart type="bar" data={basicData} options={options} />
              </div>
            </div>
            <div className="col-md-6">
              <KnobCom />
            </div>
            {/* <div className="col-md-6">
              <div className="card">
                <LineChart type="bar" title="Data from Sensor today vs Average last Year" labelDataSet1='Sensor Temperature Data year 2021' labelDataSet2='Average Temperature Values'/>
              </div>
            </div>

            <div class="col-md-6">
              <div className="card">
                <BarChart/>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      );
    }
}

export default Temperature;
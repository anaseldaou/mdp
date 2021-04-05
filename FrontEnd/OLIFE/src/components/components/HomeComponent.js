import { Component } from 'react';
import { Chart } from 'primereact/chart';
import TableCom from './ChartComponents/TableComponent';
import KnobCom from './ChartComponents/KnobComponent';
import LineChart from './ChartComponents/LineChartComponent';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataSets:[
        {
            label: "Hello",
            backgroundColor: 'blue',
            fill:false,
            data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
            label: "Aloha",
            backgroundColor: '#FFA726',
            fill:false,
            data: [28, 48, 40, 19, 86, 27, 90],
        },
        ]
    };
  }

  render(){
    //Bar Data
    const basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'Temperature Today',
              backgroundColor: '#42A5F5',
              data: [65, 59, 80, 81, 56, 55, 40],
              borderColor:"red",
              fill:false,
          },
          {
              label: 'Avg Temperature Today',
              borderColor:"blue",
              data: [28, 48, 40, 19, 86, 27, 90],
              fill:true
          }
      ]
    };



        //pie data
        const chartData = {
          labels: ['0:00', '12:00', '18:00'],
          datasets: [
              {
                  label: 'Avg Intensity Today',
                  data: [300, 50, 100],
                  backgroundColor: [
                      "red"
                  ],
                  hoverBackgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56"
                  ]
              }]
      };

      const lightOptions = {
          legend: {
              labels: {
                  fontColor: '#495057'
              }
          }
      };
      const basicData_ = {
        labels: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00'],
        datasets: [
            {
                label: 'Pluie',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: '#42A5F5',
                fill: true,
                borderColor: '#42A5F5'
            },

        ]
    };

    const VentData = {
      labels: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00'],
      datasets: [
          {
              label: 'Vent',
              data: [65, 59, 80, 81, 56, 55, 40],
              backgroundColor: '#42A5F5',
              fill: true,
              borderColor: 'blue'
          },

      ]
  };

    return(
      <div className="container">
        <div className="row">
        <div className="col-4">
          <div className="row">
        <div className="col-12">
          <br></br>
            <div className="card">
              <div className="card-body">
                <h4 className="card-subtitle mb-2">Temperature</h4>
                <h3 className="card-title">26°C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><img src="assets/images/temperatureIcon.webp" width="25%"/></span></h3>
                <a href="/temperature">Discover More</a>
              </div>
            </div>
          </div>
          <div className="col-12">
          <div className="card">
              <div className="card-body">
                <h4 className="card-subtitle mb-2">Humidity</h4>
                <h3 className="card-title">89%<span><img src="assets/images/temperatureIcon.webp" width="25%"/></span></h3>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div class="col-md-8">
            <div className="card">
                <div className="card-body">
                  <h5 className="card-subtitle mb-2">Temperature Today</h5>
                  <Chart type="line" data={basicData} />
                </div>
            </div>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div className="col-9">
          <div className="card">
              <div className="card-body center">
                <h3 className="card-subtitle mb-2">Wind Data Speed Today</h3>
                <Chart type="line" data={VentData} />
                <br></br>
                <h4> Average Wind Speed Today: 54 km/h</h4>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <KnobCom />
          </div>
            {/* <div className="card">
              <div className="card-body">
                  <Chart type="doughnut" data={chartData} options={lightOptions} />
                  <br></br>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                                          Some quick example text to build on the card title and make up the bulk of the card's content.
                                          Some quick example text to build on the card title and make up the bulk of the card's content.My</p>
              </div>
            </div> */}
        </div>
        <div class="row">

        <div className="col-md-6">
          <div className="row">
            <div className="col-md-12">
              <TableCom />
            </div>
            <div className="col-md-12">
              <br></br>
                <div className="card">
                  <div className="card-body">
                  <h4 className="card-subtitle mb-2">Intensité du rayonnement solaire en Watt/m2</h4>
                    <Chart type="line" data={chartData} />
                  </div>
                </div>
            </div>
          </div>
        </div>
          <div class="col-md-6">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                        <h2 className="card-subtitle mb-2 center">Pluie cumulée sur les dernières 24h</h2>
                        <br></br>
                        <Chart type="bar" data={basicData_} />
                        <br></br>
                        <h2> Pluis Cumule la derniere heure</h2>
                        <h1>560 ml <span><img src="assets/images/rain-icon.png" width="10%"/></span></h1>
                  </div>
              </div>
            </div>
            </div>
          </div>

        </div>

        </div>
    );
  }
}

export default Home;
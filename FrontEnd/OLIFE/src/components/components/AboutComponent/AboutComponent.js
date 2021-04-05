import React from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Chart } from 'primereact/chart';


function AboutPageModel(){
      const chartData_1 = {
        datasets: [{
            data: [
                11,
                16,
                7,
                3,
                14
            ],
            backgroundColor: [
                "#42A5F5",
                "#66BB6A",
                "#FFA726",
                "#26C6DA",
                "#7E57C2"
            ],
            label: 'My dataset'
        }],
        labels: [
            "Red",
            "Green",
            "Yellow",
            "Grey",
            "Blue"
        ]
    };

    const lightOptions_1 = {
        legend: {
            labels: {
                fontColor: '#495057'
            }
        },
        scale: {
            gridLines: {
                color: '#ebedef'
            }
        }
    };
      const chartData = {
        labels: ['A', 'B', 'C'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#42A5F5",
                    "#66BB6A",
                    "#FFA726"
                ],
                hoverBackgroundColor: [
                    "#64B5F6",
                    "#81C784",
                    "#FFB74D"
                ]
            }
        ]
    };
    const lightOptions = {
      legend: {
          labels: {
              fontColor: '#495057'
          }
      }
  };

      const footer = (
          <span>
              <Button label="Save" icon="pi pi-check" />
              <Button label="Cancel" icon="pi pi-times" className="p-button-secondary p-ml-2" />
          </span>
      );


      return (
        <div class="container">
            <div class="row">

              <div class="col-6">
                <Card  style={{ width: '25em' }} footer={footer}>
                <div className="card col-10">
                    <Chart type="pie" data={chartData} options={lightOptions} />
                </div>
                    <p className="p-m-0" style={{lineHeight: '1.5'}}>Hello</p>
                </Card>
              </div>

              <div class="col-6">
                <Card style={{ width: '25em' }} footer={footer}>
                  <div className="card col-12">
                    <Chart type="polarArea" data={chartData} options={lightOptions} />
                  </div>
                      <p>Hello</p>
                </Card>
              </div>
            </div>
        </div>
      )
}

const AboutModel=(props) => {
  return(
      <AboutPageModel />
  );
}

export default AboutModel;
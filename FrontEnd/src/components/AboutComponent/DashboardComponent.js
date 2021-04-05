import React, { Component } from "react";
import {Line} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';
import {Row } from "reactstrap";

class Dashboard extends Component{
    constructor(props) {
        super(props);
    }



    render(){
        return(
            <div>
                    <div className="col-6 col-md-6">
                    <Line
                    data={this.props.dataobj}

                    options={{
                        title:{
                        display:true,
                        text:'Average Rainfall per month',
                        fontSize:20
                        },
                        legend:{
                        display:true,
                        position:'right'
                        }
                    }}
                    />
                    </div>
            </div>
        );
    }
}

export default Dashboard
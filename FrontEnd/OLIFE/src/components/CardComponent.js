import React, {Component} from 'react';

class CardExample extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="col-md-4">
        <br></br>
          <div className="card-custom">
            <h4 className="card-subtitle mb-2">{this.props.title}</h4>
            <h2 className="card-title">{this.props.data} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><img src={this.props.image} width="25%"/></span></h2>
          </div>
      </div>
    )
  }
}

export default CardExample;
import React, {Component} from 'react';

class CardExample extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="col-md-12">
        <br></br>
          <div className="card-body">
            <h4 className="card-subtitle mb-2">{this.props.title}</h4>
            <h3 className="card-title">{this.props.data} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><img src={this.props.image} width="25%"/></span></h3>
          </div>
      </div>
    )
  }
}

export default CardExample;
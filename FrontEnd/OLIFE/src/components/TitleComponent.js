import {Component} from 'react'

class Title extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="col-md-12 center">
          <h1>{this.props.title}&nbsp;&nbsp;&nbsp;<span><img src={this.props.image} width="10%"/></span></h1>
      </div>
    );
  }
}

export default Title;
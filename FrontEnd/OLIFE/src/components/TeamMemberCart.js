import {Component} from 'react'

class Member extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <div class="card-body center">
          <img class="avatar" src={this.props.image} alt="Team Member"/>
          <div>
            <br></br>
            <h2 class="card-text"><bold>{this.props.name} </bold></h2>
            <h4>{this.props.title}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Member;
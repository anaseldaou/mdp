import { render } from '@testing-library/react';
import {Component} from 'react';
import { createStore } from 'redux';
import CardExample from '../components/CardComponent';
import notes from '../shared/Notes';


class Notes extends Component {
  constructor(props)
  {
    super(props);
  }

 renderNote(){
  return notes.map((note) => (
        <CardExample title={note} />
  ));
 }
  render(){
    const user_notes= this.renderNote();
  return(
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>My Notes</h1>
        </div>
      </div>
      <div className="row">
          {user_notes}
      </div>
    </div>
  );
  }
}



export default Notes;
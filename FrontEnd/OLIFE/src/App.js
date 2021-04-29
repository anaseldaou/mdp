import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Main from "./main/Main";

import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore';

const store = ConfigureStore();

class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main auth={this.props.auth} temperature={this.props.temperature} pluvio={this.props.pluvio} wind={this.props.wind}/>
          </div>
        </BrowserRouter>
      </Provider>

    );
  }
}

export default App;
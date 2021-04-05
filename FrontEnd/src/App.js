import { Component } from 'react';
import {dashboards} from './shared/dashboardData';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/HomeComponent';
import {Switch,Route,Redirect} from 'react-router-dom';
import About from './components/AboutComponent';
import {about_data} from './shared/aboutData';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Temperature from './components/TemperatureComponent';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      dashboards_data:dashboards,
      aboutData:about_data
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
              <Route path="/home" component={Home} />
              <Route exact path="/about" component={About}/>
              <Route exact path="/temperature" component={Temperature}/>
              <Redirect to="/home"/>
          </Switch>
          <br>
          </br>
          <Footer/>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
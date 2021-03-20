import './App.css';



import React, { useState } from 'react';


import { BrowserRouter , Switch, Route, Redirect } from 'react-router-dom';


import SideBarRender from "./layout/sideBarRender";
//import { Navbar, NavbarBrand } from 'reactstrap';
import { Component } from 'react';

import { DISHES } from './shared/dishes';

import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
      //const [locale, setLocale] = useState('en');
    return (
     <div className="App">
       <ThemeContextWrapper>
       <BackgroundColorWrapper>
      <BrowserRouter>
        <Switch>
          <Route path="/" render={(props) => <SideBarRender {...props} />} />
        </Switch>
     </BrowserRouter>
     </BackgroundColorWrapper>
     </ThemeContextWrapper>
      </div>
      
    );
  }
}

export default App;

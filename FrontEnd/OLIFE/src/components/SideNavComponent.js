import { Component } from 'react';
import '../CSS/SideNav.css'

class SideNav extends Component{
  constructor(props){
    super(props)
  }
    render(){
      var sideNav;
      console.log("Is authentictaed :",this.props.auth.isAuthenticated)
      if(this.props.auth.isAuthenticated){
        sideNav=<div class="sidenav">
                  <a href="/temperature"><img src="/assets/images/temperatureIcon.webp" alt="temperature" width="100%" data-toggle="tooltip" data-placement="top" title="Temperature"/></a>
                  <a href="/rain"><img src="/assets/images/rain-icon.png" width="100%" alt="precipitations" data-toggle="tooltip" data-placement="top" title="Precipitations" /></a>
                  <a href="/wind"><img src="/assets/images/wind_data.webp" width="100%" alt="vent" data-toggle="tooltip" data-placement="top" title="Vent"/></a>
                  <a href="/gaz"><img src="/assets/images/gas.png" width="100%" alt="gas" data-toggle="tooltip" data-placement="top" title="Gas" /></a>
                </div>
        return sideNav
      }
      else{
        return <div></div>
      }
    }
}
export default SideNav;
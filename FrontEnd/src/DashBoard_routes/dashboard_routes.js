/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Temperature from "../parameters_views/Temperature";
import SO2 from "../parameters_views/SO2";
import NO2 from "../parameters_views/NO2";
import CO2 from "../parameters_views/CO2";

var routes = [
  {
    path: "/Temperature",
    name: "Temperature",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Temperature,
    layout: "",
  },
  {
    path: "/SO2",
    name: "SO2",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: SO2,
    layout: "",
  },
  {
    path: "/CO2",
    name: "CO2",
    rtlName: "خرائط",
    icon: "tim-icons icon-pin",
    component: CO2,
    layout: "",
  },
  {
    path: "/NO2",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: NO2,
    layout: "",
  }
];
export default routes;

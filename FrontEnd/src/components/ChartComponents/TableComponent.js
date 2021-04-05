import {Component} from 'react';

class TableCom extends Component {
  constructor(props){
    super(props);
  }

  render(){

    return(

      <div>

        <table>
        <tr>
          <td>Particule de 1micron en PPM</td>
          <td>1 PPM</td>
        </tr>
        <tr>
          <td>Particule de 2.5 micron en PPM</td>
          <td>2 PPM</td>
        </tr>
        <tr>
          <td>Particule de 10 micron en PPM</td>
          <td>1.5 PPM</td>
        </tr>
      </table>
      </div>
    );
  }
}

export default TableCom;
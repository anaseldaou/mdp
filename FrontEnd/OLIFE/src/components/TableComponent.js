import { GazLabels } from '../Labels/GazLabels';
import {particule_1_micron_aujourdhui,particule_2_5_micron_aujourdhui,particule_10_micron_aujourdhui} from '..//mockData/GazService'

export default function Table(props){
    return(
      <div>
        <table>
        <tr>
          <td>{GazLabels.micron_1}</td>
          <td>{props.gaz.particule_1_micron_aujourdhui}</td>
        </tr>
        <tr>
          <td>{GazLabels.micron_2_5}</td>
          <td>{props.gaz.particule_2_5_micron_aujourdhui}</td>
        </tr>
        <tr>
          <td>{GazLabels.micron_10}</td>
          <td>{props.gaz.particule_10_micron_aujourdhui}</td>
        </tr>
      </table>
      </div>
    );
  }
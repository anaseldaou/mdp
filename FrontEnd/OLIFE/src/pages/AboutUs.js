import {AboutLabels} from '../Labels/AboutPageLabels'
import '../CSS/About.css'


export default function About() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row margin-about">
          <div className="col-md-6 center_div">
            <h1 className="title">{AboutLabels.title}</h1>
            <h3 className="sub_title ">{AboutLabels.sub_title}</h3>
          </div>
          <div className="col-sm-12 col-md-6">
            <img src='assets/images/plant.png' className="floatRightClear" alt="hiker" width="100%" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row ">
            <p className="centered">{AboutLabels.pourquoi_o_life}</p>
        </div>
      </div>

      <div className="container">
        <div className="row margin-about">
          <div className="col-md-6 col-sm-12">
            <img src='assets/images/loop.jpeg' alt="OLIFE" className="image-shadow" width="100%" height="100%"/>
          </div>
          <div className="col-md-6 col-sm-12 center_div">
            <div class="row">
              <div className="col-md-5 mission-about ">
                <h2 className="sub-title-about">{AboutLabels.definition}</h2>
                <br></br>
                <p className="d-lg-block d-none">{AboutLabels.definition_text}</p>
              </div>
              <div className="col-md-5 mission-about ">
                <h2 className="sub-title-about">{AboutLabels.objectif}</h2>
                <br></br>
                <p className="d-lg-block d-none">{AboutLabels.objectif_text}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row margin-about">
          <div className="col-md-5 col-sm-5 center_div">
            <h1 className="center sub-title-about">{AboutLabels.mission}</h1>
            <br></br>
            <br></br>
            <ul>
              <li>{AboutLabels.mission_text_1}.</li>
              <li>{AboutLabels.mission_text_2}</li>
              <li>{AboutLabels.mission_text_3}</li>
              <li>{AboutLabels.mission_text_4}</li>
            </ul>
          </div>
          <div className="col-md-6 col-offset-1 col-sm-6">
            <img src='assets/images/magni.jpeg' alt="OLIFE" className="image-shadow" />
          </div>
        </div>
      </div>
    </div>
  );
}

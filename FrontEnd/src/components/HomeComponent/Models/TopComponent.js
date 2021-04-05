import React from 'react'
import '../Home.css'
import hiker from '../HomeImages/hiker_1.jpeg'
import trek1 from '../HomeImages/trek3.jpeg'

function TopHomeModel(){
    return(
        <div>
           <body>
            <div class="container-fluid">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-center top-image-border-radius">
                <a class="navbar-brand" href="#">O-Life</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class=" nav navbar-nav navbar-center">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Dashboards</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <div class="container-fluid-0px">
                <div className="col-md-12">
                    <img  class="top-image-border-radius" src={hiker} alt="hiker" width="100%" />
                        <p class="centered title ">
                            O-LIFE
                        </p>
                        <p class="centered_subtitle sub_title d-none d-lg-block">
                            L'OBSERVATOIRE LIBANO-FRANÇAIS DE L'ENVIRONNEMENT
                        </p>
                </div>
            </div>
            <br>
            </br>
            <br>
            </br>
        </body>
    </div>
    );
}

const TopModel=(props) => {
    return(
        <TopHomeModel />
    );
}

export default TopModel;
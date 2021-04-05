import React from 'react';
import '../Home.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

import loop from '../HomeImages/loop.jpeg'
import loop1 from '../HomeImages/loop_1.jpeg'
import litani from '../HomeImages/litani.jpg';
import science from '../HomeImages/science.jpg';
import science_1 from '../HomeImages/hihi.jpg';
import loopo from '../HomeImages/looopo.jpeg';

function BodyHomeModel(){
    return(
        <div>


                <div class="container ">
                    <h1 class="col-sm-12">What We Do</h1>
                    <hr class="d-none d-lg-block hr_classe col-sm-2 col-md-3">
                    </hr>
                </div>

                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                <div className="container">
                    <div className="row">
                    <div className="col-md-5 col-sm-12 center_div">
                            <img src={loop} className="drop_shadow col-sm-12" alt="Snow" width='400px'/>
                    </div>
                    <div className="col-md-7 col-sm-12 center_div">
                                <h1>Observing environmental paramters</h1>
                                <br>
                                </br>
                                <p>O-LiFE est un observatoire de l’environnement Méditerranéen
                                     partagé entre le Liban et la France. Il a pour ambition de se positionner
                                      entre les sphères scientifiques et celles des décisions territoriales et politiques
                                      et notamment d’agir comme une plateforme de mise en œuvre des Objectifs du développement
                                       Durable ODD, notamment les ODD 6, 11,12, 13, 14, 15 et 17 portant sur les priorités
                                       de la préservation de l’environnement et des communautés humaines.</p>
                                <a href="#about" class="btn-get-started scrollto">Get Started</a>
                        </div>


                    </div>
                    <br>
                    </br>
                    <br>
                    </br>
                    <hr>
                    </hr>
                    <br>
                    </br>
                    <br>
                    </br>

                    <div className="row">
                    <div className="col-md-7 col-sm-12 center_div">
                                <h1>Observing environmental paramters</h1>
                                <br>
                                </br>
                                <p>O-LiFE est un observatoire de l’environnement Méditerranéen
                                     partagé entre le Liban et la France. Il a pour ambition de se positionner
                                      entre les sphères scientifiques et celles des décisions territoriales et politiques
                                      et notamment d’agir comme une plateforme de mise en œuvre des Objectifs du développement
                                       Durable ODD, notamment les ODD 6, 11,12, 13, 14, 15 et 17 portant sur les priorités
                                       de la préservation de l’environnement et des communautés humaines.</p>
                                <a href="#about" class="btn-get-started scrollto">Get Started</a>
                    </div>
                        <div className="col-md-5 col-sm-12">
                            <img src={loop1} className="drop_shadow col-sm-12" alt="Snow" width='400px'/>
                        </div>
                    </div>
                </div>
                <br></br>
        <div class="container">
                    <h1>Our Work</h1>
                    <hr class=" d-none d-lg-block hr_classe">
                    </hr>
        <br>
        </br>
        <br>
        </br>
                    <div class="row">
                        <div class="col-md-4">
                        <Card>
                            <CardImg top src={science_1} alt="Card image cap" />
                            <CardBody>
                            <CardTitle tag="h5">Le bassin de vie du Nahr Ibrahim</CardTitle>
                            <CardText>À cause de sa richesse en ressources naturelles (eau, biodiversité, paysages) ;
                                 de la complexité de l’utilisation du territoire (agriculture tout le long, villégiature en
                                 amont et industries en aval); de la pression démographique qu’il subit de par la proximité de
                                 l’autoroute principale, la ville de Byblos…. Un nouveau paradigme urbain et enfin à cause des enjeux sur les usages :
                                 mise en place du barrage de Janna</CardText>
                            <br>
                            </br>
                            <div class="text-center">
                                <Button>Button</Button>
                            </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div class="col-md-4">
                        <Card>
                            <CardImg top src={science} alt="Card image cap" />
                            <CardBody>
                            <CardTitle tag="h5">La ville de Beyrouth</CardTitle>

                            <CardText>Il est aujourd’hui crucial pour les villes libanaises et en particulier Beyrouth de développer
                                 des systèmes d’observation alternatifs et collaboratifs. Installés aux points névralgiques de la ville,
                                  ils doivent pallier aux difficultés d’instrumentation et de maintenance actuelles,
                                  et assurer une transmission des données proche du temps réel et des services auprès des scientifiques,
                                   des citoyens et des décideurs .</CardText>

                            <div class="text-center">
                                <Button>Button</Button>
                            </div>

                            </CardBody>
                        </Card>
                    </div>
                    <div class="col-md-4">
                        <Card>
                            <CardImg top width="100%" src={litani} alt="Card image cap" />
                            <CardBody>
                            <CardTitle tag="h5">Enneigement et Climat</CardTitle>

                            <CardText>La neige du Mont-Liban est une ressource indispensable au Moyen-Orient.
                                Une meilleure connaissance de la sensibilité de ce manteau aux fluctuations du
                                climat et aux activités anthropiques est nécessaire pour anticiper la gestion de la
                                ressource.En l’absence d’un solide réseau de stations de mesures au sol, la télédétection par satellite permet
                                 de reconstituer des informations précieuses sur l’enneigement.</CardText>
                            <br>
                            </br>
                            <div class="text-center">
                                <Button>Button</Button>
                            </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
         </div>
    );
}

const BodyModel=(props) => {
    return(
        <BodyHomeModel />
    );
}

export default BodyModel;
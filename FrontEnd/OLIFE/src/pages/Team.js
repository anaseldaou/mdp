import Member from '../components/TeamMemberCart'
import '../CSS/About.css'

export default function Team(){
    return(
      <div className="container">
          <div className="row ">
              <p className="centered_Team">Team</p>
          </div>
          <div className="row ">
              <h1><bold>Encadrants</bold></h1>
              <br></br>
          </div>
          <div className="row">
            <div className="col-md-4">
              <Member name="Laurent Drapeau" title="Ingénieur de recherche en calcul scientifique (CESBIO) et représentant de l'IRD au
Liban (2014-2018)" image="/assets/images/drapeau__252x252.png"/>
            </div>
            <div className="col-md-4">
              <Member name="Dr.Youssef Bakouny" title="Professeur associé à la Faculté d'ingénierie ESIB de l'Université Saint Joseph de Beyrouth" image="/assets/images/bakouny_.jpg"/>
            </div>
            <div className="col-md-4">
              <Member name="Dr.Gabriel Khoury" title="Professeur associé à la Faculté d'ingénierie ESIB de l'Université Saint Joseph de Beyrouth" image="/assets/images/Gabriel-Khoury.jpg"/>
            </div>
          </div>
          <br></br>
          <div className="row">
            <h1><bold>Etudiants</bold></h1>
            <br></br>
          </div>
          <div className="row">
            <div className="col-md-4">
              <Member name="Mouafac Ghattas" title="Génie Logiciel" image="/assets/images/MyPhoto.jpg"/>
            </div>
            <div className="col-md-4">
              <Member name="Anas Daou" title="Génie Logiciel" image="/assets/images/anas.jpeg"/>
            </div>
            <div className="col-md-4">
              <Member name="Cyril Karam" title="Génie Telecom" image="/assets/images/cyril.jpeg"/>
            </div>
            <div className="col-md-4">
              <Member name="Nabil Nemer" title="Génie Électromécanique" image="/assets/images/nabil.jpeg"/>
            </div>
            <div className="col-md-4">
              <Member name="Patrick Bou Samra" title="Systèmes industriels" image="/assets/images/patrick_.jpeg"/>
            </div>
            <div className="col-md-4">
              <Member name="Hadi Azar" title="Systèmes industriels" image="/assets/images/hadi_.jpg"/>
            </div>
          </div>
      </div>
    );
}
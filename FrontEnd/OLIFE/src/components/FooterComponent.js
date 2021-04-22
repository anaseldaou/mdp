import React from 'react';
import {Link} from 'react-router-dom'

export default function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/home">Dashboard</Link></li>
                        <li><Link to="/team">Team</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
		              159, Zahia Salmane street, Jnah<br></br>
		              <i className="fa fa-phone fa-lg"></i>Tel: + 961 1 840 260<br />
		              <i className="fa fa-fax fa-lg"></i>Fax: + 961 1 822 639<br />
                    </address>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-auto">
                    <p>© Copyright 2021 O-Life</p>
                </div>
            </div>
        </div>
    </div>
    )
}
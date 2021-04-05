import React from 'react'
import TopModel from '../HomeComponent/Models/TopComponent';
import BodyModel from '../HomeComponent/Models/BodyComponent';

function HomeModelComponent(){
    return(
        <div>
            <TopModel />
            <BodyModel />
        </div>
    );
}

const HomeModel=(props) => {
    return(
        <HomeModelComponent/>
    );
}

export default HomeModel;
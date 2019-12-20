import React from 'react';
import {
    Link,useParams
}from 'react-router-dom';
import AreaInformation from './AreaInformation.js'

function AreaInfo(props){
  let params=useParams();
  let areaInfoData=props.areaData.find(function(area){
     return area.id===params.id;
    })
    return(
        <div>
        <div className="navbar">
            <div className="nav-menu-left">
                <img src="../app_logo.png" alt="not available"></img>
                <h5> Neighbours</h5>
            </div>
            <div className="nav-menu-right"> 
                <Link className="nav-menu-right-link" to="/"><b>Home</b></Link>
                <Link className="nav-menu-right-link" to={`/area-news/${areaInfoData.id}`}><b>News</b></Link>
                <Link className="nav-menu-right-link" to={`/area-event/${areaInfoData.id}`}><b>Event</b></Link>
            </div>
        </div>
       <AreaInformation 
       AreaName={areaInfoData.name}
       Image={areaInfoData.imageSrc}
       Description={areaInfoData.description}
       Population={areaInfoData.population}
       AreaCovered={areaInfoData.area}
       AvgIncome={areaInfoData.average_income}
       >
       </AreaInformation>
        </div>
    )
}
export default AreaInfo;
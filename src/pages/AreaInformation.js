import React from 'react';

function AreaInformation(props){
    return(
        <div>
            <h2 className="form-header no-margin-bottom">{props.AreaName}</h2>    
            <div className="info-box">
                <div className="info-container">
                <img src={props.Image} alt="not available" width="80%" height="450px"></img>
                </div>
                <div className="info-container">
                    <div className="info-text">
                        <p>
                        {props.Description} </p><br/><br/>
                        <h3 className="Cpurple">Population</h3>
                        <p>{props.Population}</p>
                        <h3 className="Cpurple">Area</h3>
                        <p>{props.AreaCovered}</p>
                        <h3 className="Cpurple">Average Income</h3>
                        <p>{props.AvgIncome}</p>
                    </div>
                </div>
             </div>
        </div>
    );
}
export default AreaInformation;
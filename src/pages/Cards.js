import React from 'react';
import {
    Link
  }from 'react-router-dom';
function Cards(props){

    return(
        <Link to={props.Link}>
         <div className={props.ClassName}>
            <p><strong>{props.Text}</strong></p>
            <p><strong>Area</strong></p>
            <p>{props.Description}</p>
         </div>
        </Link>
    );
}

export default Cards;
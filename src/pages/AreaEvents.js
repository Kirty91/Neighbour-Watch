import React from 'react';
import {
    Link,useParams
}from 'react-router-dom';

function AreaEvents(props){
    let params=useParams();
    let eventArray=props.eventData.find(function(event){
     return event.id===params.id;
    })
    return(
        <div>
        <div className="navbar">
            <div className="nav-menu-left">
                <img src="../app_logo.png"  alt="not available">
                </img>
                <h5> Neighbours</h5>
            </div>
            <div className="nav-menu-right"> 
                <Link className="nav-menu-right-link" to="/"><b>Home</b></Link>
                <Link className="nav-menu-right-link" to={`/area-info/${eventArray.id}`}><b>Info</b></Link>
                <Link className="nav-menu-right-link" to={`/area-news/${eventArray.id}`}><b>News</b></Link>
            </div>
        </div>
        <h1 className="form-header">{eventArray.name} Events</h1>    
        {eventArray.events.map(function (event) {
            return(
                <div>
               <div className="area-news-box border-black">
                    <div className="area-news-container">
                       <img src="../img_default.jpg"alt="not available"></img>
                    </div>
                    
                    <div className="area-news-container-text">
                        <h3>{event.title}</h3>
                        <p>{event.date} {event.time}</p>
                        <p>Venue- {event.location} </p>
                        <p><b>Cost- {event.cost}</b></p>
                        <p>{event.description}</p>
                        <a href={`https://www.google.com/maps/place/${event.location}`}>
                        <button className="Cpurple button-submit text-white">Locate Address</button>
                        </a>
                        
                    </div>
                </div>
            </div>
            )
            })}
             
            </div>
    )
}
export default AreaEvents;
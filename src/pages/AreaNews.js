import React from 'react';
import {
    Link,useParams
}from 'react-router-dom';

function AreaNews(props){
    let params=useParams();
    let newsArray=props.newsData.find(function(area){
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
                <Link className="nav-menu-right-link" to={`/area-info/${newsArray.id}`}><b>Info</b></Link>
                <Link className="nav-menu-right-link" to={`/area-event/${newsArray.id}`}><b>Event</b></Link>
            </div>
        </div>
        <h1 className="form-header no-margin-bottom">{newsArray.name} Activities</h1>    
        {newsArray.news.map(function (news) {
            return(
                <div className="area-news-box border-black">
                    <div className="area-news-container">
                       <img src={news.imageSrc} alt="not available"></img>
                    </div>
                    <div className="area-news-container-text">
                        <h3>{news.title}</h3>
                        <p>{news.date} {news.time}</p>
                        <p>Location- {news.location}</p>
                        <p>{news.description}</p>                      
                    </div>
                </div>
            )
        })}
        <div className="border-line"></div>
        </div>
    )
}
export default AreaNews;
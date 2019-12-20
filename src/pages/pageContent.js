import React from 'react';
import Card from './Cards.js';
import {
  Link
}from 'react-router-dom';
function PageContent(){
    return(
        <div>
         <img src="./homepageimage.jpg" alt="" width="100%" height="250px"></img>    
         <div className="page-content">
         <div>
             <div className="text-center">
                  <h1 className="no-margin-bottom">Saskatoon</h1>
                  <h3 className="no-margin-top">City Of Living Skies</h3>
                  <p><strong>Saskatoon is a city straddling the South Saskatchewan River in Saskatchewan, Canada.
                     North along the riverside Meewasin Trail is Wanuskewin Heritage Park, with exhibitions exploring indigenous culture.
                      On the trail’s southern stretch, native wildlife inhabit the prairie grasslands of Beaver Creek Conservation Area.
                       East of the river, the Saskatoon Forestry Farm Park and Zoo has manicured gardens and a children’s zoo.</strong></p>
              </div>
              <div className="text-center">
                  <h1> Saskatoon Neighbourhood</h1>
                  <div>
                  <Card
                   ClassName="card Cred"
                   Text="Stonebridge"
                   Description="Total	1.5 km2 (0.6 sq mi)"
                   Link ="/area-info/stonebridge"/>
                   <Card
                   ClassName="card Cblue"
                   Text="Rosewood"
                   Description="2.93 km2 (1.13 sq mi)"
                   Link ="/area-info/rosewood"/>
                   <Card
                   ClassName="card Cpurple"
                   Text="Evergreen"
                   Description="655 acres"
                   Link ="/area-info/evergreen"/>
                   <Card
                   ClassName="card Cgreen"
                   Text="Willowgrove"
                   Description="2.114 km2 (0.816 sq mi)"
                   Link ="/area-info/willowgrove"/>
                   <Card
                   ClassName="card Cpink"
                   Text="Sutherland"
                   Description="2.14 km2 (0.83 sq mi)"
                   Link ="/area-info/sutherland"/>
                   <Card
                   ClassName="card Corange"
                   Text="Forest Grove"
                   Description="1.61 km2 (0.62 sq mi)"
                   Link ="/area-info/forestgrove"/>
                  </div>
              </div>
          </div>
         </div>
         <div> 
             <h1 className="page-content-header text-center">News and Events</h1>
             <div className="news-container">
             <div className="news-box">
               <img src="./news_logo.jpg" alt="not available"  width="300px" height="170px"></img>
               <h2 className="news-event-h1 text-center">News</h2>
               <h3>Pedestrian dead in car crash</h3>
                <p>Dec 13,2019 3:30 PM</p>
                <h3>Flu season is ramping up...</h3>
                <p>Dec 14,2019 8:00 PM</p>
                <h3>Sask. woman wants stolen SUV...</h3>
                <p>Dec 14,2019 5:00 PM</p>
                <h4 className="text-center">
                   <span>
                     <a href="https://saskatoon.ctvnews.ca/local-news" target="new" className="text-black">
                     Read More..
                     </a>
                    </span>
                </h4>
             </div>
             <div className="news-box">
               <img src="./events_icon.jpg"  alt="not available" width="300px" height="170px"></img>
               <h2 className="news-event-h1 text-center">Events</h2>
                <h3>Boney M</h3>
                <p>TCU Place, Saskatoon </p>
                <p>Dec 14,2019 7:30 PM</p>
                <h3>The Confusionaries</h3>
                <p>Amigos, Saskatoon </p>
                <p>Dec 14,2019 8:00 PM</p>
                <h4 className="text-center">
                   <span>
                     <a href="https://www.saskatoon.ca/parks-recreation-attractions/events-attractions/events-calendar"  target="new" className="text-black">
                     Read More..
                     </a>
                    </span>
                </h4>
              </div>
            <div className="news-box">
              <img src="./emergency_icon.jpg"  alt="not available" width="300px" height="170px"></img>
              <h2 className="news-event-h1 text-center">Emergency Contacts</h2>
              <div  className="events-container">
                <h3>Emergencies</h3>
                <p>9-1-1</p>
              </div>
              <div className="events-container">
                <h3 className="text-left">Police</h3>
                <p>306-975-8300</p>
              </div>
              <div  className="events-container">
                <h3 className="text-left">Fire</h3>
                <p>306-975-3030</p>
              </div>
              <div  className="events-container">
                <h3>Ambulance</h3>
                <p>306-975-8800</p>
              </div>
            
            </div>
           </div>
         </div>
         <div className="page-footer">
               <div className="footer-content">
                 <h3 className="text-center">JOIN US</h3>
                 <p className="text-center">
                 <Link to="/Register">
                 <b>click here </b>
                 </Link>
                 to join and become a member to get early updates.</p>
               </div>
           </div>
        </div>
    );
}
export default PageContent;
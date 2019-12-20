import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import './App.css';
import './Form.css';
import './Area.css';
import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
import About from './pages/About.js';
import Register from './pages/Register.js';
import Login from './pages/Login.js';
import AreaInfo from './pages/AreaInfo.js';
import AreaNews from './pages/AreaNews.js';
import AreaEvents from './pages/AreaEvents.js';
function App() {
  let [username, setUsername] = React.useState('');
  let areaData= [
    {
      id: 'stonebridge',
      name: 'STONEBRIDGE',
      imageSrc: '../img_stonebridge.jpg',
      description:'Stonebridge is a mostly residential neighbourhood located in south-central Saskatoon, Saskatchewan, Canada'+
                  'It is a suburban subdivision, consisting of low-density, single detached dwellings and '+
                  'a mix of medium-density apartment and semi-detached dwellings. As of 2009, the area is home to 994 residents.'+
                  'The neighbourhood is considered a middle-income area, with an average family income of $67,642, '+
                  'an average dwelling value of $321,004 and a home ownership rate of 72.4%.'+
                  'According to MLS data, the average sale price of a home as of 2013 was $380,777.',
      population:'994',
      area:'Total	1.5 km2 (0.6 sq mi)',
      average_income:'$78,432'
    },
    {
      id: 'rosewood',
      name: 'ROSEWOOD',
      imageSrc: '../img_rosewood.jpg',
      description:'Rosewood is a primarily residential neighbourhood under construction in southeast Saskatoon, Saskatchewan, Canada.'+
                  ' The majority of its residents live in single detached dwellings. In 2011, the area was home to 73 residents.'+ 
                  ' In early 2015 there were approximately 900 occupied residences. The neighbourhood is considered a high-income area,'+
                  ' with an average family income of $104,964,'+
                  ' and a home ownership rate of 93.3%. According to MLS data, the average sale price of a home as of 2013 was $442,316.',
      population:'73',
      area:'2.93 km2 (1.13 sq mi)',
      average_income:'$104,964'
    },
    {
      id: 'evergreen',
      name: 'EVERGREEN',
      imageSrc: '../img_evergreen.jpg',
      description:'Evergreen is a residential neighbourhood under construction within the University Heights Suburban Development Area'+
                  ' of Saskatoon, Saskatchewan. The residential area is constructed around the village centre and a larger district village.'+
                  ' The subdivision was created in 2010. Evergreen is projected to have a density of 8.6 units per acre, '+
                  ' becoming one of the densest neighbourhoods in Saskatoon when complete.'+
                  ' According to MLS data, the average sale price of a home as of 2013 was $454,661.',
      population:'12,622',
      area:'Total	655 acres',
      average_income:'$83,432'
    },
    {
      id: 'willowgrove',
      name: 'WILLOW GROVE',
      imageSrc: '../img_willowgrove.jpg',
      description:' Willowgrove is a primarily residential neighbourhood located in the eastside of Saskatoon, Saskatchewan, Canada.'+ 
                  ' It comprises a mix of mainly single-family detached houses and fewer multiple-unit dwellings.'+
                  ' As of 2011, the area is home to 3,973 residents. The neighbourhood is considered a middle to high-income area,'+
                  ' with an average family income of $96,002, an average dwelling value of $218,357 and a home ownership rate of 84.8%',
      population:'3,973',
      area:'Total	2.114 km2 (0.816 sq mi)',
      average_income:'$96,002'
    },
    {
      id: 'sutherland',
      name: 'SUTHERLAND',
      imageSrc: '../img_sutherland.jpg',
      description:'Sutherland is a mostly residential neighbourhood located in east-central Saskatoon, Saskatchewan, Canada.'+ 
                  ' It is an older suburban subdivision, composed of a near-even mix of single-family detached houses and multiple-unit apartment'+ 
                  ' and semi-detached dwellings. As of 2006, the area was home to 5,206 residents. The neighbourhood is a middle-income area,'+
                  ' with an average family income of $51,857, an average dwelling value of $204,213 and a home ownership rate of 43.8%.'+
                  ' According to MLS data, the average sale price of a home as of 2013 was $288,651.'+
                  ' Sutherland was administered as a separate town outside of Saskatoon before being annexed by the city in 1956.',
      population:'5,206',
      area:'Total	2.14 km2 (0.83 sq mi)',
      average_income:'$51,857'
    },
    {
      id: 'forestgrove',
      name: 'FOREST GROVE',
      imageSrc: '../img_forestgrove.jpg',
      description: 'Forest Grove is a primarily residential neighbourhood located in northeast Saskatoon, Saskatchewan, Canada.'+
                  ' It is mostly made up of low-density single detached dwellings, with a sizeable minority of multiple-unit apartment'+
                  ' dwellings. As of 2011, the area is home to 5,907 residents. The neighbourhood is considered a middle-income area,'+
                  ' with an average family income of $70,487, an average dwelling value of $246,680 and a home ownership rate of 62.4%.'+
                  ' According to MLS data, the average sale price of a home as of 2013 was $304,527.',
      population:'5,907',
      area:'Total	1.61 km2 (0.62 sq mi)',
      average_income:'$70,487'
    }
  ];

  let newsData= [
    {
      id: 'stonebridge',
      name: 'Stonebridge',
      news:[{
            areaid:'1',
            title: 'Missing package from area Veltkamp',
            imageSrc: '../img_discussion.jpg',
            description: 'Did anyone in the Veltkamp area receive a package from Zulily in their community mailbox? Canada Post tracking tells me it was delivered but when I open the oversized box with the key they left me, it’s empty .Please help me if anyone know about it. Please email me at username@live.com',
            date:"19-12-2019",
            time:"8:00 pm",
            location:"Veltkamp"
          },
          {
            areaid:'1',
            title: 'Amazon box for 111 pringle Crescent',
            imageSrc: '../img_discussion.jpg',
            description: 'I got a box delivered to me by Amazon just now, it is for Mark ... it was mistakenly delivered to 111-275 pringle Lane but it is for 111 pringle Crescent. The owner can come get it with an ID with same name on it,or I will return to Canada post as soon as I am done working in the evening. Thanks.',
            date:"19-12-2019",
            time:"3:00 pm",
            location:"Pringle Lane"
          },
          {
            areaid:'1',
            title: 'Alert',
            imageSrc: '../img_discussion.jpg',
            description: 'My friend just let me know he had someone try to carjack him in the Sobey (Stonebridge) parking lot. This happen sometime after 6pm tonight (Saturday). Stay safe out there.',
            date:"14-12-2019",
            time:"9:00 pm",
            location:"Sobeys"
          },
          {
            areaid:'1',
            title: 'Cameras along Kolynchuk Crescent / Manor',
            imageSrc: '../img_discussion.jpg',
            description: 'Happy Friday all! Just interested to know if anyone has cameras along Kolynchuk Crescent / Manor. It looks like last Friday or Saturday evening some smart people decided to drive over our frozen pile of dirt sitting on our front yard. We are a corner lot and there was no damage to our property but we were able to uncover some bumper pieces. By the size of the tire tracks, it’s possibly a truck. I also want think they were possibly drunk or it was so slippery that they had to do that ?! Anyways, if you have seen or heard something, please message me.',
            date:"14-12-2019",
            time:"3:00 pm",
            location:"Kolynchuk Crescent"
          }
          ]
    },
    {
      id:'rosewood',
      name: 'Rosewood',
      news:[{
            areaid:'2',
            title: 'Animal Alert',
            imageSrc: '../img_discussion.jpg',
            description: 'This fox was spotted on rosewood drive just across Swick Park! Though it is not dangerous people should refrain from approaching wildlife ',
            date:"12-12-2019",
            time:"6:00 am",
            location:"Swick Park"
          },
          {
            areaid:'1',
            title: 'Volunteers Needed',
            imageSrc: '../img_discussion.jpg',
            description: 'We are on the hunt for some volunteers to help with our Rosewood craft and trade show on November 2nd.',
            date:"30-10-2019",
            time:"8:00 pm",
            location:"Rosewood"
          }
        ]
    },
    {
      id: 'evergreen',
      name: 'Evergreen',
      news:[{
            areaid:'1',
            title: 'Evergreen Schools and Community Resource is closed ',
            imageSrc: '../img_discussion.jpg',
            description: 'CLOSED FOR THE HOLIDAYS: The Evergreen Schools and Community Resource Room will be closed over the Holidays. This closure will affect routine programs:-Conversational English -Parent & Tot Group  -Drop in Basketball .Programs will return at their regularly schedule times in the New Year.',
            date:"13-12-2019",
            time:"8:00 pm",
            location:"Evergreen"
          },
          {
            areaid:'1',
            title: 'Christmas cards',
            imageSrc: '../img_discussion.jpg',
            description: 'The Children of the Boys and Girls Club Evergreen Early Learning Centre are busy making Christmas cards and are looking for a place to deliver them to. They are hoping to bring a little holiday cheer to some of the Senior Citizen Homes around the Evergreen Community.<br/>If anyone is connected to any of the homes within the community and would like to receive some Christmas Cards please email Bailey at bailey@bgcsaskatoon.com.',
            date:"11-12-2019",
            time:"3:00 pm",
            location:"Evergreen Early Learning Centre"
          },
          {
            areaid:'1',
            title: 'Family Literacy programs for parents and their preschool aged children. Join us for crafts, rhymes, storytelling, and literacy activities. There is also an allotted time for a break away parent/caregiver session to learn literacy tips and tricks',
            imageSrc: '../img_discussion.jpg',
            description: 'This September READ Saskatoon is offering 3 FREE Family Literacy programs for parents and their preschool aged children. Join us for crafts, rhymes, storytelling, and literacy activities. There is also an allotted time for a break away parent/caregiver session to learn literacy tips and tricks. A snack and take-home book will be provided at each session.',
            date:"14-08-2019",
            time:"9:00 pm",
            location:"Evergreen"
          },
          ]
    },
    {
      id:'willowgrove',
      name: 'Willowgrove',
      news:[{
            areaid:'2',
            title: 'Animal Alert',
            imageSrc: '../img_discussion.jpg',
            description: 'This fox was spotted on rosewood drive just across Swick Park! Though it is not dangerous people should refrain from approaching wildlife ',
            date:"12-12-2019",
            time:"6:00 am",
            location:"Swick Park"
          },
          {
            areaid:'1',
            title: 'Alert',
            imageSrc: '../img_discussion.jpg',
            description: 'My friend just let me know he had someone try to carjack him in the Sobey (Stonebridge) parking lot. This happen sometime after 6pm tonight (Saturday). Stay safe out there.',
            date:"14-12-2019",
            time:"9:00 pm",
            location:"Sobeys"
          },
          {
            areaid:'1',
            title: 'Volunteers Needed',
            imageSrc: '../img_discussion.jpg',
            description: 'We are on the hunt for some volunteers to help with our Rosewood craft and trade show on November 2nd.',
            date:"30-10-2019",
            time:"8:00 pm",
            location:"Rosewood"
          }
        ]
    },
    {
      id: 'sutherland',
      name: 'Sutherland',
      news:[{
            areaid:'1',
            title: 'Vehicle collision',
            imageSrc: '../img_discussion.jpg',
            description: 'A member of the page is seeking assistance in locating the driver that failed to stop after colliding with a vehicle earlier this afternoon (15/4).'+
                         ' Approximately 1:00pm, its believed a white, old style ute, possibly a Toyota or Mazda with green p plates attached, collided with the pictured vehicle at the corner of Kingsway and Woolooware Road.'+
                         'The offender fled the scene with damage to the left side of their vehicle and travelled west towards Gannons Road and Caringbah.'+         
                         'Police were contacted, however due to no registration plates, little can be done.'+
                         'Anyone that may have witnessed a white and old damaged ute with green P plates in the area at the time of the incident is being urged to contact Miranda Local Area Command on 9541 3899 or anonymously via CrimeStoppers on 1800 333 000.',
            date:"19-12-2019",
            time:"8:00 pm",
            location:"Woolooware"
          },
          {
            areaid:'1',
            title: 'UPS box at wrong address',
            imageSrc: '../img_discussion.jpg',
            description: 'I got a box delivered to me by Amazon just now, it is for Mark ... it was mistakenly delivered to 111-275 pringle Lane but it is for 111 pringle Crescent. The owner can come get it with an ID with same name on it,or I will return to Canada post as soon as I am done working in the evening. Thanks.',
            date:"19-12-2019",
            time:"3:00 pm",
            location:"Sutherland"
          },
          {
            areaid:'1',
            title: 'Cameras Request',
            imageSrc: '../img_discussion.jpg',
            description: 'Happy Friday all! Just interested to know if anyone has cameras along Kolynchuk Crescent / Manor. It looks like last Friday or Saturday evening some smart people decided to drive over our frozen pile of dirt sitting on our front yard. We are a corner lot and there was no damage to our property but we were able to uncover some bumper pieces. By the size of the tire tracks, it’s possibly a truck. I also want think they were possibly drunk or it was so slippery that they had to do that ?! Anyways, if you have seen or heard something, please message me.',
            date:"14-12-2019",
            time:"3:00 pm",
            location:"Suther Crescent"
          }
          ]
    },
    {
      id:'forestgrove',
      name: 'Forest Grove',
      news:[{
            areaid:'2',
            title: 'Animal Alert',
            imageSrc: '../img_discussion.jpg',
            description: 'This fox was spotted on rosewood drive just across Swick Park! Though it is not dangerous people should refrain from approaching wildlife ',
            date:"12-12-2019",
            time:"6:00 am",
            location:"Swick Park"
          },
          {
            areaid:'1',
            title: 'Volunteers Needed',
            imageSrc: '../img_discussion.jpg',
            description: 'We are on the hunt for some volunteers to help with our Rosewood craft and trade show on November 2nd.',
            date:"30-10-2019",
            time:"8:00 pm",
            location:"Rosewood"
          }
        ]
    }
    
  ];

  let eventData= [
    {
      id: 'stonebridge',
      name: 'Stonebridge',
      events:[{
        areaid:'1',
        title: 'Christmas Wine and Cheese with the Schindlers',
        imageSrc: "../img_discussion.jpg",
        description: 'Christmas Wine and Cheese with the Schindlers: Come and enjoy christmas collectively ',
        date:"December 20, 2019",
        time:"6:30 pm - 9:00 pm",
        location:"Stonebridge Clubhouse, Saskatoon",
        cost:"$5"
      },
      {
        areaid:'1',
        title: 'Stonebridge Breakfast Club',
        imageSrc: '../img_discussion.jpg',
        description: 'First Monday of every month C’mon out and have some brekkie!!!10am at Sunset Grill',
        date:"January 6, 2020",
        time:"6:00 am",
        location:"Sunset Grill, Saskatoon",
        cost:"Free"
      },
      {
        areaid:'1',
        title: '35th Annual WinterBlast',
        imageSrc: '../homepageimage.jpg',
        description: 'Hospice Georgian Triangle presents the 35th annual WinterBlast'+
                     'Come on out to Craigleith for a day of skiing, snowshoeing and afternoon apres! Not a winter person? We hear there may be a spa feature coming as well. Stay tuned',
        date:"January 23, 2020",
        time:"8:00 am - 5:00 pm",
        location:"Craigleith Ski Resort, Saskatoon",
        cost:"N/A"
      },
      {
        areaid:'1',
        title: '2020 Stonebridge Biennial Garage Sale',
        imageSrc: '../homepageimage.jpg',
        description: 'The next biennial Stonebridge Garage Sale will be held on Saturday, May 16, 2020.'+
                     'For more details, contact Dale Guindon  at johdal@sympatico.ca',
        date:"May 16, 2020",
        time:"8:00 am - 5:00 pm",
        location:"Stonebridge, Saskatoon",
        cost:"Free"
      }
      ]
    },
    {
      id: 'rosewood',
      name: 'Rosewood',
      events:[{
        areaid:'1',
        title: 'Hyde Park Naturalized Area Shoreline Cleanup',
        imageSrc: '../img_discussion.jpg',
        description: 'Every spring and fall the Rosewood Community Association hosts the annual Hyde Park Naturalized Area Shoreline Cleanup.'+
                    ' The spring and fall cleanups are part of the Great Canadian Shoreline Cleanup. The spring cleanup also takes place during Saskatoons Nature City Festival. ',
        date:"December 20, 2019",
        time:"6:30 pm - 9:00 pm",
        location:"Hyde Park, Saskatoon",
        cost:"Free"
      },
      {
        areaid:'1',
        title: 'Rosewood Family Fun Day',
        imageSrc: '../homepageimage.jpg',
        description: 'The Lets Roll! Recycling Education Pop-up will test your waste and recycling know-how through fun and interactive education station... how will you do?',
        date:"January 6, 2020",
        time:"8:00 am - 3:00 pm",
        location:"Hyde Park, Saskatoon",
        cost:"Free"
      },
      {
        areaid:'1',
        title: 'Rosewood Community Garage Sale',
        imageSrc: '../homepageimage.jpg',
        description: 'Hopefully you find some interesting treasures in our community!',
        date:"January 23, 2020",
        time:"8:00 am - 8:00 pm",
        location:"822 Rosewood Blvd West, Saskatoon",
        cost:"N/A"
      }
      ]
    },
    {
      id: 'evergreen',
      name: 'Evergreen',
      events:[{
        areaid:'1',
        title: 'Christmas Celebration',
        imageSrc: '../img_default.jpg',
        description: 'Christmas games and fun collectively ',
        date:"December 20, 2019",
        time:"6:30 pm - 9:00 pm",
        location:"Evergreen, Saskatoon",
        cost:"$5"
      },
      {
        areaid:'1',
        title: 'Talk and Learn',
        imageSrc: '../img_default.jpg',
        description: 'First Monday of every month C’mon out and have some brekkie!and talk about common topics in discussion 10am at Sunset Grill',
        date:"January 6, 2020",
        time:"6:00 am",
        location:"211 Evergreen Square, Saskatoon",
        cost:"Free"
      },
      {
        areaid:'1',
        title: '2020 Evergreen Biennial Garage Sale',
        imageSrc: '../homepageimage.jpg',
        description: 'The next biennial evergreen Garage Sale will be held on Saturday, May 16, 2020.'+
                     'For more details, contact Dale Guindon  at johdal@sympatico.ca',
        date:"feb 16, 2020",
        time:"8:00 am - 5:00 pm",
        location:"Evergreen, Saskatoon",
        cost:"Free"
      }
      ]
    },
    {
      id: 'willowgrove',
      name: 'Willow Grove',
      events:[{
        areaid:'1',
        title: 'Christmas Community Concerts',
        imageSrc: '../img_default.jpg',
        description: 'Come to one concert or both concerts! Saturday Dec 21 at Trinity Christian Church of Greater Phila Sunday Dec 22 Calvary Presbyterian Willow Grove',
        date:"December 21, 2019",
        time:"8:30 pm - 9:00 pm",
        location:"405 Easton Rd, Willow Grove, Saskatoon",
        cost:"Free"
      },
      {
        areaid:'1',
        title: 'Willow Community Garage Sale',
        imageSrc: '../homepageimage.jpg',
        description: 'Hopefully you find some interesting treasures in our community!',
        date:"January 12, 2020",
        time:"8:00 am - 8:00 pm",
        location:"Willow grove, Saskatoon",
        cost:"N/A"
      }
      ]
    },
    {
      id: 'sutherland',
      name: 'Sutherland',
      events:[{
        areaid:'1',
        title: 'Saskatoon Christmas Gala Dinner',
        imageSrc: '../img_discussion.jpg',
        description: 'We’re so thrilled to host a red carpet Christmas party for the beautiful people of Saskatchewan.'+
                      'Think lights, cameras, think fun times!'+
                      'Come dressed in your glam rags and learn about Autism Spectrum Disorder (ASD)'+
                      'There would be welcome drinks, dinner, music and dancing, great entertainment.'+
                      'Come have a lovely evening in the mist of the winter chill.'+
                      'Cocktail drinks at the bar.'+
                      '50% of profits go to Autism Services Saskatoon',
        date:"December 20, 2019",
        time:"6:30 pm - 9:00 pm",
        location:"Sutherland Hall, 1112 Central Ave, Saskatoon",
        cost:"$5"
      },
      {
        areaid:'1',
        title: 'Junior Joint Provincials',
        imageSrc: '../img_discussion.jpg',
        description: 'Saskatchewan’s best junior curlers will call the Sutherland Curling Club in Saskatoon home from Dec. 27/19 - Jan. 01/20. The provincial championship will feature 8 Men’s and 8 Women’s teamst',
        date:"Dec. 27, 2019 – Jan. 1, 2020",
        time:"6:00 am",
        location:"Sutherland Curling Club, Saskatoon",
        cost:"Free"
      },
      {
        areaid:'1',
        title: 'YXE Spring Collectors Show & Flea Market',
        imageSrc: '../homepageimage.jpg',
        description: '80 vendor booths'+
                    'There will be 80 vendor booths selling a variety of items such as: coins, records, comics, toys, video games, super hero collectibles, crafts, movie posters, sports cards, DVDs, CDs, glassware, antiques, lapel pins, direct sales items, fine food products, general flea market items, artwork, jewellery and more',
        date:"January 23, 2020",
        time:"8:00 am - 5:00 pm",
        location:"Sutherland Curling Club, Saskatoon",
        cost:"N/A"
      },
      ]
    },
    {
      id: 'forestgrove',
      name: 'Forest Grove',
      events:[{
        areaid:'1',
        title: 'Hyde Park Naturalized Area Shoreline Cleanup',
        imageSrc: '../img_default.jpg',
        description: 'Every spring and fall the Rosewood Community Association hosts the annual Hyde Park Naturalized Area Shoreline Cleanup.'+
                    ' The spring and fall cleanups are part of the Great Canadian Shoreline Cleanup. The spring cleanup also takes place during Saskatoons Nature City Festival. ',
        date:"December 20, 2019",
        time:"6:30 pm - 9:00 pm",
        location:"Forest Grove, Saskatoon",
        cost:"Free"
      },
      {
        areaid:'1',
        title: 'Forest Grove Family Fun Day',
        imageSrc: '../homepageimage.jpg',
        description: 'The Lets Roll! Recycling Education Pop-up will test your waste and recycling know-how through fun and interactive education station... how will you do?',
        date:"January 6, 2020",
        time:"8:00 am - 3:00 pm",
        location:"Forestry Park, Saskatoon",
        cost:"Free"
      },
      ]
    }
  ];
  return (
    <BrowserRouter>
        <Route path="/" exact={true}>
        <Home username={username} />
        </Route>
        <Route path="/contact" component={Contact} exact={true}/>
        <Route path="/about" component={About} exact={true}/>
        <Route path="/register" component={Register} exact={true}/>
        <Route path="/login" exact={true}>
          <Login 
            username={username} 
            setUsername={setUsername} 
          />
        </Route>
        <Route path="/area-info/:id" exact={true}>
          <AreaInfo areaData={areaData}></AreaInfo>
        </Route>
        <Route path="/area-news/:id" exact={true}>
          <AreaNews newsData={newsData}></AreaNews>
        </Route>
        <Route path="/area-event/:id" exact={true}>
          <AreaEvents eventData={eventData}></AreaEvents>
        </Route>
    </BrowserRouter>
  );
}
export default App;

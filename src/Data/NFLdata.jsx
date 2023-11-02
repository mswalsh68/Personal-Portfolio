import React from 'react';
import '../styles.css'

export default function NFLdata() {
  
  const [game, setGame] = React.useState([]);
  
  React.useEffect(() => {
    fetch('https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?')
      .then(response => response.json())
      .then(teamaData => {
        // set game
        setGame(teamaData.events);
        console.log(teamaData.events);

      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className='main-body'>
            

              {game.map((games =>{
                return (
                      <div className="scoreboard" key={games.competitions[0].competitors[1].team.displayName}>
                        <div className="date">
                        </div>
                        <div className="scores away">
                          <img src={games.competitions[0].competitors[1].team.logo}/><br />
                          {games.competitions[0].competitors[1].team.displayName}<br />
                          {games.competitions[0].competitors[1].score}
                        </div>
                        <div className="scores at">
                          @
                        </div>
                        <div className="scores home">
                          <img src={games.competitions[0].competitors[0].team.logo}/><br />
                          {games.competitions[0].competitors[0].team.displayName}<br />
                          {games.competitions[0].competitors[0].score}
                        </div>
                      </div>
                )
              }))}
    
    </div>
  );

}

// {
//     
//     "events": [
//         {
//             "name": "Jacksonville Jaguars at New Orleans Saints",
//           
//             },
//             "competitions": [
//                 {
//                     },
//                     "competitors": [
//                         {
//                            
//                             "homeAway": "home",
//                             "team": {
//                                 "displayName": "New Orleans Saints",
//                                 },
//                                 
//                                 "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/no.png"
//                             },
//                             "score": "24",
//                             
//                         {
//                             
//                             "homeAway": "away",
//                                 "displayName": "Jacksonville Jaguars",
//                             "score": "31",
//                             "linescores": [
//                                 {
//                                     "value": 7
//                                 },
//                                 {
//                                     "value": 10
//                                 },
//                                 {
//                                     "value": 7
//                                 },
//                                 {
//                                     "value": 7
//                                 }
//                             ],
//                             "statistics": [],
//                             "records": [
//                                 {
//                                     "name": "overall",
//                                     "abbreviation": "Game",
//                                     "type": "total",
//                                     "summary": "5-2"
//                                 },
//                                 {
//                                     "name": "Home",
//                                     "type": "home",
//                                     "summary": "2-2"
//                                 },
//                                 {
//                                     "name": "Road",
//                                     "type": "road",
//                                     "summary": "3-0"
//                                 }
//                             ]
//                         }
//                     ],
//                     "notes": [],
//                     "status": {
//                         "clock": 0,
//                         "displayClock": "0:00",
//                         "period": 4,
//                         "type": {
//                             "id": "3",
//                             "name": "STATUS_FINAL",
//                             "state": "post",
//                             "completed": true,
//                             "description": "Final",
//                             "detail": "Final",
//                             "shortDetail": "Final"
//                         }
//                     },
//                     "broadcasts": [
//                         {
//                             "market": "national",
//                             "names": [
//                                 "PRIME VIDEO"
//                             ]
//                         }
//                     ],
//                     "leaders": [
//                         {
//                             "name": "passingYards",
//                             "displayName": "Passing Leader",
//                             "shortDisplayName": "PASS",
//                             "abbreviation": "PYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "301 YDS, 1 TD, 1 INT",
//                                     "value": 301,
//                                     "athlete": {
//                                         "id": "16757",
//                                         "fullName": "Derek Carr",
//                                         "displayName": "Derek Carr",
//                                         "shortName": "D. Carr",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/16757/derek-carr"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/16757.png",
//                                         "jersey": "4",
//                                         "position": {
//                                             "abbreviation": "QB"
//                                         },
//                                         "team": {
//                                             "id": "18"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "18"
//                                     }
//                                 }
//                             ]
//                         },
//                         {
//                             "name": "rushingYards",
//                             "displayName": "Rushing Leader",
//                             "shortDisplayName": "RUSH",
//                             "abbreviation": "RYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "17 CAR, 62 YDS",
//                                     "value": 62,
//                                     "athlete": {
//                                         "id": "3054850",
//                                         "fullName": "Alvin Kamara",
//                                         "displayName": "Alvin Kamara",
//                                         "shortName": "A. Kamara",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/3054850/alvin-kamara"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/3054850.png",
//                                         "jersey": "41",
//                                         "position": {
//                                             "abbreviation": "RB"
//                                         },
//                                         "team": {
//                                             "id": "18"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "18"
//                                     }
//                                 }
//                             ]
//                         },
//                         {
//                             "name": "receivingYards",
//                             "displayName": "Receiving Leader",
//                             "shortDisplayName": "REC",
//                             "abbreviation": "RECYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "12 REC, 91 YDS",
//                                     "value": 91,
//                                     "athlete": {
//                                         "id": "3054850",
//                                         "fullName": "Alvin Kamara",
//                                         "displayName": "Alvin Kamara",
//                                         "shortName": "A. Kamara",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/3054850/alvin-kamara"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/3054850.png",
//                                         "jersey": "41",
//                                         "position": {
//                                             "abbreviation": "RB"
//                                         },
//                                         "team": {
//                                             "id": "18"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "18"
//                                     }
//                                 }
//                             ]
//                         }
//                     ],
//                     "format": {
//                         "regulation": {
//                             "periods": 4
//                         }
//                     },
//                     "startDate": "2023-10-20T00:15Z",
//                     "geoBroadcasts": [
//                         {
//                             "type": {
//                                 "id": "4",
//                                 "shortName": "Web"
//                             },
//                             "market": {
//                                 "id": "1",
//                                 "type": "National"
//                             },
//                             "media": {
//                                 "shortName": "PRIME VIDEO"
//                             },
//                             "lang": "en",
//                             "region": "us"
//                         }
//                     ],
//                     "headlines": [
//                         {
//                             "description": "— Jacksonville quarterback Trevor Lawrence was playing with a sprained left knee, and the visiting Jaguars hurt their own cause with turnovers and penalties.",
//                             "type": "Recap",
//                             "shortLinkText": "Trevor Lawrence comes through late and the Jaguars hold off the Saints, 31-24"
//                         }
//                     ]
//                 }
//             ],
//             "links": [
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "summary",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/game/_/gameId/401547483",
//                     "text": "Gamecast",
//                     "shortText": "Gamecast",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "boxscore",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/boxscore/_/gameId/401547483",
//                     "text": "Box Score",
//                     "shortText": "Box Score",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "highlights",
//                         "desktop"
//                     ],
//                     "href": "https://www.espn.com/nfl/video?gameId=401547483",
//                     "text": "Highlights",
//                     "shortText": "Highlights",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "pbp",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/playbyplay/_/gameId/401547483",
//                     "text": "Play-by-Play",
//                     "shortText": "Play-by-Play",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "recap",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/recap?gameId=401547483",
//                     "text": "Recap",
//                     "shortText": "Recap",
//                     "isExternal": false,
//                     "isPremium": false
//                 }
//             ],
//             "status": {
//                 "clock": 0,
//                 "displayClock": "0:00",
//                 "period": 4,
//                 "type": {
//                     "id": "3",
//                     "name": "STATUS_FINAL",
//                     "state": "post",
//                     "completed": true,
//                     "description": "Final",
//                     "detail": "Final",
//                     "shortDetail": "Final"
//                 }
//             }
//         },
//         {
//             "id": "401547490",
//             "uid": "s:20~l:28~e:401547490",
//             "date": "2023-10-22T17:00Z",
//             "name": "Las Vegas Raiders at Chicago Bears",
//             "shortName": "LV @ CHI",
//             "season": {
//                 "year": 2023,
//                 "type": 2,
//                 "slug": "regular-season"
//             },
//             "week": {
//                 "number": 7
//             },
//             "competitions": [
//                 {
//                     "id": "401547490",
//                     "uid": "s:20~l:28~e:401547490~c:401547490",
//                     "date": "2023-10-22T17:00Z",
//                     "attendance": 62199,
//                     "type": {
//                         "id": "1",
//                         "abbreviation": "STD"
//                     },
//                     "timeValid": true,
//                     "neutralSite": false,
//                     "conferenceCompetition": false,
//                     "playByPlayAvailable": true,
//                     "recent": false,
//                     "venue": {
//                         "id": "3933",
//                         "fullName": "Soldier Field",
//                         "address": {
//                             "city": "Chicago",
//                             "state": "IL"
//                         },
//                         "capacity": 61500,
//                         "indoor": false
//                     },
//                     "competitors": [
//                         {
//                             "id": "3",
//                             "uid": "s:20~l:28~t:3",
//                             "type": "team",
//                             "order": 0,
//                             "homeAway": "home",
//                             "winner": true,
//                             "team": {
//                                 "id": "3",
//                                 "uid": "s:20~l:28~t:3",
//                                 "location": "Chicago",
//                                 "name": "Bears",
//                                 "abbreviation": "CHI",
//                                 "displayName": "Chicago Bears",
//                                 "shortDisplayName": "Bears",
//                                 "color": "0b1c3a",
//                                 "alternateColor": "e64100",
//                                 "isActive": true,
//                                 "venue": {
//                                     "id": "3933"
//                                 },
//                                 "links": [
//                                     {
//                                         "rel": [
//                                             "clubhouse",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/_/name/chi/chicago-bears",
//                                         "text": "Clubhouse",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "roster",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/roster/_/name/chi/chicago-bears",
//                                         "text": "Roster",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "stats",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/stats/_/name/chi/chicago-bears",
//                                         "text": "Statistics",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "schedule",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/schedule/_/name/chi",
//                                         "text": "Schedule",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     }
//                                 ],
//                                 "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/chi.png"
//                             },
//                             "score": "30",
//                             "linescores": [
//                                 {
//                                     "value": 7
//                                 },
//                                 {
//                                     "value": 7
//                                 },
//                                 {
//                                     "value": 7
//                                 },
//                                 {
//                                     "value": 9
//                                 }
//                             ],
//                             "statistics": [],
//                             "records": [
//                                 {
//                                     "name": "overall",
//                                     "abbreviation": "Game",
//                                     "type": "total",
//                                     "summary": "2-5"
//                                 },
//                                 {
//                                     "name": "Home",
//                                     "type": "home",
//                                     "summary": "1-3"
//                                 },
//                                 {
//                                     "name": "Road",
//                                     "type": "road",
//                                     "summary": "1-2"
//                                 }
//                             ]
//                         },
//                         {
//                             "id": "13",
//                             "uid": "s:20~l:28~t:13",
//                             "type": "team",
//                             "order": 1,
//                             "homeAway": "away",
//                             "winner": false,
//                             "team": {
//                                 "id": "13",
//                                 "uid": "s:20~l:28~t:13",
//                                 "location": "Las Vegas",
//                                 "name": "Raiders",
//                                 "abbreviation": "LV",
//                                 "displayName": "Las Vegas Raiders",
//                                 "shortDisplayName": "Raiders",
//                                 "color": "000000",
//                                 "alternateColor": "a5acaf",
//                                 "isActive": true,
//                                 "venue": {
//                                     "id": "6501"
//                                 },
//                                 "links": [
//                                     {
//                                         "rel": [
//                                             "clubhouse",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/_/name/lv/las-vegas-raiders",
//                                         "text": "Clubhouse",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "roster",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/roster/_/name/lv/las-vegas-raiders",
//                                         "text": "Roster",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "stats",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/stats/_/name/lv/las-vegas-raiders",
//                                         "text": "Statistics",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "schedule",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/schedule/_/name/lv",
//                                         "text": "Schedule",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     }
//                                 ],
//                                 "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/lv.png"
//                             },
//                             "score": "12",
//                             "linescores": [
//                                 {
//                                     "value": 0
//                                 },
//                                 {
//                                     "value": 3
//                                 },
//                                 {
//                                     "value": 0
//                                 },
//                                 {
//                                     "value": 9
//                                 }
//                             ],
//                             "statistics": [],
//                             "records": [
//                                 {
//                                     "name": "overall",
//                                     "abbreviation": "Game",
//                                     "type": "total",
//                                     "summary": "3-4"
//                                 },
//                                 {
//                                     "name": "Home",
//                                     "type": "home",
//                                     "summary": "2-1"
//                                 },
//                                 {
//                                     "name": "Road",
//                                     "type": "road",
//                                     "summary": "1-3"
//                                 }
//                             ]
//                         }
//                     ],
//                     "notes": [],
//                     "status": {
//                         "clock": 0,
//                         "displayClock": "0:00",
//                         "period": 4,
//                         "type": {
//                             "id": "3",
//                             "name": "STATUS_FINAL",
//                             "state": "post",
//                             "completed": true,
//                             "description": "Final",
//                             "detail": "Final",
//                             "shortDetail": "Final"
//                         }
//                     },
//                     "broadcasts": [
//                         {
//                             "market": "national",
//                             "names": [
//                                 "FOX"
//                             ]
//                         }
//                     ],
//                     "leaders": [
//                         {
//                             "name": "passingYards",
//                             "displayName": "Passing Leader",
//                             "shortDisplayName": "PASS",
//                             "abbreviation": "PYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "162 YDS, 1 TD",
//                                     "value": 162,
//                                     "athlete": {
//                                         "id": "4434153",
//                                         "fullName": "Tyson Bagent",
//                                         "displayName": "Tyson Bagent",
//                                         "shortName": "T. Bagent",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/4434153/tyson-bagent"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/4434153.png",
//                                         "jersey": "17",
//                                         "position": {
//                                             "abbreviation": "QB"
//                                         },
//                                         "team": {
//                                             "id": "3"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "3"
//                                     }
//                                 }
//                             ]
//                         },
//                         {
//                             "name": "rushingYards",
//                             "displayName": "Rushing Leader",
//                             "shortDisplayName": "RUSH",
//                             "abbreviation": "RYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "16 CAR, 89 YDS, 2 TD",
//                                     "value": 89,
//                                     "athlete": {
//                                         "id": "3125116",
//                                         "fullName": "D'Onta Foreman",
//                                         "displayName": "D'Onta Foreman",
//                                         "shortName": "D. Foreman",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/3125116/donta-foreman"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/3125116.png",
//                                         "jersey": "21",
//                                         "position": {
//                                             "abbreviation": "RB"
//                                         },
//                                         "team": {
//                                             "id": "3"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "3"
//                                     }
//                                 }
//                             ]
//                         },
//                         {
//                             "name": "receivingYards",
//                             "displayName": "Receiving Leader",
//                             "shortDisplayName": "REC",
//                             "abbreviation": "RECYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "7 REC, 57 YDS",
//                                     "value": 57,
//                                     "athlete": {
//                                         "id": "16800",
//                                         "fullName": "Davante Adams",
//                                         "displayName": "Davante Adams",
//                                         "shortName": "D. Adams",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/16800/davante-adams"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/16800.png",
//                                         "jersey": "17",
//                                         "position": {
//                                             "abbreviation": "WR"
//                                         },
//                                         "team": {
//                                             "id": "13"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "13"
//                                     }
//                                 }
//                             ]
//                         }
//                     ],
//                     "format": {
//                         "regulation": {
//                             "periods": 4
//                         }
//                     },
//                     "startDate": "2023-10-22T17:00Z",
//                     "geoBroadcasts": [
//                         {
//                             "type": {
//                                 "id": "1",
//                                 "shortName": "TV"
//                             },
//                             "market": {
//                                 "id": "1",
//                                 "type": "National"
//                             },
//                             "media": {
//                                 "shortName": "FOX"
//                             },
//                             "lang": "en",
//                             "region": "us"
//                         }
//                     ],
//                     "headlines": [
//                         {
//                             "description": "— Nervous all week, Tyson Bagent didn't need much time to get comfortable. The butterflies went away after about the first snap.",
//                             "type": "Recap",
//                             "shortLinkText": "Rookie Tyson Bagent leads 3 TD drives in place of Justin Fields, Bears beat Raiders 30-12",
//                             "video": [
//                                 {
//                                     "id": 38719464,
//                                     "source": "espn",
//                                     "headline": "Jaylon Johnson pads Bears' lead with 39-yard pick-six",
//                                     "thumbnail": "https://a.espncdn.com/media/motion/2023/1022/dm_231022_JOHNSON_PICK_6_BEARS994/dm_231022_JOHNSON_PICK_6_BEARS994.jpg",
//                                     "duration": 27,
//                                     "tracking": {
//                                         "sportName": "nfl",
//                                         "leagueName": "No League",
//                                         "coverageType": "Final Game Highlight",
//                                         "trackingName": "*UNPUB 10/24* NFL_One-Play (Jaylon Johnson pads Bears' lead with 39-yard pick-six) 2023/10/22 ESHEET",
//                                         "trackingId": "dm_231022_JOHNSON_PICK_6_BEARS"
//                                     },
//                                     "deviceRestrictions": {
//                                         "type": "whitelist",
//                                         "devices": [
//                                             "desktop",
//                                             "settop",
//                                             "handset",
//                                             "tablet"
//                                         ]
//                                     },
//                                     "links": {
//                                         "api": {
//                                             "self": {
//                                                 "href": "http://api.espn.com/v1/video/clips/38719464"
//                                             },
//                                             "artwork": {
//                                                 "href": "https://artwork.api.espn.com/artwork/collections/media/44dde0d5-ce66-4885-bd2c-0b4f2cf0c774"
//                                             }
//                                         },
//                                         "web": {
//                                             "href": "https://www.espn.com/video/clip?id=38719464&ex_cid=espnapi_internal",
//                                             "short": {
//                                                 "href": "https://www.espn.com/video/clip?id=38719464"
//                                             },
//                                             "self": {
//                                                 "href": "https://www.espn.com/video/clip?id=38719464&ex_cid=espnapi_internal"
//                                             }
//                                         },
//                                         "source": {
//                                             "mezzanine": {
//                                                 "href": "https://media.video-origin.espn.com/espnvideo/2023/1022/dm_231022_JOHNSON_PICK_6_BEARS/dm_231022_JOHNSON_PICK_6_BEARS.mp4"
//                                             },
//                                             "flash": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_JOHNSON_PICK_6_BEARS/dm_231022_JOHNSON_PICK_6_BEARS.smil"
//                                             },
//                                             "hds": {
//                                                 "href": "https://hds.video-cdn.espn.com/z/motion/2023/1022/dm_231022_JOHNSON_PICK_6_BEARS/dm_231022_JOHNSON_PICK_6_BEARS_rel.smil/manifest.f4m"
//                                             },
//                                             "HLS": {
//                                                 "href": "https://service-pkgespn.akamaized.net/opp/hls/espn/2023/1022/dm_231022_JOHNSON_PICK_6_BEARS/dm_231022_JOHNSON_PICK_6_BEARS/playlist.m3u8",
//                                                 "HD": {
//                                                     "href": "https://service-pkgespn.akamaized.net/opp/hls/espn/2023/1022/dm_231022_JOHNSON_PICK_6_BEARS/dm_231022_JOHNSON_PICK_6_BEARS/playlist.m3u8"
//                                                 }
//                                             },
//                                             "HD": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_JOHNSON_PICK_6_BEARS/dm_231022_JOHNSON_PICK_6_BEARS_720p30_2896k.mp4"
//                                             },
//                                             "full": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_JOHNSON_PICK_6_BEARS/dm_231022_JOHNSON_PICK_6_BEARS_360p30_1464k.mp4"
//                                             },
//                                             "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_JOHNSON_PICK_6_BEARS/dm_231022_JOHNSON_PICK_6_BEARS_360p30_1464k.mp4"
//                                         },
//                                         "mobile": {
//                                             "alert": {
//                                                 "href": "http://m.espn.go.com/general/video/videoAlert?vid=38719464&ex_cid=espnapi_internal"
//                                             },
//                                             "source": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_JOHNSON_PICK_6_BEARS/dm_231022_JOHNSON_PICK_6_BEARS.mp4"
//                                             },
//                                             "href": "https://watch.auth.api.espn.com/video/auth/brightcove/44dde0d5-ce66-4885-bd2c-0b4f2cf0c774/asset?UMADPARAMreferer=http://www.espn.com/video/clip?id=38719464",
//                                             "streaming": {
//                                                 "href": "https://watch.auth.api.espn.com/video/auth/brightcove/44dde0d5-ce66-4885-bd2c-0b4f2cf0c774/asset?UMADPARAMreferer=http://www.espn.com/video/clip?id=38719464"
//                                             },
//                                             "progressiveDownload": {
//                                                 "href": "https://watch.auth.api.espn.com/video/auth/brightcove/44dde0d5-ce66-4885-bd2c-0b4f2cf0c774/asset?UMADPARAMreferer=http://www.espn.com/video/clip?id=38719464"
//                                             }
//                                         }
//                                     }
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ],
//             "links": [
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "summary",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/game/_/gameId/401547490",
//                     "text": "Gamecast",
//                     "shortText": "Gamecast",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "boxscore",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/boxscore/_/gameId/401547490",
//                     "text": "Box Score",
//                     "shortText": "Box Score",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "highlights",
//                         "desktop"
//                     ],
//                     "href": "https://www.espn.com/nfl/video?gameId=401547490",
//                     "text": "Highlights",
//                     "shortText": "Highlights",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "pbp",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/playbyplay/_/gameId/401547490",
//                     "text": "Play-by-Play",
//                     "shortText": "Play-by-Play",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "recap",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/recap?gameId=401547490",
//                     "text": "Recap",
//                     "shortText": "Recap",
//                     "isExternal": false,
//                     "isPremium": false
//                 }
//             ],
//             "status": {
//                 "clock": 0,
//                 "displayClock": "0:00",
//                 "period": 4,
//                 "type": {
//                     "id": "3",
//                     "name": "STATUS_FINAL",
//                     "state": "post",
//                     "completed": true,
//                     "description": "Final",
//                     "detail": "Final",
//                     "shortDetail": "Final"
//                 }
//             }
//         },
//         {
//             "id": "401547484",
//             "uid": "s:20~l:28~e:401547484",
//             "date": "2023-10-22T17:00Z",
//             "name": "Cleveland Browns at Indianapolis Colts",
//             "shortName": "CLE @ IND",
//             "season": {
//                 "year": 2023,
//                 "type": 2,
//                 "slug": "regular-season"
//             },
//             "week": {
//                 "number": 7
//             },
//             "competitions": [
//                 {
//                     "id": "401547484",
//                     "uid": "s:20~l:28~e:401547484~c:401547484",
//                     "date": "2023-10-22T17:00Z",
//                     "attendance": 0,
//                     "type": {
//                         "id": "1",
//                         "abbreviation": "STD"
//                     },
//                     "timeValid": true,
//                     "neutralSite": false,
//                     "conferenceCompetition": false,
//                     "playByPlayAvailable": true,
//                     "recent": false,
//                     "venue": {
//                         "id": "3812",
//                         "fullName": "Lucas Oil Stadium",
//                         "address": {
//                             "city": "Indianapolis",
//                             "state": "IN"
//                         },
//                         "capacity": 63000,
//                         "indoor": true
//                     },
//                     "competitors": [
//                         {
//                             "id": "11",
//                             "uid": "s:20~l:28~t:11",
//                             "type": "team",
//                             "order": 0,
//                             "homeAway": "home",
//                             "winner": false,
//                             "team": {
//                                 "id": "11",
//                                 "uid": "s:20~l:28~t:11",
//                                 "location": "Indianapolis",
//                                 "name": "Colts",
//                                 "abbreviation": "IND",
//                                 "displayName": "Indianapolis Colts",
//                                 "shortDisplayName": "Colts",
//                                 "color": "003b75",
//                                 "alternateColor": "ffffff",
//                                 "isActive": true,
//                                 "venue": {
//                                     "id": "3812"
//                                 },
//                                 "links": [
//                                     {
//                                         "rel": [
//                                             "clubhouse",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/_/name/ind/indianapolis-colts",
//                                         "text": "Clubhouse",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "roster",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/roster/_/name/ind/indianapolis-colts",
//                                         "text": "Roster",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "stats",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/stats/_/name/ind/indianapolis-colts",
//                                         "text": "Statistics",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "schedule",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/schedule/_/name/ind",
//                                         "text": "Schedule",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     }
//                                 ],
//                                 "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/ind.png"
//                             },
//                             "score": "38",
//                             "linescores": [
//                                 {
//                                     "value": 14
//                                 },
//                                 {
//                                     "value": 7
//                                 },
//                                 {
//                                     "value": 7
//                                 },
//                                 {
//                                     "value": 10
//                                 }
//                             ],
//                             "statistics": [],
//                             "records": [
//                                 {
//                                     "name": "overall",
//                                     "abbreviation": "Game",
//                                     "type": "total",
//                                     "summary": "3-4"
//                                 },
//                                 {
//                                     "name": "Home",
//                                     "type": "home",
//                                     "summary": "1-3"
//                                 },
//                                 {
//                                     "name": "Road",
//                                     "type": "road",
//                                     "summary": "2-1"
//                                 }
//                             ]
//                         },
//                         {
//                             "id": "5",
//                             "uid": "s:20~l:28~t:5",
//                             "type": "team",
//                             "order": 1,
//                             "homeAway": "away",
//                             "winner": true,
//                             "team": {
//                                 "id": "5",
//                                 "uid": "s:20~l:28~t:5",
//                                 "location": "Cleveland",
//                                 "name": "Browns",
//                                 "abbreviation": "CLE",
//                                 "displayName": "Cleveland Browns",
//                                 "shortDisplayName": "Browns",
//                                 "color": "472a08",
//                                 "alternateColor": "ff3c00",
//                                 "isActive": true,
//                                 "venue": {
//                                     "id": "3679"
//                                 },
//                                 "links": [
//                                     {
//                                         "rel": [
//                                             "clubhouse",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/_/name/cle/cleveland-browns",
//                                         "text": "Clubhouse",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "roster",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/roster/_/name/cle/cleveland-browns",
//                                         "text": "Roster",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "stats",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/stats/_/name/cle/cleveland-browns",
//                                         "text": "Statistics",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "schedule",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/schedule/_/name/cle",
//                                         "text": "Schedule",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     }
//                                 ],
//                                 "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/cle.png"
//                             },
//                             "score": "39",
//                             "linescores": [
//                                 {
//                                     "value": 7
//                                 },
//                                 {
//                                     "value": 20
//                                 },
//                                 {
//                                     "value": 3
//                                 },
//                                 {
//                                     "value": 9
//                                 }
//                             ],
//                             "statistics": [],
//                             "records": [
//                                 {
//                                     "name": "overall",
//                                     "abbreviation": "Game",
//                                     "type": "total",
//                                     "summary": "4-2"
//                                 },
//                                 {
//                                     "name": "Home",
//                                     "type": "home",
//                                     "summary": "3-1"
//                                 },
//                                 {
//                                     "name": "Road",
//                                     "type": "road",
//                                     "summary": "1-1"
//                                 }
//                             ]
//                         }
//                     ],
//                     "notes": [],
//                     "status": {
//                         "clock": 0,
//                         "displayClock": "0:00",
//                         "period": 4,
//                         "type": {
//                             "id": "3",
//                             "name": "STATUS_FINAL",
//                             "state": "post",
//                             "completed": true,
//                             "description": "Final",
//                             "detail": "Final",
//                             "shortDetail": "Final"
//                         }
//                     },
//                     "broadcasts": [
//                         {
//                             "market": "national",
//                             "names": [
//                                 "CBS"
//                             ]
//                         }
//                     ],
//                     "leaders": [
//                         {
//                             "name": "passingYards",
//                             "displayName": "Passing Leader",
//                             "shortDisplayName": "PASS",
//                             "abbreviation": "PYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "305 YDS, 2 TD, 1 INT",
//                                     "value": 305,
//                                     "athlete": {
//                                         "id": "4038524",
//                                         "fullName": "Gardner Minshew",
//                                         "displayName": "Gardner Minshew",
//                                         "shortName": "G. Minshew",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/4038524/gardner-minshew"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/4038524.png",
//                                         "jersey": "10",
//                                         "position": {
//                                             "abbreviation": "QB"
//                                         },
//                                         "team": {
//                                             "id": "11"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "11"
//                                     }
//                                 }
//                             ]
//                         },
//                         {
//                             "name": "rushingYards",
//                             "displayName": "Rushing Leader",
//                             "shortDisplayName": "RUSH",
//                             "abbreviation": "RYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "18 CAR, 75 YDS, 1 TD",
//                                     "value": 75,
//                                     "athlete": {
//                                         "id": "4242335",
//                                         "fullName": "Jonathan Taylor",
//                                         "displayName": "Jonathan Taylor",
//                                         "shortName": "J. Taylor",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/4242335/jonathan-taylor"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/4242335.png",
//                                         "jersey": "28",
//                                         "position": {
//                                             "abbreviation": "RB"
//                                         },
//                                         "team": {
//                                             "id": "11"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "11"
//                                     }
//                                 }
//                             ]
//                         },
//                         {
//                             "name": "receivingYards",
//                             "displayName": "Receiving Leader",
//                             "shortDisplayName": "REC",
//                             "abbreviation": "RECYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "5 REC, 125 YDS, 1 TD",
//                                     "value": 125,
//                                     "athlete": {
//                                         "id": "4688813",
//                                         "fullName": "Josh Downs",
//                                         "displayName": "Josh Downs",
//                                         "shortName": "J. Downs",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/4688813/josh-downs"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/4688813.png",
//                                         "jersey": "1",
//                                         "position": {
//                                             "abbreviation": "WR"
//                                         },
//                                         "team": {
//                                             "id": "11"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "11"
//                                     }
//                                 }
//                             ]
//                         }
//                     ],
//                     "format": {
//                         "regulation": {
//                             "periods": 4
//                         }
//                     },
//                     "startDate": "2023-10-22T17:00Z",
//                     "geoBroadcasts": [
//                         {
//                             "type": {
//                                 "id": "1",
//                                 "shortName": "TV"
//                             },
//                             "market": {
//                                 "id": "1",
//                                 "type": "National"
//                             },
//                             "media": {
//                                 "shortName": "CBS"
//                             },
//                             "lang": "en",
//                             "region": "us"
//                         }
//                     ],
//                     "headlines": [
//                         {
//                             "description": "— Kareem Hunt and Myles Garrett flexed their muscles, P.J. Walker relied on true grit in place of Deshaun Watston and Dustin Hopkins' strong leg kept the Cleveland Browns kicking on all cylinders.",
//                             "type": "Recap",
//                             "shortLinkText": "Kareem Hunt's late TD helps Browns rally past Colts 39-38 in topsy-turvy game",
//                             "video": [
//                                 {
//                                     "id": 38719887,
//                                     "source": "espn",
//                                     "headline": "Kareem Hunt powers in late go-ahead TD for Browns",
//                                     "thumbnail": "https://a.espncdn.com/media/motion/2023/1022/dm_231022_hunt_td/dm_231022_hunt_td.jpg",
//                                     "duration": 22,
//                                     "tracking": {
//                                         "sportName": "nfl",
//                                         "leagueName": "No League",
//                                         "coverageType": "Final Game Highlight",
//                                         "trackingName": "*UNPUB 10/24 4p* NFL_One-Play (Kareem Hunt powers in late go-ahead TD for Browns) 2023/10/22 ESHEET",
//                                         "trackingId": "dm_231022_hunt_td"
//                                     },
//                                     "deviceRestrictions": {
//                                         "type": "whitelist",
//                                         "devices": [
//                                             "desktop",
//                                             "settop",
//                                             "handset",
//                                             "tablet"
//                                         ]
//                                     },
//                                     "links": {
//                                         "api": {
//                                             "self": {
//                                                 "href": "http://api.espn.com/v1/video/clips/38719887"
//                                             },
//                                             "artwork": {
//                                                 "href": "https://artwork.api.espn.com/artwork/collections/media/693b396d-7630-44a3-9e3c-cab52765d1c6"
//                                             }
//                                         },
//                                         "web": {
//                                             "href": "https://www.espn.com/video/clip?id=38719887&ex_cid=espnapi_internal",
//                                             "short": {
//                                                 "href": "https://www.espn.com/video/clip?id=38719887"
//                                             },
//                                             "self": {
//                                                 "href": "https://www.espn.com/video/clip?id=38719887&ex_cid=espnapi_internal"
//                                             }
//                                         },
//                                         "source": {
//                                             "mezzanine": {
//                                                 "href": "https://media.video-origin.espn.com/espnvideo/2023/1022/dm_231022_hunt_td/dm_231022_hunt_td.mp4"
//                                             },
//                                             "flash": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_hunt_td/dm_231022_hunt_td.smil"
//                                             },
//                                             "hds": {
//                                                 "href": "https://hds.video-cdn.espn.com/z/motion/2023/1022/dm_231022_hunt_td/dm_231022_hunt_td_rel.smil/manifest.f4m"
//                                             },
//                                             "HLS": {
//                                                 "href": "https://service-pkgespn.akamaized.net/opp/hls/espn/2023/1022/dm_231022_hunt_td/dm_231022_hunt_td/playlist.m3u8",
//                                                 "HD": {
//                                                     "href": "https://service-pkgespn.akamaized.net/opp/hls/espn/2023/1022/dm_231022_hunt_td/dm_231022_hunt_td/playlist.m3u8"
//                                                 }
//                                             },
//                                             "HD": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_hunt_td/dm_231022_hunt_td_720p30_2896k.mp4"
//                                             },
//                                             "full": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_hunt_td/dm_231022_hunt_td_360p30_1464k.mp4"
//                                             },
//                                             "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_hunt_td/dm_231022_hunt_td_360p30_1464k.mp4"
//                                         },
//                                         "mobile": {
//                                             "alert": {
//                                                 "href": "http://m.espn.go.com/general/video/videoAlert?vid=38719887&ex_cid=espnapi_internal"
//                                             },
//                                             "source": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_hunt_td/dm_231022_hunt_td.mp4"
//                                             },
//                                             "href": "https://watch.auth.api.espn.com/video/auth/brightcove/693b396d-7630-44a3-9e3c-cab52765d1c6/asset?UMADPARAMreferer=http://www.espn.com/video/clip?id=38719887",
//                                             "streaming": {
//                                                 "href": "https://watch.auth.api.espn.com/video/auth/brightcove/693b396d-7630-44a3-9e3c-cab52765d1c6/asset?UMADPARAMreferer=http://www.espn.com/video/clip?id=38719887"
//                                             },
//                                             "progressiveDownload": {
//                                                 "href": "https://watch.auth.api.espn.com/video/auth/brightcove/693b396d-7630-44a3-9e3c-cab52765d1c6/asset?UMADPARAMreferer=http://www.espn.com/video/clip?id=38719887"
//                                             }
//                                         }
//                                     }
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ],
//             "links": [
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "summary",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/game/_/gameId/401547484",
//                     "text": "Gamecast",
//                     "shortText": "Gamecast",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "boxscore",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/boxscore/_/gameId/401547484",
//                     "text": "Box Score",
//                     "shortText": "Box Score",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "highlights",
//                         "desktop"
//                     ],
//                     "href": "https://www.espn.com/nfl/video?gameId=401547484",
//                     "text": "Highlights",
//                     "shortText": "Highlights",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "pbp",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/playbyplay/_/gameId/401547484",
//                     "text": "Play-by-Play",
//                     "shortText": "Play-by-Play",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "recap",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/recap?gameId=401547484",
//                     "text": "Recap",
//                     "shortText": "Recap",
//                     "isExternal": false,
//                     "isPremium": false
//                 }
//             ],
//             "status": {
//                 "clock": 0,
//                 "displayClock": "0:00",
//                 "period": 4,
//                 "type": {
//                     "id": "3",
//                     "name": "STATUS_FINAL",
//                     "state": "post",
//                     "completed": true,
//                     "description": "Final",
//                     "detail": "Final",
//                     "shortDetail": "Final"
//                 }
//             }
//         },
//         {
//             "id": "401547485",
//             "uid": "s:20~l:28~e:401547485",
//             "date": "2023-10-22T17:00Z",
//             "name": "Buffalo Bills at New England Patriots",
//             "shortName": "BUF @ NE",
//             "season": {
//                 "year": 2023,
//                 "type": 2,
//                 "slug": "regular-season"
//             },
//             "week": {
//                 "number": 7
//             },
//             "competitions": [
//                 {
//                     "id": "401547485",
//                     "uid": "s:20~l:28~e:401547485~c:401547485",
//                     "date": "2023-10-22T17:00Z",
//                     "attendance": 64628,
//                     "type": {
//                         "id": "1",
//                         "abbreviation": "STD"
//                     },
//                     "timeValid": true,
//                     "neutralSite": false,
//                     "conferenceCompetition": false,
//                     "playByPlayAvailable": true,
//                     "recent": false,
//                     "venue": {
//                         "id": "3738",
//                         "fullName": "Gillette Stadium",
//                         "address": {
//                             "city": "Foxborough",
//                             "state": "MA"
//                         },
//                         "capacity": 64628,
//                         "indoor": false
//                     },
//                     "competitors": [
//                         {
//                             "id": "17",
//                             "uid": "s:20~l:28~t:17",
//                             "type": "team",
//                             "order": 0,
//                             "homeAway": "home",
//                             "winner": true,
//                             "team": {
//                                 "id": "17",
//                                 "uid": "s:20~l:28~t:17",
//                                 "location": "New England",
//                                 "name": "Patriots",
//                                 "abbreviation": "NE",
//                                 "displayName": "New England Patriots",
//                                 "shortDisplayName": "Patriots",
//                                 "color": "002a5c",
//                                 "alternateColor": "c60c30",
//                                 "isActive": true,
//                                 "venue": {
//                                     "id": "3738"
//                                 },
//                                 "links": [
//                                     {
//                                         "rel": [
//                                             "clubhouse",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/_/name/ne/new-england-patriots",
//                                         "text": "Clubhouse",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "roster",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/roster/_/name/ne/new-england-patriots",
//                                         "text": "Roster",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "stats",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/stats/_/name/ne/new-england-patriots",
//                                         "text": "Statistics",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "schedule",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/schedule/_/name/ne",
//                                         "text": "Schedule",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     }
//                                 ],
//                                 "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/ne.png"
//                             },
//                             "score": "29",
//                             "linescores": [
//                                 {
//                                     "value": 10
//                                 },
//                                 {
//                                     "value": 3
//                                 },
//                                 {
//                                     "value": 3
//                                 },
//                                 {
//                                     "value": 13
//                                 }
//                             ],
//                             "statistics": [],
//                             "records": [
//                                 {
//                                     "name": "overall",
//                                     "abbreviation": "Game",
//                                     "type": "total",
//                                     "summary": "2-5"
//                                 },
//                                 {
//                                     "name": "Home",
//                                     "type": "home",
//                                     "summary": "1-3"
//                                 },
//                                 {
//                                     "name": "Road",
//                                     "type": "road",
//                                     "summary": "1-2"
//                                 }
//                             ]
//                         },
//                         {
//                             "id": "2",
//                             "uid": "s:20~l:28~t:2",
//                             "type": "team",
//                             "order": 1,
//                             "homeAway": "away",
//                             "winner": false,
//                             "team": {
//                                 "id": "2",
//                                 "uid": "s:20~l:28~t:2",
//                                 "location": "Buffalo",
//                                 "name": "Bills",
//                                 "abbreviation": "BUF",
//                                 "displayName": "Buffalo Bills",
//                                 "shortDisplayName": "Bills",
//                                 "color": "00338d",
//                                 "alternateColor": "d50a0a",
//                                 "isActive": true,
//                                 "venue": {
//                                     "id": "3883"
//                                 },
//                                 "links": [
//                                     {
//                                         "rel": [
//                                             "clubhouse",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/_/name/buf/buffalo-bills",
//                                         "text": "Clubhouse",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "roster",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/roster/_/name/buf/buffalo-bills",
//                                         "text": "Roster",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "stats",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/stats/_/name/buf/buffalo-bills",
//                                         "text": "Statistics",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "schedule",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/schedule/_/name/buf",
//                                         "text": "Schedule",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     }
//                                 ],
//                                 "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/buf.png"
//                             },
//                             "score": "25",
//                             "linescores": [
//                                 {
//                                     "value": 0
//                                 },
//                                 {
//                                     "value": 3
//                                 },
//                                 {
//                                     "value": 7
//                                 },
//                                 {
//                                     "value": 15
//                                 }
//                             ],
//                             "statistics": [],
//                             "records": [
//                                 {
//                                     "name": "overall",
//                                     "abbreviation": "Game",
//                                     "type": "total",
//                                     "summary": "4-3"
//                                 },
//                                 {
//                                     "name": "Home",
//                                     "type": "home",
//                                     "summary": "3-1"
//                                 },
//                                 {
//                                     "name": "Road",
//                                     "type": "road",
//                                     "summary": "1-2"
//                                 }
//                             ]
//                         }
//                     ],
//                     "notes": [],
//                     "status": {
//                         "clock": 0,
//                         "displayClock": "0:00",
//                         "period": 4,
//                         "type": {
//                             "id": "3",
//                             "name": "STATUS_FINAL",
//                             "state": "post",
//                             "completed": true,
//                             "description": "Final",
//                             "detail": "Final",
//                             "shortDetail": "Final"
//                         }
//                     },
//                     "broadcasts": [
//                         {
//                             "market": "national",
//                             "names": [
//                                 "CBS"
//                             ]
//                         }
//                     ],
//                     "leaders": [
//                         {
//                             "name": "passingYards",
//                             "displayName": "Passing Leader",
//                             "shortDisplayName": "PASS",
//                             "abbreviation": "PYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "272 YDS, 2 TD",
//                                     "value": 272,
//                                     "athlete": {
//                                         "id": "4241464",
//                                         "fullName": "Mac Jones",
//                                         "displayName": "Mac Jones",
//                                         "shortName": "M. Jones",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/4241464/mac-jones"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/4241464.png",
//                                         "jersey": "10",
//                                         "position": {
//                                             "abbreviation": "QB"
//                                         },
//                                         "team": {
//                                             "id": "17"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "17"
//                                     }
//                                 }
//                             ]
//                         },
//                         {
//                             "name": "rushingYards",
//                             "displayName": "Rushing Leader",
//                             "shortDisplayName": "RUSH",
//                             "abbreviation": "RYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "13 CAR, 56 YDS",
//                                     "value": 56,
//                                     "athlete": {
//                                         "id": "4379399",
//                                         "fullName": "James Cook",
//                                         "displayName": "James Cook",
//                                         "shortName": "J. Cook",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/4379399/james-cook"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/4379399.png",
//                                         "jersey": "4",
//                                         "position": {
//                                             "abbreviation": "RB"
//                                         },
//                                         "team": {
//                                             "id": "2"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "2"
//                                     }
//                                 }
//                             ]
//                         },
//                         {
//                             "name": "receivingYards",
//                             "displayName": "Receiving Leader",
//                             "shortDisplayName": "REC",
//                             "abbreviation": "RECYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "8 REC, 75 YDS",
//                                     "value": 75,
//                                     "athlete": {
//                                         "id": "4385690",
//                                         "fullName": "Dalton Kincaid",
//                                         "displayName": "Dalton Kincaid",
//                                         "shortName": "D. Kincaid",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/4385690/dalton-kincaid"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/4385690.png",
//                                         "jersey": "86",
//                                         "position": {
//                                             "abbreviation": "TE"
//                                         },
//                                         "team": {
//                                             "id": "2"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "2"
//                                     }
//                                 }
//                             ]
//                         }
//                     ],
//                     "format": {
//                         "regulation": {
//                             "periods": 4
//                         }
//                     },
//                     "startDate": "2023-10-22T17:00Z",
//                     "geoBroadcasts": [
//                         {
//                             "type": {
//                                 "id": "1",
//                                 "shortName": "TV"
//                             },
//                             "market": {
//                                 "id": "1",
//                                 "type": "National"
//                             },
//                             "media": {
//                                 "shortName": "CBS"
//                             },
//                             "lang": "en",
//                             "region": "us"
//                         }
//                     ],
//                     "headlines": [
//                         {
//                             "description": "— Bill Belichick will wait for another day to talk about the latest milestone win of his coaching career.",
//                             "type": "Recap",
//                             "shortLinkText": "Mac Jones' late TD pass lifts Patriots over Bills 29-25; Bill Belichick is 3rd coach with 300 wins",
//                             "video": [
//                                 {
//                                     "id": 38719508,
//                                     "source": "espn",
//                                     "headline": "Pats take lead in final seconds as Mac Jones finds Mike Gesicki for a TD",
//                                     "thumbnail": "https://a.espncdn.com/media/motion/2023/1022/dm_231022_Pats_take_lead971/dm_231022_Pats_take_lead971.jpg",
//                                     "duration": 21,
//                                     "tracking": {
//                                         "sportName": "nfl",
//                                         "leagueName": "No League",
//                                         "coverageType": "Final Game Highlight",
//                                         "trackingName": "*UNPUB 10/24* NFL_One-Play (Pats take lead in final seconds as Mac Jones finds Mike Gesicki for a TD) 2023/10/22 ESHEET",
//                                         "trackingId": "dm_231022_Pats_take_lead"
//                                     },
//                                     "deviceRestrictions": {
//                                         "type": "whitelist",
//                                         "devices": [
//                                             "desktop",
//                                             "settop",
//                                             "handset",
//                                             "tablet"
//                                         ]
//                                     },
//                                     "links": {
//                                         "api": {
//                                             "self": {
//                                                 "href": "http://api.espn.com/v1/video/clips/38719508"
//                                             },
//                                             "artwork": {
//                                                 "href": "https://artwork.api.espn.com/artwork/collections/media/52c148b7-c05d-48c0-bd29-1e1c83d6e394"
//                                             }
//                                         },
//                                         "web": {
//                                             "href": "https://www.espn.com/video/clip?id=38719508&ex_cid=espnapi_internal",
//                                             "short": {
//                                                 "href": "https://www.espn.com/video/clip?id=38719508"
//                                             },
//                                             "self": {
//                                                 "href": "https://www.espn.com/video/clip?id=38719508&ex_cid=espnapi_internal"
//                                             }
//                                         },
//                                         "source": {
//                                             "mezzanine": {
//                                                 "href": "https://media.video-origin.espn.com/espnvideo/2023/1022/dm_231022_Pats_take_lead/dm_231022_Pats_take_lead.mp4"
//                                             },
//                                             "flash": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_Pats_take_lead/dm_231022_Pats_take_lead.smil"
//                                             },
//                                             "hds": {
//                                                 "href": "https://hds.video-cdn.espn.com/z/motion/2023/1022/dm_231022_Pats_take_lead/dm_231022_Pats_take_lead_rel.smil/manifest.f4m"
//                                             },
//                                             "HLS": {
//                                                 "href": "https://service-pkgespn.akamaized.net/opp/hls/espn/2023/1022/dm_231022_Pats_take_lead/dm_231022_Pats_take_lead/playlist.m3u8",
//                                                 "HD": {
//                                                     "href": "https://service-pkgespn.akamaized.net/opp/hls/espn/2023/1022/dm_231022_Pats_take_lead/dm_231022_Pats_take_lead/playlist.m3u8"
//                                                 }
//                                             },
//                                             "HD": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_Pats_take_lead/dm_231022_Pats_take_lead_720p30_2896k.mp4"
//                                             },
//                                             "full": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_Pats_take_lead/dm_231022_Pats_take_lead_360p30_1464k.mp4"
//                                             },
//                                             "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_Pats_take_lead/dm_231022_Pats_take_lead_360p30_1464k.mp4"
//                                         },
//                                         "mobile": {
//                                             "alert": {
//                                                 "href": "http://m.espn.go.com/general/video/videoAlert?vid=38719508&ex_cid=espnapi_internal"
//                                             },
//                                             "source": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_Pats_take_lead/dm_231022_Pats_take_lead.mp4"
//                                             },
//                                             "href": "https://watch.auth.api.espn.com/video/auth/brightcove/52c148b7-c05d-48c0-bd29-1e1c83d6e394/asset?UMADPARAMreferer=http://www.espn.com/video/clip?id=38719508",
//                                             "streaming": {
//                                                 "href": "https://watch.auth.api.espn.com/video/auth/brightcove/52c148b7-c05d-48c0-bd29-1e1c83d6e394/asset?UMADPARAMreferer=http://www.espn.com/video/clip?id=38719508"
//                                             },
//                                             "progressiveDownload": {
//                                                 "href": "https://watch.auth.api.espn.com/video/auth/brightcove/52c148b7-c05d-48c0-bd29-1e1c83d6e394/asset?UMADPARAMreferer=http://www.espn.com/video/clip?id=38719508"
//                                             }
//                                         }
//                                     }
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ],
//             "links": [
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "summary",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/game/_/gameId/401547485",
//                     "text": "Gamecast",
//                     "shortText": "Gamecast",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "boxscore",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/boxscore/_/gameId/401547485",
//                     "text": "Box Score",
//                     "shortText": "Box Score",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "highlights",
//                         "desktop"
//                     ],
//                     "href": "https://www.espn.com/nfl/video?gameId=401547485",
//                     "text": "Highlights",
//                     "shortText": "Highlights",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "pbp",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/playbyplay/_/gameId/401547485",
//                     "text": "Play-by-Play",
//                     "shortText": "Play-by-Play",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "recap",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/recap?gameId=401547485",
//                     "text": "Recap",
//                     "shortText": "Recap",
//                     "isExternal": false,
//                     "isPremium": false
//                 }
//             ],
//             "status": {
//                 "clock": 0,
//                 "displayClock": "0:00",
//                 "period": 4,
//                 "type": {
//                     "id": "3",
//                     "name": "STATUS_FINAL",
//                     "state": "post",
//                     "completed": true,
//                     "description": "Final",
//                     "detail": "Final",
//                     "shortDetail": "Final"
//                 }
//             }
//         },
//         {
//             "id": "401547486",
//             "uid": "s:20~l:28~e:401547486",
//             "date": "2023-10-22T17:00Z",
//             "name": "Washington Commanders at New York Giants",
//             "shortName": "WSH @ NYG",
//             "season": {
//                 "year": 2023,
//                 "type": 2,
//                 "slug": "regular-season"
//             },
//             "week": {
//                 "number": 7
//             },
//             "competitions": [
//                 {
//                     "id": "401547486",
//                     "uid": "s:20~l:28~e:401547486~c:401547486",
//                     "date": "2023-10-22T17:00Z",
//                     "attendance": 81671,
//                     "type": {
//                         "id": "1",
//                         "abbreviation": "STD"
//                     },
//                     "timeValid": true,
//                     "neutralSite": false,
//                     "conferenceCompetition": false,
//                     "playByPlayAvailable": true,
//                     "recent": false,
//                     "venue": {
//                         "id": "3839",
//                         "fullName": "MetLife Stadium",
//                         "address": {
//                             "city": "East Rutherford",
//                             "state": "NJ"
//                         },
//                         "capacity": 82500,
//                         "indoor": false
//                     },
//                     "competitors": [
//                         {
//                             "id": "19",
//                             "uid": "s:20~l:28~t:19",
//                             "type": "team",
//                             "order": 0,
//                             "homeAway": "home",
//                             "winner": true,
//                             "team": {
//                                 "id": "19",
//                                 "uid": "s:20~l:28~t:19",
//                                 "location": "New York",
//                                 "name": "Giants",
//                                 "abbreviation": "NYG",
//                                 "displayName": "New York Giants",
//                                 "shortDisplayName": "Giants",
//                                 "color": "003c7f",
//                                 "alternateColor": "c9243f",
//                                 "isActive": true,
//                                 "venue": {
//                                     "id": "3839"
//                                 },
//                                 "links": [
//                                     {
//                                         "rel": [
//                                             "clubhouse",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/_/name/nyg/new-york-giants",
//                                         "text": "Clubhouse",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "roster",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/roster/_/name/nyg/new-york-giants",
//                                         "text": "Roster",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "stats",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/stats/_/name/nyg/new-york-giants",
//                                         "text": "Statistics",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "schedule",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/schedule/_/name/nyg",
//                                         "text": "Schedule",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     }
//                                 ],
//                                 "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/nyg.png"
//                             },
//                             "score": "14",
//                             "linescores": [
//                                 {
//                                     "value": 0
//                                 },
//                                 {
//                                     "value": 14
//                                 },
//                                 {
//                                     "value": 0
//                                 },
//                                 {
//                                     "value": 0
//                                 }
//                             ],
//                             "statistics": [],
//                             "records": [
//                                 {
//                                     "name": "overall",
//                                     "abbreviation": "Game",
//                                     "type": "total",
//                                     "summary": "2-5"
//                                 },
//                                 {
//                                     "name": "Home",
//                                     "type": "home",
//                                     "summary": "1-2"
//                                 },
//                                 {
//                                     "name": "Road",
//                                     "type": "road",
//                                     "summary": "1-3"
//                                 }
//                             ]
//                         },
//                         {
//                             "id": "28",
//                             "uid": "s:20~l:28~t:28",
//                             "type": "team",
//                             "order": 1,
//                             "homeAway": "away",
//                             "winner": false,
//                             "team": {
//                                 "id": "28",
//                                 "uid": "s:20~l:28~t:28",
//                                 "location": "Washington",
//                                 "name": "Commanders",
//                                 "abbreviation": "WSH",
//                                 "displayName": "Washington Commanders",
//                                 "shortDisplayName": "Commanders",
//                                 "color": "5a1414",
//                                 "alternateColor": "ffb612",
//                                 "isActive": true,
//                                 "venue": {
//                                     "id": "3719"
//                                 },
//                                 "links": [
//                                     {
//                                         "rel": [
//                                             "clubhouse",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/_/name/wsh/washington-commanders",
//                                         "text": "Clubhouse",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "roster",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/roster/_/name/wsh/washington-commanders",
//                                         "text": "Roster",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "stats",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/stats/_/name/wsh/washington-commanders",
//                                         "text": "Statistics",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "schedule",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/schedule/_/name/wsh",
//                                         "text": "Schedule",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     }
//                                 ],
//                                 "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/wsh.png"
//                             },
//                             "score": "7",
//                             "linescores": [
//                                 {
//                                     "value": 0
//                                 },
//                                 {
//                                     "value": 0
//                                 },
//                                 {
//                                     "value": 7
//                                 },
//                                 {
//                                     "value": 0
//                                 }
//                             ],
//                             "statistics": [],
//                             "records": [
//                                 {
//                                     "name": "overall",
//                                     "abbreviation": "Game",
//                                     "type": "total",
//                                     "summary": "3-4"
//                                 },
//                                 {
//                                     "name": "Home",
//                                     "type": "home",
//                                     "summary": "1-2"
//                                 },
//                                 {
//                                     "name": "Road",
//                                     "type": "road",
//                                     "summary": "2-2"
//                                 }
//                             ]
//                         }
//                     ],
//                     "notes": [],
//                     "status": {
//                         "clock": 0,
//                         "displayClock": "0:00",
//                         "period": 4,
//                         "type": {
//                             "id": "3",
//                             "name": "STATUS_FINAL",
//                             "state": "post",
//                             "completed": true,
//                             "description": "Final",
//                             "detail": "Final",
//                             "shortDetail": "Final"
//                         }
//                     },
//                     "broadcasts": [
//                         {
//                             "market": "national",
//                             "names": [
//                                 "CBS"
//                             ]
//                         }
//                     ],
//                     "leaders": [
//                         {
//                             "name": "passingYards",
//                             "displayName": "Passing Leader",
//                             "shortDisplayName": "PASS",
//                             "abbreviation": "PYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "279 YDS, 2 TD",
//                                     "value": 279,
//                                     "athlete": {
//                                         "id": "14163",
//                                         "fullName": "Tyrod Taylor",
//                                         "displayName": "Tyrod Taylor",
//                                         "shortName": "T. Taylor",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/14163/tyrod-taylor"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/14163.png",
//                                         "jersey": "2",
//                                         "position": {
//                                             "abbreviation": "QB"
//                                         },
//                                         "team": {
//                                             "id": "19"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "19"
//                                     }
//                                 }
//                             ]
//                         },
//                         {
//                             "name": "rushingYards",
//                             "displayName": "Rushing Leader",
//                             "shortDisplayName": "RUSH",
//                             "abbreviation": "RYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "21 CAR, 77 YDS",
//                                     "value": 77,
//                                     "athlete": {
//                                         "id": "3929630",
//                                         "fullName": "Saquon Barkley",
//                                         "displayName": "Saquon Barkley",
//                                         "shortName": "S. Barkley",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/3929630/saquon-barkley"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/3929630.png",
//                                         "jersey": "26",
//                                         "position": {
//                                             "abbreviation": "RB"
//                                         },
//                                         "team": {
//                                             "id": "19"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "19"
//                                     }
//                                 }
//                             ]
//                         },
//                         {
//                             "name": "receivingYards",
//                             "displayName": "Receiving Leader",
//                             "shortDisplayName": "REC",
//                             "abbreviation": "RECYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "7 REC, 98 YDS, 1 TD",
//                                     "value": 98,
//                                     "athlete": {
//                                         "id": "2576925",
//                                         "fullName": "Darren Waller",
//                                         "displayName": "Darren Waller",
//                                         "shortName": "D. Waller",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/2576925/darren-waller"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/2576925.png",
//                                         "jersey": "12",
//                                         "position": {
//                                             "abbreviation": "TE"
//                                         },
//                                         "team": {
//                                             "id": "19"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "19"
//                                     }
//                                 }
//                             ]
//                         }
//                     ],
//                     "format": {
//                         "regulation": {
//                             "periods": 4
//                         }
//                     },
//                     "startDate": "2023-10-22T17:00Z",
//                     "geoBroadcasts": [
//                         {
//                             "type": {
//                                 "id": "1",
//                                 "shortName": "TV"
//                             },
//                             "market": {
//                                 "id": "1",
//                                 "type": "National"
//                             },
//                             "media": {
//                                 "shortName": "CBS"
//                             },
//                             "lang": "en",
//                             "region": "us"
//                         }
//                     ],
//                     "headlines": [
//                         {
//                             "description": "— The way the New York Giants have played defense the past few weeks, their inept offense can take the rest of the season to figure things out and coach Brian Daboll's team will still have a chance for more victories.",
//                             "type": "Recap",
//                             "shortLinkText": "Giants defense stifles Commanders, makes late stand to end 4-game skid in 14-7 win",
//                             "video": [
//                                 {
//                                     "id": 38719637,
//                                     "source": "espn",
//                                     "headline": "Giants celebrate as they get 4th down stop for the win",
//                                     "thumbnail": "https://a.espncdn.com/media/motion/2023/1022/dm_231022_Giants_fourth_down_stop/dm_231022_Giants_fourth_down_stop.jpg",
//                                     "duration": 26,
//                                     "tracking": {
//                                         "sportName": "nfl",
//                                         "leagueName": "No League",
//                                         "coverageType": "Final Game Highlight",
//                                         "trackingName": "*UNPUB 10/24* NFL_One-Play (Giants celebrate as they get 4th down stop for the win) 2023/10/22 ESHEET",
//                                         "trackingId": "dm_231022_Giants_fourth_down_stop"
//                                     },
//                                     "deviceRestrictions": {
//                                         "type": "whitelist",
//                                         "devices": [
//                                             "desktop",
//                                             "settop",
//                                             "handset",
//                                             "tablet"
//                                         ]
//                                     },
//                                     "links": {
//                                         "api": {
//                                             "self": {
//                                                 "href": "http://api.espn.com/v1/video/clips/38719637"
//                                             },
//                                             "artwork": {
//                                                 "href": "https://artwork.api.espn.com/artwork/collections/media/baac60c8-0e35-4040-8873-964e0710a0f1"
//                                             }
//                                         },
//                                         "web": {
//                                             "href": "https://www.espn.com/video/clip?id=38719637&ex_cid=espnapi_internal",
//                                             "short": {
//                                                 "href": "https://www.espn.com/video/clip?id=38719637"
//                                             },
//                                             "self": {
//                                                 "href": "https://www.espn.com/video/clip?id=38719637&ex_cid=espnapi_internal"
//                                             }
//                                         },
//                                         "source": {
//                                             "mezzanine": {
//                                                 "href": "https://media.video-origin.espn.com/espnvideo/2023/1022/dm_231022_Giants_fourth_down_stop/dm_231022_Giants_fourth_down_stop.mp4"
//                                             },
//                                             "flash": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_Giants_fourth_down_stop/dm_231022_Giants_fourth_down_stop.smil"
//                                             },
//                                             "hds": {
//                                                 "href": "https://hds.video-cdn.espn.com/z/motion/2023/1022/dm_231022_Giants_fourth_down_stop/dm_231022_Giants_fourth_down_stop_rel.smil/manifest.f4m"
//                                             },
//                                             "HLS": {
//                                                 "href": "https://service-pkgespn.akamaized.net/opp/hls/espn/2023/1022/dm_231022_Giants_fourth_down_stop/dm_231022_Giants_fourth_down_stop/playlist.m3u8",
//                                                 "HD": {
//                                                     "href": "https://service-pkgespn.akamaized.net/opp/hls/espn/2023/1022/dm_231022_Giants_fourth_down_stop/dm_231022_Giants_fourth_down_stop/playlist.m3u8"
//                                                 }
//                                             },
//                                             "HD": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_Giants_fourth_down_stop/dm_231022_Giants_fourth_down_stop_720p30_2896k.mp4"
//                                             },
//                                             "full": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_Giants_fourth_down_stop/dm_231022_Giants_fourth_down_stop_360p30_1464k.mp4"
//                                             },
//                                             "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_Giants_fourth_down_stop/dm_231022_Giants_fourth_down_stop_360p30_1464k.mp4"
//                                         },
//                                         "mobile": {
//                                             "alert": {
//                                                 "href": "http://m.espn.go.com/general/video/videoAlert?vid=38719637&ex_cid=espnapi_internal"
//                                             },
//                                             "source": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_Giants_fourth_down_stop/dm_231022_Giants_fourth_down_stop.mp4"
//                                             },
//                                             "href": "https://watch.auth.api.espn.com/video/auth/brightcove/baac60c8-0e35-4040-8873-964e0710a0f1/asset?UMADPARAMreferer=http://www.espn.com/video/clip?id=38719637",
//                                             "streaming": {
//                                                 "href": "https://watch.auth.api.espn.com/video/auth/brightcove/baac60c8-0e35-4040-8873-964e0710a0f1/asset?UMADPARAMreferer=http://www.espn.com/video/clip?id=38719637"
//                                             },
//                                             "progressiveDownload": {
//                                                 "href": "https://watch.auth.api.espn.com/video/auth/brightcove/baac60c8-0e35-4040-8873-964e0710a0f1/asset?UMADPARAMreferer=http://www.espn.com/video/clip?id=38719637"
//                                             }
//                                         }
//                                     }
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ],
//             "links": [
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "summary",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/game/_/gameId/401547486",
//                     "text": "Gamecast",
//                     "shortText": "Gamecast",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "boxscore",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/boxscore/_/gameId/401547486",
//                     "text": "Box Score",
//                     "shortText": "Box Score",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "highlights",
//                         "desktop"
//                     ],
//                     "href": "https://www.espn.com/nfl/video?gameId=401547486",
//                     "text": "Highlights",
//                     "shortText": "Highlights",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "pbp",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/playbyplay/_/gameId/401547486",
//                     "text": "Play-by-Play",
//                     "shortText": "Play-by-Play",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "recap",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/recap?gameId=401547486",
//                     "text": "Recap",
//                     "shortText": "Recap",
//                     "isExternal": false,
//                     "isPremium": false
//                 }
//             ],
//             "status": {
//                 "clock": 0,
//                 "displayClock": "0:00",
//                 "period": 4,
//                 "type": {
//                     "id": "3",
//                     "name": "STATUS_FINAL",
//                     "state": "post",
//                     "completed": true,
//                     "description": "Final",
//                     "detail": "Final",
//                     "shortDetail": "Final"
//                 }
//             }
//         },
//         {
//             "id": "401547491",
//             "uid": "s:20~l:28~e:401547491",
//             "date": "2023-10-22T17:00Z",
//             "name": "Atlanta Falcons at Tampa Bay Buccaneers",
//             "shortName": "ATL @ TB",
//             "season": {
//                 "year": 2023,
//                 "type": 2,
//                 "slug": "regular-season"
//             },
//             "week": {
//                 "number": 7
//             },
//             "competitions": [
//                 {
//                     "id": "401547491",
//                     "uid": "s:20~l:28~e:401547491~c:401547491",
//                     "date": "2023-10-22T17:00Z",
//                     "attendance": 62620,
//                     "type": {
//                         "id": "1",
//                         "abbreviation": "STD"
//                     },
//                     "timeValid": true,
//                     "neutralSite": false,
//                     "conferenceCompetition": false,
//                     "playByPlayAvailable": true,
//                     "recent": false,
//                     "venue": {
//                         "id": "3886",
//                         "fullName": "Raymond James Stadium",
//                         "address": {
//                             "city": "Tampa",
//                             "state": "FL"
//                         },
//                         "capacity": 65844,
//                         "indoor": false
//                     },
//                     "competitors": [
//                         {
//                             "id": "27",
//                             "uid": "s:20~l:28~t:27",
//                             "type": "team",
//                             "order": 0,
//                             "homeAway": "home",
//                             "winner": false,
//                             "team": {
//                                 "id": "27",
//                                 "uid": "s:20~l:28~t:27",
//                                 "location": "Tampa Bay",
//                                 "name": "Buccaneers",
//                                 "abbreviation": "TB",
//                                 "displayName": "Tampa Bay Buccaneers",
//                                 "shortDisplayName": "Buccaneers",
//                                 "color": "bd1c36",
//                                 "alternateColor": "3e3a35",
//                                 "isActive": true,
//                                 "venue": {
//                                     "id": "3886"
//                                 },
//                                 "links": [
//                                     {
//                                         "rel": [
//                                             "clubhouse",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/_/name/tb/tampa-bay-buccaneers",
//                                         "text": "Clubhouse",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "roster",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/roster/_/name/tb/tampa-bay-buccaneers",
//                                         "text": "Roster",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "stats",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/stats/_/name/tb/tampa-bay-buccaneers",
//                                         "text": "Statistics",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "schedule",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/schedule/_/name/tb",
//                                         "text": "Schedule",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     }
//                                 ],
//                                 "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/tb.png"
//                             },
//                             "score": "13",
//                             "linescores": [
//                                 {
//                                     "value": 7
//                                 },
//                                 {
//                                     "value": 3
//                                 },
//                                 {
//                                     "value": 0
//                                 },
//                                 {
//                                     "value": 3
//                                 }
//                             ],
//                             "statistics": [],
//                             "records": [
//                                 {
//                                     "name": "overall",
//                                     "abbreviation": "Game",
//                                     "type": "total",
//                                     "summary": "3-3"
//                                 },
//                                 {
//                                     "name": "Home",
//                                     "type": "home",
//                                     "summary": "1-3"
//                                 },
//                                 {
//                                     "name": "Road",
//                                     "type": "road",
//                                     "summary": "2-0"
//                                 }
//                             ]
//                         },
//                         {
//                             "id": "1",
//                             "uid": "s:20~l:28~t:1",
//                             "type": "team",
//                             "order": 1,
//                             "homeAway": "away",
//                             "winner": true,
//                             "team": {
//                                 "id": "1",
//                                 "uid": "s:20~l:28~t:1",
//                                 "location": "Atlanta",
//                                 "name": "Falcons",
//                                 "abbreviation": "ATL",
//                                 "displayName": "Atlanta Falcons",
//                                 "shortDisplayName": "Falcons",
//                                 "color": "a71930",
//                                 "alternateColor": "000000",
//                                 "isActive": true,
//                                 "venue": {
//                                     "id": "5348"
//                                 },
//                                 "links": [
//                                     {
//                                         "rel": [
//                                             "clubhouse",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/_/name/atl/atlanta-falcons",
//                                         "text": "Clubhouse",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "roster",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/roster/_/name/atl/atlanta-falcons",
//                                         "text": "Roster",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "stats",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/stats/_/name/atl/atlanta-falcons",
//                                         "text": "Statistics",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "schedule",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/schedule/_/name/atl",
//                                         "text": "Schedule",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     }
//                                 ],
//                                 "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/atl.png"
//                             },
//                             "score": "16",
//                             "linescores": [
//                                 {
//                                     "value": 7
//                                 },
//                                 {
//                                     "value": 3
//                                 },
//                                 {
//                                     "value": 3
//                                 },
//                                 {
//                                     "value": 3
//                                 }
//                             ],
//                             "statistics": [],
//                             "records": [
//                                 {
//                                     "name": "overall",
//                                     "abbreviation": "Game",
//                                     "type": "total",
//                                     "summary": "4-3"
//                                 },
//                                 {
//                                     "name": "Home",
//                                     "type": "home",
//                                     "summary": "3-1"
//                                 },
//                                 {
//                                     "name": "Road",
//                                     "type": "road",
//                                     "summary": "1-2"
//                                 }
//                             ]
//                         }
//                     ],
//                     "notes": [],
//                     "status": {
//                         "clock": 0,
//                         "displayClock": "0:00",
//                         "period": 4,
//                         "type": {
//                             "id": "3",
//                             "name": "STATUS_FINAL",
//                             "state": "post",
//                             "completed": true,
//                             "description": "Final",
//                             "detail": "Final",
//                             "shortDetail": "Final"
//                         }
//                     },
//                     "broadcasts": [
//                         {
//                             "market": "national",
//                             "names": [
//                                 "FOX"
//                             ]
//                         }
//                     ],
//                     "leaders": [
//                         {
//                             "name": "passingYards",
//                             "displayName": "Passing Leader",
//                             "shortDisplayName": "PASS",
//                             "abbreviation": "PYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "275 YDS, 1 TD, 1 INT",
//                                     "value": 275,
//                                     "athlete": {
//                                         "id": "3052587",
//                                         "fullName": "Baker Mayfield",
//                                         "displayName": "Baker Mayfield",
//                                         "shortName": "B. Mayfield",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/3052587/baker-mayfield"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/3052587.png",
//                                         "jersey": "6",
//                                         "position": {
//                                             "abbreviation": "QB"
//                                         },
//                                         "team": {
//                                             "id": "27"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "27"
//                                     }
//                                 }
//                             ]
//                         },
//                         {
//                             "name": "rushingYards",
//                             "displayName": "Rushing Leader",
//                             "shortDisplayName": "RUSH",
//                             "abbreviation": "RYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "21 CAR, 59 YDS",
//                                     "value": 59,
//                                     "athlete": {
//                                         "id": "4373626",
//                                         "fullName": "Tyler Allgeier",
//                                         "displayName": "Tyler Allgeier",
//                                         "shortName": "T. Allgeier",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/4373626/tyler-allgeier"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/4373626.png",
//                                         "jersey": "25",
//                                         "position": {
//                                             "abbreviation": "RB"
//                                         },
//                                         "team": {
//                                             "id": "1"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "1"
//                                     }
//                                 }
//                             ]
//                         },
//                         {
//                             "name": "receivingYards",
//                             "displayName": "Receiving Leader",
//                             "shortDisplayName": "REC",
//                             "abbreviation": "RECYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "6 REC, 82 YDS, 1 TD",
//                                     "value": 82,
//                                     "athlete": {
//                                         "id": "16737",
//                                         "fullName": "Mike Evans",
//                                         "displayName": "Mike Evans",
//                                         "shortName": "M. Evans",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/16737/mike-evans"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/16737.png",
//                                         "jersey": "13",
//                                         "position": {
//                                             "abbreviation": "WR"
//                                         },
//                                         "team": {
//                                             "id": "27"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "27"
//                                     }
//                                 }
//                             ]
//                         }
//                     ],
//                     "format": {
//                         "regulation": {
//                             "periods": 4
//                         }
//                     },
//                     "startDate": "2023-10-22T17:00Z",
//                     "geoBroadcasts": [
//                         {
//                             "type": {
//                                 "id": "1",
//                                 "shortName": "TV"
//                             },
//                             "market": {
//                                 "id": "1",
//                                 "type": "National"
//                             },
//                             "media": {
//                                 "shortName": "FOX"
//                             },
//                             "lang": "en",
//                             "region": "us"
//                         }
//                     ],
//                     "headlines": [
//                         {
//                             "description": "— Desmond Ridder and the mistake-prone Atlanta Falcons gave the Tampa Bay Buccaneers all kinds of opportunities to hang onto first place in the NFC South before showing why they believe they're a team headed in the right direction.",
//                             "type": "Recap",
//                             "shortLinkText": "Koo's game-ending 51-yard FG helps Falcons overcome Ridder's mistakes, beat Buccaneers 16-13",
//                             "video": [
//                                 {
//                                     "id": 38719647,
//                                     "source": "espn",
//                                     "headline": "Falcons walk-it-off on a Younghoe Koo FG",
//                                     "thumbnail": "https://a.espncdn.com/media/motion/2023/1022/dm_231022_Falcons_FG/dm_231022_Falcons_FG.jpg",
//                                     "duration": 36,
//                                     "tracking": {
//                                         "sportName": "nfl",
//                                         "leagueName": "No League",
//                                         "coverageType": "Final Game Highlight",
//                                         "trackingName": "*UNPUB 10/24* NFL_One-Play (Falcons walk-it-off on a Younghoe Koo FG) 2023/10/22 ESHEET",
//                                         "trackingId": "dm_231022_Falcons_FG"
//                                     },
//                                     "deviceRestrictions": {
//                                         "type": "whitelist",
//                                         "devices": [
//                                             "desktop",
//                                             "settop",
//                                             "handset",
//                                             "tablet"
//                                         ]
//                                     },
//                                     "links": {
//                                         "api": {
//                                             "self": {
//                                                 "href": "http://api.espn.com/v1/video/clips/38719647"
//                                             },
//                                             "artwork": {
//                                                 "href": "https://artwork.api.espn.com/artwork/collections/media/acce87af-68c9-4b15-a332-ad719d63cc4d"
//                                             }
//                                         },
//                                         "web": {
//                                             "href": "https://www.espn.com/video/clip?id=38719647&ex_cid=espnapi_internal",
//                                             "short": {
//                                                 "href": "https://www.espn.com/video/clip?id=38719647"
//                                             },
//                                             "self": {
//                                                 "href": "https://www.espn.com/video/clip?id=38719647&ex_cid=espnapi_internal"
//                                             }
//                                         },
//                                         "source": {
//                                             "mezzanine": {
//                                                 "href": "https://media.video-origin.espn.com/espnvideo/2023/1022/dm_231022_Falcons_FG/dm_231022_Falcons_FG.mp4"
//                                             },
//                                             "flash": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_Falcons_FG/dm_231022_Falcons_FG.smil"
//                                             },
//                                             "hds": {
//                                                 "href": "https://hds.video-cdn.espn.com/z/motion/2023/1022/dm_231022_Falcons_FG/dm_231022_Falcons_FG_rel.smil/manifest.f4m"
//                                             },
//                                             "HLS": {
//                                                 "href": "https://service-pkgespn.akamaized.net/opp/hls/espn/2023/1022/dm_231022_Falcons_FG/dm_231022_Falcons_FG/playlist.m3u8",
//                                                 "HD": {
//                                                     "href": "https://service-pkgespn.akamaized.net/opp/hls/espn/2023/1022/dm_231022_Falcons_FG/dm_231022_Falcons_FG/playlist.m3u8"
//                                                 }
//                                             },
//                                             "HD": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_Falcons_FG/dm_231022_Falcons_FG_720p30_2896k.mp4"
//                                             },
//                                             "full": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_Falcons_FG/dm_231022_Falcons_FG_360p30_1464k.mp4"
//                                             },
//                                             "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_Falcons_FG/dm_231022_Falcons_FG_360p30_1464k.mp4"
//                                         },
//                                         "mobile": {
//                                             "alert": {
//                                                 "href": "http://m.espn.go.com/general/video/videoAlert?vid=38719647&ex_cid=espnapi_internal"
//                                             },
//                                             "source": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_Falcons_FG/dm_231022_Falcons_FG.mp4"
//                                             },
//                                             "href": "https://watch.auth.api.espn.com/video/auth/brightcove/acce87af-68c9-4b15-a332-ad719d63cc4d/asset?UMADPARAMreferer=http://www.espn.com/video/clip?id=38719647",
//                                             "streaming": {
//                                                 "href": "https://watch.auth.api.espn.com/video/auth/brightcove/acce87af-68c9-4b15-a332-ad719d63cc4d/asset?UMADPARAMreferer=http://www.espn.com/video/clip?id=38719647"
//                                             },
//                                             "progressiveDownload": {
//                                                 "href": "https://watch.auth.api.espn.com/video/auth/brightcove/acce87af-68c9-4b15-a332-ad719d63cc4d/asset?UMADPARAMreferer=http://www.espn.com/video/clip?id=38719647"
//                                             }
//                                         }
//                                     }
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ],
//             "links": [
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "summary",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/game/_/gameId/401547491",
//                     "text": "Gamecast",
//                     "shortText": "Gamecast",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "boxscore",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/boxscore/_/gameId/401547491",
//                     "text": "Box Score",
//                     "shortText": "Box Score",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "highlights",
//                         "desktop"
//                     ],
//                     "href": "https://www.espn.com/nfl/video?gameId=401547491",
//                     "text": "Highlights",
//                     "shortText": "Highlights",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "pbp",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/playbyplay/_/gameId/401547491",
//                     "text": "Play-by-Play",
//                     "shortText": "Play-by-Play",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "recap",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/recap?gameId=401547491",
//                     "text": "Recap",
//                     "shortText": "Recap",
//                     "isExternal": false,
//                     "isPremium": false
//                 }
//             ],
//             "status": {
//                 "clock": 0,
//                 "displayClock": "0:00",
//                 "period": 4,
//                 "type": {
//                     "id": "3",
//                     "name": "STATUS_FINAL",
//                     "state": "post",
//                     "completed": true,
//                     "description": "Final",
//                     "detail": "Final",
//                     "shortDetail": "Final"
//                 }
//             }
//         },
//         {
//             "id": "401547489",
//             "uid": "s:20~l:28~e:401547489",
//             "date": "2023-10-22T17:00Z",
//             "name": "Detroit Lions at Baltimore Ravens",
//             "shortName": "DET @ BAL",
//             "season": {
//                 "year": 2023,
//                 "type": 2,
//                 "slug": "regular-season"
//             },
//             "week": {
//                 "number": 7
//             },
//             "competitions": [
//                 {
//                     "id": "401547489",
//                     "uid": "s:20~l:28~e:401547489~c:401547489",
//                     "date": "2023-10-22T17:00Z",
//                     "attendance": 70989,
//                     "type": {
//                         "id": "1",
//                         "abbreviation": "STD"
//                     },
//                     "timeValid": true,
//                     "neutralSite": false,
//                     "conferenceCompetition": false,
//                     "playByPlayAvailable": true,
//                     "recent": false,
//                     "venue": {
//                         "id": "3814",
//                         "fullName": "M&T Bank Stadium",
//                         "address": {
//                             "city": "Baltimore",
//                             "state": "MD"
//                         },
//                         "capacity": 70745,
//                         "indoor": false
//                     },
//                     "competitors": [
//                         {
//                             "id": "33",
//                             "uid": "s:20~l:28~t:33",
//                             "type": "team",
//                             "order": 0,
//                             "homeAway": "home",
//                             "winner": true,
//                             "team": {
//                                 "id": "33",
//                                 "uid": "s:20~l:28~t:33",
//                                 "location": "Baltimore",
//                                 "name": "Ravens",
//                                 "abbreviation": "BAL",
//                                 "displayName": "Baltimore Ravens",
//                                 "shortDisplayName": "Ravens",
//                                 "color": "24135f",
//                                 "alternateColor": "9a7611",
//                                 "isActive": true,
//                                 "venue": {
//                                     "id": "3814"
//                                 },
//                                 "links": [
//                                     {
//                                         "rel": [
//                                             "clubhouse",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/_/name/bal/baltimore-ravens",
//                                         "text": "Clubhouse",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "roster",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/roster/_/name/bal/baltimore-ravens",
//                                         "text": "Roster",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "stats",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/stats/_/name/bal/baltimore-ravens",
//                                         "text": "Statistics",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "schedule",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/schedule/_/name/bal",
//                                         "text": "Schedule",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     }
//                                 ],
//                                 "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/bal.png"
//                             },
//                             "score": "38",
//                             "linescores": [
//                                 {
//                                     "value": 14
//                                 },
//                                 {
//                                     "value": 14
//                                 },
//                                 {
//                                     "value": 7
//                                 },
//                                 {
//                                     "value": 3
//                                 }
//                             ],
//                             "statistics": [],
//                             "records": [
//                                 {
//                                     "name": "overall",
//                                     "abbreviation": "Game",
//                                     "type": "total",
//                                     "summary": "5-2"
//                                 },
//                                 {
//                                     "name": "Home",
//                                     "type": "home",
//                                     "summary": "2-1"
//                                 },
//                                 {
//                                     "name": "Road",
//                                     "type": "road",
//                                     "summary": "3-1"
//                                 }
//                             ]
//                         },
//                         {
//                             "id": "8",
//                             "uid": "s:20~l:28~t:8",
//                             "type": "team",
//                             "order": 1,
//                             "homeAway": "away",
//                             "winner": false,
//                             "team": {
//                                 "id": "8",
//                                 "uid": "s:20~l:28~t:8",
//                                 "location": "Detroit",
//                                 "name": "Lions",
//                                 "abbreviation": "DET",
//                                 "displayName": "Detroit Lions",
//                                 "shortDisplayName": "Lions",
//                                 "color": "0076b6",
//                                 "alternateColor": "bbbbbb",
//                                 "isActive": true,
//                                 "venue": {
//                                     "id": "3727"
//                                 },
//                                 "links": [
//                                     {
//                                         "rel": [
//                                             "clubhouse",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/_/name/det/detroit-lions",
//                                         "text": "Clubhouse",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "roster",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/roster/_/name/det/detroit-lions",
//                                         "text": "Roster",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "stats",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/stats/_/name/det/detroit-lions",
//                                         "text": "Statistics",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "schedule",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/schedule/_/name/det",
//                                         "text": "Schedule",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     }
//                                 ],
//                                 "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/det.png"
//                             },
//                             "score": "6",
//                             "linescores": [
//                                 {
//                                     "value": 0
//                                 },
//                                 {
//                                     "value": 0
//                                 },
//                                 {
//                                     "value": 0
//                                 },
//                                 {
//                                     "value": 6
//                                 }
//                             ],
//                             "statistics": [],
//                             "records": [
//                                 {
//                                     "name": "overall",
//                                     "abbreviation": "Game",
//                                     "type": "total",
//                                     "summary": "5-2"
//                                 },
//                                 {
//                                     "name": "Home",
//                                     "type": "home",
//                                     "summary": "2-1"
//                                 },
//                                 {
//                                     "name": "Road",
//                                     "type": "road",
//                                     "summary": "3-1"
//                                 }
//                             ]
//                         }
//                     ],
//                     "notes": [],
//                     "status": {
//                         "clock": 0,
//                         "displayClock": "0:00",
//                         "period": 4,
//                         "type": {
//                             "id": "3",
//                             "name": "STATUS_FINAL",
//                             "state": "post",
//                             "completed": true,
//                             "description": "Final",
//                             "detail": "Final",
//                             "shortDetail": "Final"
//                         }
//                     },
//                     "broadcasts": [
//                         {
//                             "market": "national",
//                             "names": [
//                                 "FOX"
//                             ]
//                         }
//                     ],
//                     "leaders": [
//                         {
//                             "name": "passingYards",
//                             "displayName": "Passing Leader",
//                             "shortDisplayName": "PASS",
//                             "abbreviation": "PYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "357 YDS, 3 TD",
//                                     "value": 357,
//                                     "athlete": {
//                                         "id": "3916387",
//                                         "fullName": "Lamar Jackson",
//                                         "displayName": "Lamar Jackson",
//                                         "shortName": "L. Jackson",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/3916387/lamar-jackson"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/3916387.png",
//                                         "jersey": "8",
//                                         "position": {
//                                             "abbreviation": "QB"
//                                         },
//                                         "team": {
//                                             "id": "33"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "33"
//                                     }
//                                 }
//                             ]
//                         },
//                         {
//                             "name": "rushingYards",
//                             "displayName": "Rushing Leader",
//                             "shortDisplayName": "RUSH",
//                             "abbreviation": "RYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "11 CAR, 68 YDS, 1 TD",
//                                     "value": 68,
//                                     "athlete": {
//                                         "id": "4429795",
//                                         "fullName": "Jahmyr Gibbs",
//                                         "displayName": "Jahmyr Gibbs",
//                                         "shortName": "J. Gibbs",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/4429795/jahmyr-gibbs"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/4429795.png",
//                                         "jersey": "26",
//                                         "position": {
//                                             "abbreviation": "RB"
//                                         },
//                                         "team": {
//                                             "id": "8"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "8"
//                                     }
//                                 }
//                             ]
//                         },
//                         {
//                             "name": "receivingYards",
//                             "displayName": "Receiving Leader",
//                             "shortDisplayName": "REC",
//                             "abbreviation": "RECYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "13 REC, 102 YDS",
//                                     "value": 102,
//                                     "athlete": {
//                                         "id": "4374302",
//                                         "fullName": "Amon-Ra St. Brown",
//                                         "displayName": "Amon-Ra St. Brown",
//                                         "shortName": "A. St. Brown",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/4374302/amon-ra-st-brown"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/4374302.png",
//                                         "jersey": "14",
//                                         "position": {
//                                             "abbreviation": "WR"
//                                         },
//                                         "team": {
//                                             "id": "8"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "8"
//                                     }
//                                 }
//                             ]
//                         }
//                     ],
//                     "format": {
//                         "regulation": {
//                             "periods": 4
//                         }
//                     },
//                     "startDate": "2023-10-22T17:00Z",
//                     "geoBroadcasts": [
//                         {
//                             "type": {
//                                 "id": "1",
//                                 "shortName": "TV"
//                             },
//                             "market": {
//                                 "id": "1",
//                                 "type": "National"
//                             },
//                             "media": {
//                                 "shortName": "FOX"
//                             },
//                             "lang": "en",
//                             "region": "us"
//                         }
//                     ],
//                     "headlines": [
//                         {
//                             "description": "— When Lamar Jackson returned to Baltimore to play for new offensive coordinator Todd Monken, this was pretty much the best-case scenario — the star quarterback finding open receivers deep in the secondary, scrambling when needed and guiding the...",
//                             "type": "Recap",
//                             "shortLinkText": "Lamar Jackson almost flawless as Ravens rout Lions 38-6 in a matchup of division leaders",
//                             "video": [
//                                 {
//                                     "id": 38719475,
//                                     "source": "espn",
//                                     "headline": "Lamar Jackson picks up 4 TDs in dominant win",
//                                     "thumbnail": "https://a.espncdn.com/media/motion/2023/1022/dm_231022_Lamar_four_TDs_vs_Lions/dm_231022_Lamar_four_TDs_vs_Lions.jpg",
//                                     "duration": 86,
//                                     "tracking": {
//                                         "sportName": "nfl",
//                                         "leagueName": "No League",
//                                         "coverageType": "Final Game Highlight",
//                                         "trackingName": "*UNPUB 10/24* COM_NFL Highlight (Lamar Jackson picks up 4 TDs in dominant win) 2023/10/22 ESHEET SOTFULL",
//                                         "trackingId": "dm_231022_Lamar_four_TDs_vs_Lions"
//                                     },
//                                     "deviceRestrictions": {
//                                         "type": "whitelist",
//                                         "devices": [
//                                             "desktop",
//                                             "settop",
//                                             "handset",
//                                             "tablet"
//                                         ]
//                                     },
//                                     "links": {
//                                         "api": {
//                                             "self": {
//                                                 "href": "http://api.espn.com/v1/video/clips/38719475"
//                                             },
//                                             "artwork": {
//                                                 "href": "https://artwork.api.espn.com/artwork/collections/media/6f110ffc-8f29-4a83-af0c-809bf675ea95"
//                                             }
//                                         },
//                                         "web": {
//                                             "href": "https://www.espn.com/video/clip?id=38719475&ex_cid=espnapi_internal",
//                                             "short": {
//                                                 "href": "https://www.espn.com/video/clip?id=38719475"
//                                             },
//                                             "self": {
//                                                 "href": "https://www.espn.com/video/clip?id=38719475&ex_cid=espnapi_internal"
//                                             }
//                                         },
//                                         "source": {
//                                             "mezzanine": {
//                                                 "href": "https://media.video-origin.espn.com/espnvideo/2023/1022/dm_231022_Lamar_four_TDs_vs_Lions/dm_231022_Lamar_four_TDs_vs_Lions.mp4"
//                                             },
//                                             "flash": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_Lamar_four_TDs_vs_Lions/dm_231022_Lamar_four_TDs_vs_Lions.smil"
//                                             },
//                                             "hds": {
//                                                 "href": "https://hds.video-cdn.espn.com/z/motion/2023/1022/dm_231022_Lamar_four_TDs_vs_Lions/dm_231022_Lamar_four_TDs_vs_Lions_rel.smil/manifest.f4m"
//                                             },
//                                             "HLS": {
//                                                 "href": "https://service-pkgespn.akamaized.net/opp/hls/espn/2023/1022/dm_231022_Lamar_four_TDs_vs_Lions/dm_231022_Lamar_four_TDs_vs_Lions/playlist.m3u8",
//                                                 "HD": {
//                                                     "href": "https://service-pkgespn.akamaized.net/opp/hls/espn/2023/1022/dm_231022_Lamar_four_TDs_vs_Lions/dm_231022_Lamar_four_TDs_vs_Lions/playlist.m3u8"
//                                                 }
//                                             },
//                                             "HD": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_Lamar_four_TDs_vs_Lions/dm_231022_Lamar_four_TDs_vs_Lions_720p30_2896k.mp4"
//                                             },
//                                             "full": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_Lamar_four_TDs_vs_Lions/dm_231022_Lamar_four_TDs_vs_Lions_360p30_1464k.mp4"
//                                             },
//                                             "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_Lamar_four_TDs_vs_Lions/dm_231022_Lamar_four_TDs_vs_Lions_360p30_1464k.mp4"
//                                         },
//                                         "mobile": {
//                                             "alert": {
//                                                 "href": "http://m.espn.go.com/general/video/videoAlert?vid=38719475&ex_cid=espnapi_internal"
//                                             },
//                                             "source": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_Lamar_four_TDs_vs_Lions/dm_231022_Lamar_four_TDs_vs_Lions.mp4"
//                                             },
//                                             "href": "https://watch.auth.api.espn.com/video/auth/brightcove/6f110ffc-8f29-4a83-af0c-809bf675ea95/asset?UMADPARAMreferer=http://www.espn.com/video/clip?id=38719475",
//                                             "streaming": {
//                                                 "href": "https://watch.auth.api.espn.com/video/auth/brightcove/6f110ffc-8f29-4a83-af0c-809bf675ea95/asset?UMADPARAMreferer=http://www.espn.com/video/clip?id=38719475"
//                                             },
//                                             "progressiveDownload": {
//                                                 "href": "https://watch.auth.api.espn.com/video/auth/brightcove/6f110ffc-8f29-4a83-af0c-809bf675ea95/asset?UMADPARAMreferer=http://www.espn.com/video/clip?id=38719475"
//                                             }
//                                         }
//                                     }
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ],
//             "links": [
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "summary",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/game/_/gameId/401547489",
//                     "text": "Gamecast",
//                     "shortText": "Gamecast",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "boxscore",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/boxscore/_/gameId/401547489",
//                     "text": "Box Score",
//                     "shortText": "Box Score",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "highlights",
//                         "desktop"
//                     ],
//                     "href": "https://www.espn.com/nfl/video?gameId=401547489",
//                     "text": "Highlights",
//                     "shortText": "Highlights",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "pbp",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/playbyplay/_/gameId/401547489",
//                     "text": "Play-by-Play",
//                     "shortText": "Play-by-Play",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "recap",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/recap?gameId=401547489",
//                     "text": "Recap",
//                     "shortText": "Recap",
//                     "isExternal": false,
//                     "isPremium": false
//                 }
//             ],
//             "status": {
//                 "clock": 0,
//                 "displayClock": "0:00",
//                 "period": 4,
//                 "type": {
//                     "id": "3",
//                     "name": "STATUS_FINAL",
//                     "state": "post",
//                     "completed": true,
//                     "description": "Final",
//                     "detail": "Final",
//                     "shortDetail": "Final"
//                 }
//             }
//         },
//         {
//             "id": "401547492",
//             "uid": "s:20~l:28~e:401547492",
//             "date": "2023-10-22T20:05Z",
//             "name": "Pittsburgh Steelers at Los Angeles Rams",
//             "shortName": "PIT @ LAR",
//             "season": {
//                 "year": 2023,
//                 "type": 2,
//                 "slug": "regular-season"
//             },
//             "week": {
//                 "number": 7
//             },
//             "competitions": [
//                 {
//                     "id": "401547492",
//                     "uid": "s:20~l:28~e:401547492~c:401547492",
//                     "date": "2023-10-22T20:05Z",
//                     "attendance": 73471,
//                     "type": {
//                         "id": "1",
//                         "abbreviation": "STD"
//                     },
//                     "timeValid": true,
//                     "neutralSite": false,
//                     "conferenceCompetition": false,
//                     "playByPlayAvailable": true,
//                     "recent": false,
//                     "venue": {
//                         "id": "7065",
//                         "fullName": "SoFi Stadium",
//                         "address": {
//                             "city": "Inglewood",
//                             "state": "CA"
//                         },
//                         "capacity": 71500,
//                         "indoor": true
//                     },
//                     "competitors": [
//                         {
//                             "id": "14",
//                             "uid": "s:20~l:28~t:14",
//                             "type": "team",
//                             "order": 0,
//                             "homeAway": "home",
//                             "winner": false,
//                             "team": {
//                                 "id": "14",
//                                 "uid": "s:20~l:28~t:14",
//                                 "location": "Los Angeles",
//                                 "name": "Rams",
//                                 "abbreviation": "LAR",
//                                 "displayName": "Los Angeles Rams",
//                                 "shortDisplayName": "Rams",
//                                 "color": "003594",
//                                 "alternateColor": "ffd100",
//                                 "isActive": true,
//                                 "venue": {
//                                     "id": "477"
//                                 },
//                                 "links": [
//                                     {
//                                         "rel": [
//                                             "clubhouse",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/_/name/lar/los-angeles-rams",
//                                         "text": "Clubhouse",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "roster",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/roster/_/name/lar/los-angeles-rams",
//                                         "text": "Roster",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "stats",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/stats/_/name/lar/los-angeles-rams",
//                                         "text": "Statistics",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "schedule",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/schedule/_/name/lar",
//                                         "text": "Schedule",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     }
//                                 ],
//                                 "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/lar.png"
//                             },
//                             "score": "17",
//                             "linescores": [
//                                 {
//                                     "value": 0
//                                 },
//                                 {
//                                     "value": 9
//                                 },
//                                 {
//                                     "value": 8
//                                 },
//                                 {
//                                     "value": 0
//                                 }
//                             ],
//                             "statistics": [],
//                             "records": [
//                                 {
//                                     "name": "overall",
//                                     "abbreviation": "Game",
//                                     "type": "total",
//                                     "summary": "3-4"
//                                 },
//                                 {
//                                     "name": "Home",
//                                     "type": "home",
//                                     "summary": "1-3"
//                                 },
//                                 {
//                                     "name": "Road",
//                                     "type": "road",
//                                     "summary": "2-1"
//                                 }
//                             ]
//                         },
//                         {
//                             "id": "23",
//                             "uid": "s:20~l:28~t:23",
//                             "type": "team",
//                             "order": 1,
//                             "homeAway": "away",
//                             "winner": true,
//                             "team": {
//                                 "id": "23",
//                                 "uid": "s:20~l:28~t:23",
//                                 "location": "Pittsburgh",
//                                 "name": "Steelers",
//                                 "abbreviation": "PIT",
//                                 "displayName": "Pittsburgh Steelers",
//                                 "shortDisplayName": "Steelers",
//                                 "color": "000000",
//                                 "alternateColor": "ffb612",
//                                 "isActive": true,
//                                 "venue": {
//                                     "id": "3752"
//                                 },
//                                 "links": [
//                                     {
//                                         "rel": [
//                                             "clubhouse",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/_/name/pit/pittsburgh-steelers",
//                                         "text": "Clubhouse",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "roster",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/roster/_/name/pit/pittsburgh-steelers",
//                                         "text": "Roster",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "stats",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/stats/_/name/pit/pittsburgh-steelers",
//                                         "text": "Statistics",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "schedule",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/schedule/_/name/pit",
//                                         "text": "Schedule",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     }
//                                 ],
//                                 "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/pit.png"
//                             },
//                             "score": "24",
//                             "linescores": [
//                                 {
//                                     "value": 0
//                                 },
//                                 {
//                                     "value": 3
//                                 },
//                                 {
//                                     "value": 7
//                                 },
//                                 {
//                                     "value": 14
//                                 }
//                             ],
//                             "statistics": [],
//                             "records": [
//                                 {
//                                     "name": "overall",
//                                     "abbreviation": "Game",
//                                     "type": "total",
//                                     "summary": "4-2"
//                                 },
//                                 {
//                                     "name": "Home",
//                                     "type": "home",
//                                     "summary": "2-1"
//                                 },
//                                 {
//                                     "name": "Road",
//                                     "type": "road",
//                                     "summary": "2-1"
//                                 }
//                             ]
//                         }
//                     ],
//                     "notes": [],
//                     "status": {
//                         "clock": 0,
//                         "displayClock": "0:00",
//                         "period": 4,
//                         "type": {
//                             "id": "3",
//                             "name": "STATUS_FINAL",
//                             "state": "post",
//                             "completed": true,
//                             "description": "Final",
//                             "detail": "Final",
//                             "shortDetail": "Final"
//                         }
//                     },
//                     "broadcasts": [
//                         {
//                             "market": "national",
//                             "names": [
//                                 "FOX"
//                             ]
//                         }
//                     ],
//                     "leaders": [
//                         {
//                             "name": "passingYards",
//                             "displayName": "Passing Leader",
//                             "shortDisplayName": "PASS",
//                             "abbreviation": "PYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "231 YDS, 1 TD, 1 INT",
//                                     "value": 231,
//                                     "athlete": {
//                                         "id": "12483",
//                                         "fullName": "Matthew Stafford",
//                                         "displayName": "Matthew Stafford",
//                                         "shortName": "M. Stafford",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/12483/matthew-stafford"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/12483.png",
//                                         "jersey": "9",
//                                         "position": {
//                                             "abbreviation": "QB"
//                                         },
//                                         "team": {
//                                             "id": "14"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "14"
//                                     }
//                                 }
//                             ]
//                         },
//                         {
//                             "name": "rushingYards",
//                             "displayName": "Rushing Leader",
//                             "shortDisplayName": "RUSH",
//                             "abbreviation": "RYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "12 CAR, 66 YDS",
//                                     "value": 66,
//                                     "athlete": {
//                                         "id": "3122672",
//                                         "fullName": "Royce Freeman",
//                                         "displayName": "Royce Freeman",
//                                         "shortName": "R. Freeman",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/3122672/royce-freeman"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/3122672.png",
//                                         "jersey": "24",
//                                         "position": {
//                                             "abbreviation": "RB"
//                                         },
//                                         "team": {
//                                             "id": "14"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "14"
//                                     }
//                                 }
//                             ]
//                         },
//                         {
//                             "name": "receivingYards",
//                             "displayName": "Receiving Leader",
//                             "shortDisplayName": "REC",
//                             "abbreviation": "RECYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "8 REC, 154 YDS",
//                                     "value": 154,
//                                     "athlete": {
//                                         "id": "4426515",
//                                         "fullName": "Puka Nacua",
//                                         "displayName": "Puka Nacua",
//                                         "shortName": "P. Nacua",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/4426515/puka-nacua"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/4426515.png",
//                                         "jersey": "17",
//                                         "position": {
//                                             "abbreviation": "WR"
//                                         },
//                                         "team": {
//                                             "id": "14"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "14"
//                                     }
//                                 }
//                             ]
//                         }
//                     ],
//                     "format": {
//                         "regulation": {
//                             "periods": 4
//                         }
//                     },
//                     "startDate": "2023-10-22T20:05Z",
//                     "geoBroadcasts": [
//                         {
//                             "type": {
//                                 "id": "1",
//                                 "shortName": "TV"
//                             },
//                             "market": {
//                                 "id": "1",
//                                 "type": "National"
//                             },
//                             "media": {
//                                 "shortName": "FOX"
//                             },
//                             "lang": "en",
//                             "region": "us"
//                         }
//                     ],
//                     "headlines": [
//                         {
//                             "description": "— Both the Steelers and the Rams knew their tight game wasn't solely decided by one questionable fourth-down spot at the two-minute warning.",
//                             "type": "Recap",
//                             "shortLinkText": "Steelers' offense awakens in fourth quarter, rallies for a 24-17 victory over the Rams",
//                             "video": [
//                                 {
//                                     "id": 38721432,
//                                     "source": "espn",
//                                     "headline": "Steelers convert controversial fourth down to seal win over Rams",
//                                     "thumbnail": "https://a.espncdn.com/media/motion/2023/1022/dm_231022_steelers_4th_down/dm_231022_steelers_4th_down.jpg",
//                                     "duration": 28,
//                                     "tracking": {
//                                         "sportName": "nfl",
//                                         "leagueName": "No League",
//                                         "coverageType": "Final Game Highlight",
//                                         "trackingName": "*UNPUB 10/24 7p* NFL_One-Play (Steelers convert controversial fourth down to seal win over Rams) 2023/10/22 ESHEET",
//                                         "trackingId": "dm_231022_steelers_4th_down"
//                                     },
//                                     "deviceRestrictions": {
//                                         "type": "whitelist",
//                                         "devices": [
//                                             "desktop",
//                                             "settop",
//                                             "handset",
//                                             "tablet"
//                                         ]
//                                     },
//                                     "links": {
//                                         "api": {
//                                             "self": {
//                                                 "href": "http://api.espn.com/v1/video/clips/38721432"
//                                             },
//                                             "artwork": {
//                                                 "href": "https://artwork.api.espn.com/artwork/collections/media/d91a66df-b220-43bf-9bf8-abceb15e3302"
//                                             }
//                                         },
//                                         "web": {
//                                             "href": "https://www.espn.com/video/clip?id=38721432&ex_cid=espnapi_internal",
//                                             "short": {
//                                                 "href": "https://www.espn.com/video/clip?id=38721432"
//                                             },
//                                             "self": {
//                                                 "href": "https://www.espn.com/video/clip?id=38721432&ex_cid=espnapi_internal"
//                                             }
//                                         },
//                                         "source": {
//                                             "mezzanine": {
//                                                 "href": "https://media.video-origin.espn.com/espnvideo/2023/1022/dm_231022_steelers_4th_down/dm_231022_steelers_4th_down.mp4"
//                                             },
//                                             "flash": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_steelers_4th_down/dm_231022_steelers_4th_down.smil"
//                                             },
//                                             "hds": {
//                                                 "href": "https://hds.video-cdn.espn.com/z/motion/2023/1022/dm_231022_steelers_4th_down/dm_231022_steelers_4th_down_rel.smil/manifest.f4m"
//                                             },
//                                             "HLS": {
//                                                 "href": "https://service-pkgespn.akamaized.net/opp/hls/espn/2023/1022/dm_231022_steelers_4th_down/dm_231022_steelers_4th_down/playlist.m3u8",
//                                                 "HD": {
//                                                     "href": "https://service-pkgespn.akamaized.net/opp/hls/espn/2023/1022/dm_231022_steelers_4th_down/dm_231022_steelers_4th_down/playlist.m3u8"
//                                                 }
//                                             },
//                                             "HD": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_steelers_4th_down/dm_231022_steelers_4th_down_720p30_2896k.mp4"
//                                             },
//                                             "full": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_steelers_4th_down/dm_231022_steelers_4th_down_360p30_1464k.mp4"
//                                             },
//                                             "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_steelers_4th_down/dm_231022_steelers_4th_down_360p30_1464k.mp4"
//                                         },
//                                         "mobile": {
//                                             "alert": {
//                                                 "href": "http://m.espn.go.com/general/video/videoAlert?vid=38721432&ex_cid=espnapi_internal"
//                                             },
//                                             "source": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_steelers_4th_down/dm_231022_steelers_4th_down.mp4"
//                                             },
//                                             "href": "https://watch.auth.api.espn.com/video/auth/brightcove/d91a66df-b220-43bf-9bf8-abceb15e3302/asset?UMADPARAMreferer=http://www.espn.com/video/clip?id=38721432",
//                                             "streaming": {
//                                                 "href": "https://watch.auth.api.espn.com/video/auth/brightcove/d91a66df-b220-43bf-9bf8-abceb15e3302/asset?UMADPARAMreferer=http://www.espn.com/video/clip?id=38721432"
//                                             },
//                                             "progressiveDownload": {
//                                                 "href": "https://watch.auth.api.espn.com/video/auth/brightcove/d91a66df-b220-43bf-9bf8-abceb15e3302/asset?UMADPARAMreferer=http://www.espn.com/video/clip?id=38721432"
//                                             }
//                                         }
//                                     }
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ],
//             "links": [
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "summary",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/game/_/gameId/401547492",
//                     "text": "Gamecast",
//                     "shortText": "Gamecast",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "boxscore",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/boxscore/_/gameId/401547492",
//                     "text": "Box Score",
//                     "shortText": "Box Score",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "highlights",
//                         "desktop"
//                     ],
//                     "href": "https://www.espn.com/nfl/video?gameId=401547492",
//                     "text": "Highlights",
//                     "shortText": "Highlights",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "pbp",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/playbyplay/_/gameId/401547492",
//                     "text": "Play-by-Play",
//                     "shortText": "Play-by-Play",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "recap",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/recap?gameId=401547492",
//                     "text": "Recap",
//                     "shortText": "Recap",
//                     "isExternal": false,
//                     "isPremium": false
//                 }
//             ],
//             "status": {
//                 "clock": 0,
//                 "displayClock": "0:00",
//                 "period": 4,
//                 "type": {
//                     "id": "3",
//                     "name": "STATUS_FINAL",
//                     "state": "post",
//                     "completed": true,
//                     "description": "Final",
//                     "detail": "Final",
//                     "shortDetail": "Final"
//                 }
//             }
//         },
//         {
//             "id": "401547493",
//             "uid": "s:20~l:28~e:401547493",
//             "date": "2023-10-22T20:05Z",
//             "name": "Arizona Cardinals at Seattle Seahawks",
//             "shortName": "ARI @ SEA",
//             "season": {
//                 "year": 2023,
//                 "type": 2,
//                 "slug": "regular-season"
//             },
//             "week": {
//                 "number": 7
//             },
//             "competitions": [
//                 {
//                     "id": "401547493",
//                     "uid": "s:20~l:28~e:401547493~c:401547493",
//                     "date": "2023-10-22T20:05Z",
//                     "attendance": 68781,
//                     "type": {
//                         "id": "1",
//                         "abbreviation": "STD"
//                     },
//                     "timeValid": true,
//                     "neutralSite": false,
//                     "conferenceCompetition": false,
//                     "playByPlayAvailable": true,
//                     "recent": false,
//                     "venue": {
//                         "id": "3673",
//                         "fullName": "Lumen Field",
//                         "address": {
//                             "city": "Seattle",
//                             "state": "WA"
//                         },
//                         "capacity": 68740,
//                         "indoor": false
//                     },
//                     "competitors": [
//                         {
//                             "id": "26",
//                             "uid": "s:20~l:28~t:26",
//                             "type": "team",
//                             "order": 0,
//                             "homeAway": "home",
//                             "winner": true,
//                             "team": {
//                                 "id": "26",
//                                 "uid": "s:20~l:28~t:26",
//                                 "location": "Seattle",
//                                 "name": "Seahawks",
//                                 "abbreviation": "SEA",
//                                 "displayName": "Seattle Seahawks",
//                                 "shortDisplayName": "Seahawks",
//                                 "color": "002a5c",
//                                 "alternateColor": "69be28",
//                                 "isActive": true,
//                                 "venue": {
//                                     "id": "3673"
//                                 },
//                                 "links": [
//                                     {
//                                         "rel": [
//                                             "clubhouse",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/_/name/sea/seattle-seahawks",
//                                         "text": "Clubhouse",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "roster",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/roster/_/name/sea/seattle-seahawks",
//                                         "text": "Roster",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "stats",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/stats/_/name/sea/seattle-seahawks",
//                                         "text": "Statistics",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "schedule",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/schedule/_/name/sea",
//                                         "text": "Schedule",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     }
//                                 ],
//                                 "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/sea.png"
//                             },
//                             "score": "20",
//                             "linescores": [
//                                 {
//                                     "value": 7
//                                 },
//                                 {
//                                     "value": 7
//                                 },
//                                 {
//                                     "value": 3
//                                 },
//                                 {
//                                     "value": 3
//                                 }
//                             ],
//                             "statistics": [],
//                             "records": [
//                                 {
//                                     "name": "overall",
//                                     "abbreviation": "Game",
//                                     "type": "total",
//                                     "summary": "4-2"
//                                 },
//                                 {
//                                     "name": "Home",
//                                     "type": "home",
//                                     "summary": "2-1"
//                                 },
//                                 {
//                                     "name": "Road",
//                                     "type": "road",
//                                     "summary": "2-1"
//                                 }
//                             ]
//                         },
//                         {
//                             "id": "22",
//                             "uid": "s:20~l:28~t:22",
//                             "type": "team",
//                             "order": 1,
//                             "homeAway": "away",
//                             "winner": false,
//                             "team": {
//                                 "id": "22",
//                                 "uid": "s:20~l:28~t:22",
//                                 "location": "Arizona",
//                                 "name": "Cardinals",
//                                 "abbreviation": "ARI",
//                                 "displayName": "Arizona Cardinals",
//                                 "shortDisplayName": "Cardinals",
//                                 "color": "a4113e",
//                                 "alternateColor": "ffffff",
//                                 "isActive": true,
//                                 "venue": {
//                                     "id": "3970"
//                                 },
//                                 "links": [
//                                     {
//                                         "rel": [
//                                             "clubhouse",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/_/name/ari/arizona-cardinals",
//                                         "text": "Clubhouse",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "roster",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/roster/_/name/ari/arizona-cardinals",
//                                         "text": "Roster",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "stats",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/stats/_/name/ari/arizona-cardinals",
//                                         "text": "Statistics",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "schedule",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/schedule/_/name/ari",
//                                         "text": "Schedule",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     }
//                                 ],
//                                 "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/ari.png"
//                             },
//                             "score": "10",
//                             "linescores": [
//                                 {
//                                     "value": 3
//                                 },
//                                 {
//                                     "value": 7
//                                 },
//                                 {
//                                     "value": 0
//                                 },
//                                 {
//                                     "value": 0
//                                 }
//                             ],
//                             "statistics": [],
//                             "records": [
//                                 {
//                                     "name": "overall",
//                                     "abbreviation": "Game",
//                                     "type": "total",
//                                     "summary": "1-6"
//                                 },
//                                 {
//                                     "name": "Home",
//                                     "type": "home",
//                                     "summary": "1-2"
//                                 },
//                                 {
//                                     "name": "Road",
//                                     "type": "road",
//                                     "summary": "0-4"
//                                 }
//                             ]
//                         }
//                     ],
//                     "notes": [],
//                     "status": {
//                         "clock": 0,
//                         "displayClock": "0:00",
//                         "period": 4,
//                         "type": {
//                             "id": "3",
//                             "name": "STATUS_FINAL",
//                             "state": "post",
//                             "completed": true,
//                             "description": "Final",
//                             "detail": "Final",
//                             "shortDetail": "Final"
//                         }
//                     },
//                     "broadcasts": [
//                         {
//                             "market": "national",
//                             "names": [
//                                 "FOX"
//                             ]
//                         }
//                     ],
//                     "leaders": [
//                         {
//                             "name": "passingYards",
//                             "displayName": "Passing Leader",
//                             "shortDisplayName": "PASS",
//                             "abbreviation": "PYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "219 YDS, 2 TD, 1 INT",
//                                     "value": 219,
//                                     "athlete": {
//                                         "id": "15864",
//                                         "fullName": "Geno Smith",
//                                         "displayName": "Geno Smith",
//                                         "shortName": "G. Smith",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/15864/geno-smith"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/15864.png",
//                                         "jersey": "7",
//                                         "position": {
//                                             "abbreviation": "QB"
//                                         },
//                                         "team": {
//                                             "id": "26"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "26"
//                                     }
//                                 }
//                             ]
//                         },
//                         {
//                             "name": "rushingYards",
//                             "displayName": "Rushing Leader",
//                             "shortDisplayName": "RUSH",
//                             "abbreviation": "RYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "26 CAR, 105 YDS",
//                                     "value": 105,
//                                     "athlete": {
//                                         "id": "4567048",
//                                         "fullName": "Kenneth Walker III",
//                                         "displayName": "Kenneth Walker III",
//                                         "shortName": "K. Walker III",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/4567048/kenneth-walker-iii"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/4567048.png",
//                                         "jersey": "9",
//                                         "position": {
//                                             "abbreviation": "RB"
//                                         },
//                                         "team": {
//                                             "id": "26"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "26"
//                                     }
//                                 }
//                             ]
//                         },
//                         {
//                             "name": "receivingYards",
//                             "displayName": "Receiving Leader",
//                             "shortDisplayName": "REC",
//                             "abbreviation": "RECYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "4 REC, 63 YDS, 1 TD",
//                                     "value": 63,
//                                     "athlete": {
//                                         "id": "4430878",
//                                         "fullName": "Jaxon Smith-Njigba",
//                                         "displayName": "Jaxon Smith-Njigba",
//                                         "shortName": "J. Smith-Njigba",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/4430878/jaxon-smith-njigba"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/4430878.png",
//                                         "jersey": "11",
//                                         "position": {
//                                             "abbreviation": "WR"
//                                         },
//                                         "team": {
//                                             "id": "26"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "26"
//                                     }
//                                 }
//                             ]
//                         }
//                     ],
//                     "format": {
//                         "regulation": {
//                             "periods": 4
//                         }
//                     },
//                     "startDate": "2023-10-22T20:05Z",
//                     "geoBroadcasts": [
//                         {
//                             "type": {
//                                 "id": "1",
//                                 "shortName": "TV"
//                             },
//                             "market": {
//                                 "id": "1",
//                                 "type": "National"
//                             },
//                             "media": {
//                                 "shortName": "FOX"
//                             },
//                             "lang": "en",
//                             "region": "us"
//                         }
//                     ],
//                     "headlines": [
//                         {
//                             "description": "— Jaxon Smith-Njigba and Jake Bobo come from opposite ends of the spectrum for NFL rookies.",
//                             "type": "Recap",
//                             "shortLinkText": "Seahawks get TDs from rookies Smith-Njigba, Bobo and rely on defense to topple Arizona 20-10",
//                             "video": [
//                                 {
//                                     "id": 38720487,
//                                     "source": "espn",
//                                     "headline": "Jake Bobo makes incredible toe-tapping TD grab for Seahawks",
//                                     "thumbnail": "https://a.espncdn.com/media/motion/2023/1022/dm_231022_NFL_One-Pay_Seahawks_Bobo_TD_catch/dm_231022_NFL_One-Pay_Seahawks_Bobo_TD_catch.jpg",
//                                     "duration": 30,
//                                     "tracking": {
//                                         "sportName": "nfl",
//                                         "leagueName": "No League",
//                                         "coverageType": "Final Game Highlight",
//                                         "trackingName": "NFL_One-Play (Jake Bobo makes incredible toe-tapping TD grab for Seahawks) 2023/10/22 ESHEET",
//                                         "trackingId": "dm_231022_NFL_One-Pay_Seahawks_Bobo_TD_catch"
//                                     },
//                                     "deviceRestrictions": {
//                                         "type": "whitelist",
//                                         "devices": [
//                                             "desktop",
//                                             "settop",
//                                             "handset",
//                                             "tablet"
//                                         ]
//                                     },
//                                     "links": {
//                                         "api": {
//                                             "self": {
//                                                 "href": "http://api.espn.com/v1/video/clips/38720487"
//                                             },
//                                             "artwork": {
//                                                 "href": "https://artwork.api.espn.com/artwork/collections/media/4b7f9ad6-4469-492d-b508-ba7f240119eb"
//                                             }
//                                         },
//                                         "web": {
//                                             "href": "https://www.espn.com/video/clip?id=38720487&ex_cid=espnapi_internal",
//                                             "short": {
//                                                 "href": "https://www.espn.com/video/clip?id=38720487"
//                                             },
//                                             "self": {
//                                                 "href": "https://www.espn.com/video/clip?id=38720487&ex_cid=espnapi_internal"
//                                             }
//                                         },
//                                         "source": {
//                                             "mezzanine": {
//                                                 "href": "https://media.video-origin.espn.com/espnvideo/2023/1022/dm_231022_NFL_One-Pay_Seahawks_Bobo_TD_catch/dm_231022_NFL_One-Pay_Seahawks_Bobo_TD_catch.mp4"
//                                             },
//                                             "flash": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_NFL_One-Pay_Seahawks_Bobo_TD_catch/dm_231022_NFL_One-Pay_Seahawks_Bobo_TD_catch.smil"
//                                             },
//                                             "hds": {
//                                                 "href": "https://hds.video-cdn.espn.com/z/motion/2023/1022/dm_231022_NFL_One-Pay_Seahawks_Bobo_TD_catch/dm_231022_NFL_One-Pay_Seahawks_Bobo_TD_catch_rel.smil/manifest.f4m"
//                                             },
//                                             "HLS": {
//                                                 "href": "https://service-pkgespn.akamaized.net/opp/hls/espn/2023/1022/dm_231022_NFL_One-Pay_Seahawks_Bobo_TD_catch/dm_231022_NFL_One-Pay_Seahawks_Bobo_TD_catch/playlist.m3u8",
//                                                 "HD": {
//                                                     "href": "https://service-pkgespn.akamaized.net/opp/hls/espn/2023/1022/dm_231022_NFL_One-Pay_Seahawks_Bobo_TD_catch/dm_231022_NFL_One-Pay_Seahawks_Bobo_TD_catch/playlist.m3u8"
//                                                 }
//                                             },
//                                             "HD": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_NFL_One-Pay_Seahawks_Bobo_TD_catch/dm_231022_NFL_One-Pay_Seahawks_Bobo_TD_catch_720p30_2896k.mp4"
//                                             },
//                                             "full": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_NFL_One-Pay_Seahawks_Bobo_TD_catch/dm_231022_NFL_One-Pay_Seahawks_Bobo_TD_catch_360p30_1464k.mp4"
//                                             },
//                                             "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_NFL_One-Pay_Seahawks_Bobo_TD_catch/dm_231022_NFL_One-Pay_Seahawks_Bobo_TD_catch_360p30_1464k.mp4"
//                                         },
//                                         "mobile": {
//                                             "alert": {
//                                                 "href": "http://m.espn.go.com/general/video/videoAlert?vid=38720487&ex_cid=espnapi_internal"
//                                             },
//                                             "source": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_NFL_One-Pay_Seahawks_Bobo_TD_catch/dm_231022_NFL_One-Pay_Seahawks_Bobo_TD_catch.mp4"
//                                             },
//                                             "href": "https://watch.auth.api.espn.com/video/auth/brightcove/4b7f9ad6-4469-492d-b508-ba7f240119eb/asset?UMADPARAMreferer=http://www.espn.com/video/clip?id=38720487",
//                                             "streaming": {
//                                                 "href": "https://watch.auth.api.espn.com/video/auth/brightcove/4b7f9ad6-4469-492d-b508-ba7f240119eb/asset?UMADPARAMreferer=http://www.espn.com/video/clip?id=38720487"
//                                             },
//                                             "progressiveDownload": {
//                                                 "href": "https://watch.auth.api.espn.com/video/auth/brightcove/4b7f9ad6-4469-492d-b508-ba7f240119eb/asset?UMADPARAMreferer=http://www.espn.com/video/clip?id=38720487"
//                                             }
//                                         }
//                                     }
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ],
//             "links": [
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "summary",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/game/_/gameId/401547493",
//                     "text": "Gamecast",
//                     "shortText": "Gamecast",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "boxscore",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/boxscore/_/gameId/401547493",
//                     "text": "Box Score",
//                     "shortText": "Box Score",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "highlights",
//                         "desktop"
//                     ],
//                     "href": "https://www.espn.com/nfl/video?gameId=401547493",
//                     "text": "Highlights",
//                     "shortText": "Highlights",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "pbp",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/playbyplay/_/gameId/401547493",
//                     "text": "Play-by-Play",
//                     "shortText": "Play-by-Play",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "recap",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/recap?gameId=401547493",
//                     "text": "Recap",
//                     "shortText": "Recap",
//                     "isExternal": false,
//                     "isPremium": false
//                 }
//             ],
//             "status": {
//                 "clock": 0,
//                 "displayClock": "0:00",
//                 "period": 4,
//                 "type": {
//                     "id": "3",
//                     "name": "STATUS_FINAL",
//                     "state": "post",
//                     "completed": true,
//                     "description": "Final",
//                     "detail": "Final",
//                     "shortDetail": "Final"
//                 }
//             }
//         },
//         {
//             "id": "401547487",
//             "uid": "s:20~l:28~e:401547487",
//             "date": "2023-10-22T20:25Z",
//             "name": "Green Bay Packers at Denver Broncos",
//             "shortName": "GB @ DEN",
//             "season": {
//                 "year": 2023,
//                 "type": 2,
//                 "slug": "regular-season"
//             },
//             "week": {
//                 "number": 7
//             },
//             "competitions": [
//                 {
//                     "id": "401547487",
//                     "uid": "s:20~l:28~e:401547487~c:401547487",
//                     "date": "2023-10-22T20:25Z",
//                     "attendance": 76880,
//                     "type": {
//                         "id": "1",
//                         "abbreviation": "STD"
//                     },
//                     "timeValid": true,
//                     "neutralSite": false,
//                     "conferenceCompetition": false,
//                     "playByPlayAvailable": true,
//                     "recent": false,
//                     "venue": {
//                         "id": "3937",
//                         "fullName": "Empower Field at Mile High",
//                         "address": {
//                             "city": "Denver",
//                             "state": "CO"
//                         },
//                         "capacity": 76125,
//                         "indoor": false
//                     },
//                     "competitors": [
//                         {
//                             "id": "7",
//                             "uid": "s:20~l:28~t:7",
//                             "type": "team",
//                             "order": 0,
//                             "homeAway": "home",
//                             "winner": true,
//                             "team": {
//                                 "id": "7",
//                                 "uid": "s:20~l:28~t:7",
//                                 "location": "Denver",
//                                 "name": "Broncos",
//                                 "abbreviation": "DEN",
//                                 "displayName": "Denver Broncos",
//                                 "shortDisplayName": "Broncos",
//                                 "color": "0a2343",
//                                 "alternateColor": "fc4c02",
//                                 "isActive": true,
//                                 "venue": {
//                                     "id": "3937"
//                                 },
//                                 "links": [
//                                     {
//                                         "rel": [
//                                             "clubhouse",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/_/name/den/denver-broncos",
//                                         "text": "Clubhouse",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "roster",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/roster/_/name/den/denver-broncos",
//                                         "text": "Roster",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "stats",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/stats/_/name/den/denver-broncos",
//                                         "text": "Statistics",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "schedule",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/schedule/_/name/den",
//                                         "text": "Schedule",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     }
//                                 ],
//                                 "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/den.png"
//                             },
//                             "score": "19",
//                             "linescores": [
//                                 {
//                                     "value": 3
//                                 },
//                                 {
//                                     "value": 6
//                                 },
//                                 {
//                                     "value": 7
//                                 },
//                                 {
//                                     "value": 3
//                                 }
//                             ],
//                             "statistics": [],
//                             "records": [
//                                 {
//                                     "name": "overall",
//                                     "abbreviation": "Game",
//                                     "type": "total",
//                                     "summary": "2-5"
//                                 },
//                                 {
//                                     "name": "Home",
//                                     "type": "home",
//                                     "summary": "1-3"
//                                 },
//                                 {
//                                     "name": "Road",
//                                     "type": "road",
//                                     "summary": "1-2"
//                                 }
//                             ]
//                         },
//                         {
//                             "id": "9",
//                             "uid": "s:20~l:28~t:9",
//                             "type": "team",
//                             "order": 1,
//                             "homeAway": "away",
//                             "winner": false,
//                             "team": {
//                                 "id": "9",
//                                 "uid": "s:20~l:28~t:9",
//                                 "location": "Green Bay",
//                                 "name": "Packers",
//                                 "abbreviation": "GB",
//                                 "displayName": "Green Bay Packers",
//                                 "shortDisplayName": "Packers",
//                                 "color": "204e32",
//                                 "alternateColor": "ffb612",
//                                 "isActive": true,
//                                 "venue": {
//                                     "id": "3798"
//                                 },
//                                 "links": [
//                                     {
//                                         "rel": [
//                                             "clubhouse",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/_/name/gb/green-bay-packers",
//                                         "text": "Clubhouse",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "roster",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/roster/_/name/gb/green-bay-packers",
//                                         "text": "Roster",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "stats",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/stats/_/name/gb/green-bay-packers",
//                                         "text": "Statistics",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "schedule",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/schedule/_/name/gb",
//                                         "text": "Schedule",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     }
//                                 ],
//                                 "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/gb.png"
//                             },
//                             "score": "17",
//                             "linescores": [
//                                 {
//                                     "value": 0
//                                 },
//                                 {
//                                     "value": 0
//                                 },
//                                 {
//                                     "value": 10
//                                 },
//                                 {
//                                     "value": 7
//                                 }
//                             ],
//                             "statistics": [],
//                             "records": [
//                                 {
//                                     "name": "overall",
//                                     "abbreviation": "Game",
//                                     "type": "total",
//                                     "summary": "2-4"
//                                 },
//                                 {
//                                     "name": "Home",
//                                     "type": "home",
//                                     "summary": "1-1"
//                                 },
//                                 {
//                                     "name": "Road",
//                                     "type": "road",
//                                     "summary": "1-3"
//                                 }
//                             ]
//                         }
//                     ],
//                     "notes": [],
//                     "status": {
//                         "clock": 0,
//                         "displayClock": "0:00",
//                         "period": 4,
//                         "type": {
//                             "id": "3",
//                             "name": "STATUS_FINAL",
//                             "state": "post",
//                             "completed": true,
//                             "description": "Final",
//                             "detail": "Final",
//                             "shortDetail": "Final"
//                         }
//                     },
//                     "broadcasts": [
//                         {
//                             "market": "national",
//                             "names": [
//                                 "CBS"
//                             ]
//                         }
//                     ],
//                     "leaders": [
//                         {
//                             "name": "passingYards",
//                             "displayName": "Passing Leader",
//                             "shortDisplayName": "PASS",
//                             "abbreviation": "PYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "194 YDS, 1 TD",
//                                     "value": 194,
//                                     "athlete": {
//                                         "id": "14881",
//                                         "fullName": "Russell Wilson",
//                                         "displayName": "Russell Wilson",
//                                         "shortName": "R. Wilson",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/14881/russell-wilson"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/14881.png",
//                                         "jersey": "3",
//                                         "position": {
//                                             "abbreviation": "QB"
//                                         },
//                                         "team": {
//                                             "id": "7"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "7"
//                                     }
//                                 }
//                             ]
//                         },
//                         {
//                             "name": "rushingYards",
//                             "displayName": "Rushing Leader",
//                             "shortDisplayName": "RUSH",
//                             "abbreviation": "RYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "15 CAR, 82 YDS",
//                                     "value": 82,
//                                     "athlete": {
//                                         "id": "4361579",
//                                         "fullName": "Javonte Williams",
//                                         "displayName": "Javonte Williams",
//                                         "shortName": "J. Williams",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/4361579/javonte-williams"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/4361579.png",
//                                         "jersey": "33",
//                                         "position": {
//                                             "abbreviation": "RB"
//                                         },
//                                         "team": {
//                                             "id": "7"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "7"
//                                     }
//                                 }
//                             ]
//                         },
//                         {
//                             "name": "receivingYards",
//                             "displayName": "Receiving Leader",
//                             "shortDisplayName": "REC",
//                             "abbreviation": "RECYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "6 REC, 76 YDS, 1 TD",
//                                     "value": 76,
//                                     "athlete": {
//                                         "id": "3128429",
//                                         "fullName": "Courtland Sutton",
//                                         "displayName": "Courtland Sutton",
//                                         "shortName": "C. Sutton",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/3128429/courtland-sutton"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/3128429.png",
//                                         "jersey": "14",
//                                         "position": {
//                                             "abbreviation": "WR"
//                                         },
//                                         "team": {
//                                             "id": "7"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "7"
//                                     }
//                                 }
//                             ]
//                         }
//                     ],
//                     "format": {
//                         "regulation": {
//                             "periods": 4
//                         }
//                     },
//                     "startDate": "2023-10-22T20:25Z",
//                     "geoBroadcasts": [
//                         {
//                             "type": {
//                                 "id": "1",
//                                 "shortName": "TV"
//                             },
//                             "market": {
//                                 "id": "1",
//                                 "type": "National"
//                             },
//                             "media": {
//                                 "shortName": "CBS"
//                             },
//                             "lang": "en",
//                             "region": "us"
//                         }
//                     ],
//                     "headlines": [
//                         {
//                             "description": "— The end of Denver's dubious streak of blown halftime leads and the Broncos' first home victory under coach Sean Payton both came from the most unexpected of sources.",
//                             "type": "Recap",
//                             "shortLinkText": "P.J. Locke saves Denver from another second-half meltdown as Broncos beat Packers 19-17",
//                             "video": [
//                                 {
//                                     "id": 38721527,
//                                     "source": "espn",
//                                     "headline": "Jordan Love throws into double coverage for game-sealing INT",
//                                     "thumbnail": "https://a.espncdn.com/media/motion/2023/1022/dm_231022_dm_nfl_jordan_love_is_dumb_pub2tag/dm_231022_dm_nfl_jordan_love_is_dumb_pub2tag.jpg",
//                                     "duration": 39,
//                                     "tracking": {
//                                         "sportName": "nfl",
//                                         "leagueName": "No League",
//                                         "coverageType": "Final Game Highlight",
//                                         "trackingName": "*UNPUB 10/24* NFL_One-Play (Jordan Love throws into double coverage for game-sealing INT) 2023/10/22 ESHEET",
//                                         "trackingId": "dm_231022_dm_nfl_jordan_love_is_dumb_pub2tag"
//                                     },
//                                     "deviceRestrictions": {
//                                         "type": "whitelist",
//                                         "devices": [
//                                             "desktop",
//                                             "settop",
//                                             "handset",
//                                             "tablet"
//                                         ]
//                                     },
//                                     "links": {
//                                         "api": {
//                                             "self": {
//                                                 "href": "http://api.espn.com/v1/video/clips/38721527"
//                                             },
//                                             "artwork": {
//                                                 "href": "https://artwork.api.espn.com/artwork/collections/media/320beda3-7530-4d81-bf97-b5a096081041"
//                                             }
//                                         },
//                                         "web": {
//                                             "href": "https://www.espn.com/video/clip?id=38721527&ex_cid=espnapi_internal",
//                                             "short": {
//                                                 "href": "https://www.espn.com/video/clip?id=38721527"
//                                             },
//                                             "self": {
//                                                 "href": "https://www.espn.com/video/clip?id=38721527&ex_cid=espnapi_internal"
//                                             }
//                                         },
//                                         "source": {
//                                             "mezzanine": {
//                                                 "href": "https://media.video-origin.espn.com/espnvideo/2023/1022/dm_231022_dm_nfl_jordan_love_is_dumb_pub2tag/dm_231022_dm_nfl_jordan_love_is_dumb_pub2tag.mp4"
//                                             },
//                                             "flash": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_dm_nfl_jordan_love_is_dumb_pub2tag/dm_231022_dm_nfl_jordan_love_is_dumb_pub2tag.smil"
//                                             },
//                                             "hds": {
//                                                 "href": "https://hds.video-cdn.espn.com/z/motion/2023/1022/dm_231022_dm_nfl_jordan_love_is_dumb_pub2tag/dm_231022_dm_nfl_jordan_love_is_dumb_pub2tag_rel.smil/manifest.f4m"
//                                             },
//                                             "HLS": {
//                                                 "href": "https://service-pkgespn.akamaized.net/opp/hls/espn/2023/1022/dm_231022_dm_nfl_jordan_love_is_dumb_pub2tag/dm_231022_dm_nfl_jordan_love_is_dumb_pub2tag/playlist.m3u8",
//                                                 "HD": {
//                                                     "href": "https://service-pkgespn.akamaized.net/opp/hls/espn/2023/1022/dm_231022_dm_nfl_jordan_love_is_dumb_pub2tag/dm_231022_dm_nfl_jordan_love_is_dumb_pub2tag/playlist.m3u8"
//                                                 }
//                                             },
//                                             "HD": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_dm_nfl_jordan_love_is_dumb_pub2tag/dm_231022_dm_nfl_jordan_love_is_dumb_pub2tag_720p30_2896k.mp4"
//                                             },
//                                             "full": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_dm_nfl_jordan_love_is_dumb_pub2tag/dm_231022_dm_nfl_jordan_love_is_dumb_pub2tag_360p30_1464k.mp4"
//                                             },
//                                             "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_dm_nfl_jordan_love_is_dumb_pub2tag/dm_231022_dm_nfl_jordan_love_is_dumb_pub2tag_360p30_1464k.mp4"
//                                         },
//                                         "mobile": {
//                                             "alert": {
//                                                 "href": "http://m.espn.go.com/general/video/videoAlert?vid=38721527&ex_cid=espnapi_internal"
//                                             },
//                                             "source": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_dm_nfl_jordan_love_is_dumb_pub2tag/dm_231022_dm_nfl_jordan_love_is_dumb_pub2tag.mp4"
//                                             },
//                                             "href": "https://watch.auth.api.espn.com/video/auth/brightcove/320beda3-7530-4d81-bf97-b5a096081041/asset?UMADPARAMreferer=http://www.espn.com/video/clip?id=38721527",
//                                             "streaming": {
//                                                 "href": "https://watch.auth.api.espn.com/video/auth/brightcove/320beda3-7530-4d81-bf97-b5a096081041/asset?UMADPARAMreferer=http://www.espn.com/video/clip?id=38721527"
//                                             },
//                                             "progressiveDownload": {
//                                                 "href": "https://watch.auth.api.espn.com/video/auth/brightcove/320beda3-7530-4d81-bf97-b5a096081041/asset?UMADPARAMreferer=http://www.espn.com/video/clip?id=38721527"
//                                             }
//                                         }
//                                     }
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ],
//             "links": [
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "summary",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/game/_/gameId/401547487",
//                     "text": "Gamecast",
//                     "shortText": "Gamecast",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "boxscore",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/boxscore/_/gameId/401547487",
//                     "text": "Box Score",
//                     "shortText": "Box Score",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "highlights",
//                         "desktop"
//                     ],
//                     "href": "https://www.espn.com/nfl/video?gameId=401547487",
//                     "text": "Highlights",
//                     "shortText": "Highlights",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "pbp",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/playbyplay/_/gameId/401547487",
//                     "text": "Play-by-Play",
//                     "shortText": "Play-by-Play",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "recap",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/recap?gameId=401547487",
//                     "text": "Recap",
//                     "shortText": "Recap",
//                     "isExternal": false,
//                     "isPremium": false
//                 }
//             ],
//             "status": {
//                 "clock": 0,
//                 "displayClock": "0:00",
//                 "period": 4,
//                 "type": {
//                     "id": "3",
//                     "name": "STATUS_FINAL",
//                     "state": "post",
//                     "completed": true,
//                     "description": "Final",
//                     "detail": "Final",
//                     "shortDetail": "Final"
//                 }
//             }
//         },
//         {
//             "id": "401547488",
//             "uid": "s:20~l:28~e:401547488",
//             "date": "2023-10-22T20:25Z",
//             "name": "Los Angeles Chargers at Kansas City Chiefs",
//             "shortName": "LAC @ KC",
//             "season": {
//                 "year": 2023,
//                 "type": 2,
//                 "slug": "regular-season"
//             },
//             "week": {
//                 "number": 7
//             },
//             "competitions": [
//                 {
//                     "id": "401547488",
//                     "uid": "s:20~l:28~e:401547488~c:401547488",
//                     "date": "2023-10-22T20:25Z",
//                     "attendance": 73642,
//                     "type": {
//                         "id": "1",
//                         "abbreviation": "STD"
//                     },
//                     "timeValid": true,
//                     "neutralSite": false,
//                     "conferenceCompetition": false,
//                     "playByPlayAvailable": true,
//                     "recent": false,
//                     "venue": {
//                         "id": "3622",
//                         "fullName": "GEHA Field at Arrowhead Stadium",
//                         "address": {
//                             "city": "Kansas City",
//                             "state": "MO"
//                         },
//                         "capacity": 73426,
//                         "indoor": false
//                     },
//                     "competitors": [
//                         {
//                             "id": "12",
//                             "uid": "s:20~l:28~t:12",
//                             "type": "team",
//                             "order": 0,
//                             "homeAway": "home",
//                             "winner": true,
//                             "team": {
//                                 "id": "12",
//                                 "uid": "s:20~l:28~t:12",
//                                 "location": "Kansas City",
//                                 "name": "Chiefs",
//                                 "abbreviation": "KC",
//                                 "displayName": "Kansas City Chiefs",
//                                 "shortDisplayName": "Chiefs",
//                                 "color": "e31837",
//                                 "alternateColor": "ffb612",
//                                 "isActive": true,
//                                 "venue": {
//                                     "id": "3622"
//                                 },
//                                 "links": [
//                                     {
//                                         "rel": [
//                                             "clubhouse",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/_/name/kc/kansas-city-chiefs",
//                                         "text": "Clubhouse",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "roster",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/roster/_/name/kc/kansas-city-chiefs",
//                                         "text": "Roster",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "stats",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/stats/_/name/kc/kansas-city-chiefs",
//                                         "text": "Statistics",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "schedule",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/schedule/_/name/kc",
//                                         "text": "Schedule",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     }
//                                 ],
//                                 "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/kc.png"
//                             },
//                             "score": "31",
//                             "linescores": [
//                                 {
//                                     "value": 3
//                                 },
//                                 {
//                                     "value": 21
//                                 },
//                                 {
//                                     "value": 0
//                                 },
//                                 {
//                                     "value": 7
//                                 }
//                             ],
//                             "statistics": [],
//                             "records": [
//                                 {
//                                     "name": "overall",
//                                     "abbreviation": "Game",
//                                     "type": "total",
//                                     "summary": "6-1"
//                                 },
//                                 {
//                                     "name": "Home",
//                                     "type": "home",
//                                     "summary": "3-1"
//                                 },
//                                 {
//                                     "name": "Road",
//                                     "type": "road",
//                                     "summary": "3-0"
//                                 }
//                             ]
//                         },
//                         {
//                             "id": "24",
//                             "uid": "s:20~l:28~t:24",
//                             "type": "team",
//                             "order": 1,
//                             "homeAway": "away",
//                             "winner": false,
//                             "team": {
//                                 "id": "24",
//                                 "uid": "s:20~l:28~t:24",
//                                 "location": "Los Angeles",
//                                 "name": "Chargers",
//                                 "abbreviation": "LAC",
//                                 "displayName": "Los Angeles Chargers",
//                                 "shortDisplayName": "Chargers",
//                                 "color": "0080c6",
//                                 "alternateColor": "ffc20e",
//                                 "isActive": true,
//                                 "venue": {
//                                     "id": "538"
//                                 },
//                                 "links": [
//                                     {
//                                         "rel": [
//                                             "clubhouse",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/_/name/lac/los-angeles-chargers",
//                                         "text": "Clubhouse",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "roster",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/roster/_/name/lac/los-angeles-chargers",
//                                         "text": "Roster",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "stats",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/stats/_/name/lac/los-angeles-chargers",
//                                         "text": "Statistics",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "schedule",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/schedule/_/name/lac",
//                                         "text": "Schedule",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     }
//                                 ],
//                                 "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/lac.png"
//                             },
//                             "score": "17",
//                             "linescores": [
//                                 {
//                                     "value": 3
//                                 },
//                                 {
//                                     "value": 14
//                                 },
//                                 {
//                                     "value": 0
//                                 },
//                                 {
//                                     "value": 0
//                                 }
//                             ],
//                             "statistics": [],
//                             "records": [
//                                 {
//                                     "name": "overall",
//                                     "abbreviation": "Game",
//                                     "type": "total",
//                                     "summary": "2-4"
//                                 },
//                                 {
//                                     "name": "Home",
//                                     "type": "home",
//                                     "summary": "1-2"
//                                 },
//                                 {
//                                     "name": "Road",
//                                     "type": "road",
//                                     "summary": "1-2"
//                                 }
//                             ]
//                         }
//                     ],
//                     "notes": [],
//                     "status": {
//                         "clock": 0,
//                         "displayClock": "0:00",
//                         "period": 4,
//                         "type": {
//                             "id": "3",
//                             "name": "STATUS_FINAL",
//                             "state": "post",
//                             "completed": true,
//                             "description": "Final",
//                             "detail": "Final",
//                             "shortDetail": "Final"
//                         }
//                     },
//                     "broadcasts": [
//                         {
//                             "market": "national",
//                             "names": [
//                                 "CBS"
//                             ]
//                         }
//                     ],
//                     "leaders": [
//                         {
//                             "name": "passingYards",
//                             "displayName": "Passing Leader",
//                             "shortDisplayName": "PASS",
//                             "abbreviation": "PYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "424 YDS, 4 TD, 1 INT",
//                                     "value": 424,
//                                     "athlete": {
//                                         "id": "3139477",
//                                         "fullName": "Patrick Mahomes",
//                                         "displayName": "Patrick Mahomes",
//                                         "shortName": "P. Mahomes",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/3139477/patrick-mahomes"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/3139477.png",
//                                         "jersey": "15",
//                                         "position": {
//                                             "abbreviation": "QB"
//                                         },
//                                         "team": {
//                                             "id": "12"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "12"
//                                     }
//                                 }
//                             ]
//                         },
//                         {
//                             "name": "rushingYards",
//                             "displayName": "Rushing Leader",
//                             "shortDisplayName": "RUSH",
//                             "abbreviation": "RYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "7 CAR, 75 YDS, 1 TD",
//                                     "value": 75,
//                                     "athlete": {
//                                         "id": "3910544",
//                                         "fullName": "Joshua Kelley",
//                                         "displayName": "Joshua Kelley",
//                                         "shortName": "J. Kelley",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/3910544/joshua-kelley"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/3910544.png",
//                                         "jersey": "25",
//                                         "position": {
//                                             "abbreviation": "RB"
//                                         },
//                                         "team": {
//                                             "id": "24"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "24"
//                                     }
//                                 }
//                             ]
//                         },
//                         {
//                             "name": "receivingYards",
//                             "displayName": "Receiving Leader",
//                             "shortDisplayName": "REC",
//                             "abbreviation": "RECYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "12 REC, 179 YDS, 1 TD",
//                                     "value": 179,
//                                     "athlete": {
//                                         "id": "15847",
//                                         "fullName": "Travis Kelce",
//                                         "displayName": "Travis Kelce",
//                                         "shortName": "T. Kelce",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/15847/travis-kelce"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/15847.png",
//                                         "jersey": "87",
//                                         "position": {
//                                             "abbreviation": "TE"
//                                         },
//                                         "team": {
//                                             "id": "12"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "12"
//                                     }
//                                 }
//                             ]
//                         }
//                     ],
//                     "format": {
//                         "regulation": {
//                             "periods": 4
//                         }
//                     },
//                     "startDate": "2023-10-22T20:25Z",
//                     "geoBroadcasts": [
//                         {
//                             "type": {
//                                 "id": "1",
//                                 "shortName": "TV"
//                             },
//                             "market": {
//                                 "id": "1",
//                                 "type": "National"
//                             },
//                             "media": {
//                                 "shortName": "CBS"
//                             },
//                             "lang": "en",
//                             "region": "us"
//                         }
//                     ],
//                     "headlines": [
//                         {
//                             "description": "— If anybody should know how to stop Patrick Mahomes and Travis Kelce, it should probably be the Los Angeles Chargers and the rest of the AFC West, who get two cracks at beating the Kansas City Chiefs every season.",
//                             "type": "Recap",
//                             "shortLinkText": "Mahomes throws for 424 yards and 4 TDs, Kelce has big day as Chiefs beat Chargers 31-17",
//                             "video": [
//                                 {
//                                     "id": 38721779,
//                                     "source": "espn",
//                                     "headline": "Patrick Mahomes cooks the Chargers for 424 yards and 4 TDs",
//                                     "thumbnail": "https://a.espncdn.com/media/motion/2023/1022/dm_231022_PAT_MAHOMES_RIP/dm_231022_PAT_MAHOMES_RIP.jpg",
//                                     "duration": 86,
//                                     "tracking": {
//                                         "sportName": "nfl",
//                                         "leagueName": "No League",
//                                         "coverageType": "Final Game Highlight",
//                                         "trackingName": "*UNPUB 10/24 12pm* COM_NFL Highlight (Patrick Mahomes cooks the Chargers for 424 yards and 4 TDs) 2023/10/22 ESHEET SOTFULL",
//                                         "trackingId": "dm_231022_PAT_MAHOMES_RIP"
//                                     },
//                                     "deviceRestrictions": {
//                                         "type": "whitelist",
//                                         "devices": [
//                                             "desktop",
//                                             "settop",
//                                             "handset",
//                                             "tablet"
//                                         ]
//                                     },
//                                     "links": {
//                                         "api": {
//                                             "self": {
//                                                 "href": "http://api.espn.com/v1/video/clips/38721779"
//                                             },
//                                             "artwork": {
//                                                 "href": "https://artwork.api.espn.com/artwork/collections/media/06a07022-e962-4dd0-b2c9-d5ccd65e1648"
//                                             }
//                                         },
//                                         "web": {
//                                             "href": "https://www.espn.com/video/clip?id=38721779&ex_cid=espnapi_internal",
//                                             "short": {
//                                                 "href": "https://www.espn.com/video/clip?id=38721779"
//                                             },
//                                             "self": {
//                                                 "href": "https://www.espn.com/video/clip?id=38721779&ex_cid=espnapi_internal"
//                                             }
//                                         },
//                                         "source": {
//                                             "mezzanine": {
//                                                 "href": "https://media.video-origin.espn.com/espnvideo/2023/1022/dm_231022_PAT_MAHOMES_RIP/dm_231022_PAT_MAHOMES_RIP.mp4"
//                                             },
//                                             "flash": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_PAT_MAHOMES_RIP/dm_231022_PAT_MAHOMES_RIP.smil"
//                                             },
//                                             "hds": {
//                                                 "href": "https://hds.video-cdn.espn.com/z/motion/2023/1022/dm_231022_PAT_MAHOMES_RIP/dm_231022_PAT_MAHOMES_RIP_rel.smil/manifest.f4m"
//                                             },
//                                             "HLS": {
//                                                 "href": "https://service-pkgespn.akamaized.net/opp/hls/espn/2023/1022/dm_231022_PAT_MAHOMES_RIP/dm_231022_PAT_MAHOMES_RIP/playlist.m3u8",
//                                                 "HD": {
//                                                     "href": "https://service-pkgespn.akamaized.net/opp/hls/espn/2023/1022/dm_231022_PAT_MAHOMES_RIP/dm_231022_PAT_MAHOMES_RIP/playlist.m3u8"
//                                                 }
//                                             },
//                                             "HD": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_PAT_MAHOMES_RIP/dm_231022_PAT_MAHOMES_RIP_720p30_2896k.mp4"
//                                             },
//                                             "full": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_PAT_MAHOMES_RIP/dm_231022_PAT_MAHOMES_RIP_360p30_1464k.mp4"
//                                             },
//                                             "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_PAT_MAHOMES_RIP/dm_231022_PAT_MAHOMES_RIP_360p30_1464k.mp4"
//                                         },
//                                         "mobile": {
//                                             "alert": {
//                                                 "href": "http://m.espn.go.com/general/video/videoAlert?vid=38721779&ex_cid=espnapi_internal"
//                                             },
//                                             "source": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_PAT_MAHOMES_RIP/dm_231022_PAT_MAHOMES_RIP.mp4"
//                                             },
//                                             "href": "https://watch.auth.api.espn.com/video/auth/brightcove/06a07022-e962-4dd0-b2c9-d5ccd65e1648/asset?UMADPARAMreferer=http://www.espn.com/video/clip?id=38721779",
//                                             "streaming": {
//                                                 "href": "https://watch.auth.api.espn.com/video/auth/brightcove/06a07022-e962-4dd0-b2c9-d5ccd65e1648/asset?UMADPARAMreferer=http://www.espn.com/video/clip?id=38721779"
//                                             },
//                                             "progressiveDownload": {
//                                                 "href": "https://watch.auth.api.espn.com/video/auth/brightcove/06a07022-e962-4dd0-b2c9-d5ccd65e1648/asset?UMADPARAMreferer=http://www.espn.com/video/clip?id=38721779"
//                                             }
//                                         }
//                                     }
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ],
//             "links": [
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "summary",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/game/_/gameId/401547488",
//                     "text": "Gamecast",
//                     "shortText": "Gamecast",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "boxscore",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/boxscore/_/gameId/401547488",
//                     "text": "Box Score",
//                     "shortText": "Box Score",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "highlights",
//                         "desktop"
//                     ],
//                     "href": "https://www.espn.com/nfl/video?gameId=401547488",
//                     "text": "Highlights",
//                     "shortText": "Highlights",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "pbp",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/playbyplay/_/gameId/401547488",
//                     "text": "Play-by-Play",
//                     "shortText": "Play-by-Play",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "recap",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/recap?gameId=401547488",
//                     "text": "Recap",
//                     "shortText": "Recap",
//                     "isExternal": false,
//                     "isPremium": false
//                 }
//             ],
//             "status": {
//                 "clock": 0,
//                 "displayClock": "0:00",
//                 "period": 4,
//                 "type": {
//                     "id": "3",
//                     "name": "STATUS_FINAL",
//                     "state": "post",
//                     "completed": true,
//                     "description": "Final",
//                     "detail": "Final",
//                     "shortDetail": "Final"
//                 }
//             }
//         },
//         {
//             "id": "401547494",
//             "uid": "s:20~l:28~e:401547494",
//             "date": "2023-10-23T00:20Z",
//             "name": "Miami Dolphins at Philadelphia Eagles",
//             "shortName": "MIA @ PHI",
//             "season": {
//                 "year": 2023,
//                 "type": 2,
//                 "slug": "regular-season"
//             },
//             "week": {
//                 "number": 7
//             },
//             "competitions": [
//                 {
//                     "id": "401547494",
//                     "uid": "s:20~l:28~e:401547494~c:401547494",
//                     "date": "2023-10-23T00:20Z",
//                     "attendance": 69879,
//                     "type": {
//                         "id": "1",
//                         "abbreviation": "STD"
//                     },
//                     "timeValid": true,
//                     "neutralSite": false,
//                     "conferenceCompetition": false,
//                     "playByPlayAvailable": true,
//                     "recent": false,
//                     "venue": {
//                         "id": "3806",
//                         "fullName": "Lincoln Financial Field",
//                         "address": {
//                             "city": "Philadelphia",
//                             "state": "PA"
//                         },
//                         "capacity": 69879,
//                         "indoor": false
//                     },
//                     "competitors": [
//                         {
//                             "id": "21",
//                             "uid": "s:20~l:28~t:21",
//                             "type": "team",
//                             "order": 0,
//                             "homeAway": "home",
//                             "winner": true,
//                             "team": {
//                                 "id": "21",
//                                 "uid": "s:20~l:28~t:21",
//                                 "location": "Philadelphia",
//                                 "name": "Eagles",
//                                 "abbreviation": "PHI",
//                                 "displayName": "Philadelphia Eagles",
//                                 "shortDisplayName": "Eagles",
//                                 "color": "06424d",
//                                 "alternateColor": "a2aaad",
//                                 "isActive": true,
//                                 "venue": {
//                                     "id": "3806"
//                                 },
//                                 "links": [
//                                     {
//                                         "rel": [
//                                             "clubhouse",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/_/name/phi/philadelphia-eagles",
//                                         "text": "Clubhouse",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "roster",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/roster/_/name/phi/philadelphia-eagles",
//                                         "text": "Roster",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "stats",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/stats/_/name/phi/philadelphia-eagles",
//                                         "text": "Statistics",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "schedule",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/schedule/_/name/phi",
//                                         "text": "Schedule",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     }
//                                 ],
//                                 "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/phi.png"
//                             },
//                             "score": "31",
//                             "linescores": [
//                                 {
//                                     "value": 3
//                                 },
//                                 {
//                                     "value": 14
//                                 },
//                                 {
//                                     "value": 7
//                                 },
//                                 {
//                                     "value": 7
//                                 }
//                             ],
//                             "statistics": [],
//                             "records": [
//                                 {
//                                     "name": "overall",
//                                     "abbreviation": "Game",
//                                     "type": "total",
//                                     "summary": "6-1"
//                                 },
//                                 {
//                                     "name": "Home",
//                                     "type": "home",
//                                     "summary": "3-0"
//                                 },
//                                 {
//                                     "name": "Road",
//                                     "type": "road",
//                                     "summary": "3-1"
//                                 }
//                             ]
//                         },
//                         {
//                             "id": "15",
//                             "uid": "s:20~l:28~t:15",
//                             "type": "team",
//                             "order": 1,
//                             "homeAway": "away",
//                             "winner": false,
//                             "team": {
//                                 "id": "15",
//                                 "uid": "s:20~l:28~t:15",
//                                 "location": "Miami",
//                                 "name": "Dolphins",
//                                 "abbreviation": "MIA",
//                                 "displayName": "Miami Dolphins",
//                                 "shortDisplayName": "Dolphins",
//                                 "color": "008e97",
//                                 "alternateColor": "fc4c02",
//                                 "isActive": true,
//                                 "venue": {
//                                     "id": "3948"
//                                 },
//                                 "links": [
//                                     {
//                                         "rel": [
//                                             "clubhouse",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/_/name/mia/miami-dolphins",
//                                         "text": "Clubhouse",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "roster",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/roster/_/name/mia/miami-dolphins",
//                                         "text": "Roster",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "stats",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/stats/_/name/mia/miami-dolphins",
//                                         "text": "Statistics",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "schedule",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/schedule/_/name/mia",
//                                         "text": "Schedule",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     }
//                                 ],
//                                 "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/mia.png"
//                             },
//                             "score": "17",
//                             "linescores": [
//                                 {
//                                     "value": 3
//                                 },
//                                 {
//                                     "value": 7
//                                 },
//                                 {
//                                     "value": 7
//                                 },
//                                 {
//                                     "value": 0
//                                 }
//                             ],
//                             "statistics": [],
//                             "records": [
//                                 {
//                                     "name": "overall",
//                                     "abbreviation": "Game",
//                                     "type": "total",
//                                     "summary": "5-2"
//                                 },
//                                 {
//                                     "name": "Home",
//                                     "type": "home",
//                                     "summary": "3-0"
//                                 },
//                                 {
//                                     "name": "Road",
//                                     "type": "road",
//                                     "summary": "2-2"
//                                 }
//                             ]
//                         }
//                     ],
//                     "notes": [],
//                     "status": {
//                         "clock": 0,
//                         "displayClock": "0:00",
//                         "period": 4,
//                         "type": {
//                             "id": "3",
//                             "name": "STATUS_FINAL",
//                             "state": "post",
//                             "completed": true,
//                             "description": "Final",
//                             "detail": "Final",
//                             "shortDetail": "Final"
//                         }
//                     },
//                     "broadcasts": [
//                         {
//                             "market": "national",
//                             "names": [
//                                 "NBC"
//                             ]
//                         }
//                     ],
//                     "leaders": [
//                         {
//                             "name": "passingYards",
//                             "displayName": "Passing Leader",
//                             "shortDisplayName": "PASS",
//                             "abbreviation": "PYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "279 YDS, 2 TD, 1 INT",
//                                     "value": 279,
//                                     "athlete": {
//                                         "id": "4040715",
//                                         "fullName": "Jalen Hurts",
//                                         "displayName": "Jalen Hurts",
//                                         "shortName": "J. Hurts",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/4040715/jalen-hurts"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/4040715.png",
//                                         "jersey": "1",
//                                         "position": {
//                                             "abbreviation": "QB"
//                                         },
//                                         "team": {
//                                             "id": "21"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "21"
//                                     }
//                                 }
//                             ]
//                         },
//                         {
//                             "name": "rushingYards",
//                             "displayName": "Rushing Leader",
//                             "shortDisplayName": "RUSH",
//                             "abbreviation": "RYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "15 CAR, 62 YDS",
//                                     "value": 62,
//                                     "athlete": {
//                                         "id": "4259545",
//                                         "fullName": "D'Andre Swift",
//                                         "displayName": "D'Andre Swift",
//                                         "shortName": "D. Swift",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/4259545/dandre-swift"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/4259545.png",
//                                         "jersey": "0",
//                                         "position": {
//                                             "abbreviation": "RB"
//                                         },
//                                         "team": {
//                                             "id": "21"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "21"
//                                     }
//                                 }
//                             ]
//                         },
//                         {
//                             "name": "receivingYards",
//                             "displayName": "Receiving Leader",
//                             "shortDisplayName": "REC",
//                             "abbreviation": "RECYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "10 REC, 137 YDS, 1 TD",
//                                     "value": 137,
//                                     "athlete": {
//                                         "id": "4047646",
//                                         "fullName": "A.J. Brown",
//                                         "displayName": "A.J. Brown",
//                                         "shortName": "A.J. Brown",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/4047646/aj-brown"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/4047646.png",
//                                         "jersey": "11",
//                                         "position": {
//                                             "abbreviation": "WR"
//                                         },
//                                         "team": {
//                                             "id": "21"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "21"
//                                     }
//                                 }
//                             ]
//                         }
//                     ],
//                     "format": {
//                         "regulation": {
//                             "periods": 4
//                         }
//                     },
//                     "startDate": "2023-10-23T00:20Z",
//                     "geoBroadcasts": [
//                         {
//                             "type": {
//                                 "id": "1",
//                                 "shortName": "TV"
//                             },
//                             "market": {
//                                 "id": "1",
//                                 "type": "National"
//                             },
//                             "media": {
//                                 "shortName": "NBC"
//                             },
//                             "lang": "en",
//                             "region": "us"
//                         }
//                     ],
//                     "headlines": [
//                         {
//                             "description": "— Jalen Hurts needed a brace on his left leg in the second half — then shook off whatever ailed him to stand tall in the pocket and lead a go-ahead scoring drive — before he hobbled off the field after yet another Eagles win.",
//                             "type": "Recap",
//                             "shortLinkText": "Hurts passes for 279 yards, throws a TD and runs for one in Eagles' 31-17 win over Dolphins",
//                             "video": [
//                                 {
//                                     "id": 38722584,
//                                     "source": "espn",
//                                     "headline": "A.J. Brown's big grab sets up Jalen Hurts' 32nd career rushing TD",
//                                     "thumbnail": "https://a.espncdn.com/media/motion/2023/1022/dm_231022_eagles_td_2_pub2tag/dm_231022_eagles_td_2_pub2tag.jpg",
//                                     "duration": 22,
//                                     "tracking": {
//                                         "sportName": "nfl",
//                                         "leagueName": "No League",
//                                         "coverageType": "Final Game Highlight",
//                                         "trackingName": "*UNPUB 10/24 12pm* NFL_One-Play (A.J. Brown's epic grab sets up Jalen Hurts' 32nd career rushing TD) 2023/10/22 ESHEET",
//                                         "trackingId": "dm_231022_eagles_td_2_pub2tag"
//                                     },
//                                     "deviceRestrictions": {
//                                         "type": "whitelist",
//                                         "devices": [
//                                             "desktop",
//                                             "settop",
//                                             "handset",
//                                             "tablet"
//                                         ]
//                                     },
//                                     "links": {
//                                         "api": {
//                                             "self": {
//                                                 "href": "http://api.espn.com/v1/video/clips/38722584"
//                                             },
//                                             "artwork": {
//                                                 "href": "https://artwork.api.espn.com/artwork/collections/media/787a6cef-4a18-4910-944a-5b5b5a94cadd"
//                                             }
//                                         },
//                                         "web": {
//                                             "href": "https://www.espn.com/video/clip?id=38722584&ex_cid=espnapi_internal",
//                                             "short": {
//                                                 "href": "https://www.espn.com/video/clip?id=38722584"
//                                             },
//                                             "self": {
//                                                 "href": "https://www.espn.com/video/clip?id=38722584&ex_cid=espnapi_internal"
//                                             }
//                                         },
//                                         "source": {
//                                             "mezzanine": {
//                                                 "href": "https://media.video-origin.espn.com/espnvideo/2023/1022/dm_231022_eagles_td_2_pub2tag/dm_231022_eagles_td_2_pub2tag.mp4"
//                                             },
//                                             "flash": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_eagles_td_2_pub2tag/dm_231022_eagles_td_2_pub2tag.smil"
//                                             },
//                                             "hds": {
//                                                 "href": "https://hds.video-cdn.espn.com/z/motion/2023/1022/dm_231022_eagles_td_2_pub2tag/dm_231022_eagles_td_2_pub2tag_rel.smil/manifest.f4m"
//                                             },
//                                             "HLS": {
//                                                 "href": "https://service-pkgespn.akamaized.net/opp/hls/espn/2023/1022/dm_231022_eagles_td_2_pub2tag/dm_231022_eagles_td_2_pub2tag/playlist.m3u8",
//                                                 "HD": {
//                                                     "href": "https://service-pkgespn.akamaized.net/opp/hls/espn/2023/1022/dm_231022_eagles_td_2_pub2tag/dm_231022_eagles_td_2_pub2tag/playlist.m3u8"
//                                                 }
//                                             },
//                                             "HD": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_eagles_td_2_pub2tag/dm_231022_eagles_td_2_pub2tag_720p30_2896k.mp4"
//                                             },
//                                             "full": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_eagles_td_2_pub2tag/dm_231022_eagles_td_2_pub2tag_360p30_1464k.mp4"
//                                             },
//                                             "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_eagles_td_2_pub2tag/dm_231022_eagles_td_2_pub2tag_360p30_1464k.mp4"
//                                         },
//                                         "mobile": {
//                                             "alert": {
//                                                 "href": "http://m.espn.go.com/general/video/videoAlert?vid=38722584&ex_cid=espnapi_internal"
//                                             },
//                                             "source": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/2023/1022/dm_231022_eagles_td_2_pub2tag/dm_231022_eagles_td_2_pub2tag.mp4"
//                                             },
//                                             "href": "https://watch.auth.api.espn.com/video/auth/brightcove/787a6cef-4a18-4910-944a-5b5b5a94cadd/asset?UMADPARAMreferer=http://www.espn.com/video/clip?id=38722584",
//                                             "streaming": {
//                                                 "href": "https://watch.auth.api.espn.com/video/auth/brightcove/787a6cef-4a18-4910-944a-5b5b5a94cadd/asset?UMADPARAMreferer=http://www.espn.com/video/clip?id=38722584"
//                                             },
//                                             "progressiveDownload": {
//                                                 "href": "https://watch.auth.api.espn.com/video/auth/brightcove/787a6cef-4a18-4910-944a-5b5b5a94cadd/asset?UMADPARAMreferer=http://www.espn.com/video/clip?id=38722584"
//                                             }
//                                         }
//                                     }
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ],
//             "links": [
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "summary",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/game/_/gameId/401547494",
//                     "text": "Gamecast",
//                     "shortText": "Gamecast",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "boxscore",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/boxscore/_/gameId/401547494",
//                     "text": "Box Score",
//                     "shortText": "Box Score",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "highlights",
//                         "desktop"
//                     ],
//                     "href": "https://www.espn.com/nfl/video?gameId=401547494",
//                     "text": "Highlights",
//                     "shortText": "Highlights",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "pbp",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/playbyplay/_/gameId/401547494",
//                     "text": "Play-by-Play",
//                     "shortText": "Play-by-Play",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "recap",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/recap?gameId=401547494",
//                     "text": "Recap",
//                     "shortText": "Recap",
//                     "isExternal": false,
//                     "isPremium": false
//                 }
//             ],
//             "status": {
//                 "clock": 0,
//                 "displayClock": "0:00",
//                 "period": 4,
//                 "type": {
//                     "id": "3",
//                     "name": "STATUS_FINAL",
//                     "state": "post",
//                     "completed": true,
//                     "description": "Final",
//                     "detail": "Final",
//                     "shortDetail": "Final"
//                 }
//             }
//         },
//         {
//             "id": "401547495",
//             "uid": "s:20~l:28~e:401547495",
//             "date": "2023-10-24T00:15Z",
//             "name": "San Francisco 49ers at Minnesota Vikings",
//             "shortName": "SF @ MIN",
//             "season": {
//                 "year": 2023,
//                 "type": 2,
//                 "slug": "regular-season"
//             },
//             "week": {
//                 "number": 7
//             },
//             "competitions": [
//                 {
//                     "id": "401547495",
//                     "uid": "s:20~l:28~e:401547495~c:401547495",
//                     "date": "2023-10-24T00:15Z",
//                     "attendance": 66975,
//                     "type": {
//                         "id": "1",
//                         "abbreviation": "STD"
//                     },
//                     "timeValid": true,
//                     "neutralSite": false,
//                     "conferenceCompetition": false,
//                     "playByPlayAvailable": true,
//                     "recent": false,
//                     "venue": {
//                         "id": "5239",
//                         "fullName": "U.S. Bank Stadium",
//                         "address": {
//                             "city": "Minneapolis",
//                             "state": "MN"
//                         },
//                         "capacity": 67202,
//                         "indoor": true
//                     },
//                     "competitors": [
//                         {
//                             "id": "16",
//                             "uid": "s:20~l:28~t:16",
//                             "type": "team",
//                             "order": 0,
//                             "homeAway": "home",
//                             "winner": true,
//                             "team": {
//                                 "id": "16",
//                                 "uid": "s:20~l:28~t:16",
//                                 "location": "Minnesota",
//                                 "name": "Vikings",
//                                 "abbreviation": "MIN",
//                                 "displayName": "Minnesota Vikings",
//                                 "shortDisplayName": "Vikings",
//                                 "color": "4f2683",
//                                 "alternateColor": "ffc62f",
//                                 "isActive": true,
//                                 "venue": {
//                                     "id": "5239"
//                                 },
//                                 "links": [
//                                     {
//                                         "rel": [
//                                             "clubhouse",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/_/name/min/minnesota-vikings",
//                                         "text": "Clubhouse",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "roster",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/roster/_/name/min/minnesota-vikings",
//                                         "text": "Roster",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "stats",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/stats/_/name/min/minnesota-vikings",
//                                         "text": "Statistics",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "schedule",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/schedule/_/name/min",
//                                         "text": "Schedule",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     }
//                                 ],
//                                 "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/min.png"
//                             },
//                             "score": "22",
//                             "linescores": [
//                                 {
//                                     "value": 7
//                                 },
//                                 {
//                                     "value": 9
//                                 },
//                                 {
//                                     "value": 6
//                                 },
//                                 {
//                                     "value": 0
//                                 }
//                             ],
//                             "statistics": [],
//                             "records": [
//                                 {
//                                     "name": "overall",
//                                     "abbreviation": "Game",
//                                     "type": "total",
//                                     "summary": "3-4"
//                                 },
//                                 {
//                                     "name": "Home",
//                                     "type": "home",
//                                     "summary": "1-3"
//                                 },
//                                 {
//                                     "name": "Road",
//                                     "type": "road",
//                                     "summary": "2-1"
//                                 }
//                             ]
//                         },
//                         {
//                             "id": "25",
//                             "uid": "s:20~l:28~t:25",
//                             "type": "team",
//                             "order": 1,
//                             "homeAway": "away",
//                             "winner": false,
//                             "team": {
//                                 "id": "25",
//                                 "uid": "s:20~l:28~t:25",
//                                 "location": "San Francisco",
//                                 "name": "49ers",
//                                 "abbreviation": "SF",
//                                 "displayName": "San Francisco 49ers",
//                                 "shortDisplayName": "49ers",
//                                 "color": "aa0000",
//                                 "alternateColor": "b3995d",
//                                 "isActive": true,
//                                 "venue": {
//                                     "id": "4738"
//                                 },
//                                 "links": [
//                                     {
//                                         "rel": [
//                                             "clubhouse",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/_/name/sf/san-francisco-49ers",
//                                         "text": "Clubhouse",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "roster",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/roster/_/name/sf/san-francisco-49ers",
//                                         "text": "Roster",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "stats",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "http://www.espn.com/nfl/team/stats/_/name/sf/san-francisco-49ers",
//                                         "text": "Statistics",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     },
//                                     {
//                                         "rel": [
//                                             "schedule",
//                                             "desktop",
//                                             "team"
//                                         ],
//                                         "href": "https://www.espn.com/nfl/team/schedule/_/name/sf",
//                                         "text": "Schedule",
//                                         "isExternal": false,
//                                         "isPremium": false
//                                     }
//                                 ],
//                                 "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/sf.png"
//                             },
//                             "score": "17",
//                             "linescores": [
//                                 {
//                                     "value": 0
//                                 },
//                                 {
//                                     "value": 7
//                                 },
//                                 {
//                                     "value": 7
//                                 },
//                                 {
//                                     "value": 3
//                                 }
//                             ],
//                             "statistics": [],
//                             "records": [
//                                 {
//                                     "name": "overall",
//                                     "abbreviation": "Game",
//                                     "type": "total",
//                                     "summary": "5-2"
//                                 },
//                                 {
//                                     "name": "Home",
//                                     "type": "home",
//                                     "summary": "3-0"
//                                 },
//                                 {
//                                     "name": "Road",
//                                     "type": "road",
//                                     "summary": "2-2"
//                                 }
//                             ]
//                         }
//                     ],
//                     "notes": [],
//                     "status": {
//                         "clock": 0,
//                         "displayClock": "0:00",
//                         "period": 4,
//                         "type": {
//                             "id": "3",
//                             "name": "STATUS_FINAL",
//                             "state": "post",
//                             "completed": true,
//                             "description": "Final",
//                             "detail": "Final",
//                             "shortDetail": "Final"
//                         }
//                     },
//                     "broadcasts": [
//                         {
//                             "market": "national",
//                             "names": [
//                                 "ABC",
//                                 "ESPN"
//                             ]
//                         }
//                     ],
//                     "leaders": [
//                         {
//                             "name": "passingYards",
//                             "displayName": "Passing Leader",
//                             "shortDisplayName": "PASS",
//                             "abbreviation": "PYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "378 YDS, 2 TD, 1 INT",
//                                     "value": 378,
//                                     "athlete": {
//                                         "id": "14880",
//                                         "fullName": "Kirk Cousins",
//                                         "displayName": "Kirk Cousins",
//                                         "shortName": "K. Cousins",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/14880/kirk-cousins"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/14880.png",
//                                         "jersey": "8",
//                                         "position": {
//                                             "abbreviation": "QB"
//                                         },
//                                         "team": {
//                                             "id": "16"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "16"
//                                     }
//                                 }
//                             ]
//                         },
//                         {
//                             "name": "rushingYards",
//                             "displayName": "Rushing Leader",
//                             "shortDisplayName": "RUSH",
//                             "abbreviation": "RYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "15 CAR, 45 YDS, 1 TD",
//                                     "value": 45,
//                                     "athlete": {
//                                         "id": "3117251",
//                                         "fullName": "Christian McCaffrey",
//                                         "displayName": "Christian McCaffrey",
//                                         "shortName": "C. McCaffrey",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/3117251/christian-mccaffrey"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/3117251.png",
//                                         "jersey": "23",
//                                         "position": {
//                                             "abbreviation": "RB"
//                                         },
//                                         "team": {
//                                             "id": "25"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "25"
//                                     }
//                                 }
//                             ]
//                         },
//                         {
//                             "name": "receivingYards",
//                             "displayName": "Receiving Leader",
//                             "shortDisplayName": "REC",
//                             "abbreviation": "RECYDS",
//                             "leaders": [
//                                 {
//                                     "displayValue": "7 REC, 123 YDS, 2 TD",
//                                     "value": 123,
//                                     "athlete": {
//                                         "id": "4429205",
//                                         "fullName": "Jordan Addison",
//                                         "displayName": "Jordan Addison",
//                                         "shortName": "J. Addison",
//                                         "links": [
//                                             {
//                                                 "rel": [
//                                                     "playercard",
//                                                     "desktop",
//                                                     "athlete"
//                                                 ],
//                                                 "href": "http://www.espn.com/nfl/player/_/id/4429205/jordan-addison"
//                                             }
//                                         ],
//                                         "headshot": "https://a.espncdn.com/i/headshots/nfl/players/full/4429205.png",
//                                         "jersey": "3",
//                                         "position": {
//                                             "abbreviation": "WR"
//                                         },
//                                         "team": {
//                                             "id": "16"
//                                         },
//                                         "active": true
//                                     },
//                                     "team": {
//                                         "id": "16"
//                                     }
//                                 }
//                             ]
//                         }
//                     ],
//                     "format": {
//                         "regulation": {
//                             "periods": 4
//                         }
//                     },
//                     "startDate": "2023-10-24T00:15Z",
//                     "geoBroadcasts": [
//                         {
//                             "type": {
//                                 "id": "1",
//                                 "shortName": "TV"
//                             },
//                             "market": {
//                                 "id": "1",
//                                 "type": "National"
//                             },
//                             "media": {
//                                 "shortName": "ABC"
//                             },
//                             "lang": "en",
//                             "region": "us"
//                         },
//                         {
//                             "type": {
//                                 "id": "1",
//                                 "shortName": "TV"
//                             },
//                             "market": {
//                                 "id": "1",
//                                 "type": "National"
//                             },
//                             "media": {
//                                 "shortName": "ESPN"
//                             },
//                             "lang": "en",
//                             "region": "us"
//                         }
//                     ],
//                     "headlines": [
//                         {
//                             "description": "— Kirk Cousins let the ball fly for Jordan Addison earlier than he wanted to in the face of an all-out San Francisco blitz in the closing seconds of the second quarter for Minnesota, bracing for the worst after realizing the pass was underthrown.",
//                             "type": "Recap",
//                             "shortLinkText": "Vikings outlast 49ers 22-17 with 2 Cousins-Addison TDs and 2 late interceptions by Bynum",
//                             "video": [
//                                 {
//                                     "id": 38730100,
//                                     "source": "espn",
//                                     "headline": "Shoving match breaks out after Vikings pick off Purdy to seal victory",
//                                     "thumbnail": "https://a.espncdn.com/media/motion/2023/1023/evc_NFL_20231023_sf__min_cced2e99_6205_47b6_baf5_11411/evc_NFL_20231023_sf__min_cced2e99_6205_47b6_baf5_11411.jpg",
//                                     "duration": 46,
//                                     "tracking": {
//                                         "sportName": "nfl",
//                                         "leagueName": "NFL",
//                                         "coverageType": "Final Game Highlight",
//                                         "trackingName": "*UNPUB 10/25*NFL_OnePlay (Shoving match breaks out after Vikings pick off Purdy to seal victory) 2023/10/23 ESHEETS",
//                                         "trackingId": "evc_NFL_20231023_sf_@_min_2e4d116b-01cf-494d-81c0-b612bd6db927_4821"
//                                     },
//                                     "deviceRestrictions": {
//                                         "type": "whitelist",
//                                         "devices": [
//                                             "desktop",
//                                             "settop",
//                                             "handset",
//                                             "tablet"
//                                         ]
//                                     },
//                                     "links": {
//                                         "api": {
//                                             "self": {
//                                                 "href": "http://api.espn.com/v1/video/clips/38730100"
//                                             },
//                                             "artwork": {
//                                                 "href": "https://artwork.api.espn.com/artwork/collections/media/e5492933-68c4-45aa-b050-17cf13e32b66"
//                                             }
//                                         },
//                                         "web": {
//                                             "href": "https://www.espn.com/video/clip?id=38730100&ex_cid=espnapi_internal",
//                                             "short": {
//                                                 "href": "https://www.espn.com/video/clip?id=38730100"
//                                             },
//                                             "self": {
//                                                 "href": "https://www.espn.com/video/clip?id=38730100&ex_cid=espnapi_internal"
//                                             }
//                                         },
//                                         "source": {
//                                             "mezzanine": {
//                                                 "href": "https://media.video-origin.espn.com/espnvideo/fastclipper/2023/1023/evc_NFL_20231023_sf__min_cced2e99_6205_47b6_baf5_1a0b9d3d08cd_4821/evc_NFL_20231023_sf__min_cced2e99_6205_47b6_baf5_1a0b9d3d08cd_4821.mp4"
//                                             },
//                                             "flash": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/fastclipper/2023/1023/evc_NFL_20231023_sf__min_cced2e99_6205_47b6_baf5_1a0b9d3d08cd_4821/evc_NFL_20231023_sf__min_cced2e99_6205_47b6_baf5_1a0b9d3d08cd_4821.smil"
//                                             },
//                                             "hds": {
//                                                 "href": "https://hds.video-cdn.espn.com/z/motion/fastclipper/2023/1023/evc_NFL_20231023_sf__min_cced2e99_6205_47b6_baf5_1a0b9d3d08cd_4821/evc_NFL_20231023_sf__min_cced2e99_6205_47b6_baf5_1a0b9d3d08cd_4821_rel.smil/manifest.f4m"
//                                             },
//                                             "HLS": {
//                                                 "href": "https://service-pkgespn.akamaized.net/opp/hls/espn/fastclipper/2023/1023/evc_NFL_20231023_sf__min_cced2e99_6205_47b6_baf5_1a0b9d3d08cd_4821/evc_NFL_20231023_sf__min_cced2e99_6205_47b6_baf5_1a0b9d3d08cd_4821/playlist.m3u8",
//                                                 "HD": {
//                                                     "href": "https://service-pkgespn.akamaized.net/opp/hls/espn/fastclipper/2023/1023/evc_NFL_20231023_sf__min_cced2e99_6205_47b6_baf5_1a0b9d3d08cd_4821/evc_NFL_20231023_sf__min_cced2e99_6205_47b6_baf5_1a0b9d3d08cd_4821/playlist.m3u8"
//                                                 }
//                                             },
//                                             "HD": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/fastclipper/2023/1023/evc_NFL_20231023_sf__min_cced2e99_6205_47b6_baf5_1a0b9d3d08cd_4821/evc_NFL_20231023_sf__min_cced2e99_6205_47b6_baf5_1a0b9d3d08cd_4821_720p30_2896k.mp4"
//                                             },
//                                             "full": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/fastclipper/2023/1023/evc_NFL_20231023_sf__min_cced2e99_6205_47b6_baf5_1a0b9d3d08cd_4821/evc_NFL_20231023_sf__min_cced2e99_6205_47b6_baf5_1a0b9d3d08cd_4821_360p30_1464k.mp4"
//                                             },
//                                             "href": "https://media.video-cdn.espn.com/motion/fastclipper/2023/1023/evc_NFL_20231023_sf__min_cced2e99_6205_47b6_baf5_1a0b9d3d08cd_4821/evc_NFL_20231023_sf__min_cced2e99_6205_47b6_baf5_1a0b9d3d08cd_4821_360p30_1464k.mp4"
//                                         },
//                                         "mobile": {
//                                             "alert": {
//                                                 "href": "http://m.espn.go.com/general/video/videoAlert?vid=38730100&ex_cid=espnapi_internal"
//                                             },
//                                             "source": {
//                                                 "href": "https://media.video-cdn.espn.com/motion/fastclipper/2023/1023/evc_NFL_20231023_sf__min_cced2e99_6205_47b6_baf5_1a0b9d3d08cd_4821/evc_NFL_20231023_sf__min_cced2e99_6205_47b6_baf5_1a0b9d3d08cd_4821.mp4"
//                                             },
//                                             "href": "https://watch.auth.api.espn.com/video/auth/brightcove/e5492933-68c4-45aa-b050-17cf13e32b66/asset?UMADPARAMreferer=http://www.espn.com/video/clip?id=38730100",
//                                             "streaming": {
//                                                 "href": "https://watch.auth.api.espn.com/video/auth/brightcove/e5492933-68c4-45aa-b050-17cf13e32b66/asset?UMADPARAMreferer=http://www.espn.com/video/clip?id=38730100"
//                                             },
//                                             "progressiveDownload": {
//                                                 "href": "https://watch.auth.api.espn.com/video/auth/brightcove/e5492933-68c4-45aa-b050-17cf13e32b66/asset?UMADPARAMreferer=http://www.espn.com/video/clip?id=38730100"
//                                             }
//                                         }
//                                     }
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ],
//             "links": [
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "summary",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/game/_/gameId/401547495",
//                     "text": "Gamecast",
//                     "shortText": "Gamecast",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "boxscore",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/boxscore/_/gameId/401547495",
//                     "text": "Box Score",
//                     "shortText": "Box Score",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "highlights",
//                         "desktop"
//                     ],
//                     "href": "https://www.espn.com/nfl/video?gameId=401547495",
//                     "text": "Highlights",
//                     "shortText": "Highlights",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "pbp",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/playbyplay/_/gameId/401547495",
//                     "text": "Play-by-Play",
//                     "shortText": "Play-by-Play",
//                     "isExternal": false,
//                     "isPremium": false
//                 },
//                 {
//                     "language": "en-US",
//                     "rel": [
//                         "recap",
//                         "desktop",
//                         "event"
//                     ],
//                     "href": "https://www.espn.com/nfl/recap?gameId=401547495",
//                     "text": "Recap",
//                     "shortText": "Recap",
//                     "isExternal": false,
//                     "isPremium": false
//                 }
//             ],
//             "status": {
//                 "clock": 0,
//                 "displayClock": "0:00",
//                 "period": 4,
//                 "type": {
//                     "id": "3",
//                     "name": "STATUS_FINAL",
//                     "state": "post",
//                     "completed": true,
//                     "description": "Final",
//                     "detail": "Final",
//                     "shortDetail": "Final"
//                 }
//             }
//         }
//     ]
// }
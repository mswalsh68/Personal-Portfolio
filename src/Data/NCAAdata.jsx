import React from 'react';
import '../styles.css'
import NCAAlogo from '../assets/NCAA_logo.svg.png'

export default function NCAAdata() {
  
  const [game, setGame] = React.useState([]);
  const [week, setWeek] = React.useState([]);

  
  React.useEffect(() => {
    fetch('https://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard')
      .then(response => response.json())
      .then(teamaData => {

        // set game
        setGame(teamaData.events);
        console.log(teamaData.events);

        // set week
        setWeek(teamaData.leagues);
        console.log(teamaData.leagues);
 
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className='main-body'>
            
            {week.map((weeks =>{
              return(
                <>

                <h1><img src={NCAAlogo} height="200px"/> {weeks.season.displayName} {weeks.season.type.name}</h1>
                
                
                </>
              )
            }))}




              {game.map((games =>{
      
                return (
                      <div className="scoreboard" key={games.competitions[0].competitors[1].team.displayName}>
                        
                        <p className='at'>
                          {games.status.type.detail}
                          
                        </p>

                        <div className="scores away" >
                          <img src={games.competitions[0].competitors[1].team.logo}/><br />
                          {games.competitions[0].competitors[1].curatedRank.current < '26' &&  games.competitions[0].competitors[1].curatedRank.current} {games.competitions[0].competitors[1].team.displayName}<br />
                          {games.competitions[0].competitors[1].score}
                        </div>

                        <div className="scores at">
                          {games.competitions[0].venue.fullName} <br />
                          {games.competitions[0].venue.address.city}, {games.competitions[0].venue.address.state} <br />
                        </div>
                        
                        <div className="scores home">
                          <img src={games.competitions[0].competitors[0].team.logo}/><br />
                          {games.competitions[0].competitors[0].curatedRank.current < '26' &&  games.competitions[0].competitors[0].curatedRank.current} {games.competitions[0].competitors[0].team.displayName}<br />
                          {games.competitions[0].competitors[0].score}
                          
                        </div>
                      </div>
                )
              }))}
    
    </div>
  );

}


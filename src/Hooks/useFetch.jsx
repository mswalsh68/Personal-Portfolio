import React from 'react'

export default function useFetch(url) {

    const [game, setGame] = React.useState([]);
    const [week, setWeek] = React.useState([]);
    const [isPending, setIsPending] = React.useState(true)

    React.useEffect(() => {
        fetch(url)
          .then(response => response.json())
          .then(teamaData => {
    
            // set game
            setGame(teamaData.events);
            // console.log(teamaData);
    
            // set week
            setWeek(teamaData.leagues);
            // console.log(teamaData.leagues);
            setIsPending(false)
          })
          .catch(error => console.error(error));
      }, [url]);


  return {game, week, isPending}
}

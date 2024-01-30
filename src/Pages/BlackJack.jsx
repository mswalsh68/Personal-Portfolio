import React from 'react'

export default function BlackJack() {

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };
        
    const [firstCard, setFirstCard] = React.useState(randomNumberInRange(1, 11));
    const [secondCard, setSecondCard] = React.useState(randomNumberInRange(1, 11));
    const [card, setCards] = React.useState([]);
    let [sum, setSum] = React.useState("");
    let [message, setMessage] = React.useState("Lets start a game!");
    let [isAlive, setIsAlive] = React.useState(true);    
    let [hasBlackJack, setHasBlackJack] = React.useState(false);
 
    
    const toggleButton = () =>{
        document.getElementById("draw-el").className = "show";
    }
    
    
    const renderGame = ()=> {   
        
        if(sum <= 20){
            setMessage('Do you want draw a new card?')
        }else if(sum === 21){
            setHasBlackJack === true
            setMessage('BLACK JACK!')
        }else{
            setIsAlive === false
            setMessage('BUST!')
        }
    }

    const startGame = () => {
        setFirstCard(randomNumberInRange(1, 11));
        setSecondCard(randomNumberInRange(1, 11));
        setCards([firstCard, secondCard])   
        setSum(firstCard + secondCard)            
        toggleButton()
        renderGame()  
    }
    

    const newCard = ()=> {
        if (isAlive === true && hasBlackJack === false) {
            let drawCard = randomNumberInRange(1,11)
            setSum(sum + drawCard)
            setCards( prevCards=> [...prevCards, drawCard])   
            renderGame()  
        }
    }


  return (

      <div className="main-body">
      
      
        <div className="blackjack">

        <h1 className='bj'>Blackjack</h1>
        <button onClick={startGame}>START GAME</button>
        <p id="message-el">{message}</p>

     
      
      {card.map((card => {
        return(
            <p id="cards-el">Card: {card}</p>
            
            )
        }))}
 
 
        <p id="sum-el">Sum: {sum}</p>
    <button id="draw-el" onClick={newCard} className="hidden">Draw a new card</button>
        <p id="player-el"></p>
 
        </div>
 </div>
    )
}


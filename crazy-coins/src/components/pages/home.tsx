import { useState } from 'react';






export default function Home() {

    let dayCounter = 0;
    let capital = 500;
    let portfolioVal = 0;
    let initialDate = new Date();

    const [gameDate, setGameDate] = useState(initialDate);
    const [dateOffset, setDateOffset] = useState(10);

    const handleDateUpdate = () => {
        let newDate = new Date()
        newDate.setDate(gameDate.getDate() - dateOffset);
        setGameDate(newDate);
    }

    const handleOffset = (event: any) => {
        setDateOffset(event.target.value);
    }

    return(
        <div className = "home-wrapper">
            <h1>Crazy Coins</h1>
            <div className = "start-date-input-wrapper">
                <p>How many days ago would you like to start?</p>
                <input 
                    className = "start-input"
                    type = "text"
                    name = "offset"
                    onChange = {handleOffset}
                    value = {dateOffset}
                    />
                <button onClick = {handleDateUpdate}>Start!</button>
            </div>
            <div className = "counter">
                <p>Today's date: {gameDate.toString()}, day {dayCounter}</p>
                <p>Money: ${capital}</p>
                <p>Portfolio Value: ${portfolioVal}</p>
            </div>
        </div>
    )
}


function setStartDate (currentDate: Date) {
    let offset = document.getElementById("start-input")
    console.log({offset})
    // currentDate.setDate(currentDate.getDate() - offset);
}

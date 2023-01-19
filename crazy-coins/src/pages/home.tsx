import { useState } from 'react';
import StartForm from '../components/startForm'




export default function Home() {

    let capital = 500;
    let portfolioVal = 0;


    return(
        <div className = "home-wrapper">
            <h1>Crazy Coins</h1>
            <StartForm/>
            <div className = "counter">
                {/* <p>Today's date: {gameDate.toString()}, day {dayCounter}</p> */}
                <p>Money: ${capital}</p>
                <p>Portfolio Value: ${portfolioVal}</p>
            </div>
        </div>
    )
}



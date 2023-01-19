import { useState } from 'react';
import StartForm from '../components/startForm'
import GameView from '../components/gameView'



export default function Home() {

    let capital = 500;
    let portfolioVal = 0;


    return(
        <div className = "home-wrapper">
            <h1>Crazy Coins</h1>
            <StartForm/>
            <GameView/>
        </div>
    )
}



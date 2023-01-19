
import { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { changeStartOffset, changeStartCash } from '../store/startForm.slice'

export default function StartForm() {

    
    const dispatch = useDispatch()

    
    //Grab these values from state and then play around with them within the component

    const initMoney = useSelector((state: any) => state.startForm.startCash)
    const initOffset = useSelector((state: any) => state.startForm.startOffset)
    
    const [money, setMoney] = useState(initMoney); 
    const [dateOffset, setDateOffset] = useState(initOffset);

    

    const handleMoneyUpdate = (event: any) => {
        setMoney(event.target.value);
    }

    const handleOffset = (event: any) => {
        setDateOffset(event.target.value);
    }


    const handleStart = () => {
        //Upate values in global state TODO this is for when the component is destroyed eventually
        dispatch(changeStartOffset(dateOffset));
        dispatch(changeStartCash(money));

        //Update state for the game itself, accessing the gameView slice
        

    }

    

    return (
        <div className = "start-form-wrapper">
            <h3 >Let's get started...</h3>
            <label className = "start-input-wrapper start-offset">How many days ago would you like to start?
                <input 
                    className = "start-input"
                    type = "text"
                    name = "offset"
                    onChange = {handleOffset}
                    value = {dateOffset}
                    />
            </label>
            <label className = "start-input-wrapper start-money">How much money would you like to start with?
                <input 
                    value = {money}
                    onChange = {handleMoneyUpdate}
                />
            </label> 
            <button onClick = {handleStart}>Start</button>
        </div>
    )
}
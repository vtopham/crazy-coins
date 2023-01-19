
import { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { changeStartOffset, changeStartCash } from '../store/startForm.slice'

export default function StartForm() {

    
    const dispatch = useDispatch()

    
    //We're not initially getting our starting money/dates from state, but we'll update global state when the user clicks "start"

    //TODO, would be nice to initialize from state

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


    //When we hit "start", we want to update global state with our starting money and our start date, so that it can be accessed by other components

    const handleStart = () => {

        dispatch(changeStartOffset(dateOffset));
 
        dispatch(changeStartCash(money));
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
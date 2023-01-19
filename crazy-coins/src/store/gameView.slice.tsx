import { createSlice } from '@reduxjs/toolkit'

export const gameViewSlice = createSlice({
    name: 'gameView',
    initialState: {
        dateToday: "",
        dayCounter: 0,
        portfolioValue: 0,
        money: 0,
        netWorth: 0
    },
    reducers: {
        setDate: (state, action) => {
            if ( action.type == "increment" ) {

            } else if ( action.type == "reset") {

            }
        },
        incrementCounter: (state) => {
            state.dayCounter += 1;
        },
        updatePortfolio: (state, action) => {
            state.portfolioValue += action.payload;
            state.netWorth = state.money + state.portfolioValue;
        },
        updateMoney: (state, action) => {
            state.money += action.payload;
            state.netWorth = state.money + state.portfolioValue;
        },

    }
})

export const { setDate, incrementCounter, updatePortfolio, updateMoney } = gameViewSlice.actions;

export default gameViewSlice.reducer
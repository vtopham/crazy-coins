import { createSlice } from '@reduxjs/toolkit'

export const startFormSlice = createSlice({
    name: 'startForm',
    initialState: {
        startOffset: 0,
        startCash: 500
    },
    reducers: {
        changeStartOffset: (state, action) => {
            //Get the offset to calculate the start date
            state.startOffset = action.payload
            
        },
        changeStartCash: (state, action) => {
            //Change the start cash when the user clicks to reset or "start". Does not add to or subtract from cash reserve while the game is ongoing.
            state.startCash = action.payload
            
        }
    }
})

export const { changeStartOffset, changeStartCash } = startFormSlice.actions;

export default startFormSlice.reducer
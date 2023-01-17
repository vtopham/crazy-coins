import { configureStore } from '@reduxjs/toolkit'
import startFormReducer from './startForm.slice'


export default configureStore({
    reducer: {
        startForm: startFormReducer,
    }
})
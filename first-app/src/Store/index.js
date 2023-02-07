import {configureStore} from '@reduxjs/toolkit'
import calReducer from './AddUaer-slice'
const store = configureStore({
    reducer:{
        cal:calReducer
    }
})

export default store;
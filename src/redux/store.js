import {combineReducers} from "redux"
import {configureStore} from "@reduxjs/toolkit";

import {authReducer} from "./slices/auth.slice";

const rootReducer = combineReducers({
    auth: authReducer,
})

const setUpStore = () => configureStore({
    reducer: rootReducer
})

export {
    setUpStore
}
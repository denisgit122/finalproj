import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


let initialState = {
    email: null,
    token:null,
    errors: null,
    loading: null
};
const login = createAsyncThunk (
    "userSlice/getById",
);

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        setUser(state, action){
            state.email = action.payload;
            state.token = action.payload
        },
        removeUser(state){
            state.email = null;
            state.token = null
        }
    },

})
const {reducer: authReducer} = authSlice;

export const {setUser, removeUser} = authSlice.actions

const authAction = {
    login
}
export {
    authReducer,
    authAction
}
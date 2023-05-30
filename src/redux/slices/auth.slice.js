import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


let initialState = {
    login: [],
    errors: null,
    loading: null
};
const login = createAsyncThunk (
    "userSlice/getById",
    async (user, thunkAPI)=>{
        try {
            const arr = [];
            arr.push(user)

            return arr
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {},
    extraReducers: {
        [login.fulfilled]: (state, action)=>{
            state.login = action.payload
        },

    }
})
const {reducer: authReducer} = authSlice;

const authAction = {
    login
}
export {
    authReducer,
    authAction
}
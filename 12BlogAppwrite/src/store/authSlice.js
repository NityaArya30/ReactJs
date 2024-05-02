import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    status : false,
    userData : null
}

//ye auth ka slice h aisa post ka bhi bnega 

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
     }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;
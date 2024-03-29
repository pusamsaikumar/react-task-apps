import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    currentUser:null,
    isLoading:false,
    error:null,
};

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        loginStart:(state)=>{
            state.isLoading = true;
        },
        loginSuccess:(state,action)=>{
            state.isLoading =false;
            state.currentUser = action.payload;
        },
        loginFailure:(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        },
        logout:(state)=>{
            state.currentUser =null;
            state.isLoading= false;
            state.error = null;
        }
    }
});
export const {loginStart, loginSuccess, loginFailure,logout} = userSlice.actions;
export default userSlice.reducer;
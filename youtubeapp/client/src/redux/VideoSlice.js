import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    currentVideo:null,
    isLoading:false,
    error:null,
};

const videoSlice = createSlice({
    name:"video",
    initialState,
    reducers:{
        fetchStart:(state)=>{
            state.isLoading = true;
        },
        fetchSuccess:(state,action)=>{
            state.isLoading =false;
            state.currentVideo = action.payload;
        },
        fetchFailure:(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        },
        like:(state,action)=>{

        },
        dislike:(state,action)=>{

        }
        
    }
});
export const {fetchStart,fetchFailure,fetchSuccess,like,dislike} = videoSlice.actions;
export default videoSlice.reducer;
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
        // like:(state,action)=>{
        //     if(!state.currentVideo.likes.includes(action.payload)){
        //         state.currentVideo.likes.push(action.payload);
        //         state.currentVideo.dislikes.splice(state.currentVideo.dislikes.findIndex((userId) => userId === action.payload),1)
        //     }
        // },
        // dislike:(state,action)=>{
        //     if(!state.currentVideo.dislikes.includes(action.payload)){
        //         state.currentVideo.dislikes.push(action.payload);
        //         state.currentVideo.likes.splice(state.currentVideo.likes.findIndex((userId)=>userId === action.payload),1)
        //     }
        // }
        
        like: (state, action) => {
            if (!state.currentVideo.likes.includes(action.payload)) {
              state.currentVideo.likes.push(action.payload);
              state.currentVideo.dislikes.splice(
                state.currentVideo.dislikes.findIndex(
                  (userId) => userId === action.payload
                ),
                1
              );
            }
          },
          dislike: (state, action) => {
            if (!state.currentVideo.dislikes.includes(action.payload)) {
              state.currentVideo.dislikes.push(action.payload);
              state.currentVideo.likes.splice(
                state.currentVideo.likes.findIndex(
                  (userId) => userId === action.payload
                ),
                1
              );
            }
          },
          subscription:(state,action)=>{
           if( state.currentUser.subscribedUsers.includes(action.payload)){
            state.currentUser.subscribedUsers.splice(state.currentUser.subscribedUsers.findIndex((chennelId) => chennelId === action.payload),1);
           } else{
              state.currentUser.subscribedUsers.push(action.payload);
           }
          }
    }
});
export const {fetchStart,fetchFailure,fetchSuccess,like,dislike,subscription} = videoSlice.actions;
export default videoSlice.reducer;
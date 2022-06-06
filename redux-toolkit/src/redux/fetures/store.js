import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../fetures/UserSlice';
export const store=configureStore({
    reducer:{
        users:userReducer
    }
})
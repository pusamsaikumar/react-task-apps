import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { fetchRegister ,logoutUser,fetchLogin} from "./authService";

// get the user from localStorage;
const user = JSON.parse(localStorage.getItem('user'));

// logout user
export const logout =createAsyncThunk('auth/logout', async() =>{
    
        return  await logoutUser();
})

// initialstate

const initialState={
    user: user ? user :null,
    isError:false,
    isLoading:false,
    isSuccess:false,
    message:''
};
// register user
export const register =createAsyncThunk('auth/register', async(user,thunkAPI) =>{
    try{
        return  await fetchRegister(user);
    } 
    catch(error){
        const message = (
            error.response && error.response.data && error.response.data.message || error.message || error.toString()
        )
        return thunkAPI.rejectWithValue(message);
    }
})

// login user
export const login =createAsyncThunk('auth/login', async(user,thunkAPI) =>{
    try{
        return  await fetchLogin(user);
    } 
    catch(error){
        const message = (
            error.response && error.response.data && error.response.data.message || error.message || error.toString()
        )
        return thunkAPI.rejectWithValue(message);
    }
})


//create slice
const  authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        reset:(state,action)=>{
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = false;
            state.message = ""
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(register.pending,(state,action)=>{
                state.isLoading = true;
            })
            .addCase(register.fulfilled,(state,action)=>{
                state.isSuccess = true;
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(register.rejected,(state,action)=>{
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.user = null;
            })

            .addCase(login.pending,(state,action)=>{
                state.isLoading = true;
            })
            .addCase(login.fulfilled,(state,action)=>{
                state.isSuccess = true;
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(login.rejected,(state,action)=>{
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.user = null;
            })

            .addCase(logout.fulfilled,(state,action)=>{
                state.user = null;
            })
    }
});
export const {reset} = authSlice.actions;
export default authSlice.reducer;

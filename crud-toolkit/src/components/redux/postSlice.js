import { createSlice,createAsyncThunk  } from "@reduxjs/toolkit";


export const getpost = createAsyncThunk('posts/getpost', async()=>{
return  fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=>response.json())
.then((data)=>{
  return data;
})
.catch((error)=>console.log(error))
});

export const fetchpost = createAsyncThunk('posts/fetchpost', async({id})=>{
    return  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response)=>response.json())
    .then((data)=>{
      return data;
    })
    .catch((error)=>console.log(error))
    })

const postsSlice = createSlice({
    name:'posts',
    initialState:{
        postlist:[],
        status:'idle',
        error:'',
        loading:false
    },
    reducers:{
        [fetchpost.pending]:(state,action)=>{
            state.loading = true;
        },
        [fetchpost.fulfilled]:(state,action)=>{
            state.loading = false;
            state.postlist = [action.payload]
        },
        [fetchpost.rejected]:(state,action)=>{
            state.loading = false;
            state.error = action.payload
        },
       
    },
   extraReducers:(builder)=>{
    builder
        .addCase(getpost.pending,(state,action)=>{
            state.status = 'loading';
            state.postlist = [];
        })
        .addCase(getpost.fulfilled,(state,action)=>{
            state.status = '200 ok';
            state.postlist = action.payload;
            state.error =''
        })
        .addCase(getpost.rejected,(state,action)=>{
            state.status = 'failed';
            state.postlist = [];
            state.error =action.payload
        })
   }
})
export default postsSlice.reducer;
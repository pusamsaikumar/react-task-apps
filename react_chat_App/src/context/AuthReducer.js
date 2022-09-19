
export const AuthReducer =(state,action)=>{
    switch(action.type){
        case 'LOGIN_START':
            return {
                users:null,
                isLoading:true,
                error:false
            };
        case 'LOGIN_SUCCESS':
            return {
                users:action.payload,
                isLoading:false,
                error:false
            };
        case 'LOGIN_FAILURE':
            return {
                users:null,
                isLoading:false,
                error:action.payload
            };
        case 'FOLLOW':
            return {
                ...state,
                users:{
                    ...state.users,
                    followings:[state.users.followings,action.payload]
                }
            };
        case 'UNFOLLOW':
            return {
                ...state,
                users:{
                    ...state.users,
                    followings:state.users.followings.filter(following =>following !== action.payload)
                }
            };
        default:
            return state;
    }
};
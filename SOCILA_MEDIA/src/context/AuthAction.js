export const LoginStart =(userCredentials)=>{
    return {
        type:'LOGIN_START'
    }
}
export const LoginSuccess = (user) =>{
    return {
        type:'LOGIN_SUCCESS',
        payload:user
    }
};
export const LoginFailure = (user) =>{
    return {
        type:'LOGIN_FAILURE',
        payload:user
    }
}

export const Follow = (userId) =>({
    type:'FOLLOW',
    payload:userId
});

export const Unfollow = (userId) =>({
        type:'UNFOLLOW',
        payload:userId
});
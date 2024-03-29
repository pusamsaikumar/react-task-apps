
import axios from "axios";

export const LoginCall = async(userCredentials,dispatch)=>{
    dispatch({type:'LOGIN_START'});
    try{
        const res = await axios.post('http://localhost:5000/auth/login',userCredentials);
        const user = await res.data;
        dispatch({type:'LOGIN_SUCCESS',payload:user})
    }catch(err){
        dispatch({type:'LOGIN_FAILURE',payload:err})
    }
}
// import axios from "axios";

// export const LoginCall = async (userCredentials, dispatch) => {
//   dispatch({ type: 'LOGIN_START' });
//   try {
//     const res = await axios.post("/auth/login", userCredentials);
//     dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
//   } catch (err) {
//     dispatch({ type: 'LOGIN_FAILURE', payload: err });
//   }
// };

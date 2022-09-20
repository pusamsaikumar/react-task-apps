import {createContext,useEffect,useReducer} from 'react';
import { AuthReducer } from './AuthReducer';



// export const InitialState = {
//     users:{
//         "_id": "631cde1858fb6ba67c58dc23",
//         "username": "surya",
//         "email": "sai@gmail.com",
//         "profilePicture": "",
//         "coverPicture": "",
//         "followers": [
//             "631cde2d58fb6ba67c58dc25"
//         ],
//         "followings": [
//             "631cde2d58fb6ba67c58dc25"
//         ],
//         "isAdmin": false,
//         "createdAt": "2022-09-10T18:57:28.440Z",
//         "__v": 0,
//         "desc": "hellow Friends this is sai ...",
//         "city": "HYDERABAD",
//         "from": "India",
//         "relationship": 1
//     },
//     isLoading:false,
//     error:false,
// };
const InitialState ={
    users: JSON.parse(localStorage.getItem("users")) || null,
    isLoading:false,
    error:false
}
export const AuthContext = createContext(InitialState);

export const AuthContextProvider =({children})=>{
    const [state,dispatch] = useReducer(AuthReducer,InitialState)
    useEffect(()=>{
        localStorage.setItem("users", JSON.stringify(state.users))
      },[state.users])
      

    return <AuthContext.Provider value={{
        users:state.users,
        isLoading:state.isLoading,
        error:state.error,
        dispatch
    }}>
        {children}
    </AuthContext.Provider>
};

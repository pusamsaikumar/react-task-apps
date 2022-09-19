import {createContext,useReducer} from 'react';
import { AuthReducer } from './AuthReducer';



export const InitialState = {
    users:{
        "_id": "631cde2d58fb6ba67c58dc25",
        "username": "vijay",
        "email": "vijay@gmail.com",
        "profilePicture": "/person/2.jpeg",
        "coverPicture": "",
        "followers": [
            "631cde1858fb6ba67c58dc23"
        ],
        "followings": [
            "631cde4358fb6ba67c58dc27"
        ],
        "isAdmin": false,
        "createdAt": "2022-09-10T18:57:49.640Z",
        "__v": 0,
        "desc": "hellow this is surya"
    },
    isLoading:false,
    error:false,
};
// const InitialState ={
//     users:null,
//     isLoading:false,
//     error:false
// }
export const AuthContext = createContext(InitialState);

export const AuthContextProvider =({children})=>{
    const [state,dispatch] = useReducer(AuthReducer,InitialState)

    return <AuthContext.Provider value={{
        users:state.users,
        isLoading:state.isLoading,
        error:state.error,
        dispatch
    }}>
        {children}
    </AuthContext.Provider>
};

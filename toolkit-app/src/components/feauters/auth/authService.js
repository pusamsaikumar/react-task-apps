import axios from "axios";

export  const fetchRegister = async(userData)=>{
    const response = await axios.post('/api/users/',userData)
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
}

export  const fetchLogin = async(userData)=>{
    const response = await axios.post('/api/users/' + 'login',userData)
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
}

export const logoutUser = async()=>{
    localStorage.getItem('user')
} 

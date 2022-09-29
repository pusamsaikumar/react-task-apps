import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from './../firebase';
import axios from 'axios';
import { useNavigate, useNavigation} from 'react-router-dom';
const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left:0;
  background-color: #000000a7;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  opacity:0.6;
  z-index:1;
`;
const Close = styled.div`
position:absolute;
top:10px;
right:10px;
color:red;
cursor:pointer;
background-color:silver;
padding:5px;
`;
const Title = styled.h1`
 text-align:center;
 color:darkred;
`;
const Input = styled.input`
  border:1px solid lightgrey;
  padding:10px;
  width:500px;
  border-radius:5px;
  background-color:transparent;
  color:grey;
  outline:none;
`;
const Desc = styled.textarea`
  border:1px solid lightgrey;
  padding:10px;
  width:500px;
  border-radius:5px;
  background-color:transparent;
  color:grey;
  outline:none;

`;
const Button = styled.button`
   /* margin:auto; */
   padding:10px;
   align-self:center;
   width:150px;
   background-color:silver;
   color:darkgreen;
   border-radius:5px;
   cursor:pointer;
   &:hover{
    background-color:darkgreen;
    color:white;
   }
`;
function UploadPopup({setOpen}) {
    const [imgPer,setImgPer] = useState(0);
    const [videoPer,setVideoPer] = useState(0);
    const [tags,setTags] = useState([]);
    const [inputs,setInputs] = useState({});
    const [img,setImg] = useState(undefined);
    const [video,setVideo] = useState(undefined);
   
      const navigate = useNavigate();
    const upload =(file,urlType)=>{
        const storage = getStorage(app);

        const fileName = new Date().getTime()+file.name;
        const storageRef = ref(storage, fileName);
const uploadTask = uploadBytesResumable(storageRef, file);

uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
     urlType === "imgUrl" ? setImgPer(Math.round(progress)) : setVideoPer(Math.round(progress));
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {},
  ()=>{
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
       setInputs((prev)=>{
        return {
            ...prev,
            [urlType]:downloadURL
        }
       })
      });
  }
  )
    }

    useEffect(()=>{
        video && upload(video,"videoUrl")
    },[video]);
    useEffect(()=>{
        img && upload(img,"imgUrl")
    },[img])

     const handleChange = (e) =>{
            setInputs((prev)=>{
                return{
                        ...prev,
                        [e.target.name] : e.target.value
                }
            })
     };
  
     const handleTags =(e)=>{
        setTags(e.target.value.split(","))
     };
     // upload to mongodb;
     const handleUpload = async(e)=>{ 
        e.preventDefault();

      
            const res = await axios.post("/videos", {...inputs, tags})
            setOpen(false)
            res.status===200 && navigate(`/video/${res.data._id}`)
          


      //  const res = await axios.post('http://localhost:8800/videos/',{...inputs, tags});
      //  console.log(res.data)
        // setOpen(false);
        // res.status === 200 && navigate(`/video/${res.data._id}`)


// axios.post('http://localhost:8800/videos',{...inputs, tags}, {
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzRhZWJiNmIyZGE1NmFkMzI3MGQ5MiIsImlhdCI6MTY2NDQ4ODMzN30.UyBy5Blz1mZZUV1AlVESUV6sZCj47p8ltbdn8RLI9AY'
//     },      
// })      
// .then((response) => {
//   console.log('response',response.data)

// })
// .catch((error) => {
//   alert('error',error.response)
 

// })

// // console.log('----cheers---------',data)
// dispatch(userUpdateProfileSuccess(data))


        
     }
  return (
    <Container>
        <Wrapper>
            <Close onClick={()=>setOpen(false)}>X</Close>
            <Title>Upload a new video.....</Title>
            <label>Video:</label>
            
            {
            
            videoPer > 0 ? ("uploading : " + videoPer + "%") :  (
                <Input type="file" accept="video/*" onChange={(e)=>setVideo(e.target.files[0])}   />
            )
            }
            <Input type="text" placeholder='title' name ="title" onChange={handleChange}  />
            
            <Desc type="textarea" row={8} placeholder="Description.." name="desc" onChange={handleChange} />
            <Input type="text" placeholder='separate with the tags comma,,' value={tags} onChange={handleTags} />
            <label>Image:</label>
            {
                imgPer > 0 ? ("uploading :" + imgPer  + "%") : (
            <Input type="file" accept='image/*' onChange={(e)=>setImg(e.target.files[0])} />
                    
                )
            }
            <Button onClick={handleUpload}>Upload</Button>
        </Wrapper>
    </Container>
  )
}
 
export default UploadPopup ;
//Berear token 976f9d976a54effb7542419bf7fd698fd6e349ea8b283c7f2e19819bf87e1a36

// axios.post('http://10.0.1.14:8001/api/logout',request_data, {
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer '+token
//     },      
// })      
// .then((response) => {
//   console.log('response',response.data)

// })
// .catch((error) => {
//   alert('error',error.response)
//   dispatch(userUpdateProfileFail())

// })

// // console.log('----cheers---------',data)
// dispatch(userUpdateProfileSuccess(data))
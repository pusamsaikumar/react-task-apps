import React ,{useRef,useState} from 'react';
import axios from 'axios';
import './share.css';
 import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import {PermMedia,Label,Room,EmojiEmotions, Cancel} from '@mui/icons-material';
import {AuthContext} from '../../context/AuthContext';
import { useContext } from 'react';
function Share() {
        const {users} = useContext(AuthContext);
        const PF = process.env.REACT_APP_PUBLIC_FOLDER;
        const desc = useRef();
   
        
        const [file,setFile] = useState(null);

        const SubmitHandler = async(e)=>{     
                e.preventDefault();
                const newPost = {
                    userId:users._id,
                    desc:desc.current.value,
                 
                }
                if(file){
                    const data = new FormData();
                    // const filename = Date.now() + file.name;
                    const filename = file.name;
                    data.append("file",file);
                    data.append("name",filename);
                    newPost.img = filename;
                    console.log(newPost)
                    try{
                        await axios.post('http://localhost:5000/upload',data)
                    }catch(err){
                        console.log(err)
                    }
                }

               
                try{
                  await  axios.post('http://localhost:5000/posts/',newPost);
                  window.location.reload();
                }catch(err){
                    console.log(err)
                }
    }


    // const submitHandler = async (e) => {
    //     e.preventDefault();
    //     const newPost = {
    //       userId: users._id,
    //       desc: desc.current.value,
    //     };
    //     if (file) {
    //       const data = new FormData();
    //       const filename = Date.now() + file.name;
    //       data.append("name", filename);
    //       data.append("file", file);
    //       newPost.img = filename;
    //       console.log(newPost);
    //       try {
    //         await axios.post('http://localhost:5000/upload', data);
    //       } catch (err) {
    //         console.log(err)
    //       }
    //     }
    //     try {
    //       await axios.post('http://localhost:5000/posts', newPost);
    //       window.location.reload();
    //     } catch (err) {
    //       console.log(err)
    //     }
    //   };

  return (
    <div className='share'>
        <div className='shareWrapper'>
        <div className='shareTop'>
            <img className='shareImg' src={users.profilePicture ? PF+users.profilePicture : PF+"/person/noAvatar2.png"} alt=''  />
            <input ref={desc} type="text" placeholder={"whats's in your mind " + users.username + "?"} className='shareInput' />
        </div>
        <hr className='shareHr' />
        {
            file && (
                <div className="shareImgContainer">
                    <img src={URL.createObjectURL(file)} alt="" className="shareImage" />
                    <Cancel className='cancelImg' onClick={()=>setFile(null)} />
                </div>
            )
        }
        <form className='shareBottom' onSubmit={SubmitHandler} >
            <div className='shareOpitons'>
                <label htmlFor='file' className='shareOption'>
                    <PermMedia htmlColor='darkred' className='shareOptionIcon' />
                    <span className='shareOptionText'>Photo or Video</span>
                    <input
                style={{ display: "none" }}
                type="file"
                id="file"
          
                accept=".jpg,.jpeg,.png"
                onChange={(e) => setFile(e.target.files[0])}
              /> 
             
                </label>
            </div>
            <div className='shareOpitons'>
                <div className='shareOption'>
                    <Label htmlColor='blue' className='shareOptionIcon' />
                    <span className='shareOptionText'>Tag</span>
                </div>
            </div>
            <div className='shareOpitons'>
                <div className='shareOption'>
                    <Room htmlColor='green' className='shareOptionIcon' />
                    <span className='shareOptionText'>Location</span>
                </div>
            </div>
            <div className='shareOpitons'>
                <div className='shareOption'>
                    <EmojiEmotions htmlColor='goldenrod' className='shareOptionIcon' />
                    <span className='shareOptionText'>Feelings</span>
                </div>
            </div>
             <button className='sharebtn' type='submit'>Share</button>
        </form>
        </div>
    </div>
  )
}

export default Share
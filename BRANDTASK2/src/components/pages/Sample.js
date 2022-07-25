import React, { useState, useEffect, useRef } from 'react';

import Data from "../../data.json";
import { v1 as uuidv1 } from 'uuid';
import axios from 'axios';

function Sample() {
    const [data,setData] = useState(Data);
     // Reference
  const nameRef = useRef();
  const emailRef = useRef();

 

  // Temp State
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const [updateID, setUpdateID] = useState();
  const [updateName, setUpdateName] = useState();
  const [updateEmail, setUpdateEmail] = useState();

  // Effect
  //////////////////////////////////////////
  useEffect(() => {
    // console.log(data);
    // setDate(Data)
    // clear form fields
    // titleRef.current.value = null;
    // contentRef.current.value = null;
  },[data]);
  


  // Add Post
  //////////////////////////////////////////
  const addPost = (e) => {
    e.preventDefault();
    if(name && email) {
      // create new post object
      let newPost = {
        "id": uuidv1(),
        "name": name,
        "email": email
      }
      // merge new post with copy of old state
      let posts = [...data, newPost];
      // push new object to state
      setData(posts);
      // clear title and content from state
    //   setTitle();
    //   setContent();

    //   // update write to json file
    //   saveJson(posts);
     setName('');
     setEmail('')
   }
  }
  


  // Delete Post 
  //////////////////////////////////////////
  const deletePost = (key) => {
    // filter out post containing that id
    // let filterOutPost = [...data].filter(OBJ=>OBJ.id!==key);
    // // save the rest in state
    // setData(filterOutPost);

    // // update write to json file
    // saveJson(filterOutPost);

  }

  // Populate Post
  ////////////////////////////////////////// 
  const populatePost = (key, name, email) => {
    // setUpdateID(key);
    // setUpdateTitle(title);
    // setUpdateContent(content);
  }

  // Update Post 
  //////////////////////////////////////////
  const updatePost = () => {
    // populate post info from temp state and prepare new object for changed post
    // let editedPost = {
    //   "id": updateID,
    //   "title": updateTitle,
    //   "content": updateContent
    // }
    // // remove old post with same ID and get the remaining data /// filter 
    // let filterPost = [...data].filter(OBJ=>OBJ.id!==updateID);
    // // prepare object with edited post + remaining data from object above
    // let posts = [...filterPost, editedPost];
    // // push int state
    // setData(posts);

    // setUpdateID();
    // setUpdateTitle();
    // setUpdateContent();

    // // update write to json file
    // saveJson(posts);

  }

  // Write to JSON File
  //////////////////////////////////////////
  // this function will receive all uodated state / posts after you add, edit delete post
  const saveJson = (posts) => {
    // api URL // end point from node server / express server
    // const url = 'http://localhost:5000/write'
    // axios.post(url, posts)
    // .then(response => {
    //   // console.log(response);
    // });
  }

  // Bonus Section
  //////////////////////////////////////////
  // Downloading JSON File
  const saveData = jsonDate => {
    // const fileData = JSON.stringify(jsonDate);

    // const blob = new Blob([fileData], {type: "text/plain"});
    // const url = URL.createObjectURL(blob);
    // // create link
    // const link = document.createElement('a');
    // // point link to file to be downloaded
    // link.download = 'newData.json';
    // link.href = url;
    // // trigger download
    // link.click();
  }


  return (
    <div>
        <h4>Sample Test</h4>
        <div>
           <form  style={{display:'flex',flexDirection:'column' , margin:20,padding:20,marginBottom:4}} onSubmit={(e)=>{addPost(e)}}  >
           <input type='text' placeholder='enter name'  style={{marginBottom:5}}  onChange={ e => setName( e.target.value ) } 
          value={ name || '' } />
            <input type='email' placeholder ='enter email'   style={{marginBottom:5}}   onChange={ e => setEmail( e.target.value ) } 
          value={ email || '' }  />
            <input type='submit' value="addpost"  />
           </form>
        </div>
        <h4>Fetch Data</h4>

        
      <div className="posts">
        { data ? data.map(post => {
          return(
            <div key={ post.id } className="post">
              <h3>{ post.name}</h3>
              <p>{ post.email }</p>
              <button onClick={ () => populatePost(post.id, post.name, post.email) }>Edit</button>
              <button onClick={ () => deletePost(post.id) }>Delete</button>
            </div>
          )
        }) : null }
        
    </div>
    </div>
  )
}

export default Sample;
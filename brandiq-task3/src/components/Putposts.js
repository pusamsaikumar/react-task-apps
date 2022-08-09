

import React, {useState,useEffect} from 'react'

function PutPosts() {

      const [data,setData] = useState([]);

      const [title,setTitle] = useState('');
      const [body,setBody]  = useState('');
      const [userId,setUserId]=useState('');
     // const [id,setId] = useState(null);
   
    //   s
    const withInputSubmit=(e)=>{
        e.preventDefault();
        // post data with input filed values
        let post ={title,body,userId};
    
        // post data without input field values
    //    let postdata = {
    //       title:'SAIKUMAR',
    //       body:'I M FROM KS PALLY VILLAGE',
    //       userId:'5'
    //     }
      //console.log(post);
      fetch(`https://jsonplaceholder.typicode.com/posts/5/`,{
          method:'PUT',
          headers:{
              Accept:'application/json',
              'Content-Type':'application/json; charset=UTF-8',
              Authorization:'Bearer 976f9d976a54effb7542419bf7fd698fd6e349ea8b283c7f2e19819bf87e1a36'
          },
         body:JSON.stringify(post)        // data of input fields
    //body:JSON.stringify(postdata)  // data of without input
      }).then(response=> response.json()).then(data =>{
          console.log(data);
          setData(data)
      })
    
       setTitle('');
       setBody('');
       setUserId('');
    }
        
      const withoutInputSubmit=()=>{
              
              // post data with input filed values
              //let post ={title,body,userId};

              // post data without input field values
              let putdata = {
                title:'Sai',
                body:'ks PALLY VILlllllllLAGE',
                userId:5,
                id:5
                
              }
            console.log(putdata);
            fetch(`https://jsonplaceholder.typicode.com/posts/5`,{
                method:'PUT',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json; charset=UTF-8',
          Authorization:'Bearer 976f9d976a54effb7542419bf7fd698fd6e349ea8b283c7f2e19819bf87e1a36'
                           
                },
               // body:JSON.stringify(post)        // data of input fields
               body:JSON.stringify(putdata)  // data of without input
            }).then(response=> response.json()).then(data =>{
                console.log(data);
                setData(data)
            })

             setTitle('');
             setBody('');
             setUserId('');
        
      }

      


  return (
    <div style={{margin:30}}>
        <h4  style={{textAlign:'center'}}>PUT DATA WITH INPUT FIELDS DATA</h4>
        <prev> JSON Data :{JSON.stringify(data)}</prev>
        <div>
            <form onSubmit={withInputSubmit}>
                <div className='form-group'>
                     <label className='form-label'>Title</label>
                     <input type='text' placeholder='Enter Your Title' className='form-control' name='title' value={title} onChange={(e)=>setTitle(e.target.value)} />
                </div>
                <div className='form-group '>
                     <label className='form-label'>Body</label>
                     <input type='text' placeholder='Enter Your Body text' className='form-control' name='body' value={body} onChange={(e)=>setBody(e.target.value)}  />
                </div>
                <div className='form-group mb-3'>
                     <label className='form-label'>User Id</label>
                     <input type='number' placeholder='Enter userid' className='form-control' name='userId' value={userId} onChange={(e)=>setUserId(e.target.value)}  />
                </div>
                {/* <div className='form-group mb-3'>
                     <label className='form-label'>ID</label>
                     <input type='number' placeholder='Enter id' className='form-control' name='id' value={id} onChange={(e)=>setId(e.target.value)}  />
                </div> */}
                <input type='submit' value='Put Data' />
            </form>
        </div>
        <div style={{marginTop:20}}>
            <h4  style={{textAlign:'center'}}>Display put data here:</h4>
        <div style={{background:"lightblue",padding:20,margin:20}}>
            <p> Title : {data.title}</p>
             <p>BODY : {data.body}</p>
             <p> ID : {data.id}</p>
            <p>USER ID : {data.userId}</p>
    </div>
    <div>
        <h4>PUT DATA WIHOUT INPUT FIELDS</h4>
        <button onClick={withoutInputSubmit}>submit</button>
    </div>
    </div>
    </div>
  )
}

export default PutPosts;
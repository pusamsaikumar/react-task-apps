import axios from 'axios';
import React, { useContext, useEffect,useState,useRef } from 'react'
import ChartOnline from '../../components/chatonline/ChartOnline';
import Conversations from '../../components/conversations/Conversations';
import Message from '../../components/message/Message';
import Topbar from '../../components/tapbar/Topbar';
import { AuthContext } from '../../context/AuthContext';
import {io} from 'socket.io-client';
import './messenger.css';

function Messenger() {
  const {users} = useContext(AuthContext);
  const [conversations,setConversations] = useState([]);
  const [currentChart,setCurrentChart] = useState(null);
  const [newMessages,setNewMessages] = useState("");
  const [messages,setMessages] = useState([]);
  const[arrivalMesg,setArrivalMesg] = useState(null);
  const [onlineUsers,setOnlineUsers] = useState([]);

 // const [socket,setSocket] = useState(null);
  // client to server socket connection 
   const socket = useRef()
  // useEffect(()=>{
  //   socket.current = io("ws://localhost:8900");
  //   // get messages from socket
  //   socket.current.on("getMessage",(data)=>{
  //     setArrivalMesg({
  //       sender:data.senderId,
  //       text:data.text,
  //       createdAt:Date.now(),
  //     })
  //   })
  // },[]);

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMesg({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  // updated messages of socket: with comming arrival messages
  // useEffect(()=>{
  //     arrivalMesg && currentChart.members.includes(arrivalMesg.sender) && setMessages((prev)=>[...prev,arrivalMesg])
  // },[arrivalMesg,currentChart])

  useEffect(() => {
    arrivalMesg &&
      currentChart?.members.includes(arrivalMesg.sender) &&
      setMessages((prev) => [...prev, arrivalMesg]);
  }, [arrivalMesg, currentChart]);

  useEffect(() => {
    socket.current.emit("addUser", users._id);
    socket.current.on("getUsers", (userdata) => {
     
      setOnlineUsers(

        users.followings.filter((f) => userdata.some((u) => u.userId === f))
      );
    });
  }, [users]);

  console.log(users)

      
  

  
//  useEffect(()=>{
//   setSocket(io("ws://localhost:8900"))
//  },[])

 // take from socket server respose
  
//  useEffect(()=>{
//  socket.on("welcome",(message)=>{
//     console.log(message)
//  })
//  },[])
  //console.log(socket)


  // srcoll messages automatically to last one
  const scrollRef = useRef()
   useEffect(()=>{
      scrollRef.current?.scrollIntoView({behavior:"smooth"})
   },[messages]);

  // get conversations
  useEffect(()=>{
    const getConversations = async()=>{
      try{
          const conversation = await axios.get('http://localhost:5000/conversations/' + users._id);
          //  console.log(conversation)
          setConversations(conversation.data)
      }catch(err){
        console.log(err);
      }
    };
    getConversations();
  },[users])
//  console.log(currentChart);

// get messages
useEffect(()=>{
  const getMessage= async()=>{

        const res = await axios.get('http://localhost:5000/messages/'+ currentChart._id);
        setMessages(res.data)
  
  };
  getMessage();
},[currentChart]);
//console.log(messages)

// add new messages
const handleSubmit = async(e)=>{
  e.preventDefault();
  const newmessages = {
    conversationId:currentChart._id,
    sender:users._id,
    text:newMessages
  }
   // send messages to socket
   const receiverId = currentChart.members.find(
    (member) => member !== users._id
  );

  socket.current.emit("sendMessage", {
    senderId: users._id,
    receiverId,
    text: newMessages,
  });

  try{
      const res = await axios.post('http://localhost:5000/messages/',newmessages);
      setMessages([...messages,res.data]);
      setNewMessages("")

  }catch(err){
    console.log(err)
  }
}

  return (
    <>
        <Topbar />
        <div className='messenger'>
           <div className="chartMenu">
             <div className="chartMenuWrapper">
                <input type="text" className="chartMenuInput" placeholder='Search for your friends..' />
                {
                  conversations.map((c) =>(
                   <div onClick={()=>setCurrentChart(c)}>
                       <Conversations  conversation ={c} key={c._id} currentUser = {users} />
                    </div>
                  ))
                }
                
            </div>
            </div>
           <div className="chartBox">
                <div className="chartBoxWrapper">
                    {
                      currentChart ? (
                        <>
                        <div className="chartBoxTop" >
                          {
                            messages.map((message) =>(
                            <div ref={scrollRef}>
                                <Message message={message}  own={message.sender === users._id} />
                            </div>

                            ))
                          }
                      

                  
                    </div>
                    <div className="chartBoxBottom">
                        <textarea 
                       
                          placeholder='Write something here....'
                          className='chartBoxInput'
                          value={newMessages}
                          onChange={(e)=>setNewMessages(e.target.value)}
                          />
                        <button 
                        className='chartBoxSend'
                        type="submit"
                        onClick={(e)=>handleSubmit(e)}
                        
                        >Send</button>
                    </div>
                        </>
                      ) : <span className='openChart'>Open a coversation to start a chart.. </span>
                    }
                </div>
           </div>
           <div className="chartOnline">
                <div className="chartOnlineWrapper">
                    <ChartOnline onlineUsers={onlineUsers} currentId={users._id} setCurrentChat={setCurrentChart}  />
                </div>
           </div>
        </div>

    </> 
  )
}

export default Messenger
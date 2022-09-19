import axios from 'axios';
import React, { useContext, useEffect,useState,useRef } from 'react'
import ChartOnline from '../../components/chatonline/ChartOnline';
import Conversations from '../../components/conversations/Conversations';
import Message from '../../components/message/Message';
import Topbar from '../../components/tapbar/Topbar';
import { AuthContext } from '../../context/AuthContext';
import './messenger.css';

function Messenger() {
  const {users} = useContext(AuthContext);
  const [conversations,setConversations] = useState([]);
  const [currentChart,setCurrentChart] = useState(null);
  const [newMessages,setNewMessages] = useState("");
  const [messages,setMessages] = useState([]);
  // srcoll messages automatically to last one
  const scrollRef = useRef()
   useEffect(()=>{
      scrollRef.current?.scrollIntoView({behavior:"smooth"})
   },[messages])
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
  },[users._id])
//  console.log(currentChart);

// get messages
useEffect(()=>{
  const getMessage= async()=>{
    try{
        const res = await axios.get('http://localhost:5000/messages/'+ currentChart._id);
        setMessages(res.data)
    }catch(err){
      console.log(err);
    }
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
                  conversations.map((c,i) =>(
                   <div onClick={()=>setCurrentChart(c)}>
                       <Conversations  conversation={c} key={i} currentUser = {users} />
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
                            messages.map((message,index) =>(
                            <div ref={scrollRef}>
                                <Message message={message} key={index} own={message.sender === users._id} />
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
                    <ChartOnline />
                </div>
           </div>
        </div>

    </>
  )
}

export default Messenger
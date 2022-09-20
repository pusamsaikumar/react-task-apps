// const io = require("socket.io")(8900, {
//     cors: {
//       origin: "http://localhost:3000",
//     },
//   });

// // to create empty array to store the userId and socketId 
//   let userdata=[];
//   const addUser =(userId,socketId)=>{
//     !userdata.some(user => user === userId) && userdata.push({userId,socketId})
//   }
   
//   // disconnect userdata
//   const removeUser =(socketId)=>{
//     userdata = userdata.filter(user => user.socketId !== socketId)
//   }
//  // get userdata 
//  const getUser = (userId) =>{
//     return userdata.find(user => user.userId === userId)
//  }

// // server-side connection

// io.on("connection", (socket) => {
//     //when ceonnect
//     console.log("a user connected.");
  
//     //to send all clients
//    // io.emit("welcome","this is a socket server..")

//     // to send only one client
//     //io.to(socketId).emit("welcome","this is a socket server..")

//    // to take userId and serverId from the client
//    socket.on("addUser",(userId)=>{
//         addUser(userId,socket.id);
//         // to send all clients userdata array
//         io.emit("getUsers",userdata)
//    })

//    // send and getMessages from client

//     socket.on("sendMessage",({senderId,receiverId,text})=>{
//         const user = getUser(receiverId);
//         io.to(user.socketId).emit("getMessage",{
//             senderId,
//             text
//         })
//     })

//     // disconnected userdata
//     socket.on("disconnect",()=>{
//         console.log('a userdata is disconnected...')
//         removeUser(socket.id);
//         io.emit("getUsers",userdata)
//     })

//     });


const io = require("socket.io")(8900, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let userdata = [];

const addUser = (userId, socketId) => {
  !userdata.some((user) => user.userId === userId) &&
    userdata.push({ userId, socketId });
};

const removeUser = (socketId) => {
  userdata = userdata.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return userdata.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  //when ceonnect
  console.log("a user connected.");

  //take userId and socketId from user
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", userdata);
  });

  //send and get message
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    io.to(user.socketId).emit("getMessage", {
      senderId,
      text,
    });
  });

  //when disconnect
  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    removeUser(socket.id);
    io.emit("getUsers", userdata);
  });
});
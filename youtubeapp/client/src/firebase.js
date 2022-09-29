
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB26Jh0C3blNWk4TjBzG6qCkA4oLdNSxxw",
  authDomain: "videos-b1762.firebaseapp.com",
  projectId: "videos-b1762",
  storageBucket: "videos-b1762.appspot.com",
  messagingSenderId: "141459448807",
  appId: "1:141459448807:web:fd0913919221dc891c1342"
};





// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB26Jh0C3blNWk4TjBzG6qCkA4oLdNSxxw",
//   authDomain: "videos-b1762.firebaseapp.com",
//   projectId: "videos-b1762",
//   storageBucket: "videos-b1762.appspot.com",
//   messagingSenderId: "141459448807",
//   appId: "1:141459448807:web:fd0913919221dc891c1342"
// };


// const firebaseConfig = {
//   apiKey: "AIzaSyBzQ1LUWAiQrL-1JNjhQLeXIOAEHEKYaIQ",
//   authDomain: "video1-aa78f.firebaseapp.com",
//   projectId: "video1-aa78f",
//   storageBucket: "video1-aa78f.appspot.com",
//   messagingSenderId: "122910293672",
//   appId: "1:122910293672:web:bb17b0f74e8ee54b8b8c9d"
// };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new  GoogleAuthProvider();
export default app;
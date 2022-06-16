
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 import Posts from './components/Posts'
 import CreatePost from './components/CreatePost';
import GetPosts from './components/GetPosts';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <BrowserRouter>
     <div className="container">
    <Routes>
      <Route path='/' element={<Posts />} />
      <Route path='/createpost' element={<CreatePost />} />
      <Route path='/getposts' element={<GetPosts />} />
    </Routes>
    </div>
    </BrowserRouter>
    <ToastContainer />
    </>
    
   
  );
}

export default App;

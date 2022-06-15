
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 import Posts from './components/Posts'
 import CreatePost from './components/CreatePost';
import GetPosts from './components/GetPosts';

function App() {
  return (
    <BrowserRouter>
     <div className="container">
    <Routes>
      <Route path='/' element={<Posts />} />
      <Route path='/createpost' element={<CreatePost />} />
      <Route path='/getposts' element={<GetPosts />} />
    </Routes>
    </div>
    </BrowserRouter>
   
  );
}

export default App;

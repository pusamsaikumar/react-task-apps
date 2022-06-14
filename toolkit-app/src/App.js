import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Dashboard from './components/pages/Dashboard';
import Register from './components/pages/Register';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <div className='container'>
      <Header />
          <Routes>
          
            <Route path = '/' element={<Dashboard />} />
            <Route path = '/login' element={<Login />} />
            <Route path = '/register' element={<Register />} />
          </Routes>
      </div>
    </BrowserRouter>
    <ToastContainer />
    </>
  );
}

export default App;

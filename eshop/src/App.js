

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter,Routes,Route , Link} from 'react-router-dom';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
      </Routes>

    </BrowserRouter>
      

      
    </div>
  );
}

export default App;

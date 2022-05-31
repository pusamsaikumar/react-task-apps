import React from 'react';
import './Header.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StoreIcon from '@mui/icons-material/Store';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom';
import {useStateValues} from '../Provider';



function Header() {
const [{basket},dispatch]=useStateValues()
  return (
    <div className='header'>

        <Link to='/' style={{textDecoration:'none'}}>
        <div className='header-logo'>
            <StoreIcon className='header-logoImage' fontSize='large' />
            <h2 className='header-logoTitle'>eSHop</h2>
        </div>
        </Link>
        
        <div className="header-search">
            <input type='text' className='header-searchInput'></input>
            <SearchIcon className='search-icon'/>
        </div>
       <div className="header-nav">
            <div className="nav-item">
                <span className="nav-itemLineOne">Hello Guest</span>
                <span className="nav-itemLineTwo">Sign In</span>
            </div>
            <div className="nav-item">
                <span className="nav-itemLineOne">Your</span>
                <span className="nav-itemLineTwo">Shop</span>
            </div>

            <Link to='/checkout'>
            <div className="nav-itemBasket">
                <ShoppingBasketIcon  />
                <span className="nav-itemLineTwo nav-basketCount">{basket.length}</span>
           </div>
            </Link>
            
       </div>

    </div>
  )
}

export default Header
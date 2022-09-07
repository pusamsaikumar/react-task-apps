import React from 'react'
import { Container, Navbar ,FormControl, Nav, Dropdown, Badge} from 'react-bootstrap';
import {FaShoppingCart} from 'react-icons/fa';

function Header() {
  return (
 <Navbar bg='light' variant='light'>
    <Container>
        <Navbar.Brand>
            <a href="/">Online Shop</a>
        </Navbar.Brand>
        <Navbar.Text className='search'>
            <FormControl 
              style={{width:500}}
              placeholder='search a product here....'
              margin="m-auto"
            />
        </Navbar.Text>
        <Nav>
            <Dropdown style={{textAlign:'alignRight'}}>
                <Dropdown.Toggle variant="success" >
                    <FaShoppingCart  color="white" fontSize="25px" />{' '}
                    <Badge pill bg="danger">10</Badge>{' '}
                </Dropdown.Toggle>
                <Dropdown.Menu style={{minWidth:370}}>
                    <span style={{width:400,padding:10,textAlign:'right'}}>Cart is empty ?</span>
                </Dropdown.Menu>
            </Dropdown>
        </Nav>
    </Container>
 </Navbar>
  )
}

export default Header
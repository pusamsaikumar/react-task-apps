import { Circle } from '@mui/icons-material';
import React from 'react';
import styled from "styled-components";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const Info = styled.div`
opacity:0;
 width:100%;
 height:100%;
 display:flex;
 align-items:center;
 justify-content:center;
 position:absolute;
 top:0;
 left:0;
 z-index:3;
 background-color:rgba(0,0,0,0.2);
 transition:all 0.5s ease;
 cursor:pointer;
`;


const Container = styled.div`
   min-width:280px;
   height:350px;
   flex:1;
   margin:10px;
   position:relative;
   background-color:azure;
   display:flex;
   align-items:center;
   justify-content:center;
   &:hover ${Info}{
    opacity:1
   }
`;
const CircleItem = styled.div`
 width:200px;
 height:200px;
 border-radius:50%;
 position:absolute;
 background-color:white;

`;
const Image = styled.img` 
height:75%;
/* object-fit:contain; */

z-index:2;

`;


const Icon = styled.div`
  width:40px;
  height:40px;
  border-radius:50%;
  background-color:whitesmoke;
  display:flex;
  align-items:center;
  justify-content:center;
  margin:3px;
  transition:all 0.5s ease;
  &:hover{
    transform:scale(1.1);
    background-color: #e9f5f5;
  }
`;




const ProductItem = ({item}) => {
  return (
    <Container>
      <CircleItem />
      <Image src={item.img} />
      <Info>
        <Icon>
        <AddShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
         <SearchOutlinedIcon />
        </Icon>
        <Icon>
        <FavoriteBorderOutlinedIcon />
        </Icon>
      </Info>
    </Container>
  )
}

export default ProductItem
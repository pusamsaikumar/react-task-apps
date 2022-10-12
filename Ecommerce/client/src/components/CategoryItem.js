import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
   position:relative;
 
   margin:3px;
   height:70vh;
   flex:1
`;
const Image = styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
  flex:1
`;
const Info = styled.div`
   position:absolute;
   width:100%;
   height:100%;
   /* background-color:red; */
   top:0;
   left:0;
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
`;
const Title = styled.h1`
    color:white;
    margin-bottom:20px;
`;
const Button = styled.button`
    border:none;
    cursor:pointer;
    padding:10px;
    background-color:whitesmoke;
    color:grey;
    border-radius:3px;
    font-weight:600;
    &:hover{
      background-color:darkgreen;
      color:whitesmoke
    }
`;

const CategoryItem= ({item}) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem
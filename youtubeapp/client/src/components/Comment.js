import React from 'react';
import styled from 'styled-components';
 
const Container = styled.div`
 display:flex;
gap:20px;
margin:30px 0px;
`;
const Avatar = styled.img`
width:50px;
height:50px;
border-radius:50px;
object-fit:cover;
`;
const Details = styled.div`
display:flex;
flex-direction:column;
gap:10px;
color:${({theme})=>theme.text}
`;
const Name = styled.span`
font-size:13px;
font-weight:500;
`;
const Date = styled.span`
font-weight:400;
font-size:12px;
margin-left:10px;
color:${({theme})=>theme.textSoft}
`;
const Text = styled.span`
font-size:14px;
`;


function Comment() {
  return (
    <Container>
       <Avatar src = "https://i.ytimg.com/vi/fXvYevVmYJE/maxresdefault.jpg" /> 
       <Details>
         <Name>Jhon Deo <Date> 1 day, ago..</Date></Name>
         <Text>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
         </Text>
       </Details>
    </Container>
  )
}

export default Comment;
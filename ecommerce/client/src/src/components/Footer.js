import React from 'react';
import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import {mobile} from "../resposive";

const Container = styled.div`
display:flex;
margin-bottom:10px;
${mobile({flexDirection:"column"})};
`;
const Left = styled.div`
flex:1;
display:flex;
// align-items:center;
// justify-content:center;
flex-direction:column;
`;
const Logo = styled.h1`

`;
const Desc = styled.p`
 margin:20px 0px;
//  padding-left:10px;
`;
const SocialContainer = styled.div`
display:flex;
// align-items:center;
// justify-content:center;

`;
const SocialIcon = styled.div`
margin-right:10px;
width:40px;
height:40px;
border-radius:50px;

background-color:#${props => props.color};
color:white;
display:flex;
align-items:center;
justify-content:center;
`;
const Center = styled.div`
flex:1;
padding:20px;
${mobile({display:"none"})}
`;
const Title = styled.h3`
margin-bottom:30px;
`;
const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`;
const ListItem = styled.li`
width:50%;
margin-bottom:10px;
`;
const Right = styled.div`
flex:1;
padding:20px;
${mobile({backgroundColor:"#FCF6F5FF"})}
`;

const ContactItem = styled.div`
 display:flex;
 align-items:center;
 margin-bottom:10px;

`;
const Payment = styled.img`
width:50%
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>SAI KUAMR</Logo>
            <Desc> There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.</Desc>
          <SocialContainer>
            <SocialIcon color="000080">
                <FacebookIcon />
            </SocialIcon>
            <SocialIcon color='800000'>
                <InstagramIcon />
            </SocialIcon>
            <SocialIcon color="4b0082">
                <TwitterIcon />
            </SocialIcon>
            <SocialIcon color="2f4f4f">
                <PinterestIcon />
            </SocialIcon>
        </SocialContainer>
        </Left>
        
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>

            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
            <RoomIcon style={{marginRight:"10px"}} />
            H.no : 1-68; Kusumanapally vi, Hyderabad , India 507134

            </ContactItem>
            <ContactItem>
                <PhoneIcon style={{marginRight:"10px"}} />
                +91 9959608677
            </ContactItem>
            <ContactItem>
                <MailIcon style={{marginRight:"10px"}} />
                pusamsaikumar302@gmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}

export default Footer
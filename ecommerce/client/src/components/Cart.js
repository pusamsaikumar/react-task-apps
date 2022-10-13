import React from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from '@mui/icons-material';
import { mobile } from '../resposive';


const Container = styled.div`

`;

const Wrapper = styled.div`
padding:20px;
background-color:#FCF6F5FF;
${mobile({padding:"0px"})};
`;
const Title = styled.h1`
 text-align:center;
 font-weight:500;
 color:#990011FF;
`;
const Top = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin: 20px 10px;
    
`;

const TopButton = styled.button`
  padding:10px;
  border-radius:6px;
  font-weight:600;
  border:${props => props.type === "filled" ? "none" :"lightgrey"};
  background-color:${props=>props.type === "filled" ? "black" :"lightblue"};
  color:${props =>props.type === "filled" ? "white" : "teal"};
  &:hover{
    background-color:${props => props.type === "filled" ? "royalblue":"lavender"};
    color:${props => props.type === "filled" ? "whitesmoke" : "royalblue"}
  }
`;

const TopTexts = styled.div`

${mobile({display:"none"})}
`;
const TopText = styled.span`
margin:0px 10px;
text-decoration:underline;
`;
const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
flex:3;

`;

const Product =styled.div`
display:flex;
justify-content:space-between;
${mobile({flexDirection:"column",padding:"20px"})};

`;
const Details = styled.div`
flex:2;
display:flex;
${mobile({flex:"8"})}
`;

const ProductDetails = styled.div`

padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
${mobile({flexDirection:"column"})}

`;

const Image = styled.img`
  width: 200px;
   ${mobile({width:"100px"})}
  object-fit:cover;
`;
const ProductName = styled.span`

`;
const ProductId = styled.span`

`;
const ProductColor  = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props => props.color}
`;
const ProductSize = styled.span`

`;
const PriceDetails = styled.div`

flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;



`;
const ProductAmountContainer =styled.div`
 display:flex;
 align-items:center;
 justify-content:center;
 border:1px solid lightblue;
 padding:5px;
 margin-bottom:20px;
 cursor:pointer;
`;
const ProductAmount = styled.div`
margin:10px;
${mobile({margin:"0px"})}

`;
const ProductPrice = styled.div`
font-weight:300;
font-size:30px;

`;

const Hr =styled.div`
background-color:lightgrey;
height:1px;
margin:20px;
`;

const Summery = styled.div`
flex:1;
border:1px solid lightgrey;
border-radius:10px;
padding:20px;
height:50vh;
${mobile({margin:"20px"})}

`;
const SummeryTitle = styled.h1`
font-weight:300;
font-size:24px;
`;
const SummeryItem = styled.div`
  display:flex;
  justify-content:space-between;
  margin:30px 0px;
  font-weight:${props => props.type === "total" && "500"};
  font-size:${props => props.type === "total" && "24px"};
  color:${props => props.type === "total" && "firebrick"};
`;
const SummeryItemText = styled.span`

`;
const SummeryItemPrice = styled.span`

`;
const Button = styled.button`
width:100%;
border:none;
background-color:#8A307F;
color:whitesmoke;
cursor:pointer;
border-radius:6px;
font-weight:600;
padding:10px;
&:hover{
  background-color:lightblue;
  color:darkgreen;
}

`;
const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPING</TopButton>
                <TopTexts>
                    <TopText>Shoping Bag (2)</TopText>
                    <TopText>WishList (0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                  <Info>
                
                    <Product>
                     <Details>
                     <Image src='https://www.pngall.com/wp-content/uploads/2/Red-Sneakers-PNG-Image.png' />
                      <ProductDetails>
                        <ProductName><b>Name :</b> Red- Sneakers 100</ProductName>
                        <ProductId><b>ID :</b> 646449947</ProductId>
                        <ProductColor color="lightblue" />
                        <ProductSize><b>Size :</b> 5.5</ProductSize>
                      </ProductDetails>
                      <PriceDetails>
                        <ProductAmountContainer>
                          <Add />
                          <ProductAmount>2</ProductAmount>
                          <Remove />
                        </ProductAmountContainer>
                        <ProductPrice>$ 50</ProductPrice>
                      </PriceDetails>
                     </Details>
                    </Product>
                  

                    <Hr />

                    
                    <Product>
                      <Details>
                      <Image src='https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png' />
                      <ProductDetails>
                        <ProductName><b>Name :</b>Latest T-Shirts</ProductName>
                        <ProductId><b>ID :</b> 646449947</ProductId>
                        <ProductColor color="orange" />
                        <ProductSize><b>Size :</b> 30.5</ProductSize>
                      </ProductDetails>
                      <PriceDetails>
                        <ProductAmountContainer>
                          <Add />
                          <ProductAmount>3</ProductAmount>
                          <Remove />
                        </ProductAmountContainer>
                        <ProductPrice>$ 20</ProductPrice>
                      </PriceDetails>
                      </Details>
                    </Product>
                  
                  </Info>

                  <Summery>
                    <SummeryTitle>ORDER SUMMARY</SummeryTitle>
                    <SummeryItem>
                      <SummeryItemText>Subtotal</SummeryItemText>
                      <SummeryItemPrice>$ 80</SummeryItemPrice>
                    </SummeryItem>
                    
                    <SummeryItem>
                     <SummeryItemText>Estimated Shipping</SummeryItemText>
                      <SummeryItemPrice>$ 5.50</SummeryItemPrice>
                    </SummeryItem>
                    <SummeryItem>
                      <SummeryItemText>Shipping Discount</SummeryItemText>
                      <SummeryItemPrice>$ -5.50</SummeryItemPrice>
                    </SummeryItem>
                    <SummeryItem type="total">
                      <SummeryItemText>Total</SummeryItemText>
                      <SummeryItemPrice>$ 80</SummeryItemPrice>
                    </SummeryItem>
                     <Button>CHECKOUT NOW</Button> 
                  </Summery>

            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart
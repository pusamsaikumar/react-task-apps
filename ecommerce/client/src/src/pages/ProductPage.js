import React from 'react';
import styled from 'styled-components';
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { mobile } from '../resposive';

const Container = styled.div`

`;
const Wrapper = styled.div`
padding:50px;
display:flex;
${mobile({padding:"10px",flexDirection:"column"})};

`;
const ImgContainer = styled.div`
flex:1
`;
const Image = styled.img`
widht:100%;
height:90vh;
object-fit:cover;
border-radius:3px;
${mobile({height:"40vh",width:"100%"})};
`;
const InfoContainer = styled.div`
flex:1;
padding:0px 50px;
${mobile({padding:"10px"})};
`;
const Title = styled.h1`
font-weight:200;

`;
const Desc = styled.p`
margin:20px 0px;
`;
const Price = styled.span`
 font-size:40px;
 font-weight:100px
`;

const FilterContainer = styled.div`
width:50%;
display:flex;
align-items:center;
justify-content:space-between;
margin:30px 0px;
${mobile({width:"100%"})};
`;
const Filter = styled.div`
display:flex;
align-items:center;
`;
const FilterTitle = styled.span`
 font-weight:200; 
 font-size:20px;
 margin-right:10px

`;
const FilterColor = styled.span`
  width:20px;
  height:20px;
  border-radius:50%;
  background-color:${props =>props.color};
  margin:0px 5px;
  cursor:pointer;
`;
const FilterSize = styled.select`
margin-left:5px;
padding:5px;
cursor:pointer;
`;
const FilterSizeOption = styled.option`

`;

const AddContainer = styled.div`
width:50%;
display:flex;
align-items:center;
justify-content:space-between;
margin:30px 0px;
${mobile({width:"100%"})};
`;
const AmountContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
`;
const Amount = styled.span`
border:1px solid teal;
width:50px;
height:40px;
background-color:	lightcyan;
display:flex;
align-items:center;
justify-content:center;
border-radius:5px;
font-weight:500;
color:darkred;
&:hover{
  background-color:forestgreen;

}
`;
const Button = styled.button`
 padding:15px;
 border:1px solid teal;
 cursor:pointer;
 border-radius:5px;
 font-weight:500;
&:hover{
  background-color:firebrick;
  color:whitesmoke;
}
`;

const ProductPage = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
           <Wrapper>
           <ImgContainer>
           <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
            </ImgContainer>
            <InfoContainer>
                <Title>Jeans Jumpsuite</Title>
                <Desc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
                </Desc>
                <Price>$ 20</Price>
                <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color ="red" />
                    <FilterColor color = "darkblue" />
                    <FilterColor color="lightgreen" />
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                    <FilterSizeOption>XS</FilterSizeOption>
                    <FilterSizeOption>S</FilterSizeOption>
                    <FilterSizeOption>M</FilterSizeOption>
                    <FilterSizeOption>L</FilterSizeOption>
                    <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                </Filter>
            </FilterContainer>

            <AddContainer>
              <AmountContainer>
                <RemoveIcon />
                  <Amount>1</Amount>
                  <AddIcon />
              </AmountContainer>
              <Button> ADD TO CART</Button>
             </AddContainer>

            </InfoContainer>
           
           </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductPage
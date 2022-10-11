import React , {useState} from 'react';
import styled from 'styled-components';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {SliderItems} from "../data";


const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;

overflow:hidden;

`;
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color:lightcyan;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${(props) => props.direction === "left" && "10px"};
right: ${(props) => props.direction === "right" && "10px"};
margin: auto;
cursor:pointer;
opacity:0.5;
z-index:2;
&:hover{
  background-color:darkorange;
}
`;
const Wrapper = styled.div`
height:100%;
display:flex;
transition:all 1.5s ease;
transform:translateX(${props => props.slideIndex * -100}vw)
`;
const Slide = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  align-items:center;
  background-color:${(props) => props.bg};
`;
const ImgContainer = styled.div`
   widht:100%;
   height:100%;
   flex:1
`;
const Image = styled.img`
height:80%;

padding-left:10px;
 
`;


const InfoContainer = styled.div`
padding:10px;
flex:1;
display:flex;
flex-direction:column;

`
const Title = styled.h1`
font-size:50px;
`;
const Desc = styled.p`
font-size:20px;
font-weight:500;
letter-spacing:3px;
margin:50px 0px;
`;
const Button = styled.button`
background-color:transparent;
padding:10px;
font-size:20px;
cursor:pointer;
width:200px;
`;
function Slider() {
  const [slideIndex,setSlideIndex] = useState(0);

  const handleClick =(direction)=>{
    if(direction === "left"){
      setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
    } else{
      setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
    }
  }

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")} >
            <ArrowLeftIcon />
        </Arrow>
        <Wrapper slideIndex ={slideIndex}>
          
         { 
         SliderItems.map(slider =>(
          <Slide bg={slider.bg}>
          <ImgContainer>
            <Image src={slider.img} />
          </ImgContainer>
          <InfoContainer>
            <Title>
        {slider.title}
            </Title>
            <Desc>
               {slider.desc}
            </Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
         ))
           }
       
        </Wrapper>
        <Arrow direction="right"  onClick={()=>handleClick("right")}>
            <ArrowRightIcon  />
        </Arrow>
    </Container>
  )
}

export default Slider
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme,lightTheme } from './utils/Theme';
import { useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Video from './pages/Video';
import Signin from './components/Signin';

const Container = styled.div`
display:flex;
//background-color:#181818;
 background-color:lavender;
height:100%;
`;
const Main = styled.div`
flex:7;
background-color:${({theme})=>theme.bg}; 
`;
const Wrapper = styled.div`
padding:22px 90px;

`;
function App() {
// setting darkmode 
const [darkmode,setDarkmode] = useState(true);

  return (
   <ThemeProvider theme={darkmode ? darkTheme : lightTheme}>
     <Container>
      <BrowserRouter>
      <Menu darkmode={darkmode} setDarkmode={setDarkmode} />
      <Main>
        <Navbar />
        <Wrapper>
            <Routes>
                <Route path="/">
                    <Route  index element ={<Home type="random"/> } />
                    <Route path="trends" element={<Home type="trend" />} />
                    <Route path="subscriptions"  element ={<Home type="sub" />} />
                    <Route path = "/signin" element={<Signin />} />
                    <Route path="/video">
                        <Route path=":id" element={<Video />} />
                    </Route>
                </Route>
            </Routes>
        </Wrapper>
      </Main>
      </BrowserRouter>
    </Container>
   </ThemeProvider>
  );
}

export default App;

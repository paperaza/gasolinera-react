import { Route, Routes } from 'react-router-dom';
import { Box, Container } from '@chakra-ui/react'
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Surtidor from './pages/Surtidor';
import Product from './pages/Product';
import MethodPayment from "./pages/MethodPayment";
import Quiantity from './pages/Quiantity';
import Resume from './pages/Resume';


function App() {
  
  return (
    <Box w="100%" h="100vh">
      <NavBar/>
        <Container paddingTop={10}>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/surtidor' element={<Surtidor/>} />
            <Route path='/product' element={<Product/>} />
            <Route path='/Method-Payment' element={<MethodPayment/>} />
            <Route path='/quantity' element={<Quiantity/>} />
            <Route path='/resume' element={<Resume/>} />
          </Routes>
        </Container>
    </Box>
   
  );
}

export default App

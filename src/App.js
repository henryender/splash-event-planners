import { Box, ThemeProvider, useTheme } from '@mui/material';
import './App.css';
import { Light } from './utils/Theme';
import { Dark } from './utils/Theme';
import NavBar from './components/NavBar';
import { SplashContext } from './context/Context';
import React, { useContext } from 'react';
import Home from './components/Home';
import OurServices from './components/OurServices';
import Halls from './components/Halls';
import Food from './components/Food';
import Photograph from './components/Photograph';
import Carhire from './components/Carhire';
import FootNote from './components/FootNote';
import Footer from './components/Footer';



function App() {
  const theme = useTheme()
  console.log(theme)
  const { toggle } = useContext(SplashContext)

  return (
    <ThemeProvider theme={toggle ? Dark : Light}>
      <Box sx={{ backgroundColor: 'secondary.main', height: "100vh", }} >
        <Box >
          <NavBar />
          <Home />
          <OurServices />
          <Halls />
          <Food />

          <Photograph/>

          <Carhire/>
          <FootNote/>

         <Footer/>
        </Box>


      </Box>
    </ThemeProvider>
  );
}

export default App;

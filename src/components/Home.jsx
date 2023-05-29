import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Banner from "../assets/hall/Banner.jpg"
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <>

      <div id='home'>
        <Box sx={{ padding: "10px", marginTop: '56px' }}>

          <Box className='name'
            sx={{
              backgroundImage: `url(${Banner})`,
              marginTop: '20px', padding: "10px", height: '350px',
              backgroundRepeat: "no-repeat", backgroundSize: 'cover', backgroundPositionY: "center",
              textAlign: "center",
            }} >

            <Box className='name' sx={{
              backgroundColor: 'secondary.main',
              width: { xs: "70%", sm: "80%", md: "70%" },
              marginTop: { xs: '15%', sm: '10%', lg: "5%", md: '5%' }
            }} >

              <Typography
                sx={{
                  color: "info.main", fontFamily: 'PT Sans, sans-serif',
                  fontSize: { xs: '25px', sm: '40px' }, fontWeight: "bold"
                }} >
                <Typewriter
                  words={['Splash Event Planners']}
                  loop={2}
                  cursor
                  cursorStyle=''
                  typeSpeed={50}
                  deleteSpeed={30}
                  delaySpeed={1000}

                />


              </Typography>

              <Typography sx={{ color: "info.main", fontFamily: 'PT Sans, sans-serif', fontStyle: "italic" }} >
                While some people look for a beautiful place, we make a place beautiful.
                If you need an event to remember for a lifetime,<br /> Contact us today!
              </Typography>

              <Link
                activeClass='active'
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                delay={500}

              >
                <Button variant='outlined' size='medium' sx={{ marginTop: "20px" }}>
                  <span style={{ fontWeight: 'bold' }}>Talk with us</span></Button>
              </Link>

            </Box>

          </Box>

        </Box>
      </div>
    </>


  )
}

export default Home

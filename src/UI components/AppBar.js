import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NavDrawer from '../components/Drawer';
import { Grid } from '@mui/material'
import { NavItems } from '../data';
import Switches from './Switch';
import Logo from '../assets/Logo.png'
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';

export default function ButtonAppBar() {
    const [index, setindex] = React.useState(1)
    // state for nav bar item bottom tab on click

    return (
        <Box>
            <AppBar position="fixed" color='secondary'>
                <Toolbar>
                    <Grid container alignItems='center'>

                        {/* MenuIcon and Drawer Component */}
                        <Grid item xs={2} md={2} lg={2} sx={{ display: { sm: 'none' } }}>
                            <NavDrawer />
                        </Grid >

                        {/* The Logo */}
                        <Grid item xs={8} md={1} sm={1} lg={1} >




                            <Typography textAlign={{ xs: 'start', sm: "center" }}
                                onClick={() => scroll.scrollToTop('home')}
                            ><img src={Logo} width='40px' alt='Logo' style={{ cursor: 'pointer' }} />
                            </Typography>


                        </Grid>

                        {/* Nav Bar Items */}
                        <Grid item sm={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <Box display='flex' justifyContent='space-around' sx={{ cursor: 'pointer' }}>
                                {NavItems.map((item) =>
                                    <Link
                                        activeClass='active'
                                        to={item.target}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={1000}
                                        delay={500}

                                    >
                                        <Typography textAlign='center' color='info.main'
                                            key={item.id}
                                            sx={{ fontFamily: 'Zilla Slab, serif' }}
                                            onClick={() => {
                                                setindex(item.id)
                                            }}
                                            className={index === item.id && "menu-item"}>
                                            {item.name}
                                        </Typography>
                                    </Link>

                                )}
                            </Box>
                        </Grid>

                        {/* Button and Toggle switch */}
                        <Grid item xs={2} sm={5} md={5} lg={5} >
                            <Box display='flex' justifyContent='space-around'>
                                <Link
                                    activeClass='active'
                                    to='contact'
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={1000}
                                    delay={500}

                                >
                                    <Button variant='outlined'
                                        sx={{
                                            display: { xs: "none", sm: 'block' }, marginTop:"5px"
                                        }} >
                                        <Typography sx={{
                                            fontSize: { sm: '12px' },
                                            fontFamily: 'Zilla Slab, serif', fontWeight: "bold"
                                        }} >
                                            Reservations</Typography>

                                    </Button>
                                </Link>


                                <Switches />
                            </Box>

                        </Grid>

                    </Grid>


                </Toolbar>
            </AppBar>
        </Box>
    );
}
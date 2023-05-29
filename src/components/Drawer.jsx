import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { NavItems } from '../data';
import { Button, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { SplashContext } from '../context/Context'
import { Link } from 'react-scroll';

export default function NavDrawer() {
    const [state, setState] = React.useState(false);
    const { toggle } = React.useContext(SplashContext)
    // SplashContext from context folder

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        } setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            height='100vh' sx={{
                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
                backgroundColor: "secondary.main"
            }}
            role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)} >

            {/* Drawer Close Button */}
            <Box display='flex' justifyContent='flex-end' padding='10px'>
                <CloseIcon fontSize='large' className={toggle ? 'item-dark' : 'item'} sx={{ color: 'info.main' }} />
            </Box>

            {/* Drawer Navigation Items */}
            {NavItems.map((item) =>
                <Box key={item.id}>
                    <Link
                        activeClass='active'
                        to={item.target}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                        delay={500}>
                        <Typography
                            textAlign='center'
                            padding='10px'
                            className={toggle ? 'item-dark' : 'item'}
                            color='info.main' sx={{ fontFamily: 'Zilla Slab, serif' }}
                            onClick={toggleDrawer(anchor, false)}
                        >
                            {item.name}
                        </Typography>
                    </Link>

                </Box>)}

            <Box textAlign='center' mt='40px'>
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
                        sx={{ fontFamily: 'Zilla Slab, serif' }}
                        onClick={toggleDrawer(anchor, false)}
                        >
                        Reservations
                    </Button>
                </Link>

            </Box>

        </Box>);

    return (
        <div>
            {['top'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <MenuIcon fontSize='large' onClick={toggleDrawer(anchor, true)} />
                    <Drawer
                        anchor='top'
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)} >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
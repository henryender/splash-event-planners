import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import QuiltedImageList from '../UI components/ImageList'
import chef4 from '../assets/chef4.png'
const Food = () => {
    return (
        <Box sx={{ backgroundColor: "secondary.main" }}>
            <Box padding='10px' sx={{ backgroundColor: 'secondary.main' }} id="foods">
                <Typography
                    sx={{
                        color: "info.main",
                        textAlign: 'center',
                        fontFamily: 'PT Sans, sans-serif',
                        fontSize: { xs: '25px', sm: '40px' }, fontWeight: "bold"
                    }} >
                    Dishes and Refreshments
                </Typography>
            </Box>
            <Grid container spacing={1} >
                
                <Grid item lg={6} sx={{display:{xs:'none', lg:"block"}}}>
                    <Box padding='20px'>
                        <img src={chef4} alt='chef' width='100%' />
                    </Box>

                </Grid>
                <Grid item lg={6} xs={12} sm={12} md={12}>
                    <Box display='flex' justifyContent='center' width='100%'>
                        <QuiltedImageList />

                    </Box>
                </Grid>
            </Grid>

        </Box>
    )
}

export default Food

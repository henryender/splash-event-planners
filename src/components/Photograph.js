import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import photomain from '../assets/Photography/photomain.png'
import PhotoCaro from '../UI components/Photo'
const Photograph = () => {
    return (
        <Box sx={{ backgroundColor: "secondary.main" }}>
            <Box padding='10px' sx={{ backgroundColor: 'secondary.main' }} id="photos">
                <Typography
                    sx={{
                        color: "info.main",
                        textAlign: 'center',
                        fontFamily: 'PT Sans, sans-serif',
                        fontSize: { xs: '25px', sm: '40px' }, fontWeight: "bold"
                    }} >
                    Live event coverage
                </Typography>
            </Box>
            <Box>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={7} lg={7}>
                        <Box>
                            <PhotoCaro />
                        </Box>
                    </Grid>
                    
                    <Grid item  md={5} lg={5} sx={{display:{xs:'none', md:'block'}}}>
                        <Box textAlign='center'>
                            <img src={photomain} alt='photomain' width='80%' />
                        </Box>

                    </Grid>

                </Grid>
            </Box>
        </Box>
    )
}

export default Photograph

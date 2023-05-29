import { Box, Typography } from '@mui/material'
import React from 'react'
import VerticalLinearStepper from '../UI components/Stepper'

const OurServices = () => {
    return (
        <>
           
                <Box sx={{ backgroundColor: 'secondary.main',  }} >

                    <Box padding='10px' sx={{ backgroundColor: 'secondary.main' }} >
                        <Typography
                            sx={{
                                color: "info.main",
                                textAlign: 'center',
                                fontFamily: 'PT Sans, sans-serif',
                                fontSize: { xs: '25px', sm: '40px' }, fontWeight: "bold"
                            }} id="services">
                            Our Services
                        </Typography>
                    </Box>
                    <VerticalLinearStepper />

            
            </Box>

        </>
    )
}

export default OurServices

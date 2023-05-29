import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <>
            <Box sx={{ backgroundColor: 'secondary.main' }}>
                <Box sx={{ backgroundColor: 'secondary.main', }} >
                    <Paper elevation={3} height='100px'>

                        <Typography variant='body1' sx={{ textAlign: 'center', color: "info.main", padding:"20px" ,fontFamily: 'Zilla Slab, serif'}}>
                            &copy;2023 Zuma Tech
                        </Typography>
                    </Paper>


                </Box>


            </Box>
        </>
    )
}

export default Footer

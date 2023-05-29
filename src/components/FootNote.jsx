import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Input from './Input'

const FootNote = () => {
    return (
        <Box sx={{ backgroundColor: 'secondary.main' }} id="about">
            <Box  >
                <Grid container spacing={1} >
                    <Grid item xs={12} md={6} >
                        <Box padding='10px' marginBottom='25px'>
                            <Box padding='10px'
                                sx={{ border: '4px solid', borderColor: 'primary.main', borderRadius: '10px' }}>
                                <Typography
                                    sx={{
                                        color: "info.main",
                                        textAlign: 'center',
                                        fontFamily: 'PT Sans, sans-serif',
                                        fontSize: { xs: '25px', sm: '40px' }, fontWeight: "bold",
                                        marginBottom:'10px'
                                    }} >
                                    About
                                </Typography>
                                <Typography sx={{ color: "info.main", fontFamily: 'PT Sans, sans-serif', fontStyle: "italic", textAlign: 'center', padding:"10px" }} >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc semper mauris ut dolor porttitor, eget fermentum erat aliquet. Integer nulla turpis, faucibus vitae sollicitudin ut, imperdiet quis diam. Morbi pulvinar scelerisque fringilla. Fusce metus nibh, pretium ac ligula quis, ultricies malesuada diam. Nullam vitae viverra eros. Sed id turpis ex. Curabitur sit amet ex eget ipsum accumsan dapibus. Vestibulum maximus mauris id ex suscipit, id finibus dui iaculis. Sed tempor, felis non pretium porttitor, tortor dolor condimentum ligula, sed cursus felis sem ut enim. Vivamus arcu nisi, rutrum quis dictum at, interdum non mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce metus nibh, pretium ac ligula quis, ultricies malesuada diam. Nullam vitae viverra eros. Sed id turpis ex. Curabitur sit amet ex eget ipsum accumsan dapibus. Vestibulum maximus mauris id ex suscipit, id finibus dui iaculis. 
                                </Typography>
                            </Box>
                        </Box>
                   </Grid>
                    <Grid item xs={12} md={6} id="contact">
                        <Box marginBottom='25px' >
                            <Typography
                                sx={{
                                    color: "info.main",
                                    textAlign: 'center',
                                    fontFamily: 'PT Sans, sans-serif',
                                    fontSize: { xs: '25px', sm: '40px' }, fontWeight: "bold"
                                }} >
                                Contact Us
                            </Typography>
                            <Input />
                        </Box>


                    </Grid>
                </Grid>
            </Box>

        </Box>
    )
}

export default FootNote

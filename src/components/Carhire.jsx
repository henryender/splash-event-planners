import { Box, Typography } from '@mui/material'
import React from 'react'
import { CarDisplay } from '../UI components/CarDisplay'

const Carhire = () => {
    return (
        <Box sx={{ backgroundColor: 'secondary.main' }}>

            <Box padding='10px' sx={{ backgroundColor: 'secondary.main' }} id='cars'>
                <Typography
                    sx={{
                        color: "info.main",
                        textAlign: 'center',
                        fontFamily: 'PT Sans, sans-serif',
                        fontSize: { xs: '25px', sm: '40px' }, fontWeight: "bold"
                    }} >
                    Car Hire Services
                </Typography>
            </Box>

            <Box padding='10px'>
                <Typography sx={{ color: "info.main", fontFamily: 'PT Sans, sans-serif', fontStyle: "italic", textAlign: 'center', padding:'10px' }} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc semper mauris ut dolor porttitor, eget fermentum erat aliquet. Integer nulla turpis, faucibus vitae sollicitudin ut, imperdiet quis diam. Morbi pulvinar scelerisque fringilla. Fusce metus nibh, pretium ac ligula quis, ultricies malesuada diam. Nullam vitae viverra eros. Sed id turpis ex. Curabitur sit amet ex eget ipsum accumsan dapibus. Vestibulum maximus mauris id ex suscipit, id finibus dui iaculis. Sed tempor, felis non pretium porttitor, tortor dolor condimentum ligula, sed cursus felis sem ut enim. Vivamus arcu nisi, rutrum quis dictum at, interdum non mauris.
                </Typography>
            </Box>

            <Box>
                <CarDisplay />
            </Box>

        </Box>
    )
}

export default Carhire

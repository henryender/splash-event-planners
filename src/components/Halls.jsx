import { Box, Typography } from '@mui/material'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import hall1 from '../assets/hall/hall1.jpg'
import hall2 from '../assets/hall/hall2.jpg'
import hall3 from '../assets/hall/hall3.jpg'
import hall4 from '../assets/hall/hall4.jpg'
import hall5 from '../assets/hall/hall5.jpg'
import hall6 from '../assets/hall/hall6.jpg'
import hall7 from '../assets/hall/hall7.jpg'

export default function Halls(props) {
    var items = [
        {
            name: "Spacious hall",
            description: hall1
        },
        {
            name: "Hall Beautifully decorated",
            description: hall2
        },
        {
            name: "Perfectly Air conditioned",
            description: hall3
        },
        {
            name: "Good Lightning",
            description: hall4
        },
        {
            name: "Standard furniture",
            description: hall5
        },
        {
            name: "Good environment",
            description: hall6
        },
        {
            name: "Made for guests",
            description: hall7
        },
    ]

    return (
        <Box sx={{ backgroundColor: "secondary.main" }} id='halls' >
            <Box padding='10px' sx={{ backgroundColor: 'secondary.main' }}>
                <Typography
                    sx={{
                        color: "info.main",
                        textAlign: 'center',
                        fontFamily: 'PT Sans, sans-serif',
                        fontSize: { xs: '25px', sm: '40px' }, fontWeight: "bold"
                    }} >
                    Halls and Decoration
                </Typography>
            </Box>

            <Box  sx={{width:{xs:"90%",md:"70%"}}} margin='auto' >
                <Carousel autoPlay={true}>
                    {
                        items.map((item, i) => <Item key={i} item={item} />)
                    }
                </Carousel>
            </Box>

        </Box>
    )
}

function Item(props) {
    return (

        <>
            <Typography
                color='info.main'
                sx={{
                    fontFamily: 'PT Sans,sans-serif',
                    textAlign: 'center',
                    fontSize: { xs: '20px', sm: '30px' }
                }}>

                {props.item.name}

            </Typography>
           
            <img src={props.item.description} alt='man' className='img' />
         
           


        </>


    )

}

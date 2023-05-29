import { Box, Typography } from '@mui/material'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import photo1 from '../assets/Photography/photo1.jpg'
import photo2 from '../assets/Photography/photo2.jpg'
import photo4 from '../assets/Photography/photo4.jpg'
import photo5 from '../assets/Photography/photo5.jpg'
import photo6 from '../assets/Photography/photo6.jpg'

export default function PhotoCaro(props) {
    var items = [
        {
            name: "We take care of your events",
            description: photo1
        },
        {
            name: "Experienced photographers",
            description: photo2
        },
       
        {
            name: "High quality pictures",
            description: photo4
        },
        {
            name: "Professional shots",
            description: photo5
        },
        {
            name: "Cover all your great moments",
            description: photo6
        },
    ]

    return (
        <Box width='95%' margin='auto'>
            <Carousel>
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
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

import { Box, Typography } from '@mui/material'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import manager from '../assets/hall/manager.jpg'
import manager2 from '../assets/hall/manager2.jpg'
import manager3 from '../assets/hall/manager3.jpg'
import manager4 from '../assets/hall/manager4.jpg'
import manager5 from '../assets/hall/manager5.jpg'

export default function Example(props) {
    var items = [
        {
            name: "Meet the manager",
            description: manager
        },
        {
            name: "Top notch services",
            description: manager2
        },
        {
            name: "We make our clients guests also",
            description: manager3
        },
        {
            name: "Manager and wedding couples",
            description: manager4
        },
        {
            name: "Good events documentation",
            description: manager5
        }
    ]

    return (
        <Box width='100%'>
            <Carousel autoPlay={true}>
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

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import car1 from '../assets/cars/car1.jpg'
import car2 from '../assets/cars/car2.jpg'
import car3 from '../assets/cars/car3.jpg'
import car4 from '../assets/cars/car4.jpg'
import car5 from '../assets/cars/car5.jpg'
import car6 from '../assets/cars/car6.jpg'
import car7 from '../assets/cars/car7.jpg'
import { Box } from "@mui/material";

export const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};


export const CarDisplay = () => {
    return (
        <>
            <Box sx={{ width: '85%', padding: '25px' , margin:'auto'}} >

                <Carousel
                    swipeable={false}
                    draggable={false}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={1500}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >

                    <img src={car1} alt="car1" className="imgc" />
                    <img src={car2} alt="car2" className="imgc" />
                    <img src={car3} alt="car3" className="imgc" />
                    <img src={car4} alt="car4" className="imgc" />
                    <img src={car5} alt="car5" className="imgc" />
                    <img src={car6} alt="car6" className="imgc" />
                    <img src={car7} alt="car7" className="imgc" />




                </Carousel>;



            </Box>



        </>
    )
}


import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box } from '@mui/material';
import food1 from '../assets/Food/food1.jpg'
import food2 from '../assets/Food/food2.jpg'
import food3 from '../assets/Food/food3.jpg'
import food4 from '../assets/Food/food4.jpg'
import food5 from '../assets/Food/food5.jpg'
import food6 from '../assets/Food/food6.jpg'
import food7 from '../assets/Food/food7.jpg'
import food8 from '../assets/Food/food8.jpg'
import food9 from '../assets/Food/food9.jpg'
import food10 from '../assets/Food/food10.jpg'
import food11 from '../assets/Food/food11.jpg'
import food12 from '../assets/Food/food12.jpg'
import food13 from '../assets/Food/food13.jpg'
import food14 from '../assets/Food/food14.jpg'
import food15 from '../assets/Food/food15.jpg'

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <Box sx={{ backgroundColor: 'secondary.main' }}>
      <ImageList
        sx={{ width: { xs: 400, sm: 550, md: 700, lg: 600 }, height: 540 }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>

  );
}

const itemData = [
  {
    img: food1,
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: food2,
    title: 'Burger',
  },
  {
    img: food3,
    title: 'Camera',
  },
  {
    img: food4,
    title: 'Coffee',
    cols: 2,
  },
  {
    img: food5,
    title: 'Hats',
    cols: 2,
  },
  {
    img: food6,
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: food7,
    title: 'Basketball',
  },
  {
    img: food8,
    title: 'Fern',
  },
  {
    img: food9,
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: food10,
    title: 'Tomato basil',
  },
  {
    img: food11,
    title: 'Sea star',
  },
  {
    img: food12,
    title: 'Bike',
    cols: 2,
  },
  
  {
    img: food13,
    title: 'Sea star',
    cols:2
  },
  {
    img: food14,
    title: 'Sea star',
  },
  {
    img: food15,
    title: 'Sea star',
    
  },
];
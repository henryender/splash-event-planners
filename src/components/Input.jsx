import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import DateComponent from '../UI components/DatePicker'
import EmptyTextarea from '../UI components/TextSpace'

const Input = () => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': {
          m: 1, width: "39.7ch",
        }, margin: "auto", width: { lg: "60%", xs: "80%", sm: '45%', md: "75%" }
      }}
      noValidate
      autoComplete="off"

    >
      <TextField
        label={<Typography textAlign="center" 
        color='info.main' sx={{fontFamily: 'Zilla Slab, serif'}} >First Name</Typography>}
        variant="outlined" />

      <TextField
        label={<Typography textAlign='center' color='info.main' sx={{fontFamily: 'Zilla Slab, serif'}}>Last Name</Typography>}
        variant="outlined" />

      <TextField
        label={<Typography textAlign='center' color='info.main' sx={{fontFamily: 'Zilla Slab, serif'}}>Email</Typography>}
        variant="outlined" />
      <DateComponent />
      <EmptyTextarea />

      <Box sx={{padding:"5px", display:'flex', justifyContent:"flex-start"}}>
        <Button variant='contained'>Submit</Button>
      </Box>

    </Box>
  )
}

export default Input

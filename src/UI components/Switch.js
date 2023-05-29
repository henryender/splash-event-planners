import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Box, Typography } from '@mui/material';
import { SplashContext } from '../context/Context';

export default function Switches() {
  const {setToggle, toggle}= React.useContext(SplashContext)
  console.log(toggle)
  return (
    <FormGroup>
        <Box>
        <FormControlLabel 
        control={<Switch   
        size='small' 
        sx={{marginBottom:'-10px',}} 
         defaultChecked color="info" />}
        onClick={()=>setToggle(!toggle)}
        />

        <Typography sx={{textAlign:'center', fontSize:"12px", marginTop:1,fontFamily: 'Zilla Slab, serif'}}>{toggle? "Dark Mode" :"Light Mode"}</Typography>
        </Box>
      
      
    </FormGroup>
  );
}
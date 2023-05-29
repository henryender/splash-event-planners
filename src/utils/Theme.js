import { createTheme } from "@mui/material";

 export const Light=createTheme({
 palette:{
// color of buttons-- orange
    primary:{
        main:"#f1993d"
    },
//Background of boxes and components---White
    secondary:{
         main:"#fbf8f8"
    },
// color of Texts ---Black
    info:{
        main:"#090909",
       },
       
//Hover-- Light gray
    action:{
        hover:"#67665d",
       
    },
   
 }
})

export const Dark=createTheme({
    
    palette:{
   // Color of buttons -- Orange
       primary:{
           main:"#f1993d"
       },
       //Black Background
       secondary:{
            main:"#090909"
       },
   // Color of Texts---white
       info:{
           main:"#fbf8f8",
          
       },
       background:{
        paper:'#090909'
       },

       text:{
        primary:"#fbf8f8"
       },
   
       action:{
           hover:"#67665d",
           disabled:'#fbf8f8'
          
       },
      
    }
   })
import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DateRangeIcon from '@mui/icons-material/DateRange';


export default function DateComponent() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker 
      
      views={['day','month']}
      showDaysOutsideCurrentMonth={true}
      slots={{openPickerIcon:DateRangeIcon,
        
        }}
        
       
        
    
      

      />
         
       
    </LocalizationProvider>
  );
}
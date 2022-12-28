import React,{useState,useEffect} from 'react';
import dayjs from 'dayjs';
import CustomCard from '../../CustomComponents/CustomCard';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { CardContent, CardHeader } from '@mui/material';


function CustomCalender() {
    const [value, setValue] = useState(dayjs());
    const [Title, setTitle] = useState();
    useEffect(()=>{
        
      if(value){
          let  weekarr = ["","Monday","Tuesday", "Wednesday", "Thursday", "Friday","Saturday" ,"Sunday" ];
          let  montharr = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEPT","OCT","NOV","DEC"];
          setTitle( value.$D +" "+weekarr[value.$W]+" "+montharr[value.$M])

      }


    },[Title])

  
  return (
    <CustomCard>

        <CardHeader title={Title} subheader="10:00PM"/>             
      <LocalizationProvider  dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        value={value}
        onChange={(newValue) => {
            setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
        dayOfWeekFormatter={(day) => `${day}.`}
        toolbarFormat="ddd DD MMMM"
        // showToolbar
        
        />
    </LocalizationProvider>
    </CustomCard>
  )
}

export default CustomCalender
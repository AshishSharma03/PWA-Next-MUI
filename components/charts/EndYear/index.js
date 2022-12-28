import { CardHeader ,Box, CardContent, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';
import CustomCard from '../../CustomComponents/CustomCard'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  

const option = {
    maintainAspectRatio :   false,
    plugins: {
      legend: {
        display:false,    
    },
      title: {
        display: false,
      },
      
    },
    scales: {
        x: {
            display:true    ,
            ticks : {
                color:"#D6D6D6",
                font:{size:7}},
                grid: { color: "#ffffff",
            },
        },
        y: {
          ticks : {color:"#D6D6D6"},
          display:false,
          grid: { color: "#ffffff",
            },
           }
          
        
    }
  };


function EndYear(props) {
    const [data,setData ] = useState([]);
    const [otherCount,SetotherCount ] = useState([]);
    const [EndYear, setEndYear] = useState({});
    useEffect(()=>{

        const CountEndYear = {}
        if(props.data){
            setData(props.data) 
            let Endyear = [];
            let other = 0;
            data.map((a)=>{
                if(a.end_year){
                    Endyear.push(a.end_year)
                }else{
                    other++;
                }
            
            })
            Endyear.forEach(function (x) { CountEndYear[x] = (CountEndYear[x] || 0 ) + 1; });
            setEndYear(CountEndYear);    
            SetotherCount(other)    
        }

    },[data])


    const dta = {
        labels: Object.keys(EndYear).map((k,v)=> k),
        datasets: [
            {
              label: 'Sectors',
              data: Object.keys(EndYear).map((k,v)=> EndYear[k]),
              backgroundColor: 'rgba(94, 218, 142,1)',
              borderRadius:5,
            },
        ]

    }


  return (
    <CustomCard>
        <CardHeader
          title="End Year"
            subheader="September 14, 2016"/>
            <CardContent>
            <Box>
                
            </Box>
            <Box display='flex' spacing="2px" >
                    <Box flexGrow={1}/> 
                    <Typography sx={{fontSize:"20px",fontWeight:900}}>This Year :</Typography>
                    <Typography  sx={{fontSize:"20px",fontWeight:900}}>2022 </Typography>
                </Box>
                <Box minHeight={"200px"}>
                <Bar data={dta} options={option}  />
                </Box>
                
        </CardContent>  
    </CustomCard>
  )
}

export default EndYear
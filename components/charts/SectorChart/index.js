import React ,{useState,useEffect} from 'react'
import { Line} from 'react-chartjs-2';
import CustomCard from '../../CustomComponents/CustomCard'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Box,CardContent,CardHeader,Stack,Typography,Select, MenuList, FormControl  } from '@mui/material'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const option = {
  maintainAspectRatio :   false,
  plugins: {
    legend: {
      display: false,
      
    },
    title: {
      display: false,
    
    },
  },
  scales: {
    x: {
        display:false,
        
    },
    y: {
      ticks : {color:"#D6D6D6"},
      display:true,
      grid: { color: "#F5F5F5",
        },
       }
      
    
}
  
};


let color = []



function SectorChart(props) {
    const [data,setData ] = useState([]);
    const [Sector,setSector ] = useState({});
    const [Pestel,SetPestel ] = useState([]);
    const [SingleSector, setSingleSector] =useState('Energy');
    useEffect(() => {
      

        const CountSector = {}
        const uniPestle = [];
        if(props.data){
          setData(props.data)
          
          let Allsector = []; 
          data.map((a)=> Allsector.push(a.sector))
          Allsector.forEach(function (x) { CountSector[x] = (CountSector[x] || 0 ) + 1; });
          setSector(CountSector)

          data.filter(e=>{
            const isDup = uniPestle.includes(e.pestle);
            if(!isDup){
              uniPestle.push(e.pestle);
              return true;
            }
           
            return false;
          })
          SetPestel(uniPestle);
        }
        
      }, [data]);
      // console.log(Sector)

      const dta = {
        labels: Object.keys(Sector).map((k,v)=> k),
        datasets: [
          {
            
            label: 'Sector',
            data: Object.keys(Sector).map((k,v)=> Sector[k]),
            borderColor: 'rgb(255, 99, 132,0.2)',
            backgroundColor: 'rgba(255, 99, 132, 1)',
            tension : 0.5,
          },
        ],
        
        
      
      };
  
      const handleChange = (event) => {
        setSingleSector(event.target.value);
      };

  return (
    <CustomCard >
              <CardHeader
                      title="Sectors"
                      subheader="September 14, 2016"
                      action={
                      <Box padding={2} >
                        <FormControl>
          
                          <Select variant='filled'  labelId="demo-select-small" id="demo-select-small"  label="Sector" value={SingleSector} onChange={handleChange} minHeight="200px">
                              {Object.keys(Sector).map((a)=>{
                                return(
                                  <MenuList  sx={{padding:"3px","&:hover":{backgroundColor:"green"}}} value={(a=='')?'Other':a}>
                                  {(a=='')?'Other':a}
                                </MenuList>)
                              })}
                          </Select>

                          </FormControl>
                      </Box>}
                    />
                    <CardContent>
                          <Stack direction={'row'} gap="2px">
                        <Typography sx={{fontSize:'20px',fontWeight:900}}>Total : </Typography>
                        <Typography sx={{fontSize:'20px',fontWeight:900,color:"#91A5FF"}}>{Object.keys(Sector).length} </Typography>
                        <Typography sx={{fontSize:'20px',fontWeight:900 ,color:"#91A5FF"}}> Sectors </Typography>
                          <Box flexGrow={1}/>
                          <Typography sx={{fontSize:"15px",fontWeight:800}}>{SingleSector} : {Sector[SingleSector]}</Typography>
                      </Stack>
                      <Box  p={2}>
                    <Line data={dta} options={option} />
                      </Box>
                    </CardContent>
                      
     </CustomCard>
  )
}

export default SectorChart
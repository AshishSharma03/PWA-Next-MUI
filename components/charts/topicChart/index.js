import { CardContent,FormControl,MenuList, CardHeader,Select, CircularProgress, Stack,Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CustomCard from '../../CustomComponents/CustomCard'

function TopicChart(props) {
    
    const [data, setData] = useState();
    const [Topic , setTopic] = useState({});
    const [max , setMax] = useState(0);
    const [SingleTopic , setSingleTopic] = useState('gas');

    useEffect(()=>{
      const countTopic = {}
            if(props.data){
                setData(props.data);
                let AllTopic = [];
                data?.map((a)=>{ 
                if(a.topic == ''){
                  AllTopic.push('other')
                }else{
                  
                  AllTopic.push(a.topic)
                }})
                AllTopic.forEach(function (x) { countTopic[x] = (countTopic[x] || 0 ) + 1; });
                setTopic(countTopic);    
                
                const value = Object.values(countTopic);
                const Max = Math.max(...value)
                setMax(Max)
                
            }

    },[data])

    const handleChange = (event) => {
      setSingleTopic(event.target.value);
    };
   
    return (
    <CustomCard>
        <CardHeader
        title={"Topics"}
        subheader={"September 14, 2016"}
        />
       <CardContent sx={{display:"flex",flexDirection:"column",gap:"20px"}}>
        <Box>
        <FormControl sx={{width:"100%"}}> 
          <Select variant='filled'  labelId="demo-select-small" id="demo-select-small"  label="Sector" value={SingleTopic} onChange={handleChange} minHeight="200px">
              {Object.keys(Topic).map((a)=>{
                return(
                  <MenuList  sx={{padding:"3px","&:hover":{backgroundColor:"green"}}} value={(a=='')?'Other':a}>
                  {(a=='')?'Other':a}
                </MenuList>)
              })}
          </Select>

          </FormControl>
        </Box>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <Typography sx={{position:"absolute",fontSize:"20px",fontWeight:900}}>
            
    
            { (Topic[SingleTopic] / max  * 100).toFixed(1)}%
           
          </Typography>
            <CircularProgress variant="determinate" size="150px" sx={{color:"#FF8C30"}} thickness={8}   value={(Topic[SingleTopic] / max  * 100).toFixed(1)}/>
        </Box>
        <Typography sx={{textAlign:"center",fontSize:"8px"}}>{Topic[SingleTopic]} topics from {SingleTopic}</Typography>
       </CardContent>
    </CustomCard>
  )
}

export default TopicChart
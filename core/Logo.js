import React from 'react'
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import {Box , Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import Link from '../muiSrc/LInk';


function Logo({size,Text}) {
  return (
    <Link href="/"  sx={{textDecoration:"none"}} >
      <Box display={"flex"} sx={{color:"#91A5FF"}}  justifyContent={"center"} alignItems="center" >
    <BubbleChartIcon  sx={{fontSize:size}}/>
    {
      (Text)?
      <Typography sx={{fontSize:size,fontWeight:800}}>ZAR</Typography>
      :
      <Typography sx={{fontSize:size,fontWeight:800}}>Z</Typography>
    }
    <BubbleChartIcon  sx={{fontSize:size,rotate:"180deg"}}/>
    </Box>
    </Link>
  )
}

export default Logo
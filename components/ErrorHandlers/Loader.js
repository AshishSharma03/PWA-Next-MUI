import { CircularProgress ,Box, Typography} from '@mui/material'
import React from 'react'
import Logo from '../../core/Logo'

function Loader() {
  return (
    <Box sx={{minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Typography sx={{fontSize:"15px",fontWeight:800,position:"absolute",color:"#91A5FF"}}>Z</Typography>
            <CircularProgress thickness={9}/>
    </Box>
  )
}

export default Loader
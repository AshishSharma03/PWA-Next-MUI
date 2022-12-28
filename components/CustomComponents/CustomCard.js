import { Card } from '@mui/material'
import React from 'react'

function CustomCard({children}) {
  return (
    // 1px solid #E7E6E6
    <Card sx={{boxShadow:"0px  5px 50px rgba(0,0,0,0.09)" , border:"none" ,borderRadius:"10px",height:"100%"}}>
        {children}
    </Card>
  )
}

export default CustomCard
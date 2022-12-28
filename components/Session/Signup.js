import { CheckBox, Password } from '@mui/icons-material';
import {Box , Button, FormControlLabel, FormGroup, Grid, IconButton, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import React, { useContext, useState } from 'react'
import Link from '../../muiSrc/LInk';
import Navbar from '../navbar';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import Logo from '../../core/Logo';
import Meta from '../../core/Meta';
import { LogInContext } from '../../core/SessionHandles/LoginContext';


function Signup({buttonLogin,visibility,Email,Name,SignUpBtn,Password,ConPass,alert}) {

  return (
    <>
   <Meta  title={"Sign-up"}/>
    <Box 
     display={"flex"} 
     flexDirection="column"
     justifyContent={"center"}
     alignItems={"center"} 
     minHeight={"90vh"}
     >
       
       <Box  minWidth={{lg:"400px",xs:"340px"}} >
        <Stack direction={"row"}   alignItems="center"   >
        <Typography  fontSize={"50px"} flexGrow={1} fontWeight={'900'}  color={'#91A5FF'} sx={{textShadow:"0px 5px px rgba(145, 165, 255,0.5)"}}>Sign Up </Typography>
        <Logo size={"30px"}/>  
        </Stack>
        <Typography fontSize={"30px"} fontWeight="800"  color={"#7E818F"} >Welcome !</Typography>
        <Typography  fontSize={"15px"} fontWeight="400"  color={"#B8BCCC"} >
          Glad to see you.
        </Typography>
       </Box>


        <Typography sx={{color:"#B8BCCC"}} marginBottom={"15px"}>___ Signup with other ___</Typography>
          <Stack direction={"row"}  marginBottom="25px"  spacing="15px">
          <IconButton  sx={{backgroundColor:"#FFDFDF",color:"#FF3333",boxShadow:"0px 5px 30px rgba(145, 165, 255,0.5)"}}>
                  <GoogleIcon sx={{fontSize:"30px"}}  />
              </IconButton>
              <IconButton color=""   sx={{color:"#4267B2",backgroundColor:"#D9E4F9" ,boxShadow:"0px 5px 30px rgba(145, 165, 255,0.5)"}}>
                  <FacebookIcon sx={{fontSize:"30px"}}/>
              </IconButton>
          </Stack>
          <Box margin={"10px 0px"}>
          {alert}
          </Box>
        <Box display={"flex"} flexDirection="column" gap={"20px"} minWidth="350px">
            <Stack direction={"row"} gap="10px">
                {Name}
                <TextField variant='outlined'  label="Last Name" type={"text"}/>
            </Stack>
            
                {Email}
                <Stack direction={"row"} >
                {Password}
                {visibility}
                </Stack>
                <Stack direction={"row"} >
                  {ConPass}
            
                {visibility}
                </Stack>
               
                
                {SignUpBtn}
                 <Box display={"flex"} >
                  
                  <Typography marginRight={"3px"}>
                    I have read and agree 
                    </Typography>
                  <Link href="/" sx={{textDecoration:"none"}} >
                    Terms & Conditions.
                    </Link>
                  </Box>
                  
        </Box>
        <Box  display={"flex"} sx={{position:"absolute",bottom:0 }} alignItems="center" padding="10px" >
                  
                <Typography marginRight={"3px"}>
                Allready have Account?
                </Typography>
                {buttonLogin}
                </Box>
            
    </Box>
    </>
  )
}

export default Signup
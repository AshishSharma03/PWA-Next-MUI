import { Stack,Button ,Box, Typography, Paper, AppBar, Toolbar, Avatar} from '@mui/material'
import Image from 'next/image';
import Link from 'next/link';
import React ,{useState}from 'react'
import { MuiBackgroundDark, MuiBackgroundLight } from '../Style/MuiBackgroud'



function index() {
  const [dark, setdark] = useState(true);

  return (
    <>
    <AppBar sx={{boxShadow:"none"}}>
      <Toolbar sx={{background:(!dark)?"#ffffff":"#1F2E3D",color:(dark)? "#ffffff":"#000000"}} >
  
        <Stack spacing="20px" direction={"row"} alignItems="center">
        <Avatar 
        src={"https://avatars.githubusercontent.com/u/46992681?s=400&u=6c3ba520be228c1d6d3bbb3917316188f6a15b9a&v=4"}
        />
        <Typography>Hello World!</Typography>
        </Stack>
      </Toolbar>
    </AppBar>
    <Box sx={(dark)? MuiBackgroundDark : MuiBackgroundLight}>
        <Stack direction={{md:"row" , sm:"column"}} justifyContent="center" alignItems={"center"} spacing="20px">
        <Image
       src={'/assets/next-js.png'}
       alt="pwa"
       style={{filter:(!dark)? `invert(30%)` : ""}}
       width={80}
       height={80}
       /> 
      <Typography sx={{fontSize:"30px",fontWeight:"800"}}>WITH  </Typography>
      <Image
       src={'/assets/pwa.png'}
       alt="pwa"
       style={{filter:(!dark)? `invert(30%)` : ""}}
       width={200}
       height={100}
       /> 
      <Typography sx={{fontSize:"30px",fontWeight:"800"}}>AND </Typography>
      <Image
       src={'/assets/logo.png'}
       alt="pwa"
       
       width={100}
       height={100}
       /> 
       </Stack>
      <Stack spacing={"20px"}>
      <Button onClick={()=>{setdark(!dark)}} sx={{padding:"20px 30px",fontSize:"20px"}}>{(dark)? "LIGHT" : "DARK"}</Button>
      <Stack>
      <Typography>Checkout reference :</Typography>
      <Link href="https://github.com/AshishSharma03/PWA-Next-MUI" style={{color:"#71A7DC"}}>https://github.com/AshishSharma03/PWA-Next-MUI</Link>
      </Stack>
      </Stack>
    </Box>
       </>
  )
}

export default index
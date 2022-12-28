import { Box,List , Button} from '@mui/material'
import React ,{useState} from 'react'
import MuiDrawer from '@mui/material/Drawer'
import { styled, useTheme } from '@mui/material/styles';
import Logo from '../../core/Logo';
import { AddBox } from '@mui/icons-material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const openedMixin = (theme) => ({
  width: 250,
    transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});


const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
})

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: 250,
    backgroundColor:"red",
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);




function SideDrawer({children,MenuList_}) {
  const [Open, setOpen] = useState(true);

  return (
   <Drawer
    variant="permanent"
    anchor="left"
    open={Open}
    sx={{backgroundColor:"white",boxShadow:"0px 0px 0px rgba(0,0,0,0.1)"}}>  

   <Box sx={{display:(Open)?"flex":"Block",justifyContent:'space-between',alignItems:"center",padding:"12px 5px"}} >
    <Box sx={{display:"flex",alignItems:"center"}}>
      <Logo  size={(Open)?"35px":"20px"} />
      <Box flexGrow={1}/> 
      <Box sx={{marginLeft:"100px"}}>
      {children}
      </Box>
    </Box>

   </Box>
   <Box  width="100%">
      <Button variant="contained"  sx={{boxShadow:"none",borderRadius:"0px"}} onClick={()=>{ setOpen(!Open)}}  fullWidth >
        <KeyboardDoubleArrowRightIcon sx={{color:"white",transform:(Open)?"rotate(180deg)":"rotate(0deg)",transition:"0.1s"}}/>
      </Button>
      {/* {MenuList_} */}
   </Box>
   </Drawer>
  )
}

export default SideDrawer



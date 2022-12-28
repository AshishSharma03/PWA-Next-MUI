import { AppBar, Avatar, IconButton, Input, TextField, Toolbar,Badge,Divider, Menu,MenuList,MenuItem ,ListItemIcon} from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext,useState } from 'react'
import Logo from '../../core/Logo'
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import { LogInContext } from '../../core/SessionHandles/LoginContext';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';



function Navbar({logo,contents,children,pinNav}) {
const {UserName ,setLogin} = useContext(LogInContext)
const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};

  return (
    // border:"1px solid #E7E6E6"
    <AppBar position={(contents)?"sticky":"relative"} sx={{background:(contents)?"white":"none",boxShadow:(contents)?"0px 10px 100px rgba(0,0,0,0.1)":"none",borderRadius:"10px",margin:"10px 0px",top:"10px" }}>
        <Toolbar sx={{background:"none"}}>
          {(logo)?
          
          <Logo size={"30px"}/>
          : ''
          }

          {(contents)?
          <>
          <Box display={"flex"} width={"100%"}  alignItems="center" gap={"10px"}>
            <Box display={{sm:"none",xs:"block"}}>
           {children}
            </Box>
            <Box flexGrow={1} />
            {pinNav}
            <IconButton
            size="small"
          
            >
              <Badge badgeContent={4} color="secondary">
           <NotificationsIcon/>
              </Badge>
            </IconButton>
            <IconButton
            size="small"
            onClick={handleClick}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            >
            <Avatar>{UserName[0]}</Avatar>
            </IconButton>

          </Box>
            <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem>
              <Avatar /> Profile
            </MenuItem>
            <MenuItem>
              <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Add another account
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={()=>{setLogin(false)}}> 
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
      
          </>
                   :
            ""
          }

    
        </Toolbar>
    </AppBar>
  )
}

export default Navbar
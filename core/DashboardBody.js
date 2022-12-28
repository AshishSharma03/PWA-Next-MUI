import React ,{useState,useEffect} from 'react'
import Meta from '../core/Meta'

import { Box,Container,Grid, IconButton  } from '@mui/material'
import Navbar from '../components/navbar/'
import SectorChart from '../components/charts/SectorChart'
import SideDrawer from '../components/SideDrawer'
import EndYear from '../components/charts/EndYear'
import TopicChart from '../components/charts/topicChart'
import RegionChart from '../components/charts/regionChart'
import CustomCalender from '../components/charts/Calender'
import PEST from '../components/charts/PEST'
import SWOT from '../components/charts/SWOT'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PushPinIcon from '@mui/icons-material/PushPin';





function DashboardBody(props) {
    const [PinNav, setPinNav] = useState(false);
    const [OpenMenu, setOpenMenu] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
    if (props.data) {
      setData(props.data);
    }
  }, [data]);

  return (
    <Box display={{ sm: "flex" }}>
      <Meta title={"Dashboard"} />
      <Box display={{ xs: OpenMenu ? "block" : "none", sm: "block" }}>
        <SideDrawer>
          <Box display={{ sm: "none", xs: "block" }}>
            <IconButton
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </SideDrawer>
      </Box>
      <Container maxWidth="xl">
        {!PinNav ? (
          <Box sx={{ margin: "10px 0px" }}>
            <Navbar
              contents
              pinNav={
                <IconButton
                  onClick={() => {
                    setPinNav(!PinNav);
                  }}
                >
                  <PushPinIcon />
                </IconButton>
              }
            >
              <IconButton
                onClick={() => {
                  setOpenMenu(true);
                }}
              >
                <MenuIcon />
              </IconButton>
            </Navbar>
          </Box>
        ) : (
          ""
        )}

        {PinNav ? (
          <Navbar
            contents
            pinNav={
              <IconButton
                onClick={() => {
                  setPinNav(!PinNav);
                }}
                color="primary"
              >
                <PushPinIcon sx={{ transform: "rotate(60deg)" }} />
              </IconButton>
            }
          >
            <IconButton
              onClick={() => {
                setOpenMenu(true);
              }}
            >
              <MenuIcon />
            </IconButton>
          </Navbar>
        ) : (
          ""
        )}

        <Grid container spacing={"10px"}>
          <Grid item lg={8} sm={12} xs={12}>
            <RegionChart />
          </Grid>
          <Grid
            item
            display={{ xs: "none", sm: "block" }}
            lg={4}
            sm={6}
            xs={12}
          >
            <CustomCalender />
          </Grid>
          <Grid item display={{ xs: "block", sm: "none" }} xs={12}>
            <SectorChart data={data} />
          </Grid>
          <Grid item lg={4} display={{ xs: "none", sm: "block" }} sm={6}>
            <SectorChart data={data} />
          </Grid>
          <Grid item lg={3} xs={12} sm={6}>
            <TopicChart data={data} />
          </Grid>
          <Grid item lg={5} xs={12} sm={6}>
            <EndYear data={data} />
          </Grid>
          <Grid item lg={3} sx={6} sm={12}>
            <SWOT />
          </Grid>
          <Grid item lg={4} sx={6} sm={12}>
            <PEST />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}




export default DashboardBody




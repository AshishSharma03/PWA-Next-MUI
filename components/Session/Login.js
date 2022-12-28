import { CheckBox } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Card,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState, useContext } from "react";
import Link from "../../muiSrc/LInk";
import Navbar from "../navbar";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import Meta from "../../core/Meta";
import { LogInContext } from "../../core/SessionHandles/LoginContext";
import Signup from "./Signup";
import VisibilityIcon from "@mui/icons-material/Visibility";

function Login() {
  const [CreateAccount, setCreateAccount] = useState(false);
  const { setLogin, setUserName } = useContext(LogInContext);
  const [seenPass, setSeenPass] = useState(false);
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [CAEmail, setCAEmail] = useState();
  const [CAPassword, setCAPassword] = useState();
  const [CAName, setCAName] = useState();
  const [CAConPassword, setCAConPassword] = useState();
  const [errorTrue, setErrorTrue] = useState(false);
  const [messege,setMessege] = useState("")

  const Loginvalidtion = () => {
    var re = /\S+@\S+\.\S+/;
    var as = "admin@example.com";
    const pass = "123456A@";

    if(Password && Email){

      if (!re.test(Email)) {
        setMessege("Email not valid");
        setErrorTrue(true);
    } else {
      setErrorTrue(false);
      if (Email.match(as) && Password.match(pass)) {
        setErrorTrue(false);
        setLogin(true);
      } else {
        setMessege("wrong password");
        setErrorTrue(true);
        
      }
    }
  }else{
    setMessege("Please Fill all Fields");
    setErrorTrue(true)
  }
  };
  // console.log({email : email , password : password});

  const CreateAccountValidation = () => {
    var re = /\S+@\S+\.\S+/;
    if (CAConPassword && CAPassword && CAName && CAEmail) {
      if (!re.test(CAEmail)) {
        setMessege("Enter Valid Email");
        setErrorTrue(true)
      } else {
        if (CAPassword.match(CAConPassword)) {
          if(CAPassword.length > 6){

            setUserName(CAName);
            setErrorTrue(false);
            setLogin(true);
          }else{

            setMessege("Password must > 6");
          setErrorTrue(true)

          }

        } else {
          setMessege("Password not match");
          setErrorTrue(true)
        }
      }
    } else {
      setMessege("Please Fill all Fields");
      setErrorTrue(true)
    }
  };

  return (
    <>
   
      {CreateAccount ? (
        <>
      
          <Meta title={"Sign-up"} />
          <Signup
          alert={
            (errorTrue)?<Alert severity="error" >
                  {messege}
           </Alert> :""

          }
            ConPass={
              <TextField
                variant="outlined"
                fullWidth
                label="Password"
                type={seenPass ? "text" : "password"}
                onChange={(e) => {
                  setCAConPassword(e.target.value);
                }}
              />
            }
            Password={
              <TextField
                variant="outlined"
                fullWidth
                label="Password"
                type={seenPass ? "text" : "password"}
                onChange={(e) => {
                  setCAPassword(e.target.value);
                }}
              />
            }
            SignUpBtn={
              <Button
                variant="contained"
                sx={{
                  color: "#ffffff",
                  boxShadow: "0px 5px 30px rgba(145, 165, 255,0.5)",
                  padding: "10px",
                }}
                onClick={CreateAccountValidation}
              >
                Sign up
              </Button>
            }
            Name={
              <TextField
                variant="outlined"
                sx={{ "& .root": { border: "1px solid red" } }}
                label="First Name"
                type={"text"}
                onChange={(e) => {
                  setCAName(e.target.value);
                }}
              />
            }
            Email={
              <TextField
                variant="outlined"
                label="Email"
                type={"email"}
                onChange={(e) => {
                  setCAEmail(e.target.value);
                }}
              />
            }
            visibilityValue={seenPass}
            buttonLogin={
              <Button
                sx={{
                  textDecoration: "none",
                  background: "none",
                  color: "#91A5FF",
                  boxShadow: "none",
                }}
                onClick={() => {
                  setErrorTrue(false)
                  setCreateAccount(false);
                }}
              >
                Log in
              </Button>
            }
            visibility={
              <Button
                onClick={() => {
                  setSeenPass(!seenPass);
                }}
              >
                <VisibilityIcon />
              </Button>
            }
          />
        </>
      ) : (
        <>
          <Meta title={"Log-in"} />
          <Navbar logo />
          <Alert
            sx={{
              position: "absolute",
              right: { sm: "0px", xs: "0px" },
              top: { sm: "50px", xs: "0px" },
            }}
          >
            <Stack>
              <Typography
                sx={{ color: "#008000", fontWeight: 600, fontSize: "10px" }}
              >
                ADMIN : admin@example.com
              </Typography>
              <Typography
                sx={{ color: "#008000", fontWeight: 600, fontSize: "10px" }}
              >
                Password: 123456A@
              </Typography>
            </Stack>
          </Alert>
          <Box
            display={"flex"}
            flexDirection="column"
            justifyContent={"center"}
            alignItems={"center"}
            minHeight={"90vh"}
            //  margin={"20px"}
          >
            <Box
              sx={{ textAlign: "left" }}
              minWidth="350px"
              padding="0px 0px 30px 0px"
            >
              <Typography
                fontSize={"50px"}
                fontWeight={"900"}
                color={"#91A5FF"}
                sx={{ textShadow: "0px 5px px rgba(145, 165, 255,0.5)" }}
              >
                LOG IN{" "}
              </Typography>
              <Typography fontSize={"30px"} fontWeight="800" color={"#7E818F"}>
                Welcome Back
              </Typography>
              <Typography fontSize={"15px"} fontWeight="400" color={"#B8BCCC"}>
                to keep connected with us!
              </Typography>
            </Box>

            <Box
              display={"flex"}
              flexDirection="column"
              gap={"20px"}
              minWidth="350px"
            > 
               {(errorTrue)?<Alert severity="error" >
                  {messege}
                 </Alert> :""}
              <TextField
                variant="outlined"
                label="Email"
                type={"email"}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Stack direction={"row"}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Password"
                  type={seenPass ? "text" : "password"}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <Button
                  onClick={() => {
                    setSeenPass(!seenPass);
                  }}
                >
                  <VisibilityIcon />
                </Button>
              </Stack>
              <FormGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  padding: "0px 10px",
                }}
              >
                <FormControlLabel
                  control={
                    <CheckBox sx={{ marginRight: "5px" }} color="primary" />
                  }
                  label="Remember me"
                  sx={{ flexGrow: 1 }}
                />
                <Link href={"/"} sx={{ textDecoration: "none" }}>
                  Forget password?
                </Link>
              </FormGroup>
              <Button
                variant="contained"
                sx={{
                  color: "#ffffff",
                  boxShadow: "0px 5px 30px rgba(145, 165, 255,0.5)",
                  padding: "10px",
                }}
                onClick={Loginvalidtion}
              >
                Log in
              </Button>
              <Box display={"flex"} alignItems={"center"}>
                <Typography marginRight={"3px"}>Not registered yet?</Typography>
                <Button
                  sx={{
                    textDecoration: "none",
                    background: "none",
                    color: "#91A5FF",
                    boxShadow: "none",
                  }}
                  onClick={() => {
                    setCreateAccount(true);
                  }}
                >
                  Create an Account
                </Button>
              </Box>
            </Box>

            <Typography
              sx={{ color: "#B8BCCC" }}
              marginTop="15px"
              marginBottom={"15px"}
            >
              ___ Login with other ___
            </Typography>

            <Stack direction={"row"} spacing="15px">
              <IconButton
                sx={{
                  backgroundColor: "#FFDFDF",
                  color: "#FF3333",
                  boxShadow: "0px 5px 30px rgba(145, 165, 255,0.5)",
                }}
              >
                <GoogleIcon sx={{ fontSize: "30px" }} />
              </IconButton>
              <IconButton
                color=""
                sx={{
                  color: "#4267B2",
                  backgroundColor: "#D9E4F9",
                  boxShadow: "0px 5px 30px rgba(145, 165, 255,0.5)",
                }}
              >
                <FacebookIcon sx={{ fontSize: "30px" }} />
              </IconButton>
            </Stack>
          </Box>
        </>
      )}
    </>
  );
}

export default Login;

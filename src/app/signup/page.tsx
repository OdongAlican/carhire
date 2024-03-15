"use client"
import React from 'react'
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography
} from '@mui/material'
import AuthSide from '../components/AuthSide'
import Link from 'next/link'
import Image from 'next/image'
import PopularOne from "../../assets/images/popularOne.png"
import PopularTwo from '../../assets/images/PopularTwo.png'
import ModalComponent from '../modals/Modal'
import { style } from '../page'
import Login from '../login'

const SignUp = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [open, setOpen] = React.useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <React.Fragment>
      {
        open ? <ModalComponent
          style={style}
          open={open}
          handleClose={handleClose}>
          <Login />
        </ModalComponent> : null
      }
      <Grid
        container
        xs={12}
        height="100vh"
        item
        sx={{ position: "relative" }}>
        <AuthSide />
        <Grid container item xs={8}>
          <Grid
            container
            xs={12}
            spacing={2}
            p={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
            item>
            <Box px={5} sx={{ width: "480px" }}>
              <Grid item xs={12}>
                <Typography className='poppins' sx={{
                  fontSize: "24px",
                  fontWeight: 600,
                  lineHeight: "46px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  mb: 3,
                }}>Sign Up</Typography>
              </Grid>
              <Grid px={1} item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    sx={{ bgcolor: "#F6F6F6" }} size='medium' label="Username" />
                </FormControl>
              </Grid>
              <Grid px={1} mt={2} item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    sx={{ bgcolor: "#F6F6F6" }} size='medium' label="Email Address" />
                </FormControl>
              </Grid>
              <Grid px={1} mt={2} item xs={12} mb={1}>
                <FormControl sx={{ bgcolor: "#F6F6F6" }} fullWidth size='medium' variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <Button sx={{ textTransform: "capitalize", color: "#000" }}>Hide</Button> : <Button sx={{ textTransform: "capitalize", color: "#000" }}>Show</Button>}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </Grid>
              <Grid px={4} mt={2} item xs={12}
                sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography className='poppins' sx={{
                  width: "200px",
                  fontSize: "14px",
                  fontWeight: 200,
                  mt: 2,
                  lineHeight: "24px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  color: "#75767A",
                }}>
                  Choose the role you are
                  signing up as:
                </Typography>
                <Box sx={{ display: "flex", width: "60%" }}>
                  <Box sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Image style={{ height: "50px", width: "80px" }} src={PopularOne} alt='CarOne' />
                    <Typography
                      className='poppins' style={{
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "24px",
                        letterSpacing: "0em",
                        textAlign: "center",
                        color: "#333333"
                      }}
                    >Renter</Typography>
                  </Box>
                  <Box sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Image style={{ height: "50px", width: "80px" }} src={PopularTwo} alt='CarTwo' />
                    <Typography
                      className='poppins' style={{
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "24px",
                        letterSpacing: "0em",
                        textAlign: "center",
                        color: "#333333"
                      }}
                    >Rentee</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid mt={2} item xs={12} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography className='poppins' sx={{
                  fontSize: "14px",
                  fontWeight: 200,
                  my: 3,
                  lineHeight: "24px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  color: "#75767A"
                }}>
                  By continuing with registration, you clarify
                  that you have read the <span style={{ fontWeight: 500, color: "#333333" }}> Terms and Conditions </span> and agree to them
                </Typography>
                <Button className='poppins' variant='contained' size='large' sx={{ bgcolor: "black", px: 6, textTransform: "capitalize" }}>Sign Up</Button>
                <Typography className='poppins' sx={{
                  fontSize: "14px",
                  fontWeight: 200,
                  mt: 2,
                  lineHeight: "24px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  color: "#75767A"
                }}>Already have an account</Typography>
                <Typography
                  onClick={handleOpen}
                  className='poppins' style={{
                    fontSize: "14px",
                    cursor: "pointer",
                    fontWeight: 400,
                    lineHeight: "24px",
                    letterSpacing: "0em",
                    textAlign: "center",
                    color: "#333333"
                  }}>Login</Typography>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default SignUp

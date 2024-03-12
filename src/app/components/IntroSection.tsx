import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import CarLogo from "../../assets/images/topcar.png";
import Image from 'next/image';

const IntroSection = () => {
  return (
    <Grid container xs={12}>
      <Grid item xs={6} padding={6}>
        <Typography
          className='poppins'
          sx={{
            fontSize: "50px",
            fontWeight: 700,
            lineHeight: "75px",
            letterSpacing: "0em",
            textAlign: "left"

          }}>
          Easiest and Fastest
          Way to Rent a Car
          and just Drive
        </Typography>
        <Typography
          className='poppins'
          sx={{
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: "35px",
            letterSpacing: "0em",
            textAlign: "left",
            color: "#75767A",
            pt: 4
          }}>
          Rushing somewhere, have a gig to get to, somewhere
          quick you need to get to, just come, Rent and Drive
        </Typography>
      </Grid>
      <Grid bgcolor="teal" item xs={6}>
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            position: "relative"
          }}>
          <Image style={{
            width: "100%",
            height: "90%",
            position: "absolute",
            left: 0,
            right: 0
          }} src={CarLogo} alt="Description" />
          <Box sx={{ bgcolor: "#F2F2F2", height: "100%", width: "30%", borderRadius: "5px" }} />
        </Box>
      </Grid>
    </Grid>
  )
}

export default IntroSection

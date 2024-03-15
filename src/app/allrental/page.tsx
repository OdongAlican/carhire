import React from 'react'
import Footer from '../components/Footer'
import { Box } from '@mui/material'
import Header from '../components/Header'
import Banner from '../components/Banner'
import MainIntro from '../components/MainIntro'

const AllRental = () => {
  return (
    <React.Fragment>
    <Box sx={{ paddingX: "100px" }}>
      <Header authenticated={true} />
      <MainIntro />
      {/* <IntroSection />
      <SearchSection />
      <Popular />
      <CarLogo />
      <HowItWorks /> */}
    </Box>
    <Box>
      <Banner />
    </Box>
    {/* <Box sx={{ paddingX: "100px", justifyContent: "center", display: "flex" }}>
      <MidLayer />
    </Box> */}
    <Box>
      <Footer />
    </Box>
  </React.Fragment>
  )
}

export default AllRental

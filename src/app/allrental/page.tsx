import React from 'react'
import Footer from '../components/Footer'
import { Box } from '@mui/material'
import Header from '../components/Header'
import Banner from '../components/Banner'
import MainIntro from '../components/MainIntro'
import FilterBy from '../components/FilterBy'

const AllRental = () => {
  return (
    <React.Fragment>
      <Box sx={{ paddingX: "100px" }}>
        <Header authenticated={true} />
        <MainIntro />
        <FilterBy />
      </Box>
      <Box>
        <Banner />
      </Box>
      <Box>
        <Footer />
      </Box>
    </React.Fragment>
  )
}

export default AllRental

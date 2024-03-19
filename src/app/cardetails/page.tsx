import { Box } from '@mui/material'
import React from 'react'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Header from '../components/Header'
import CarInformation from '../components/CarInformation'
import CarOwner from '../components/CarOwner'

const CarDetails = () => {
    return (
        <React.Fragment>
            <Box sx={{ paddingX: "100px" }}>
                <Header authenticated={true} />
                <CarInformation />
                <CarOwner />
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

export default CarDetails

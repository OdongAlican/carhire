import { Box, Button, Card, Grid, Typography } from '@mui/material'
import React from 'react';
import { FaSearch } from "react-icons/fa";
import { FaWallet } from "react-icons/fa6";
import { BiSolidCloudRain } from "react-icons/bi";
import { grey } from '@mui/material/colors';

interface ISearchContent {
    header: string;
    text: string;
    Icon: React.ElementType
}

const SearchContent = ({ header, text, Icon }: ISearchContent) => (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", px: 2 }}>
            <Icon />
        </Box>
        <Box sx={{ flex: 3 }}>
            <Typography
                className='poppins'
                sx={{
                    fontSize: "13px",
                    fontWeight: 400,
                    lineHeight: "20px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#75767A"
                }}>{header}</Typography>
            <Typography
                className='poppins'
                sx={{
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "38px",
                    letterSpacing: "0em",
                    textAlign: "left",

                }}>{text}</Typography>
        </Box>
    </Box>
)

const SearchSection = () => {
    return (
        <Grid container xs={12} px={8} >
            <Card sx={{ width: "100%" }}>
                <Grid container item xs={12} px={2} py={2} >
                    <Grid item xs={3} borderRight="2px solid #CBCBCD">
                        <SearchContent header='Search Brand' text='Mercedez' Icon={FaSearch} />
                    </Grid>
                    <Grid item xs={4} borderRight="2px solid #CBCBCD">
                        <SearchContent header='Search Type' text='2022 AMG GT Class' Icon={BiSolidCloudRain} />
                    </Grid>
                    <Grid item xs={4}>
                        <SearchContent header='Range Price' text='Shs300,000 - Shs500,000' Icon={FaWallet} />
                    </Grid>
                    <Grid item xs={1} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Button className='poppins' variant='contained' size='medium' sx={{ bgcolor: grey[900], px: 3 }}>SEARCH</Button>
                    </Grid>
                </Grid>
            </Card>
        </Grid >
    )
}

export default SearchSection

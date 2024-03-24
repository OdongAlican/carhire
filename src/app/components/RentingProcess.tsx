"use client"
import React from 'react'
import {
    Box,
    Button,
    FormControl,
    Grid,
    Typography,
} from '@mui/material';
import Image from 'next/image';
import CarLogo from '../../assets/images/Rav4.png';
import CarLogoTwo from '../../assets/images/Rav4One.png';
import CarLogoThree from '../../assets/images/Rav4Three.png';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { BootstrapInput } from './MainIntro';
import { grey } from '@mui/material/colors';

const RentingProcess = () => {
    return (
        <Grid container xs={12} item>
            <Grid item xs={7}>
                <Box
                    sx={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        position: "relative",
                    }}>
                    <Image style={{
                        width: "70%",
                        height: "65%",
                        top: 0,
                        bottom: 0,
                        position: "absolute",
                    }} src={CarLogo} alt="Description" />
                    <Box sx={{ bgcolor: "#F2F2F2", height: "65%", width: "25%", borderRadius: "4px" }} />
                    <Box sx={{ width: "50%", height: "5%", mt: 1 }}>
                        <Grid container xs={12} spacing={2} item>
                            <Grid item xs={4}>
                                <Image style={{ width: "100px", height: "70px" }} src={CarLogoTwo} alt='current car' />
                            </Grid>
                            <Grid item xs={4} >
                                <Image style={{ width: "100px", height: "70px", border: "1.5px solid #F2F2F2" }} src={CarLogo} alt='current car' />
                            </Grid>
                            <Grid item xs={4}>
                                <Image style={{ width: "100px", height: "70px" }} src={CarLogoThree} alt='current car' />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{
                        width: "80%",
                        mt: 6,
                        border: `1.5px solid #F2F2F2`,
                        p: 3,
                        borderRadius: "4px"
                    }}>
                        <Typography className='poppins'
                            sx={{
                                fontSize: "14px",
                                display: "flex",
                                alignItems: "center",
                                fontWeight: 500,
                                justifyContent: "center"
                            }}>
                            Total
                            <Typography className='poppins'
                                sx={{
                                    fontWeight: 600,
                                    fontSize: "22px",
                                    px: 2
                                }}>
                                Shs 350,000
                            </Typography>
                            <Typography className='poppins'
                                sx={{
                                    fontWeight: 300,
                                    fontSize: "22px",
                                }}> / day
                            </Typography>
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid
                container
                item
                xs={5}
                py={5}
                pr={0}>
                <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar />
                    </LocalizationProvider>
                </Grid>
                <Grid container item xs={12} px={6} >
                    <Grid px={6} xs={12} item>
                        <FormControl fullWidth variant="standard">
                            <Typography
                                className='poppins'
                                sx={{
                                    fontWeight: 400,
                                    fontSize: "18px",
                                    mb: 1
                                }}>Pick up Car</Typography>
                            <BootstrapInput />
                        </FormControl>
                    </Grid>
                    <Grid
                        container
                        px={6}
                        xs={12}
                        spacing={2}
                        item>
                        <Grid xs={6} item>
                            <FormControl fullWidth variant="standard">
                                <Typography
                                    className='poppins'
                                    sx={{
                                        fontWeight: 400,
                                        fontSize: "14px",
                                    }}>Start</Typography>
                                <BootstrapInput />
                            </FormControl>
                        </Grid>
                        <Grid xs={6} item>
                            <FormControl fullWidth variant="standard">
                                <Typography
                                    className='poppins'
                                    sx={{
                                        fontWeight: 400,
                                        fontSize: "14px",
                                    }}>End</Typography>
                                <BootstrapInput />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid
                        sx={{
                            mt: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }} item xs={12}>
                        <Button
                            className='poppins'
                            variant='contained'
                            size='large'
                            sx={{ bgcolor: grey[900], px: 4, textTransform: "none" }}
                        >Rent Car
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    )
}

export default RentingProcess

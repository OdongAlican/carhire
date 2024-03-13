import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Phone from '../../assets/images/phone.png';
import Shield from '../../assets/images/shield.png';
import Forward from '../../assets/images/forward.png';
import Google from '../../assets/images/google.png';

const MidLayer = () => {
    return (
        <Grid container xs={10} padding={6}>
            <Grid item xs={4} >
                <Image style={{ width: "250px", height: "480px" }} src={Phone} alt='phone' />
            </Grid>
            <Grid px={2} item xs={8}>
                <Typography className='poppins' sx={{
                    fontSize: "15px",
                    fontWeight: 500,
                    lineHeight: "24px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#75767A",
                    mb: 1

                }}>DOWNLOAD</Typography>
                <Typography className='poppins' sx={{
                    fontSize: "23px",
                    fontWeight: 600,
                    lineHeight: "46px",
                    letterSpacing: "0em",
                    textAlign: "left",

                }}>Use Our App</Typography>
                <Box sx={{ border: "2px solid #CBCBCD", height: "3px", width: "70px", mt: 2 }} />
                <Typography className='poppins' sx={{
                    fontSize: "19px",
                    fontWeight: 300,
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#75767A",
                    mt: 2
                }}>
                    Download the caRent app from the play store to your
                    smartphone and book a car in a couple of seconds.
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                    <Box pr={4}>
                        <Image style={{ height: '40px', width: '40px' }} src={Shield} alt='Shield' />
                    </Box>
                    <Box>
                        <Typography className='poppins' sx={{
                            fontSize: "19px",
                            fontWeight: 600,
                            letterSpacing: "0em",
                            textAlign: "left",
                        }}>It’s Safe</Typography>
                        <Typography className='poppins' sx={{
                            fontSize: "18px",
                            fontWeight: 300,
                            letterSpacing: "0em",
                            textAlign: "left",
                            color: "#75767A"
                        }}>
                            We don’t take very personal info except what <br /> is required and your login credentials
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                    <Box pr={3}>
                        <Image style={{ height: '40px', width: '40px' }} src={Forward} alt='Shield' />
                    </Box>
                    <Box>
                        <Typography className='poppins' sx={{
                            fontSize: "19px",
                            fontWeight: 600,
                            letterSpacing: "0em",
                            textAlign: "left",
                        }}>It’s Fast</Typography>
                        <Typography className='poppins' sx={{
                            fontSize: "18px",
                            fontWeight: 300,
                            letterSpacing: "0em",
                            textAlign: "left",
                            color: "#75767A"
                        }}>
                            You can book a car simply with just your smart <br /> phone and your preference.
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                    <Box>
                        <Image style={{ height: '70px', width: '165px' }} src={Google} alt='Shield' />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default MidLayer

import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material'
import CarLogo from "../../assets/images/topcar.png";
import Image from 'next/image';
import { grey } from '@mui/material/colors';

const Banner = () => {
    return (
        <Box sx={{ paddingX: "100px" }} position="relative" >
            <Grid xs={12} container item px={6} >
                <Box bgcolor="#F2F2F2" sx={{ width: "200px", borderRadius: "5px", height: "340px" }} py={6} />
            </Grid>
            <Box sx={{
                bgcolor: "#F2F2F2",
                left: 0,
                right: 0,
                top: "20px",
                bottom: "20px",
                position: "absolute",
            }}>
                <Box sx={{
                    height: "100%",
                    position: "absolute",
                    left: "-60px",
                    width: "100%",
                    display: "flex",
                    pr: 6
                }}>
                    <Image
                        style={{
                            flex: 1,
                            height: "100%",
                            transform: 'rotateY(-180deg)',
                        }}
                        src={CarLogo} alt='Logo' />
                    <Box sx={{ flex: 3, display: "flex", pr: 6 }}>
                        <Box sx={{ flex: 2, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <Typography className='poppins' sx={{
                                fontSize: "50px",
                                fontWeight: 600,
                                lineHeight: "60px",
                                textAlign: "center",
                            }}>
                                Save big with the
                                cheap car rental
                            </Typography>
                            <Typography className='poppins' sx={{
                                fontSize: "20px",
                                fontWeight: 400,
                                mt: 2,
                                textAlign: "center",
                                color: "#75767A"

                            }}>
                                Just come, Rent and Drive with the cheap car rental
                            </Typography>
                        </Box>
                        <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
                            <Button className='poppins' variant='contained' size='large' sx={{ bgcolor: grey[900], px: 6, textTransform: "capitalize" }}>Rent Now</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Banner;

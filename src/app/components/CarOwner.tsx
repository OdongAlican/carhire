import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import CarOwnerTwo from '../../assets/images/CarOwnerTwo.png'
import { grey } from '@mui/material/colors';

const CarOwnerInformation = () => (
    <Box
        sx={{
            border: "1.5px solid #F2F2F2",
            width: "100%",
            borderRadius: "5px",
            p: 3,
        }}>
        <Box sx={{ display: "flex" }}>
            <Image style={{
                width: "100px", height: "100px", borderRadius: "50%"
            }} src={CarOwnerTwo} alt="user profile" />
            <Box sx={{
                flex: 1,
                px: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <Typography className='poppins'
                    sx={{
                        fontSize: "17px",
                        fontWeight: 500,
                        letterSpacing: "0em",
                        textAlign: "left",
                    }}>
                    Kafuma Henry
                </Typography>
                <Typography className='poppins'
                    sx={{
                        fontSize: "13px",
                        fontWeight: 400,
                        letterSpacing: "0em",
                        textAlign: "left",
                        color: "#8E8E8E"
                    }}>
                    Car renter
                </Typography>
                <Button
                    className='poppins'
                    variant='contained'
                    size='large'
                    sx={{ bgcolor: grey[900], px: 4, textTransform: "none" }}
                >Message Owner
                </Button>
            </Box>
        </Box>
        <Box sx={{
            flex: 1,
            py: 3,
            px: 3,
            display: "flex",
        }}>

            <Box sx={{ flex: 1 }}>
                <Typography className='poppins'
                    sx={{
                        fontSize: "16px",
                        fontWeight: 500,
                        letterSpacing: "0em",
                        textAlign: "left",
                    }}>
                    23
                </Typography>
                <Typography className='poppins'
                    sx={{
                        fontSize: "13px",
                        fontWeight: 400,
                        letterSpacing: "0em",
                        textAlign: "left",
                        color: "#8E8E8E"
                    }}>
                    Cars posted
                </Typography>
            </Box>
            <Box sx={{ flex: 1 }}>
                <Typography className='poppins'
                    sx={{
                        fontSize: "16px",
                        fontWeight: 500,
                        letterSpacing: "0em",
                        textAlign: "left",
                    }}>
                    16
                </Typography>
                <Typography className='poppins'
                    sx={{
                        fontSize: "13px",
                        fontWeight: 400,
                        letterSpacing: "0em",
                        textAlign: "left",
                        color: "#8E8E8E"
                    }}>
                    Cars rented
                </Typography>
            </Box>
            <Box sx={{ flex: 1 }}>
                <Typography className='poppins'
                    sx={{
                        fontSize: "16px",
                        fontWeight: 500,
                        letterSpacing: "0em",
                        textAlign: "left",
                    }}>
                    4
                </Typography>
                <Typography className='poppins'
                    sx={{
                        fontSize: "13px",
                        fontWeight: 400,
                        letterSpacing: "0em",
                        textAlign: "left",
                        color: "#8E8E8E"
                    }}>
                    Cars tested
                </Typography>
            </Box>
            <Box sx={{ flex: 1 }}>
                <Typography className='poppins'
                    sx={{
                        fontSize: "16px",
                        fontWeight: 500,
                        letterSpacing: "0em",
                        textAlign: "left",
                    }}>
                    13
                </Typography>
                <Typography className='poppins'
                    sx={{
                        fontSize: "13px",
                        fontWeight: 400,
                        letterSpacing: "0em",
                        textAlign: "left",
                        color: "#8E8E8E"
                    }}>
                    Reviews given
                </Typography>
            </Box>
        </Box>
    </Box>
)

const CarOwner = () => {
    return (
        <Grid container xs={12} item>
            <Grid item xs={7} py={5} pr={4}>
                <Typography className='poppins'
                    sx={{
                        fontSize: "20px",
                        fontWeight: 600,
                        lineHeight: "69px",
                        letterSpacing: "0em",
                        textAlign: "left",
                    }}>
                    Car Description
                </Typography>
                <Typography className='poppins'
                    sx={{
                        fontSize: "15px",
                        fontWeight: 300,
                        letterSpacing: "0em",
                        textAlign: "left",
                        mb: 2,
                        color: "#75767A"
                    }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </Typography>
                <Typography className='poppins'
                    sx={{
                        fontSize: "15px",
                        fontWeight: 300,
                        letterSpacing: "0em",
                        textAlign: "left",
                        mb: 2,
                        color: "#75767A"
                    }}>
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
                <Typography className='poppins'
                    sx={{
                        fontSize: "15px",
                        fontWeight: 300,
                        letterSpacing: "0em",
                        textAlign: "left",
                        mb: 2,
                        color: "#75767A"
                    }}>
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
            </Grid>
            <Grid
                container
                item
                xs={5}
                py={5}
                pr={0}>
                <Box sx={{ width: "100%" }}>
                    <Typography className='poppins'
                        sx={{
                            fontSize: "20px",
                            fontWeight: 600,
                            lineHeight: "69px",
                            letterSpacing: "0em",
                            textAlign: "left",
                        }}>
                        Car Owner
                    </Typography>
                    <CarOwnerInformation />
                    <Typography className='poppins'
                        sx={{
                            fontSize: "20px",
                            fontWeight: 600,
                            lineHeight: "69px",
                            letterSpacing: "0em",
                            textAlign: "left",
                        }}>
                        Car Owner
                    </Typography>
                    <CarOwnerInformation />
                </Box>
            </Grid>
        </Grid >
    )
}

export default CarOwner

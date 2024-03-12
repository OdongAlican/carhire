import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { IoIosArrowForward } from "react-icons/io";
import Image from 'next/image';
import PopularOne from "../../assets/images/popularOne.png";
import PopularTwo from "../../assets/images/PopularTwo.png";

interface IPopularItem {
    header: string;
    model: string;
    price: string;
    image: any;
    index: string | number
}

const PopularItem = ({ header, model, price, image, index }: IPopularItem) => (
    <Grid sx={{ borderRadius: "5px" }} item xs={2.4}>
        <Box sx={{
            border: "1px solid #F2F2F2",
            bgcolor: `${index === 0 ? "#F2F2F2" : ""}`,
            borderRadius: "5px",
            padding: 3
        }}>
            <Image style={{ width: "100%", height: "30%" }} src={image} alt='First Popular' />
            <Typography className='poppins' sx={{
                fontSize: "13px",
                fontWeight: 300,
                lineHeight: "20px",
                letterSpacing: "0em",
                textAlign: "left",
            }}>{header}</Typography>
            <Typography className='poppins' sx={{
                fontSize: "14px",
                fontWeight: 600,
                lineHeight: "25px",
                letterSpacing: "0em",
                textAlign: "left",

            }}>{model}</Typography>
            <Typography className='poppins' sx={{
                fontSize: "13px",
                fontWeight: 300,
                lineHeight: "20px",
                letterSpacing: "0em",
                textAlign: "left",
            }}>{price}</Typography>
        </Box>
    </Grid>
)

const Popular = () => {
    const cars = [
        { name: "Audi", model: "Audi Model S black", price: "Shs 300,000 / day", image: PopularOne },
        { name: "Mercedez Benz", model: "Mercedez Benz", price: "Shs 400,000 / day", image: PopularTwo },
        { name: "Audi", model: "Audi Model S black", price: "Shs 300,000 / day", image: PopularOne },
        { name: "Mercedez Benz", model: "Mercedez Benz", price: "Shs 400,000 / day", image: PopularTwo },
        { name: "Audi", model: "Audi Model S black", price: "Shs 300,000 / day", image: PopularOne }
    ]
    return (
        <Grid container xs={12} padding={6} pb={0}>
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                <Typography className='poppins' sx={{
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "44px",
                    letterSpacing: "0em",
                    textAlign: "left",
                }}>Most Popular</Typography>
                <Typography className='poppins' sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    lineHeight: "31px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    color: "#B3B3B3",
                    display: "flex",
                    alignItems: "center"
                }}>
                    View all
                    <IoIosArrowForward />
                </Typography>
            </Box>
            <Grid container item xs={12} py={0} spacing={2} >
                {cars.map((car, index) => (
                    <PopularItem
                        key={index}
                        index={index}
                        header={car.name}
                        model={car.model}
                        price={car.price}
                        image={car.image} />
                ))}
            </Grid>
        </Grid>
    )
}

export default Popular

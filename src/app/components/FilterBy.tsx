import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import PopularOne from "../../assets/images/popularOne.png";
import PopularTwo from "../../assets/images/PopularTwo.png";
import Image from 'next/image';

interface IPopularItem {
    header: string;
    model: string;
    price: string;
    image: any;
    index: string | number
}

const PopularItem = ({ header, model, price, image, index }: IPopularItem) => (
    <Grid sx={{ borderRadius: "5px" }} item xs={3}>
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
                fontWeight: 400,
                lineHeight: "20px",
                letterSpacing: "0em",
                textAlign: "left",
            }}>{price}</Typography>
        </Box>
    </Grid>
)

const FilterBy = () => {
    const cars = [
        { name: "Audi", model: "Audi Model S black", price: "Shs 300,000 / day", image: PopularOne },
        { name: "Mercedez Benz", model: "Mercedez Benz", price: "Shs 400,000 / day", image: PopularTwo },
        { name: "Audi", model: "Audi Model S black", price: "Shs 300,000 / day", image: PopularOne },
        { name: "Mercedez Benz", model: "Mercedez Benz", price: "Shs 400,000 / day", image: PopularTwo },
        { name: "Audi", model: "Audi Model S black", price: "Shs 300,000 / day", image: PopularOne },
        { name: "Mercedez Benz", model: "Mercedez Benz", price: "Shs 400,000 / day", image: PopularTwo },
        { name: "Audi", model: "Audi Model S black", price: "Shs 300,000 / day", image: PopularOne },
        { name: "Mercedez Benz", model: "Mercedez Benz", price: "Shs 400,000 / day", image: PopularTwo },
        { name: "Audi", model: "Audi Model S black", price: "Shs 300,000 / day", image: PopularOne },
        { name: "Mercedez Benz", model: "Mercedez Benz", price: "Shs 400,000 / day", image: PopularTwo },
        { name: "Audi", model: "Audi Model S black", price: "Shs 300,000 / day", image: PopularOne },
        { name: "Mercedez Benz", model: "Mercedez Benz", price: "Shs 400,000 / day", image: PopularTwo },
        { name: "Audi", model: "Audi Model S black", price: "Shs 300,000 / day", image: PopularOne }
    ]

    return (

        <Grid container xs={12} py={6} mb={6} item>
            <Grid container item xs={12} py={0} spacing={2} >
                <Grid item xs={2.4}>
                    Left hand side
                </Grid>
                <Grid container item xs={9.6} spacing={2}>
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
        </Grid>
    )
}

export default FilterBy

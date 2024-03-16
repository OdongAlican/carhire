import {
    Box,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Grid,
    Typography
} from '@mui/material'
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

interface ICheckboxComponent {
    defaultChecked: boolean
    text: string
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

const CheckboxComponent = ({ defaultChecked, text }: ICheckboxComponent) => {
    return (
        <FormControlLabel
            control={
                <Checkbox sx={{
                    cursor: "pointer",
                    color: "#F2F2F2",
                    my: 0,
                    '&.Mui-checked': { color: "#000" }
                }} defaultChecked={defaultChecked} />
            }
            label={<Typography
                className='poppins'
                sx={{ color: '#75767A', fontSize: '14px' }}
            >{text}</Typography>
            }
        />
    )
}

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
        { name: "Audi", model: "Audi Model S black", price: "Shs 300,000 / day", image: PopularOne },
        { name: "Mercedez Benz", model: "Mercedez Benz", price: "Shs 400,000 / day", image: PopularTwo },
        { name: "Audi", model: "Audi Model S black", price: "Shs 300,000 / day", image: PopularOne },
        { name: "Mercedez Benz", model: "Mercedez Benz", price: "Shs 400,000 / day", image: PopularTwo },
        { name: "Audi", model: "Audi Model S black", price: "Shs 300,000 / day", image: PopularOne },
        { name: "Mercedez Benz", model: "Mercedez Benz", price: "Shs 400,000 / day", image: PopularTwo }
    ]

    return (

        <Grid container xs={12} py={6} mb={6} item>
            <Grid container item xs={12} py={0} spacing={2} >
                <Grid
                    container
                    item xs={2.4}>
                    <Grid sx={{ borderRadius: "5px" }} item xs={12}>
                        <Box sx={{
                            border: "1px solid #F2F2F2",
                            borderRadius: "5px",
                            padding: 3
                        }}>
                            <Typography className='poppins' sx={{
                                fontSize: "16px",
                                fontWeight: 600,
                                lineHeight: "25px",
                                letterSpacing: "0em",
                                borderBottom: "1.5px solid #F2F2F2",
                                pb: 2
                            }}>Filter By:</Typography>
                            <Typography className='poppins'
                                sx={{
                                    mt: 2,
                                    fontSize: "13px",
                                    fontWeight: 400,
                                    lineHeight: "20px",
                                    letterSpacing: "0em",
                                    textAlign: "left",
                                }}>Car Type</Typography>
                            <Box>
                                <FormGroup>
                                    <CheckboxComponent defaultChecked={true} text="Coupe(25)" />
                                    <CheckboxComponent defaultChecked={true} text="Hatchback" />
                                    <CheckboxComponent defaultChecked={true} text="Sedan" />
                                    <CheckboxComponent defaultChecked={false} text="MPV(28)" />
                                    <CheckboxComponent defaultChecked={false} text="SUV(11)" />
                                </FormGroup>
                            </Box>
                            <Typography className='poppins'
                                sx={{
                                    mt: 2,
                                    fontSize: "13px",
                                    fontWeight: 400,
                                    lineHeight: "20px",
                                    letterSpacing: "0em",
                                    textAlign: "left",
                                }}>Car Capacity</Typography>
                            <Box>
                                <FormGroup>
                                    <CheckboxComponent defaultChecked={true} text="2 - 5(14)" />
                                    <CheckboxComponent defaultChecked={false} text="6 or more (2)" />
                                </FormGroup>
                            </Box>
                            <Typography className='poppins'
                                sx={{
                                    mt: 2,
                                    fontSize: "13px",
                                    fontWeight: 400,
                                    lineHeight: "20px",
                                    letterSpacing: "0em",
                                    textAlign: "left",
                                }}>Car Recommends</Typography>
                            <Box>
                                <FormGroup>
                                    <CheckboxComponent defaultChecked={true} text="70% & up(15)" />
                                    <CheckboxComponent defaultChecked={false} text="40% & up (14)" />
                                </FormGroup>
                            </Box>
                            <Typography className='poppins'
                                sx={{
                                    mt: 2,
                                    fontSize: "13px",
                                    fontWeight: 400,
                                    lineHeight: "20px",
                                    letterSpacing: "0em",
                                    textAlign: "left",
                                }}>Car Type</Typography>
                            <Box>
                                <FormGroup>
                                    <CheckboxComponent defaultChecked={true} text="Coupe(25)" />
                                    <CheckboxComponent defaultChecked={true} text="Hatchback" />
                                    <CheckboxComponent defaultChecked={true} text="Sedan" />
                                    <CheckboxComponent defaultChecked={false} text="MPV(28)" />
                                    <CheckboxComponent defaultChecked={false} text="SUV(11)" />
                                </FormGroup>
                            </Box>
                            <Typography className='poppins'
                                sx={{
                                    mt: 2,
                                    fontSize: "13px",
                                    fontWeight: 400,
                                    lineHeight: "20px",
                                    letterSpacing: "0em",
                                    textAlign: "left",
                                }}>Car Capacity</Typography>
                            <Box>
                                <FormGroup>
                                    <CheckboxComponent defaultChecked={true} text="2 - 5(14)" />
                                </FormGroup>
                            </Box>
                        </Box>
                    </Grid>
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

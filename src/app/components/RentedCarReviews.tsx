"use client"
import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image';
import SoundImage from "../../assets/images/soundTop.png";
import ReviewerOne from "../../assets/images/ReviewerOne.png"
import ReviewerTwo from "../../assets/images/ReviewerTwo.png"
import ReviewerThree from "../../assets/images/ReviewerThree.png"
import Slider, { Settings } from 'react-slick';

interface IReview {
    text: string;
    image: any;
    name: string;
}

const Review = ({ text, image, name }: IReview) => (
    <Box className="slide-two" sx={{ borderRadius: "5px", width: "100%", mb: 3 }}>
        <Box>
            <Typography className='poppins' sx={{
                fontSize: "15px",
                fontWeight: 300,
                textAlign: "left",
                color: "#75767A"
            }}>
                {text}
            </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mt: 2, justifyContent: "space-between" }}>
            <Image style={{ height: "30px", width: "30px" }} src={SoundImage} alt='User' />
            <Typography className='poppins' sx={{
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "25px",
                letterSpacing: "0em",
                textAlign: "left",

            }}>{name}</Typography>
            <Image style={{ height: "40px", width: "40px", borderRadius: "50%" }} src={image} alt='User' />
        </Box>
    </Box>
)

const RentedCarReviews = () => {
    const settings: Settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        centerMode: true,
        autoplay: true,
        centerPadding: "0px",
        dots: true,
        cssEase: "linear"
    }

    const reviews: Array<IReview> = [
        {
            text: `
            The end in mind at carent is a multinational service that transforms needs into great enjoyment. This car is amazing and it is so smooth in driving.
            `,
            image: ReviewerOne,
            name: "David Luzuki"
        },
        {
            text: `
            Carent has an array of experts with multifaceted skills.
            From technology to car repairers to business to creative arts.
            Flexibility and freedom of expression is the magic we progress every day.
            `,
            image: ReviewerTwo,
            name: "Marie Sashah"
        },
        {
            text: `
            To be Africa’s number one creative,
            innovative and design hub,
            fashioning sustainable models for startup excellence.
            `,
            image: ReviewerThree,
            name: "Danny Selahh"
        },
        {
            text: `
            The end in mind at carent is a multinational
            service that transforms needs into great enjoyment.
            This car is amazing and it is so smooth in driving.
            `,
            image: ReviewerOne,
            name: "David Luzuki"
        }, {
            text: `
            Carent has an array of experts with multifaceted skills.
            From technology to car repairers to business to creative arts.
            Flexibility and freedom of expression is the magic we progress every day.
            `,
            image: ReviewerTwo,
            name: "Marie Sashah"
        },
        {
            text: `
            To be Africa’s number one creative,
            innovative and design hub,
            fashioning sustainable models for startup excellence.
            `,
            image: ReviewerThree,
            name: "Danny Selahh"
        },
        {
            text: `
            The end in mind at carent is a multinational
            service that transforms needs into great enjoyment.
            This car is amazing and it is so smooth in driving.
            `,
            image: ReviewerOne,
            name: "David Luzuki"
        },
    ]
    return (
        <Grid container xs={12} py={6} item>
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                <Typography className='poppins' sx={{
                    fontSize: "20px",
                    fontWeight: 600,
                    lineHeight: "44px",
                    letterSpacing: "0em",
                    textAlign: "left",
                }}>Rented Car Reviews</Typography>
            </Box>
            <Grid item xs={12}>
                <Slider {...settings}>
                    {reviews.map((person, index) => {
                        return (
                            <Review
                                text={person.text}
                                image={person.image}
                                name={person.name}
                                key={index} />
                        )
                    })}
                </Slider>
            </Grid>
        </Grid>
    )
}

export default RentedCarReviews

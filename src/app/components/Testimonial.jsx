'use client';
import React, { useState } from 'react'
import { Box, Card, Grid, Typography } from '@mui/material'
import Slider from "react-slick";
import ProfileOne from '../../assets/images/ProfileOne.jpeg';
import ProfileTwo from '../../assets/images/ProfileTwo.jpeg';
import ProfileThree from '../../assets/images/ProfileThree.jpeg';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import SoundTop from '../../assets/images/soundTop.png';
import SoundBottom from '../../assets/images/soundBottom.png';

const people = [
    {
        image: ProfileOne,
        name: "Mark Ayebare",
        stars: () => (
            <Box sx={{ display: "flex" }}>
                <IoIosStar style={{ color: "#FFC107", width: "55px", height: "55px" }} />
                <IoIosStar style={{ color: "#FFC107", width: "55px", height: "55px" }} />
                <IoIosStar style={{ color: "#FFC107", width: "55px", height: "55px" }} />
                <IoIosStar style={{ color: "#FFC107", width: "55px", height: "55px" }} />
                <IoIosStarHalf style={{ color: "#FFC107", width: "55px", height: "55px" }} />
            </ Box>
        ),
        comment: `
        I am really impressed by the quality of Carent. 
        It has given me the best renting management 
        service I can ever ask for. Clients have really 
        come in and created a market place for me and for 
        that I am very happy with what I do. It’s really 
        amazing at how it gives clients all the options 
        to choose from and rent easily.
        `
    },
    {
        image: ProfileTwo,
        name: "Arthor Nangai",
        stars: () => (
            <Box sx={{ display: "flex" }}>
                <IoIosStar style={{ color: "#FFC107", width: "55px", height: "55px" }} />
                <IoIosStar style={{ color: "#FFC107", width: "55px", height: "55px" }} />
                <IoIosStar style={{ color: "#FFC107", width: "55px", height: "55px" }} />
                <IoIosStar style={{ color: "#FFC107", width: "55px", height: "55px" }} />
                <IoIosStar style={{ color: "#FFC107", width: "55px", height: "55px" }} />
            </ Box>
        ),
        comment: `
        Second I am really impressed by the quality of Carent. 
        It has given me the best renting management 
        service I can ever ask for. Clients have really 
        come in and created a market place for me and for 
        that I am very happy with what I do. It’s really 
        amazing at how it gives clients all the options 
        to choose from and rent easily.
        `
    },
    {
        image: ProfileThree,
        name: "Joshua",
        stars: () => (
            <Box sx={{ display: "flex" }}>
                <IoIosStar style={{ color: "#FFC107", width: "55px", height: "55px" }} />
                <IoIosStar style={{ color: "#FFC107", width: "55px", height: "55px" }} />
                <IoIosStar style={{ color: "#FFC107", width: "55px", height: "55px" }} />
                <IoIosStarHalf style={{ color: "#FFC107", width: "55px", height: "55px" }} />
                <IoIosStarHalf style={{ color: "#FFC107", width: "55px", height: "55px" }} />
            </ Box>
        ),
        comment: `
        Third I am really impressed by the quality of Carent. 
        It has given me the best renting management 
        service I can ever ask for. Clients have really 
        come in and created a market place for me and for 
        that I am very happy with what I do. It’s really 
        amazing at how it gives clients all the options 
        to choose from and rent easily.
        `
    }]

const style = {
    boxShadow: 2,
    padding: 6,
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%"
}

const NextArrow = ({ onClick }) => (
    <Card onClick={onClick} style={{ ...style }} component="div" className='arrow next'>
        <IoIosArrowForward style={{ height: "30px", width: "30px" }} />
    </Card>
);
const PrevArrow = ({ onClick }) => (
    <Card onClick={onClick} style={{ ...style }} component="div" className='arrow prev'>
        <IoIosArrowBack style={{ height: "30px", width: "30px" }} />
    </Card>
);

const Testimonial = () => {
    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: "2px",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next)
    }

    return (
        <React.Fragment>
            <Grid
                container
                xs={12}
                px={6}
                justifyContent="center"
                item>
                <Grid
                    item
                    xs={12}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }} >
                    <Typography className='poppins' sx={{
                        textTransform: 'uppercase',
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "24px",
                        letterSpacing: "0em",
                        textAlign: "center",
                        color: "#75767A"
                    }}>TESTIMONIALS</Typography>
                    <Typography className='poppins' sx={{
                        fontSize: "22px",
                        fontWeight: 700,
                        lineHeight: "46px",
                        letterSpacing: "0em",
                        textAlign: "center"
                    }}>Satisfied clients are saying</Typography>
                    <Box sx={{
                        width: "70px",
                        height: "2px",
                        bgcolor: "#CBCBCD",
                        mt: 1
                    }} />
                </Grid>
                <Grid item xs={4} py={4}>
                    <Box>
                        <Slider {...settings}>
                            {people.map((person, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <Box
                                            component='div'
                                            className={`${index === (
                                                imageIndex === 0 ? imageIndex + 1 :
                                                    imageIndex === 1 ? imageIndex + 1 :
                                                        0
                                            ) ? "slide activeSlide" : "slide"}`}>
                                            <Image src={person.image} alt='profile' />
                                        </Box>
                                        {index === (
                                                imageIndex === 0 ? imageIndex + 1 :
                                                    imageIndex === 1 ? imageIndex + 1 :
                                                        0
                                            ) && <Typography fontWeight={500} className='poppins' pt={2} textAlign='center'>{person.name}</Typography>}
                                        {index === (
                                                imageIndex === 0 ? imageIndex + 1 :
                                                    imageIndex === 1 ? imageIndex + 1 :
                                                        0
                                            ) && person.stars()}
                                    </React.Fragment>
                                )
                            })}
                        </Slider>
                    </Box>
                </Grid>
            </Grid>
            <Grid
                container
                xs={12}
                px={6}
                item>
                <Box px={6} sx={{ width: "100%" }}>
                    <Box px={6}>
                        <Image style={{ height: "30px", width: "30px" }} src={SoundTop} alt='speaking' />
                    </Box>
                    <Typography className='poppins' fontWeight={300} sx={{ px: 6, color: "#75767A", textAlign: "center", my: 1 }}>
                        {
                            imageIndex === 0 ? (people[1].comment) :
                                imageIndex === 1 ? (people[2].comment) :
                                    people[0].comment
                        }
                    </Typography>
                    <Box px={6} width="100%" display="flex" justifyContent="end">
                        <Image style={{ height: "32px", width: "32px" }} src={SoundBottom} alt='speaking' />
                    </Box>
                </Box>
            </Grid>
        </React.Fragment>
    )
}

export default Testimonial

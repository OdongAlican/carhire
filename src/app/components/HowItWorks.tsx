import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import StepOne from '../../assets/images/StepOne.png';
import StepTwo from '../../assets/images/StepTwo.png';
import StepThree from '../../assets/images/StepThree.png';
import StepFour from '../../assets/images/StepFour.png';
import Image from 'next/image';

interface IStep {
    step: {
        id: number
        Logo: React.ElementType,
        header?: string,
        text?: string
    }
}

export const Step = ({ step: { Logo, header, text, id } }: IStep) => (
    <Grid
        item
        display="flex"
        alignItems="center"
        flexDirection="column"
        sx={{
        }}
        height="100%"
        xs={12}>
        <Box sx={{
            p: 2,
            bgcolor: `${id % 2 !== 0 ? "#F2F2F2" : ""}`,
            borderRadius: "5px 10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            flexDirection: "column"
        }}>
            <Box height={`${id % 2 !== 0 ? "100%" : "50%"}`}
                sx={{
                    display: "flex", alignItems: "center"
                }}>
                <Logo />
            </Box>
            <Box height="50%" />
        </Box>
        <Typography className='poppins' sx={{
            fontSize: "15px",
            fontWeight: 600,
            lineHeight: "45px",
            letterSpacing: "0em",
            textAlign: "center",

        }}>{header}</Typography>
        <Typography className='poppins' sx={{
            fontSize: "14px",
            fontWeight: "400px",
            letterSpacing: "0em",
            textAlign: "center",
            color: "#75767A"

        }}>{text}</Typography>
    </Grid>
)

const HowItWorks = () => {
    const steps: Array<{
        Logo: React.FunctionComponent<{}>,
        header?: string,
        text?: string,
        id: number
    }> = [
            {
                id: 1,
                Logo: () => (<Image style={{ width: "60px", height: "60px" }} src={StepOne} alt='step one' />)
                , header: "Select the car",
                text: "Select a car of your choice out of all the options"
            }, {
                id: 2,
                Logo: () => (
                    <svg width="103" height="17" viewBox="0 0 103 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.28222 15.1465C17.9489 5.22584 61.2822 -8.66304 101.282 15.1465" stroke="black" strokeWidth="3" strokeDasharray="5 5" />
                    </svg>
                )
            },
            {
                id: 3,
                Logo: () => (<Image style={{ width: "60px", height: "60px" }} src={StepTwo} alt='step two' />),
                header: "Contact Rentee",
                text: "You can call the provide number of the Rentee or email them"
            }, {
                id: 4,
                Logo: () => (
                    <svg width="102" height="18" viewBox="0 0 102 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100.972 1.85719C84.5441 12.1682 41.5504 27.0753 0.999966 4.21588" stroke="black" strokeWidth="3" strokeDasharray="5 5" />
                    </svg>
                )
            },
            {
                id: 5,
                Logo: () => (<Image style={{ width: "60px", height: "60px" }} src={StepThree} alt='step three' />),
                header: "Make Payment",
                text: "We provide a variety of payment methods that you can choose from"
            }, {
                id: 6,
                Logo: () => (
                    <svg width="103" height="17" viewBox="0 0 103 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.28222 15.1465C17.9489 5.22584 61.2822 -8.66304 101.282 15.1465" stroke="black" strokeWidth="3" strokeDasharray="5 5" />
                    </svg>
                )
            },
            {
                id: 7,
                Logo: () => (<Image style={{ width: "60px", height: "60px" }} src={StepFour} alt='step four' />),
                header: "Pick up the Car",
                text: "You can go to the car location and pick it up from the Rentee"
            }
        ]
    return (
        <Grid container xs={12} padding={6}>
            <Grid item sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} xs={12}>
                <Typography className='poppins' sx={{
                    textTransform: 'uppercase',
                    fontSize: "14px",
                    fontWeight: 500,
                    lineHeight: "24px",
                    letterSpacing: "0em",
                    textAlign: "center",
                    color: "#75767A"
                }}>How it works</Typography>
                <Typography className='poppins' sx={{
                    fontSize: "22px",
                    fontWeight: 700,
                    lineHeight: "46px",
                    letterSpacing: "0em",
                    textAlign: "center"
                }}>Carent takes only 4 steps</Typography>
                <Box sx={{
                    width: "70px",
                    height: "2px",
                    bgcolor: "#CBCBCD",
                    mt: 1
                }} />
            </Grid>
            <Grid container item xs={12} py={0} px={8} paddingY={6}>
                {steps.map((step) => (
                    <Grid key={step.id} item xs={1.7}>
                        <Step step={step} />
                    </Grid>))}
            </Grid>
        </Grid>
    )
}

export default HowItWorks;

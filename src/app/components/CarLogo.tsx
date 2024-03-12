import { Grid } from '@mui/material';
import React from 'react';
import Honda from '../../assets/images/honda.png';
import Audi from '../../assets/images/audi.png';
import Mercedez from '../../assets/images/mercedez.png';
import Toyota from '../../assets/images/toyota.png';
import Nissan from '../../assets/images/nissan.png';
import Image from 'next/image';

interface ISingleCarLogo {
    logo: any,
    index: number | string
}

const SingleCarLogo = ({ logo, index }: ISingleCarLogo) => (
    <Grid
        border="1px solid #F2F2F2"
        bgcolor={`${index === 0 ? "#F2F2F2" : ""}`}
        p={2}
        borderRadius="5px"
        item
        xs={12}>
        <Image style={{ height: "45px", width: "100%" }} src={logo} alt='Logo' />
    </Grid>
);

const CarLogo = () => {
    const logos = [Nissan, Toyota, Mercedez, Audi, Toyota, Mercedez, Honda, Audi, Honda, Nissan]
    return (
        <Grid container xs={12} padding={6}>
            <Grid container item xs={12} py={0} spacing={2}>
                {logos.map((logo, index) => (
                    <Grid key={index} item xs={1.2}>
                        <SingleCarLogo index={index} logo={logo} />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

export default CarLogo;

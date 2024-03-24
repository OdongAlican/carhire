'use client'
import React from 'react'
import {
    Button,
    FormControl,
    Grid,
    InputBase,
    NativeSelect,
    Typography
} from '@mui/material'
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

export const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: 'none',
        background: "#F2F2F2",
        fontSize: 14,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
        },
    },
}));

const MainIntro = () => {
    const [age, setAge] = React.useState('');
    const handleChange = (event: { target: { value: string } }) => {
        setAge(event.target.value);
    };
    return (
        <Grid container xs={12} item>
            <Grid item xs={4} my={6} py={4}>
                <Typography className='poppins' sx={{
                    fontSize: "25px",
                    fontWeight: 700,
                    lineHeight: "46px",
                    letterSpacing: "0em",
                }}>Rent a car in easy steps</Typography>
                <Typography
                    className='poppins'
                    sx={{
                        fontSize: "17px",
                        fontWeight: 300,
                        lineHeight: "30px",
                        letterSpacing: "0em",
                        textAlign: "left",
                        color: "#75767A",
                        mt: 3
                    }}>
                    Renting a car creates freedom for
                    you and we will help you find the
                    best car for you at a great price
                </Typography>
            </Grid>
            <Grid container item xs={8} my={6} p={4} pr={0}>
                <Grid
                    xs={12}
                    container item
                    spacing={2}
                    p={3}
                    sx={{
                        border: "1.5px solid #F2F2F2",
                        width: "100%",
                        borderRadius: "5px"
                    }}>
                    <Grid item xs={6}>
                        <FormControl fullWidth variant="standard">
                            <Typography className='poppins' sx={{
                                fontSize: "14px",
                                mb: 1
                            }}>Vehicle Type</Typography>
                            <NativeSelect
                                id="demo-customized-select-native"
                                value={age}
                                onChange={handleChange}
                                input={<BootstrapInput />}
                            >
                                <option value={10}>HSR R18 Type-R</option>
                                <option value={20}>HSR R18 Type-V</option>
                                <option value={30}>HSR R98 Type-X</option>
                            </NativeSelect>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth variant="standard">
                            <Typography className='poppins' sx={{
                                fontSize: "14px",
                                mb: 1
                            }}>Vehicle Model</Typography>
                            <NativeSelect
                                id="demo-customized-select-native"
                                value={age}
                                onChange={handleChange}
                                input={<BootstrapInput />}
                            >
                                <option value={10}>HSR R18 Type-R</option>
                                <option value={20}>HSR R18 Type-V</option>
                                <option value={30}>HSR R98 Type-X</option>
                            </NativeSelect>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth variant="standard">
                            <Typography className='poppins' sx={{
                                fontSize: "14px",
                                mb: 1
                            }}>Rent Price</Typography>
                            <NativeSelect
                                id="demo-customized-select-native"
                                value={age}
                                onChange={handleChange}
                                input={<BootstrapInput />}
                            >
                                <option value={5}>Shs 300,000 - 200,000</option>
                                <option value={4}>Shs 500,000 - 400,000</option>
                                <option value={3}>Shs 700,000 - 600,000</option>
                            </NativeSelect>
                        </FormControl>
                    </Grid>
                    <Grid item container xs={6}>
                        <Grid item xs={6}>
                            <FormControl fullWidth variant="standard">
                                <Typography className='poppins' sx={{
                                    fontSize: "14px",
                                    mb: 1
                                }}>Rent Duration (Days)</Typography>
                                <NativeSelect
                                    id="demo-customized-select-native"
                                    value={age}
                                    onChange={handleChange}
                                    input={<BootstrapInput />}
                                >
                                    <option value={10}>5</option>
                                    <option value={20}>4</option>
                                    <option value={30}>3</option>
                                </NativeSelect>
                            </FormControl>
                        </Grid>
                        <Grid sx={{
                            display: "flex",
                            alignItems: "end",
                            justifyContent: "end"
                        }} item xs={6}>
                            <Button
                                className='poppins'
                                variant='contained'
                                size='large'
                                sx={{ bgcolor: grey[900], px: 4, textTransform: "capitalize" }}
                            >Search Car
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    )
}

export default MainIntro;

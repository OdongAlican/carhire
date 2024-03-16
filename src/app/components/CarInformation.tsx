"use client"
import React from 'react'
import {
    Box,
    Button,
    FormControl,
    Grid,
    NativeSelect,
    Typography
} from '@mui/material';
import { BootstrapInput } from './MainIntro';
import { grey } from '@mui/material/colors';
import Image from 'next/image';
import CarLogo from '../../assets/images/Rav4.png';
import CarLogoTwo from '../../assets/images/Rav4One.png';
import CarLogoThree from '../../assets/images/Rav4Three.png';

const CarInformation = () => {
    const [age, setAge] = React.useState('');
    const handleChange = (event: { target: { value: string } }) => {
        setAge(event.target.value);
    };
    return (
        <Grid container xs={12} item>
            <Grid item xs={7}>
                <Box
                    sx={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                        position: "relative",
                    }}>
                    <Image style={{
                        width: "80%",
                        height: "80%",
                        left: 0,
                        top: 20,
                        position: "absolute",
                    }} src={CarLogo} alt="Description" />
                    <Box sx={{ bgcolor: "#F2F2F2", height: "75%", width: "25%", borderRadius: "5px" }} />
                    <Box sx={{ width: "50%", height: "10%", mt: 1 }}>
                        <Grid container xs={12} spacing={2} item>
                            <Grid item xs={4}>
                                <Image style={{ width: "100px", height: "70px"}} src={CarLogoTwo} alt='current car' />
                            </Grid>
                            <Grid item xs={4} >
                                <Image style={{ width: "100px", height: "70px", border:"1.5px solid #F2F2F2"}} src={CarLogo} alt='current car' />
                            </Grid>
                            <Grid item xs={4}>
                                <Image style={{ width: "100px", height: "70px"}} src={CarLogoThree} alt='current car' />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Grid>
            <Grid
                container
                item
                xs={5}
                py={5}
                pr={0}>
                <Grid spacing={2} xs={12} item>
                    <Typography className='poppins'
                        sx={{
                            fontSize: "28px",
                            fontWeight: 700,
                            lineHeight: "69px",
                            letterSpacing: "0em",
                            textAlign: "left",
                        }}>
                        Toyota RAV4 Hybrid XSE
                    </Typography>
                    <Typography className='poppins'
                        sx={{
                            mb: 2,
                            fontSize: "14px",
                            fontWeight: 500,
                            letterSpacing: "0em",
                            textAlign: "left",
                            color: "#75767A"
                        }}>
                        Toyota
                    </Typography>
                </Grid>
                <Grid
                    xs={12}
                    container item
                    p={3}
                    sx={{
                        border: "1.5px solid #F2F2F2",
                        width: "100%",
                        borderRadius: "5px"
                    }}>
                    <Grid item xs={12} sx={{ mb: 2 }}>
                        <FormControl fullWidth variant="standard">
                            <Typography className='poppins'
                                sx={{
                                    fontSize: "14px",
                                    display: "flex",
                                    alignItems: "center",
                                    fontWeight: 500
                                }}>
                                Total
                                <Typography className='poppins'
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: "22px",
                                        px: 2
                                    }}>
                                    Shs 350,000
                                </Typography>
                                <Typography className='poppins'
                                    sx={{
                                        fontWeight: 300,
                                        fontSize: "22px",
                                    }}> / day
                                </Typography>
                            </Typography>
                        </FormControl>
                    </Grid>
                    <Grid mb={2} item xs={12}>
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
                    <Grid mb={2} container item xs={12}>
                        <Grid item xs={8}>
                            <FormControl fullWidth variant="standard">
                                <Typography className='poppins' sx={{
                                    fontSize: "14px",
                                    mb: 1
                                }}>Tyre Type</Typography>
                                <NativeSelect
                                    id="demo-customized-select-native"
                                    value={age}
                                    onChange={handleChange}
                                    input={<BootstrapInput />}
                                >
                                    <option value={5}>GT Radial 185 65 R15</option>
                                    <option value={4}>GT Radial 186 65 R16</option>
                                    <option value={3}>GT Radial 188 65 R18</option>
                                </NativeSelect>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4} px={2}>
                            <FormControl fullWidth variant="standard">
                                <Typography className='poppins' sx={{
                                    fontSize: "14px",
                                    display: "flex",
                                    flexDirection: "column",
                                    mb: 1
                                }}>Charge Type</Typography>
                                <Box sx={{
                                    pt: 1,
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between"
                                }}>
                                    <svg width="36" height="31" viewBox="0 0 46 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M16.3246 1.08976C11.2733 2.86883 7.41223 5.67555 4.92364 9.37834C-0.469339 17.4024 -0.469339 26.377 4.92364 34.4011C7.33815 37.9937 12.0658 41.5326 13.6501 40.9334C15.4503 40.2522 14.8647 38.9607 11.1923 35.508C6.7644 31.3458 4.93343 27.2841 4.93343 21.6232C4.93343 11.4433 12.6004 4.01218 23.1034 4.01218C30.5915 4.01218 36.2382 7.38024 39.4717 13.7761C42.9548 20.6644 41.3509 30.5151 36.2472 33.5822C33.0738 35.4887 29.3462 35.4047 27.418 33.3824C25.4997 31.3692 25.5067 30.6529 27.4537 29.8016C30.3259 28.5459 32.1884 24.8521 32.1884 20.4103C32.1884 16.839 32.029 16.3796 30.7907 16.3796C29.6655 16.3796 29.393 15.9202 29.393 14.0254C29.393 10.8192 28.7794 9.49199 27.2964 9.49199C25.8135 9.49199 25.1999 10.8192 25.1999 14.0254C25.1999 16.1819 25.0238 16.3796 23.1034 16.3796C21.183 16.3796 21.0068 16.1819 21.0068 14.0254C21.0068 10.8192 20.3933 9.49199 18.9103 9.49199C17.4274 9.49199 16.8138 10.8192 16.8138 14.0254C16.8138 15.9202 16.5412 16.3796 15.4161 16.3796C14.1777 16.3796 14.0184 16.839 14.0184 20.4103C14.0184 25.1924 15.9123 28.5652 19.4673 30.1156C20.7769 30.6866 21.9181 31.7824 22.1495 32.6909C22.7246 34.9501 26.8408 38.2734 29.7228 38.8065C34.9565 39.7742 40.2628 36.8345 43.1714 31.3568C44.7927 28.3035 45.0918 26.8915 45.103 22.2341C45.1184 15.7005 43.1113 10.6608 38.8043 6.41528C33.1199 0.813563 23.5485 -1.45454 16.3246 1.08976Z" fill="black" />
                                    </svg>
                                    <svg width="32" height="31" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.517198 1.6905C-0.419799 3.74739 -0.284476 3.83911 6.59646 5.80748C9.50173 6.63871 12.8226 8.02985 13.977 8.89763C16.0023 10.4215 16.1191 10.4369 17.344 9.32799C19.0494 7.7842 18.9794 7.52765 16.2877 5.47525C14.5786 4.17134 3.69953 0.197383 1.44329 0.0517915C1.34709 0.0460191 0.930862 0.782958 0.517198 1.6905ZM24.5501 9.78144C23.2277 11.1033 23.0789 11.1219 21.9521 10.1021C20.4372 8.73151 19.7042 8.73985 18.4452 10.1425C17.5249 11.1681 17.6718 12.4637 20.148 25.1622C21.6384 32.8061 23.2367 39.5162 23.6997 40.0742C24.8669 41.4807 25.7225 41.3672 30.5838 39.1628C33.5545 37.8159 35.0655 37.4317 35.6113 37.8845C36.4265 38.5612 41.0672 37.0469 41.0518 36.1099C41.0473 35.8495 39.4645 31.7857 37.5347 27.078C34.6685 20.087 34.1523 18.2809 34.7192 17.222C35.4914 15.7789 35.7197 16.0829 30.2959 11.3406C28.4322 9.71153 26.6922 8.37875 26.4299 8.37875C26.1669 8.37875 25.321 9.00987 24.5501 9.78144ZM1.91532 14.3115C-0.72187 18.5843 -0.456356 20.9689 2.78626 22.1247C4.87574 22.8693 7.06848 21.1613 7.06848 18.7889C7.06848 17.0809 4.60253 12.227 3.73416 12.227C3.44107 12.227 2.62272 13.1647 1.91532 14.3115ZM20.5366 14.2268C20.5366 14.9323 20.248 15.3313 19.8953 15.1132C19.5425 14.8951 19.2539 14.1396 19.2539 13.4341C19.2539 12.7286 19.5425 12.3296 19.8953 12.5477C20.248 12.7658 20.5366 13.5213 20.5366 14.2268ZM22.1611 19.4425C22.7589 22.6923 21.5204 22.5833 20.6905 19.3129C20.0588 16.8244 20.3096 15.5743 21.2459 16.5454C21.5063 16.816 21.9181 18.1199 22.1611 19.4425ZM29.7341 22.7994C31.0302 24.0956 34.217 33.8387 33.7463 35.0657C32.9004 37.2695 31.2489 35.5384 29.5199 30.6351C28.5495 27.8842 27.1418 24.9794 26.3908 24.1803C25.6404 23.3811 25.026 22.5294 25.026 22.2876C25.026 21.4448 28.7894 21.8547 29.7341 22.7994ZM25.5705 25.3976C27.5619 27.9291 30.3401 36.7243 29.3525 37.3702C27.9441 38.2918 25.5897 38.7036 25.0446 38.1238C24.3827 37.4195 22.4177 25.0019 22.8557 24.2925C23.4175 23.3831 24.2538 23.7236 25.5705 25.3976Z" fill="black" />
                                    </svg>
                                </Box>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12}>
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
                                sx={{ bgcolor: grey[900], px: 4, textTransform: "none" }}
                            >Rent this Car
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    )
}

export default CarInformation

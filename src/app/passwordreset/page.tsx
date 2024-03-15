"use client"
import React from 'react'
import AuthSide from '../components/AuthSide'
import {
    Box,
    Button,
    FormControl,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography
} from '@mui/material'
import Link from 'next/link'

const PasswordReset = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (

        <Grid
            container
            xs={12}
            height="100vh"
            item
            sx={{ position: "relative" }}>
            <AuthSide />
            <Grid container item xs={8}>
                <Grid
                    container
                    xs={12}
                    spacing={2}
                    p={6}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    item>
                    <Box px={5} sx={{ width: "480px" }}>
                        <Grid item xs={12}>
                            <Typography className='poppins' sx={{
                                fontSize: "24px",
                                fontWeight: 600,
                                lineHeight: "46px",
                                letterSpacing: "0em",
                                textAlign: "center",
                                mb: 3,
                            }}>Password Reset</Typography>
                        </Grid>
                        <Grid px={1} mt={2} item xs={12}>
                            <FormControl fullWidth>
                                <TextField
                                    sx={{ bgcolor: "#F6F6F6" }} size='medium' label="New Password" />
                            </FormControl>
                        </Grid>
                        <Grid px={1} mt={2} item xs={12} mb={1}>
                            <FormControl sx={{ bgcolor: "#F6F6F6" }} fullWidth size='medium' variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <Button sx={{ textTransform: "capitalize", color: "#000" }}>Hide</Button> : <Button sx={{ textTransform: "capitalize", color: "#000" }}>Show</Button>}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                            <Grid mt={2} item xs={12} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <Button className='poppins' variant='contained' size='large' sx={{ bgcolor: "black", px: 6, textTransform: "capitalize", mt: 4 }}>Save</Button>
                                <Typography className='poppins' sx={{
                                    fontSize: "14px",
                                    fontWeight: 200,
                                    mt: 5,
                                    lineHeight: "24px",
                                    letterSpacing: "0em",
                                    textAlign: "center",
                                    color: "#75767A"
                                }}>Don&apos;t have an account yet?</Typography>
                                <Link
                                    href="/signup"
                                    className='poppins' style={{
                                        textDecoration: "none",
                                        fontSize: "14px",
                                        fontWeight: 400,
                                        lineHeight: "24px",
                                        letterSpacing: "0em",
                                        textAlign: "center",
                                        color: "#333333"
                                    }}>Create one</Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default PasswordReset

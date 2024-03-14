import React from 'react';
import {
    Button,
    FormControl,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography
} from '@mui/material';

const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <Grid
            container
            xs={12}
            spacing={2}
            p={6}
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}
            item>
            <Grid item xs={12}>
                <Typography className='poppins' sx={{
                    fontSize: "22px",
                    fontWeight: 700,
                    lineHeight: "46px",
                    letterSpacing: "0em",
                    textAlign: "center",
                    mb: 3,
                }}>Log In</Typography>
            </Grid>
            <Grid item xs={12}>
                <FormControl fullWidth>
                    <TextField
                        sx={{ bgcolor: "#F6F6F6" }} size='medium' label="Username" />
                </FormControl>
            </Grid>
            <Grid item xs={12} mb={1}>
                <FormControl sx={{ bgcolor: "#F6F6F6" }} fullWidth size='medium' variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
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
            </Grid>
            <Grid mt={2} item xs={12} sx={{ display: "flex",  flexDirection: "column", alignItems: "center" }}>
                <Button className='poppins' variant='contained' size='large' sx={{ bgcolor: "black", px: 6, textTransform: "capitalize" }}>Log In</Button>
                <Typography className='poppins' sx={{
                        fontSize: "14px",
                        fontWeight: 400,
                        mt: 2,
                        lineHeight: "24px",
                        letterSpacing: "0em",
                        textAlign: "center",
                        color: "#333333"
                    }}>Forgot your password?</Typography>
            </Grid>

            <Grid item xs={12} mt={3} sx={{ display: "flex",  flexDirection: "column", alignItems: "center" }}>
                <Typography className='poppins' sx={{
                        fontSize: "14px",
                        fontWeight: 200,
                        mt: 2,
                        lineHeight: "24px",
                        letterSpacing: "0em",
                        textAlign: "center",
                        color: "#75767A"
                    }}>Don't have an account yet?</Typography>
                    <Typography className='poppins' sx={{
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "24px",
                        letterSpacing: "0em",
                        textAlign: "center",
                        color: "#333333"
                    }}>Create one</Typography>
            </Grid>
        </Grid>
    )
}

export default Login;

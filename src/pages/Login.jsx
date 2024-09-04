import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    return <>
        <Box sx={{
            width: '100%',
            height: '100vh',
            backgroundImage: 'url(https://images.unsplash.com/photo-1518196305762-7ee9100ec85c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            paddingX: { xs: '12px', md: '100px' }
        }}>
            <Grid container sx={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <Grid item xs={12} sm={9} md={7} lg={5} sx={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    color: 'white',
                    paddingX: '50px',
                    paddingY: '70px',
                }}>
                    <Typography sx={{ fontSize: '22px', textAlign: 'center', fontWeight: 'bold' }}>
                        Login Your Account
                    </Typography>

                    <TextField sx={{
                        backgroundColor: 'white',
                        marginTop: '40px',
                        '& .MuiInputBase-root': {
                            height: '40px',
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none'
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                        },
                    }}
                        placeholder='Username'
                        fullWidth
                    />

                    <TextField sx={{
                        backgroundColor: 'white',
                        marginTop: '20px',
                        '& .MuiInputBase-root': {
                            height: '40px',
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none'
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                        },
                    }}
                        placeholder='Password'
                        fullWidth
                    />

                    <Typography sx={{
                        fontSize: '14px', marginTop: '10px', textAlign: 'end'
                    }}>
                        Forgot Password?
                    </Typography>

                    <Button variant='contained'
                        sx={{
                            backgroundColor: '#cd2c22',
                            borderRadius: 0,
                            width: '100%',
                            marginTop: '20px',
                            '&:hover': {
                                backgroundColor: '#cd2c22',
                            }
                        }}>
                        Login
                    </Button>

                    <Typography sx={{ marginTop: '12px', textAlign: 'center' }}>
                        If you don't have an account? Please
                        <Link to="/register" style={{ textDecoration: 'none', marginLeft: '6px', color: '#cd2c22', fontWeight: 'bold' }}>Signup</Link>
                    </Typography>
                </Grid>
            </Grid>
        </Box >
    </>
}

export default Login
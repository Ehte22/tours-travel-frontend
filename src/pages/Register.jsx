import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useSignUpMutation } from '../redux/apis/auth.apis'

const Register = () => {
    const [signUp] = useSignUpMutation()
    const [formErrors, setFormErrors] = useState(null)

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    }

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .required('*Field first name is required')
            .matches('^[a-zA-Z]+$', 'Please enter only alphabetic characters'),
        lastName: Yup.string()
            .required('*Field last name is required')
            .matches('^[a-zA-Z]+$', 'Please enter only alphabetic characters'),
        email: Yup.string()
            .required('*Field email is required')
            .matches('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$', 'Please enter a valid email address'),
        phone: Yup.string()
            .required('*Field phone number is required')
            .matches('^[1-9]{5,14}$', 'Please enter a valid phone number'),
        password: Yup.string()
            .required('*Field password is required')
            .min(6, 'Password should be of minimum 6 characters length'),
        confirmPassword: Yup.string()
            .required('*Field confirm password is required')
            .oneOf([Yup.ref('password'), null], 'Password do not match'),
    })

    const onSubmit = (values, { resetForm }) => {
        console.log('Form submitted');
        signUp(values)
        resetForm()
    }

    const validate = (values) => {
        const errors = {};
        let generalError = null

        try {
            validationSchema.validateSync(values, { abortEarly: false });
        } catch (err) {
            err.inner.forEach((error) => {
                if (error.message.includes('required')) {
                    generalError = 'Please fill all required fields'
                } else if (error.path === 'email' && error.message.includes('valid email')) {
                    generalError = 'Please enter a valid email address'
                } else if (error.path === 'phone' && error.message.includes('valid phone')) {
                    generalError = 'Please enter a valid phone number'
                } else if (error.path === 'confirmPassword' && error.message.includes('do not match')) {
                    generalError = 'Password do not match'
                }

                errors[error.path] = error.message; // Collect field-specific errors
            });
        }

        setFormErrors(generalError)
        return errors;
    };

    return <>
        <Box sx={{
            width: '100%',
            height: '100vh',
            backgroundImage: 'url(https://images.unsplash.com/photo-1551384745-01b8c3f3fd41?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            paddingX: { xs: '12px' },
            paddingTop: '30px'
        }}>


            <Box height={'100%'}>
                <Container disableGutters>
                    <Box>
                        {formErrors && (
                            <Box sx={{ paddingY: 1, paddingX: 2, backgroundColor: '#cd2c22', color: 'white' }}>
                                <Typography fontSize={'14px'}>
                                    {formErrors}
                                </Typography>
                            </Box>
                        )}
                    </Box>
                </Container>
                <Grid container sx={{ justifyContent: 'center', alignItems: 'center', height: '90%' }}>
                    <Grid item xs={12} sm={9} md={7} lg={5} sx={{
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        color: 'white',
                        paddingX: '50px',
                        paddingY: '70px',
                    }}>
                        <Typography sx={{ fontSize: '22px', textAlign: 'center', fontWeight: 'bold' }}>
                            Register Your Account
                        </Typography>

                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                            validate={validate}
                        >
                            {({ handleSubmit, errors }) => {
                                console.log(errors);

                                return <Form onSubmit={handleSubmit}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <Field
                                                name='firstName'
                                                as={TextField}
                                                placeholder='First name'
                                                fullWidth
                                                sx={{
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
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Field
                                                name='lastName'
                                                as={TextField}
                                                placeholder='Last name'
                                                fullWidth
                                                sx={{
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
                                            />
                                        </Grid>
                                    </Grid>

                                    <Field
                                        name='email'
                                        as={TextField}
                                        placeholder='Enter your email'
                                        fullWidth
                                        sx={{
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
                                    />

                                    <Field
                                        name='phone'
                                        as={TextField}
                                        placeholder='Enter your phone number'
                                        fullWidth
                                        sx={{
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
                                    />

                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <Field
                                                name='password'
                                                as={TextField}
                                                placeholder='Password'
                                                fullWidth
                                                sx={{
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
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Field
                                                name='confirmPassword'
                                                as={TextField}
                                                placeholder='Confirm assword'
                                                fullWidth
                                                sx={{
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
                                            />
                                        </Grid>
                                    </Grid>


                                    <Button type='submit' variant='contained'
                                        sx={{
                                            backgroundColor: '#cd2c22',
                                            borderRadius: 0,
                                            width: '100%',
                                            marginTop: '20px',
                                            '&:hover': {
                                                backgroundColor: '#cd2c22',
                                            }
                                        }}>
                                        Register
                                    </Button>
                                </Form>
                            }}
                        </Formik>


                        <Typography sx={{ marginTop: '12px', textAlign: 'center' }}>
                            If you already have an account? Please
                            <Link to="/login" style={{ textDecoration: 'none', marginLeft: '6px', color: '#cd2c22', fontWeight: 'bold' }}>Signin</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

        </Box >
    </>
}

export default Register
import { Box, Button, Card, CardContent, Container, TextField } from '@mui/material'
import React, { useState } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

const Prac = () => {
    const [formErrors, setFormErrors] = useState()
    const initialValues = {
        name: '',
        email: '',
        phone: '',
    }


    const validationSchema = Yup.object({
        name: Yup.string()
            .required('*Field name is required')
            .matches('^[a-zA-Z]+$', 'Please enter only alphabetic characters'),
        email: Yup.string()
            .required('*Field email is required')
            .matches('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$', 'Please enter a valid email address'),
        phone: Yup.string()
            .required('*Field phone number is required')
            .matches('^[1-9]{5,14}$', 'Please enter a valid phone number')
    })

    const onSubmit = (values, { validateForm }) => {
        validateForm().then((errors) => {
            console.log(errors);

        })
        console.log('Form submitted', values);
        setFormErrors([]); // Clear all errors when form is successfully submitted
    }

    return <Box sx={{ marginY: '200px' }}>
        <pre>{JSON.stringify(formErrors, null, 2)}</pre>
        <Container >
            <Box>
                {/* {formErrors.map((error, index) => (
                    <Box key={index} sx={{ color: 'red', marginBottom: '10px' }}>
                        {error}
                    </Box>
                ))} */}
                {formErrors}
            </Box>

            <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                validateOnBlur={false}
                validateOnChange={false}
            >
                {({ handleSubmit, errors, touched, validateForm, isSubmitting }) => {
                    console.log(errors);

                    return <Form onSubmit={handleSubmit}>
                        <Card>
                            <CardContent>
                                <Field
                                    name='name'
                                    as={TextField}
                                    placeholder='First name'
                                    fullWidth
                                    sx={{
                                        border: '1px solid black',
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

                                <Field
                                    name='email'
                                    as={TextField}
                                    placeholder='Enter your email'
                                    fullWidth
                                    sx={{
                                        border: '1px solid black',
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
                                        border: '1px solid black',
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
                            </CardContent>
                        </Card>
                    </Form>
                }}
            </Formik>
        </Container>

    </Box>
}

export default Prac
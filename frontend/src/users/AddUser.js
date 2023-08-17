import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik'
// import { object, string } from 'yup';


function AddUser() {
    const navigate = useNavigate();
    const validate = (values) => {
        const errors = {}
        if (!values.email) {
            errors.email = 'Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid Email Address'
        }
        if (!values.firstName) {
            errors.firstName = 'Required'
        }else if(!/^[A-Z]*$/i.test(values.firstName)){
            errors.firstName = 'Please enter alphabets only'
        }
        if (!values.lastName) {
            errors.lastName = 'Required'
        }else if(!/^[A-Z]*$/i.test(values.lastName)){
            errors.lastName = 'Please enter alphabets only'
        }
        return errors
    }

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        // validationSchema={UserSchema},
        validate,
        onSubmit: (values) => {
            try {
                axios.post('http://localhost:5000/users/add',
                 values
                 ).then((res, error) => {
                    alert(res.data);
                    //redirect to user list
                    navigate("/userlist");
                });
            } catch (error) {
                console.error('Error adding user:', error);
            }
        },
    })

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Add User</h1>
            <form autoComplete="off" style={{ textAlign: 'center' }} onSubmit={formik.handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                <TextField
                        name={"firstName"}
                        label="First Name"
                        error={
                            Boolean(formik.errors.firstName && formik.touched.firstName)
                        }
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        helperText={
                            formik.errors.firstName &&
                            formik.touched.firstName &&
                            String(formik.errors.firstName)
                        }
                    />

                </div>
                <div style={{ marginBottom: '10px' }}>
                    <TextField
                        name={"lastName"}
                        label="Last Name"
                        error={
                            Boolean(formik.errors.lastName && formik.touched.lastName)
                        }
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        helperText={
                            formik.errors.lastName &&
                            formik.touched.lastName &&
                            String(formik.errors.lastName)
                        }
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                <TextField
                        name={"email"}
                        label='Email'
                        error={
                            Boolean(formik.errors.email && formik.touched.email)
                        }
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        helperText={
                            formik.errors.email &&
                            formik.touched.email &&
                            String(formik.errors.email)
                        }
                    />
                </div>
                <Button type="submit" style={{textAlign:'center'}} variant="contained">Add User</Button>
            </form>
        </div>
    );
}

export default AddUser;

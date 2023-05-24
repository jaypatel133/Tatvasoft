import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import './Register.css';
import {Button} from '@mui/material';
import {getUserRole ,addUser} from '../service/user.service';
import { toast } from 'react-toastify';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const styles = {
    can_b:{
        "&.MuiButton-root": {
            border: "1px solid #f14d54",
            bgcolor: "#f14d54",
          },
          "&.MuiButton-contained": {
            color: "white",
          }
    },
    select:
    {
        width: "100%",
        height:"40px",
        '.MuiOutlinedInput-notchedOutline': {
            borderColor: '#6f6f6f',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'black',
        },
    }
        
  };
  

function Register(props) {

    const [roles,setRoles] = new useState();
    const navigate = useNavigate();
    
    useEffect(()=>{
        getUserRole().then(res=>{
            setRoles(res.data.result.map(obj => {
                return <MenuItem value={obj.id}>{obj.name}</MenuItem>
            }))
        }).catch((err)=>{
            console.log(err)
        })
    },[]);

    return (
        <div>
            <div className='redir'>
                Home /<span> Create an Account</span>
            </div>

            <div className='loginTitle'>
                Login or Create an Account
            </div>

            <Formik
                        initialValues={{firstName: '',lastName:'', email: '',roleId:'', password: '', conPassword: '',}}
                        validate={values => {
                            const errors = {};
                            //name validation
                            if (!values.firstName) {
                            errors.firstName = 'First Name Required';
                            }
                            if (!values.lastName) {
                            errors.lastName = 'Last Name Required';
                            }
                            //role validation
                            if (!values.roleId) {
                            errors.roleId = 'Role Required';
                            }
                            //email validetion
                            if (!values.email) {
                            errors.email = 'Email Required';
                            } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                            errors.email = 'Invalid email address';
                            }
                            //password validation
                            if (!values.password) {
                            errors.password = 'Password Required';
                            }
                            //con password validation
                            if(!values.conPassword)
                            {
                                errors.conPassword = 'Password Required';
                            } else if(values.password !== values.conPassword)
                            {
                                errors.conPassword = 'Enter Correct Password';
                            }

                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            const temp = JSON.parse(JSON.stringify(values));
                            delete temp.conPassword;
                            addUser(temp).then(res=>{
                                navigate('/login');
                                console.log(res);
                            }).catch((err)=>{
                                console.log(err)
                            })
                        }}
                        >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            /* and other goodies */
                        }) => (
                            <form onSubmit={handleSubmit}>
                                 <div className='regPage'>
                                    <h2 className='regPageTitle'>Personal Information</h2>
                                    <h4 className='regPageSubTitle'>Please enter the following Information to create your Account</h4>
                                    <div className='inpType1'>
                                        <samp className='inpTitle'>First Name:</samp>
                                        <input className='inpBox'
                                            type="text"
                                            name="firstName"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.firstName}
                                            style={{marginBottom:"0px"}}
                                        />
                                        <div className='errorMsg'>
                                            {errors.firstName && touched.firstName && errors.firstName}
                                        </div>
                                    </div>
                                    <div className='inpType1 m2p'>
                                        <samp className='inpTitle'>Last Name:</samp>
                                        <input className='inpBox'
                                            type="text"
                                            name="lastName"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.lastName}
                                            style={{marginBottom:"0px"}}
                                        />
                                        <div className='errorMsg' >
                                            {errors.lastName && touched.lastName && errors.lastName}
                                        </div>
                                    </div>
                                    <samp style={{display:"block",height:"35px"}}/>
                                    
                                    <div className='inpType1'>
                                        <samp className='inpTitle'>Email Address:</samp>
                                        <input className='inpBox'
                                           type="email"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            style={{marginBottom:"0px"}}
                                        />
                                        <div className='errorMsg'>
                                            {errors.email && touched.email && errors.email}
                                        </div>
                                    </div>
                                    <div className='inpType1 m2p'>
                                        <samp className='inpTitle'>Role:</samp>
                                        <Select 
                                            name="roleId"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.roleId}
                                            sx={styles.select}>
                                            {roles}
                                        </Select>
                                        <div className='errorMsg' >
                                            {errors.roleId && touched.roleId && errors.roleId}
                                        </div>
                                    </div>

                                    <h2 className='regPageTitle' style={{marginTop:"70px"}}>Login Information</h2>
                                    <div className='inpType1'>
                                        <samp className='inpTitle'>Password:</samp>
                                        <input className='inpBox'
                                            type="password"
                                            name="password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                            style={{marginBottom:"0px"}}
                                        />
                                        <div className='errorMsg'>
                                            {errors.password && touched.password && errors.password}
                                        </div>
                                    </div>
                                    <div className='inpType1 m2p'>
                                        <samp className='inpTitle'>Conferm Password:</samp>
                                        <input className='inpBox'
                                            type="password"
                                            name="conPassword"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.conPassword}
                                            style={{marginBottom:"0px"}}
                                        />
                                        <div className='errorMsg'>
                                            {errors.conPassword && touched.conPassword && errors.conPassword}
                                        </div>
                                    </div>
                                    <samp style={{display:"block",height:"35px"}}/>
                                    <Button type="submit" sx={styles.can_b} variant="contained" className='nav_b' >Register </Button>
                                
                                </div>
                            </form>
                        )}
                        </Formik>
            
        </div>
    );
}

export default Register;
import React from 'react';
import { Formik } from 'formik';
import './Login.css';
import {Button} from '@mui/material';
import { useNavigate } from "react-router-dom";
import {LoginUser} from '../service/auth.service';
import { toast } from "react-toastify";



const styles = {
    can_b:{
        "&.MuiButton-root": {
            border: "1px solid #f14d54",
            bgcolor: "#f14d54",
          },
          "&.MuiButton-contained": {
            color: "white",
          }
    }
        
  };

function Login(props) {
    const navigate = useNavigate();
    return (
        <div>
            <div className='redir'>
                Home /<span> Login</span>
            </div>

            <div className='loginTitle'>
                Login or Create an Account
            </div>

            <div className='mainLoginDiv'>
                <div className='createAccount'>
                    <samp className='heading'>New Customer</samp>
                    <samp className='subHeading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</samp>
                    <ul className='regList'>
                        <li>Enim nec dui nunc mattis enim ut tellus elementum sagittis</li>
                        <li>Amet commodo nulla facilisi nullam vehicula ipsum a</li>
                        <li>A scelerisque purus semper eget duis at tellus at urna</li>
                    </ul>

                    <Button sx={styles.can_b} variant="contained" className='nav_b' onClick={()=>{navigate("/register")}}>Create an Account </Button>
                </div>
                <div className='loginForm'>
                    <samp className='heading'>Registered Customer</samp>
                    <samp className='subHeading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</samp>

                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validate={values => {
                            const errors = {};
                            if (!values.email) {
                            errors.email = 'Email Required';
                            } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                            errors.email = 'Invalid email address';
                            }

                            if (!values.password) {
                            errors.password = 'Password Required';
                            }

                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            LoginUser(values).then(res=>{
                                if(res?.data?.code === 200)
                                {
                                    toast.success("Login Successful")
                                    console.log(res);
                                } 
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
                            <div style={{display:"block",marginBottom:"40px"}}>
                                <samp className='inpTitle'>Email Address:</samp>
                                <input type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email} className='inpBox'style={{marginBottom:"0px"}} />
                                <div className='errorMsg'>
                                    {errors.email && touched.email && errors.email}
                                </div>
                            </div> 
                            <div style={{display:"block",marginBottom:"40px"}}>
                                <samp className='inpTitle'>Password:</samp>
                                <input type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password} className='inpBox' style={{marginBottom:"0px"}} />
                                <div className='errorMsg'>
                                    {errors.password && touched.password && errors.password}
                                </div>
                            </div>

                            <Button type="submit" sx={styles.can_b} variant="contained" className='nav_b' >Login</Button>
                            </form>
                        )}
                        </Formik>


                </div>
            </div>
        </div>
    );
}

export default Login;
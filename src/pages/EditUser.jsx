import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './EditProduct.css';
import {Button} from '@mui/material';
import { toast } from "react-toastify";
import { Formik } from 'formik';
import { getUserRole ,getUserById, updateUser} from '../service/user.service';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";


const styles = {
    sea_b:{
        "&.MuiButton-root": {
            border: "1px solid #80be32",
            bgcolor: "#80be32",
            marginRight: "10px"
          },
          "&.MuiButton-contained": {
            color: "white",
            
          }
    }
    ,can_b:{
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



function EditUser(props) {
    const {state} = useLocation();
    const [initValue,setInitValue] = new useState({ firstName: '', lastName: '', email:'', roleId: '' ,password: ''})
    const [role,setRole] = new useState();
    const navigate = useNavigate()


    // toast.success("id: "+ state.id)
    const hiddenFileInput = React.useRef(null);

    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    useEffect(()=>{
        if(state?.id)
        {
            getUserById(state.id).then((res)=>{
                const data = res
                setInitValue({ id:state.id ,firstName: data.firstName, lastName: data.lastName, email: data.email, roleId: data.roleId ,role: data.role ,password:data.password })
            })
        }
        getUserRole().then((res)=>{
            setRole(res.map(obj => {
                return <MenuItem value={obj.id}>{obj.name}</MenuItem>
            }))
        })
    },[])

    return (
        <div className='editProduct'>
            <div className='editProductTitle'>
            {state?.id ? "Edit User" : "Add User"}

            </div>
            {<Formik
                        initialValues={initValue}
                        enableReinitialize={true}
                        validate={values => {
                            const errors = {};
                            // if (!values.email) {
                            // errors.email = 'Email Required';
                            // } else if (
                            // !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            // ) {
                            // errors.email = 'Invalid email address';
                            // }

                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            if(state?.id){

                                updateUser(values).then((res)=>{
                                toast.success("user data is updated");
                                })
                            }
                            else
                            {
                                // addBook(values)
                                // .then((res)=>{
                                //         toast.success("book data is Added");
                                //     })
                            }
                            // navigate('/productPage')
                        }}
                        >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            setFieldValue,
                            isSubmitting,
                            /* and other goodies */
                        }) => (
                            <form onSubmit={handleSubmit}>
                                

                                <div style={{width:"49%",height:"80px",display:"inline-block"}}>
                                        <samp className='inpTitle'>First Name *</samp>
                                        <input 
                                        
                                        type="text"
                                        name="firstName"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.firstName}
                                        
                                        className='inpBox' placeholder='First Name'/>
                                </div>
                                <div style={{width:"49%",height:"80px",display:"inline-block",marginLeft:"2%"}}>
                                        <samp className='inpTitle'>Last Name *</samp>
                                        <input 
                                        type="text"
                                        name="lastName"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.lastName}
                                        className='inpBox' placeholder='Last Name'/>
                                </div>
                                <samp style={{display:"block",height:"35px"}}/>
                                <div style={{width:"49%",height:"80px",display:"inline-block"}}>
                                        <samp className='inpTitle'>Email *</samp>
                                        <input 
                                        
                                        type="text"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        
                                        className='inpBox' placeholder='Email'/>
                                </div>
                                <div style={{width:"49%",height:"80px",display:"inline-block",marginLeft:"2%"}}>
                                        <samp className='inpTitle'>Role *</samp>

                                        <Select 
                                            name="roleId"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.roleId}
                                            sx={styles.select}>
                                            {role}
                                        </Select>
                                </div>

                                <samp style={{display:"block",height:"35px"}}/>
                                <div style={{width:"49%",height:"80px",display:"inline-block"}}>
                                        <samp className='inpTitle'>Password *</samp>
                                        <input 
                                        
                                        type="text"
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        
                                        className='inpBox' placeholder='Email'/>
                                </div>

                                <samp style={{display:"block",height:"35px"}}/>

                                <Button type='submit' sx={styles.sea_b} variant="contained">Save</Button>
                                
                                <Button sx={styles.can_b} variant="contained" onClick={()=>{navigate('/productPage')}}>Cancel </Button>
                                <samp style={{display:"block",height:"60px"}}/>
                            </form>
                        )}
                        </Formik>}

        </div>
    );
}

export default EditUser;
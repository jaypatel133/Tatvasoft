import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './EditProduct.css';
import {Button} from '@mui/material';
import { toast } from "react-toastify";
import { Formik } from 'formik';
import { getCategoryById,updateCategory,addCategory } from '../service/category.service';
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



function EditCategory(props) {
    const {state} = useLocation();
    const [initValue,setInitValue] = new useState({ name:''})
    const navigate = useNavigate()

 
    useEffect(()=>{
        if(state?.id)
        {
            getCategoryById(state.id).then((res)=>{
                const data = res
                setInitValue({ id:state.id ,name: data.name })
            })
        }
    },[])

    return (
        <div className='editProduct'>
            <div className='editProductTitle'>
            {state?.id ? "Edit Category" : "Add Category"}

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

                                updateCategory(values).then((res)=>{
                                toast.success("Category data is updated");
                                })
                            }
                            else
                            {
                                addCategory(values)
                                .then((res)=>{
                                        toast.success("Category data is Added");
                                    })
                            }
                            navigate('/categoryPage')
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
                                        <samp className='inpTitle'>Name *</samp>
                                        <input 
                                        
                                        type="text"
                                        name="name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                        
                                        className='inpBox' placeholder='First Name'/>
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

export default EditCategory;
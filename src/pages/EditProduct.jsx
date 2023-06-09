import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './EditProduct.css';
import {Button} from '@mui/material';
import { toast } from "react-toastify";
import { Formik } from 'formik';
import { getBookById,updateBook,addBook} from '../service/book.service';
import { getAllCategories } from '../service/category.service';
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



function EditProduct(props) {
    const {state} = useLocation();
    // const [fileName,SetFileName] = new useState("No file chosen..");
    const [initValue,setInitValue] = new useState({ name: '', price: '', categoryId:'', description: '', base64image: '' })
    const [category,setCategory] = new useState();
    const navigate = useNavigate()


    // toast.success("id: "+ state.id)
    const hiddenFileInput = React.useRef(null);

    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    
    useEffect(()=>{
        console.log()
        if(state?.id)
        {
            getBookById(state.id).then((res)=>{
                const data = res
                setInitValue({ id:data.id ,name: data.name, price: data.price, categoryId: data.categoryId, description: data.description, base64image: data.base64image })
            })
        }
        getAllCategories().then((res)=>{
            setCategory(res.map(obj => {
                return <MenuItem value={obj.id}>{obj.name}</MenuItem>
            }))
        })
    },[])


    return (
        <div className='editProduct'>
            <div className='editProductTitle'>
            {state?.id ? "Edit Product" : "Add Product"}
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
                                updateBook(values).then((res)=>{
                                toast.success("book data is updated");
                                })
                            }
                            else
                            {
                                addBook(values)
                                .then((res)=>{
                                        toast.success("book data is Added");
                                    })
                            }
                            navigate('/productPage')
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
                                {console.log(values)}

                                <div style={{width:"49%",height:"80px",display:"inline-block"}}>
                                        <samp className='inpTitle'>Book Name *</samp>
                                        <input 
                                        
                                        type="text"
                                        name="name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                        
                                        className='inpBox' placeholder='ProductName'/>
                                </div>
                                <div style={{width:"49%",height:"80px",display:"inline-block",marginLeft:"2%"}}>
                                        <samp className='inpTitle'>Book Price (RS)*</samp>
                                        <input 
                                        type="number"
                                        name="price"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.price}
                                        className='inpBox' placeholder='price'/>
                                </div>
                                <samp style={{display:"block",height:"35px"}}/>
                                <div style={{width:"49%",height:"80px",display:"inline-block"}}>
                                        <samp className='inpTitle'>Category *</samp>
                                        {/* <input 
                                        type="text"
                                        name="categoryId"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.categoryId}
                                        className='inpBox' placeholder='category'/> */}

                                        <Select 
                                            name="categoryId"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.categoryId}
                                            sx={styles.select}>
                                            {category}
                                        </Select>
                                </div>
                                <div style={{width:"49%",height:"80px",display:"inline-block",marginLeft:"2%"}}>
                                        <samp className='inpTitle'>Description *</samp>
                                        <input 
                                        type="text"
                                        name="description"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.description}
                                        className='inpBox' placeholder='description'/>
                                </div>
                                <samp style={{display:"block",height:"35px"}}/>

                                <div className="file-upload">
                                    <div className="file-upload-select">
                                    {values.base64image === '' ? <div styles={{display:"none"}}> <div className="file-select-button">upload</div>
                                      <div className="file-select-name" onClick={handleClick} style={{display:"inline-block",width:"90%"}}> No file chosen...</div></div> : <><img src={values.base64image} width={"40px"} height={"40px"}/> <samp style={{position:"absolute",fontSize:"20px", marginTop:"3px",marginLeft:"20px"}} onClick={()=>{setFieldValue("base64image", '')}}>X</samp></>}
                                        <input 
                                        type="file" 
                                        name="base64image"
                                        onBlur={handleBlur}
                                        onChange={(event) => {
                                                let reader = new FileReader();
                                                reader.readAsDataURL(event.currentTarget.files[0]);
                                                reader.onload = function () {
                                                    setFieldValue("base64image", reader.result);
                                                };
                                                reader.onerror = function (error) {
                                                    console.log('Error: ', error);
                                                };
                                        }}
                                        itemID="file-upload-input" ref={hiddenFileInput} style={{display: 'none'}}/>
                                    </div>
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

export default EditProduct;
import React, { useEffect, useState } from 'react';
import './CartItem.css';
import {IconButton} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import TextField from '@mui/material/TextField';
import { Formik } from 'formik';
import { useUpdateCart } from '../Context/cartContext';


const styles = {
    inp:{
        "&.MuiTextField-root": {
            display:"inline-block",
            width:"1.5em",
            height:"2em",
            marginLeft:"5px",
            marginRight:"5px"
        },
        "& .MuiOutlinedInput-input": {
            backgroundColor: "#F5F5F5 !important",
            borderWidth: 0,
            outline: "none",
            borderColor: "white !important",
            padding:0,
            paddingLeft: "7px" ,

        }
    }
        
  };

function CartItem(props) {
    const [quantity,setQuantity] = new useState(props.quantity);
    const {updateCart,removeFromCart} = useUpdateCart();

    useEffect(()=>{
        updateCart({id:props.id,bookId:props.bookId,quantity:quantity})
    },[quantity])
    return (
        <div className='CartItem'>
            <div style={{display:"inline-block",height:"120px",width:"180px",backgroundImage: `url(${props.img})`, backgroundSize: 'cover' }}>
                {/* <img width={"180px"} height={"120px"} src={props.img} /> */}
            </div>
            <div className='ItemAllDetail'>
                <div className='cartItemDetail'>
                        <div className='ItemName'>{props.name}</div>
                        <div className='ItemPrice'>{props.price}</div>
                </div>
                <div className='cartItemDetail'>
                        <div className='ItemSubName'>cart Item Name</div>
                        <div className='ItemDis'>50% off</div>
                </div>
                <div className='ItemCount'>
                    <div style={{display:"inline-block",width:"1.5rem",height:"1.5rem",backgroundColor:"#f14d54" ,borderRadius:"5px", marginLeft:"15px"}} 
                    onClick={()=>{
                        setQuantity(quantity+1)
                    }}
                    >
                        <AddIcon/>
                    </div>
                    <div>
                        <TextField variant="outlined" sx={styles.inp} size="small" value={quantity} onChange={(event)=>{setQuantity(event.target.value)}}/>
                    </div>
                    <div style={{display:"inline-block",width:"1.5rem",height:"1.5rem",backgroundColor:"#f14d54" ,borderRadius:"5px"}}
                     onClick={()=>{
                        if(quantity > 1)
                        {
                            setQuantity(quantity-1)
                        }
                    }}
                    >
                        <RemoveIcon/>
                    </div>
                    <samp style={{textAlign:"right",marginLeft:"465px",color:"#f14d54"}} onClick={()=>{
                        removeFromCart(props.id)
                    }}>Remove</samp>







                    {/* <Formik
                        initialValues={{id:props.id,quantity:props.quantity}}
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

                        }) => (
                            <form onSubmit={handleSubmit}>
                                
                            </form>
                        )}
                        </Formik> */}








                </div>
                <div style={{display:"inline-block",width:'600px',height:"30px"}}></div>
            </div>
            
        </div>
    );
}

export default CartItem;
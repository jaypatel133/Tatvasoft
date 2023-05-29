import React from 'react';
import './ProductPage.css';
import {Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import ProductTabel from '../components/ProductTabel';

const styles = {
    can_b:{
        "&.MuiButton-root": {
            border: "1px solid #f14d54",
            bgcolor: "#f14d54",
            marginLeft:'10px'
          },
          "&.MuiButton-contained": {
            color: "white",
          }
    },
    input:
    {
        width: "200px",
    }
        
};

function ProductPage(props) {
    return (
        <div className='productPage'>
            <div className='productPageTitle'>
                Product Page
            </div>

            <div className='productPageSearchBar'>
                <TextField sx={styles.input} size='small' placeholder='search'/>
                <Button sx={styles.can_b} variant="contained" >Cancel </Button>
            </div>
            <ProductTabel/>

        </div>
    );
}

export default ProductPage;
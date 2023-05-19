import React, { useEffect, useState } from 'react';
import './EditProduct.css';
import {Button} from '@mui/material';


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
    }
        
};


function EditProduct(props) {

    const [fileName,SetFileName] = new useState("No file chosen..");

    const hiddenFileInput = React.useRef(null);
    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const handleChange = event => {
       const fileUploaded = event.target.files[0];
       if(fileUploaded){
            SetFileName(fileUploaded.name)
       }
    };

    console.log(fileName);




    return (
        <div className='editProduct'>
            <div className='editProductTitle'>
                Edit Product
            </div>

            <div style={{width:"49%",height:"80px",display:"inline-block"}}>
                    <samp className='inpTitle'>Email Address:</samp>
                    <input className='inpBox' placeholder='email'/>
            </div>
            <div style={{width:"49%",height:"80px",display:"inline-block",marginLeft:"2%"}}>
                    <samp className='inpTitle'>Email Address:</samp>
                    <input className='inpBox' placeholder='email'/>
            </div>
            <samp style={{display:"block",height:"35px"}}/>
            <div style={{width:"49%",height:"80px",display:"inline-block"}}>
                    <samp className='inpTitle'>Email Address:</samp>
                    <input className='inpBox' placeholder='email'/>
            </div>
            <div style={{width:"49%",height:"80px",display:"inline-block",marginLeft:"2%"}}>
                    <samp className='inpTitle'>Email Address:</samp>
                    <input className='inpBox' placeholder='email'/>
            </div>
            <samp style={{display:"block",height:"35px"}}/>

            <div className="file-upload">
                <div className="file-upload-select">
                    <div className="file-select-button">upload</div>
                <div className="file-select-name" onClick={handleClick} style={{display:"inline-block",width:"90%"}}>{fileName}</div> 
                    <input type="file" itemID="file-upload-input" ref={hiddenFileInput} onChange={handleChange} style={{display: 'none'}}/>
                </div>
            </div>

            <samp style={{display:"block",height:"35px"}}/>

            <Button sx={styles.sea_b} variant="contained">Save</Button>
            <Button sx={styles.can_b} variant="contained">Cancel </Button>
            <samp style={{display:"block",height:"60px"}}/>

        </div>
    );
}

export default EditProduct;
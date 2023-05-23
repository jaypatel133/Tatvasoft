import React from 'react';
import './CartItem.css';
import {IconButton} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import TextField from '@mui/material/TextField';

const styles = {
    inp:{
        "&.MuiTextField-root": {
            display:"inline-block",
            width:"1.5em",
            height:"2em",
            marginLeft:"5px",
            marginRight:"5px",
        },
        "& .MuiOutlinedInput-input": {
            backgroundColor: "#F5F5F5 !important",
            borderWidth: 0,
            outline: "none",
            borderColor: "white !important",
            padding: 0 ,

        }
    }
        
  };

function CartItem(props) {
    return (
        <div className='CartItem'>
            <div>
                <img width={"180px"} height={"120px"}/>
            </div>
            <div className='ItemAllDetail'>
                <div className='cartItemDetail'>
                        <div className='ItemName'>Campus Sutra</div>
                        <div className='ItemPrice'>500</div>
                </div>
                <div className='cartItemDetail'>
                        <div className='ItemSubName'>cart Item Name</div>
                        <div className='ItemDis'>50% off</div>
                </div>
                <div className='ItemCount'>
                    <div style={{display:"inline-block",width:"1.5rem",height:"1.5rem",backgroundColor:"#f14d54" ,borderRadius:"5px", marginLeft:"15px"}}>
                        <AddIcon/>
                    </div>
                    <div>
                        <TextField variant="outlined" sx={styles.inp} size="small"/>
                    </div>
                    <div style={{display:"inline-block",width:"1.5rem",height:"1.5rem",backgroundColor:"#f14d54" ,borderRadius:"5px"}}>
                        <RemoveIcon/>
                    </div>
                    <samp style={{textAlign:"right",marginLeft:"465px",color:"#f14d54"}}>Remove</samp>
                </div>
                <div style={{display:"inline-block",width:'600px',height:"30px"}}></div>
            </div>
            
        </div>
    );
}

export default CartItem;
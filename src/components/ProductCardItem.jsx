import React from 'react';
import Grid from '@mui/material/Grid';
import { Button} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import {addToCartRTK} from '../store/Slice/cartSlice';


const styles = {
    can_b:{
        "&.MuiButton-root": {
            border: "1px solid #f14d54",
            bgcolor: "#f14d54",
            width:"100%",
            marginTop:"10px"
          },
          "&.MuiButton-contained": {
            color: "white",
          }
    }
        
  };

function ProductCardItem(props) {
    const userDetail = useSelector((state) => state.user.userDetail)
    const dispatch = useDispatch()


    return (
        <Grid item xs={3}>
                    <div style={{display:"inline-block",height:"390px",width:"300px",borderRadius:"10px",overflow:"hidden",border:"1px solid gray"}}>
                        <div style={{display:"block",background:"black",height:"180px",backgroundImage: `url(${props.img})`, backgroundSize: 'cover' }}/>
                        <div style={{display:"block",padding:"10px"}}>
                            <span style={{fontSize:"20px",fontWeight:"500",display:"block"}}>{props.name.length>22 ? props.name.slice(0,19) + "..." :  props.name}</span>
                            <span style={{fontSize:"13px",display:"block" ,margin:"5px",color:"gray"}}>{props.category}</span>
                            <span style={{fontSize:"13px",display:"block",color:"gray",height:"35px"}}>{props.description.length>84 ? props.description.slice(0,81) + "..." :  props.description}</span>
                            <span style={{fontSize:"13px",display:"block",marginTop:"10px",color:"gray"}}>MRP 2000</span>
                            <span style={{display:"block",fontWeight:"500"}}>{props.price}</span>
                            <Button sx={styles.can_b} variant="contained" className='nav_b' onClick={()=>{dispatch(addToCartRTK({bookId: props.id,quantity:1}))}}>Add To Cart </Button>

                        </div>
                    </div>
                </Grid>
    );
}

export default ProductCardItem;

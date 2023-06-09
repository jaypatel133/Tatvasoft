import React from 'react';
import Grid from '@mui/material/Grid';
import { Button} from '@mui/material';


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

    return (
        <Grid item xs={3}>
                    <div style={{display:"inline-block",height:"390px",width:"300px",borderRadius:"10px",overflow:"hidden",border:"1px solid gray"}}>
                        <div style={{display:"block",background:"black",height:"180px",backgroundImage: `url(${props.img})`, backgroundSize: 'cover' }}/>
                        <div style={{display:"block",padding:"10px"}}>
                            <text style={{fontSize:"20px",fontWeight:"500",display:"block"}}>{props.name.length>22 ? props.name.slice(0,19) + "..." :  props.name}</text>
                            <text style={{fontSize:"13px",display:"block" ,margin:"5px",color:"gray"}}>{props.category}</text>
                            <text style={{fontSize:"13px",display:"block",color:"gray",height:"35px"}}>{props.description.length>84 ? props.description.slice(0,81) + "..." :  props.description}</text>
                            <text style={{fontSize:"13px",display:"block",marginTop:"10px",color:"gray"}}>MRP 2000</text>
                            <text style={{display:"block",fontWeight:"500"}}>{props.price}</text>
                            <Button sx={styles.can_b} variant="contained" className='nav_b' >Add To Cart </Button>

                        </div>
                    </div>
                </Grid>
    );
}

export default ProductCardItem;

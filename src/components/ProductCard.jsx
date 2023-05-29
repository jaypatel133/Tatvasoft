import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
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

const ProductCard = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <div style={{display:"inline-block",height:"390px",width:"300px",borderRadius:"10px",overflow:"hidden",border:"1px solid gray"}}>
                        <div style={{display:"block",background:"black",height:"140px"}}>
                            hii
                        </div>
                        <div style={{display:"block",padding:"10px"}}>
                            <text style={{fontSize:"25px",fontWeight:"500",display:"block"}}>Product Title</text>
                            <text style={{fontSize:"13px",display:"block" ,margin:"5px",color:"gray"}}>Learn More</text>
                            <text style={{fontSize:"13px",display:"block",color:"gray"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ...</text>
                            <text style={{fontSize:"13px",display:"block",marginTop:"10px",color:"gray"}}>MRP 2000</text>
                            <text style={{display:"block",fontWeight:"500"}}>1000</text>
                            <Button sx={styles.can_b} variant="contained" className='nav_b' >Add To Cart </Button>

                        </div>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div style={{display:"inline-block",height:"390px",width:"300px",borderRadius:"10px",overflow:"hidden",border:"1px solid gray"}}>
                        <div style={{display:"block",background:"black",height:"140px"}}>
                            hii
                        </div>
                        <div style={{display:"block",padding:"10px"}}>
                            <text style={{fontSize:"25px",fontWeight:"500",display:"block"}}>Product Title</text>
                            <text style={{fontSize:"13px",display:"block" ,margin:"5px",color:"gray"}}>Learn More</text>
                            <text style={{fontSize:"13px",display:"block",color:"gray"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ...</text>
                            <text style={{fontSize:"13px",display:"block",marginTop:"10px",color:"gray"}}>MRP 2000</text>
                            <text style={{display:"block",fontWeight:"500"}}>1000</text>
                            <Button sx={styles.can_b} variant="contained" className='nav_b' >Add To Cart </Button>

                        </div>
                    </div>
                </Grid><Grid item xs={3}>
                    <div style={{display:"inline-block",height:"390px",width:"300px",borderRadius:"10px",overflow:"hidden",border:"1px solid gray"}}>
                        <div style={{display:"block",background:"black",height:"140px"}}>
                            hii
                        </div>
                        <div style={{display:"block",padding:"10px"}}>
                            <text style={{fontSize:"25px",fontWeight:"500",display:"block"}}>Product Title</text>
                            <text style={{fontSize:"13px",display:"block" ,margin:"5px",color:"gray"}}>Learn More</text>
                            <text style={{fontSize:"13px",display:"block",color:"gray"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ...</text>
                            <text style={{fontSize:"13px",display:"block",marginTop:"10px",color:"gray"}}>MRP 2000</text>
                            <text style={{display:"block",fontWeight:"500"}}>1000</text>
                            <Button sx={styles.can_b} variant="contained" className='nav_b' >Add To Cart </Button>

                        </div>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProductCard;
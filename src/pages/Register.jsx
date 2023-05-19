import React from 'react';
import './Register.css';
import {Button} from '@mui/material';

const styles = {
    can_b:{
        "&.MuiButton-root": {
            border: "1px solid #f14d54",
            bgcolor: "#f14d54",
          },
          "&.MuiButton-contained": {
            color: "white",
          }
    }
        
  };


function Register(props) {
    return (
        <div>
            <div className='redir'>
                Home /<span> Create an Account</span>
            </div>

            <div className='loginTitle'>
                Login or Create an Account
            </div>

            <div style={{display:"block",marginTop:"50px",marginBottom:"60px",marginLeft:"6rem",marginRight:"6rem"}}>
                <h2 style={{fontSize:"20px",fontWeight:"500",marginBottom:"20px"}}>Personal Information</h2>
                <h4 style={{fontSize:"15px",fontWeight:"300",marginTop:"20px",marginBottom:"20px"}}>Please enter the following Information to create your Account</h4>
                <div style={{width:"49%",height:"80px",display:"inline-block"}}>
                    <samp style={{display:"block"}}>Email Address:</samp>
                    <input style={{width:"100%",height:"40px"}} placeholder='email'/>
                </div>
                <div style={{width:"49%",height:"80px",display:"inline-block",marginLeft:"2%"}}>
                    <samp style={{display:"block"}}>Email Address:</samp>
                    <input style={{width:"100%",height:"40px"}} placeholder='email'/>
                </div>
                <samp style={{display:"block"}}>Email Address:</samp>
                <input style={{width:"100%",height:"40px"}} placeholder='email'/>
                
                <h2 style={{fontSize:"20px",fontWeight:"500",marginTop:"70px",marginBottom:"20px"}}>Login Information</h2>
                <div style={{width:"49%",height:"80px",display:"inline-block"}}>
                    <samp style={{display:"block"}}>Email Address:</samp>
                    <input style={{width:"100%",height:"40px"}} placeholder='email'/>
                </div>
                <div style={{width:"49%",height:"80px",display:"inline-block",marginLeft:"2%"}}>
                    <samp style={{display:"block"}}>Email Address:</samp>
                    <input style={{width:"100%",height:"40px"}} placeholder='email'/>
                </div>

                <Button sx={styles.can_b} variant="contained" className='nav_b' >Register </Button>
            
            </div>
        </div>
    );
}

export default Register;
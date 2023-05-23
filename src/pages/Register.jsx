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

            <div className='regPage'>
                <h2 className='regPageTitle'>Personal Information</h2>
                <h4 className='regPageSubTitle'>Please enter the following Information to create your Account</h4>
                <div className='inpType1'>
                    <samp className='inpTitle'>First Name:</samp>
                    <input className='inpBox'/>
                </div>
                <div className='inpType1 m2p'>
                    <samp className='inpTitle'>Last Name:</samp>
                    <input className='inpBox'/>
                </div>
                <samp className='inpTitle'>Email Address:</samp>
                <input className='inpBox'/>
                
                <h2 className='regPageTitle' style={{marginTop:"70px"}}>Login Information</h2>
                <div className='inpType1'>
                    <samp className='inpTitle'>Password:</samp>
                    <input className='inpBox'/>
                </div>
                <div className='inpType1 m2p'>
                    <samp className='inpTitle'>Conferm Password:</samp>
                    <input className='inpBox'/>
                </div>

                <Button sx={styles.can_b} variant="contained" className='nav_b' >Register </Button>
            
            </div>
        </div>
    );
}

export default Register;
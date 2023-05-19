import React from 'react';
import './Login.css';
import {Button} from '@mui/material';
import { useNavigate } from "react-router-dom";

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

function Login(props) {
    const navigate = useNavigate();
    return (
        <div>
            <div className='redir'>
                Home /<span> Login</span>
            </div>

            <div className='loginTitle'>
                Login or Create an Account
            </div>

            <div className='mainLoginDiv'>
                <div className='createAccount'>
                    <samp className='heading'>New Customer</samp>
                    <samp className='subHeading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</samp>
                    <ul className='regList'>
                        <li>Enim nec dui nunc mattis enim ut tellus elementum sagittis</li>
                        <li>Amet commodo nulla facilisi nullam vehicula ipsum a</li>
                        <li>A scelerisque purus semper eget duis at tellus at urna</li>
                    </ul>

                    <Button sx={styles.can_b} variant="contained" className='nav_b' onClick={()=>{navigate("/register")}}>Create an Account </Button>
                </div>
                <div className='loginForm'>
                    <samp className='heading'>Registered Customer</samp>
                    <samp className='subHeading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</samp>
                    <samp className='inpTitle'>Email Address:</samp>
                    <input className='inpBox'  placeholder='email'/>
                    <samp className='inpTitle'>Email Address:</samp>
                    <input className='inpBox' placeholder='email'/>

                    <Button sx={styles.can_b} variant="contained" className='nav_b' >Login</Button>
                </div>
            </div>
        </div>
    );
}

export default Login;
import React from 'react';
import { Link, Outlet } from "react-router-dom";
import './Header.css'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const styles = {
    nav_b:{
        "&.MuiButton-root": {
            border: "1px solid #f14d54"
          },
          "&.MuiButton-outlined": {
            color: "#f14d54"
          }
    }
        
  };



function Header(props) {
    const navigate = useNavigate();

    return (
        <div  >
            <ul className='nav'>
                <div>
                    <img height={'40px'}
                    src={process.env.PUBLIC_URL + "logo.png"} />
                </div>
                <div>    
                    <li className='nav_b'><Button sx={styles.nav_b} variant="outlined" className='nav_b' size="small" onClick={()=>{navigate("/login")}}>Login</Button></li>
                    <li className='nav_b'><Button sx={styles.nav_b} variant="outlined" className='nav_b' size="small" onClick={()=>{navigate("/register")}}>Register</Button></li>
                    <li className='nav_b'><Button sx={styles.nav_b} variant="outlined" className='nav_b' size="small" >Card</Button></li>
                </div>
            </ul>
            <Outlet/>
        </div>
    );
}

export default Header;
import React from 'react';
import { Link, Outlet } from "react-router-dom";
import './Header.css'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import SearchBar from './SearchBar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const styles = {
    nav_b:{
        "&.MuiButton-root": {
            border: "1px solid rgb(65,65,65)"
          },
          "&.MuiButton-outlined": {
            color:"rgb(65,65,65)"
          }
    },
    nav_a:{
          "&.MuiButton-secondary": {
            color: "#f14d54"
          }
    }
        
  };



function Header(props) {
    const navigate = useNavigate();

    return (
        <>
            <ul className='nav'>
                <div>
                    <img height={'40px'}
                    src={process.env.PUBLIC_URL + "logo.png"} />
                </div>
                <div>    
                    <li style={{listStyle:"none",display:"inline"}} className='nav_b'><Button sx={styles.nav_a} variant="secondary" className='nav_b' size="small" onClick={()=>{navigate("/login")}}>Login</Button></li>
                    <li style={{listStyle:"none",display:"inline"}}>|</li>
                    <li style={{listStyle:"none",display:"inline"}} className='nav_b'><Button sx={styles.nav_a} variant="secondary" className='nav_b' size="small" onClick={()=>{navigate("/register")}}>Register</Button></li>
                    <li style={{listStyle:"none",display:"inline"}} className='nav_b'><Button sx={styles.nav_b} variant="outlined" className='nav_b' size="small" onClick={()=>{navigate("/cartPage")}}><ShoppingCartIcon style={{color:'red'}} size="small"/> 0 Card</Button></li>
                </div>
            </ul>
            <SearchBar/>
        </>
    );
}

export default Header;
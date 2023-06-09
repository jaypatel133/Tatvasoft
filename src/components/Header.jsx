import React, { useEffect ,useState}  from 'react';
import './Header.css'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import SearchBar from './SearchBar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAuth,useUpdateAuth } from '../Context/authContext';
import { useCart } from '../Context/cartContext';


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
    const user = useAuth()
    const {logout} = useUpdateAuth();
    const cart = useCart();
    const [total,setTotal] = new useState(0);

    useEffect(()=>{
        if(cart)
        {
            setTotal(cart.length)
        }    
    },[cart])





    return (
        <>
            <ul className='nav'>
                <div>
                    <img height={'40px'} alt='TatvaSoft'
                    src={process.env.PUBLIC_URL + "logo.png"} />
                </div>
                <div>    
                    {user == null ? 
                    <>
                        <li style={{listStyle:"none",display:"inline"}} className='nav_b'><Button sx={styles.nav_a} variant="secondary" className='nav_b' size="small" onClick={()=>{navigate("/login")}}>Login</Button></li>
                        <li style={{listStyle:"none",display:"inline"}}>|</li>
                        <li style={{listStyle:"none",display:"inline"}} className='nav_b'><Button sx={styles.nav_a} variant="secondary" className='nav_b' size="small" onClick={()=>{navigate("/register")}}>Register</Button></li>
                    </>
                    :
                    <>
                        <li style={{listStyle:"none",display:"inline"}} className='nav_b'><Button sx={styles.nav_a} variant="secondary" className='nav_b' size="small" onClick={()=>logout()}>Logout</Button></li>
                        <li style={{listStyle:"none",display:"inline"}}>|</li>
                        <li style={{listStyle:"none",display:"inline"}} className='nav_b'><Button sx={styles.nav_a} variant="secondary" className='nav_b' size="small" onClick={()=>{navigate("/productListPage")}}>ProductList</Button></li>
                    </>
                    }
                    <li style={{listStyle:"none",display:"inline"}} className='nav_b'><Button sx={styles.nav_b} variant="outlined" className='nav_b' size="small" onClick={()=>{navigate("/cartPage")}}><ShoppingCartIcon style={{color:'red'}} size="small"/> {total} Card</Button></li>
                </div>
            </ul>
            <SearchBar/>
        </>
    );
}

export default Header;
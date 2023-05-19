import React from 'react';
import { TextField,Button} from '@mui/material';
import {Search} from '@mui/icons-material';
import './SearchBar.css'
import { bgcolor } from '@mui/system';

const styles = {
    sea_b:{
        "&.MuiButton-root": {
            border: "1px solid #80be32",
            bgcolor: "#80be32",
            margin: "10px"
          },
          "&.MuiButton-contained": {
            color: "white",
          }
    }
    ,can_b:{
        "&.MuiButton-root": {
            border: "1px solid #f14d54",
            bgcolor: "#f14d54",
          },
          "&.MuiButton-contained": {
            color: "white",
          }
    }
        
  };


function SearchBar(props) {
    return (
        <div className='searchBar'>
            <input className='se' placeholder='search'/>
            <Button sx={styles.sea_b} variant="contained" className='nav_b' startIcon={<Search/>}>Search</Button>
            <Button sx={styles.can_b} variant="contained" className='nav_b' >Cancel </Button>
        </div>
    );
}

export default SearchBar;
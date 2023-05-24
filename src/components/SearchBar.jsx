import React, { useEffect, useState } from 'react';
import { Button} from '@mui/material';
import {Search} from '@mui/icons-material';
import './SearchBar.css'
import useAutocomplete from '@mui/base/useAutocomplete';
import { styled } from '@mui/system';

const Listbox = styled('ul')(({ theme }) => ({
  width: "422px",
  margin: 0,
  padding: "5px",
  zIndex: 1,
  position: 'absolute',
  listStyle: 'none',
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#000',
  overflow: 'auto',
  maxHeight: 200,
  border: '1px solid rgba(0,0,0,.25)',
}));

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

  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: 'use-autocomplete-demo',
    options: top10Films,
    getOptionLabel: (option) => option.title,
    onOpen: () => SetFocus(true),
    onClose:()=>SetFocus(false)
  });

  const[focus,SetFocus] = new useState(false);

useEffect(()=>{
  console.log(focus)
},[focus])
    return (
        <div className='searchBar' >
          <div  {...getRootProps()}>
          <input {...getInputProps()} className='se' placeholder='search'/>
              {groupedOptions.length > 0 ? (
                <Listbox {...getListboxProps()}>
                  {groupedOptions.map((option, index) => (
                    <div {...getOptionProps({ option, index })} style={{display:"block",margin:"15px"}}>
                    <div style={{display:"block",width:"100%"}}>
                      <div style={{display:"inline-block",width:"75%",fontSize:"17px",fontWeight:"500"}}>{option.title}</div>
                      <div style={{display:"inline-block",textAlign:"right",width:"25%" ,fontSize:"17px",fontWeight:"500"}}>{option.year}</div>
                    </div>
                    <div style={{display:"block",width:"100%"}}>
                      <div style={{display:"inline-block",width:"75%",fontSize:"14px",fontWeight:"300",color:"gray"}}>category</div>
                      <div style={{display:"inline-block",textAlign:"right",width:"25%",fontSize:"15px",fontWeight:"300",color:"#f14d54"}}>Add to cart</div>
                    </div>
                    <li  style={{display:"block",width:"300px",fontSize:"14px",fontWeight:"300",color:"gray"}}>Description</li>
                    
                    </div>
                  ))}
                </Listbox>
              ) : focus? (<Listbox><li  style={{display:"block",width:"300px"}}>No Product Found</li></Listbox>) : null}
              
          </div>
           
          <Button sx={styles.sea_b} variant="contained" className='nav_b' startIcon={<Search/>}>Search</Button>
          <Button sx={styles.can_b} variant="contained" className='nav_b' >Cancel </Button>
        </div>
    );
}

const top10Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 }
];

export default SearchBar;
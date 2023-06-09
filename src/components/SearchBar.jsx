import React, { useEffect, useState } from 'react';
import { Button} from '@mui/material';
// import {Search} from '@mui/icons-material';
import './SearchBar.css'
import useAutocomplete from '@mui/base/useAutocomplete';
import { styled } from '@mui/system';
import {getAllBook} from '../service/book.service';
import { useUpdateCart } from '../Context/cartContext';
// import {searchBook} from '../service/book.service';


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
            margin: "10px"
          },
          "&.MuiButton-contained": {
            color: "white",
          }
    }
        
  };


function SearchBar(props) {
  const {addToCart} = useUpdateCart();
  const [books,setBooks] = useState([]);
  
  useEffect(()=>{
    getAllBook().then(res=>{
      setBooks(res)
    })
  },[])

  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    getClearProps,
    groupedOptions,
    // inputValue,
  } = useAutocomplete({
    id: 'use-autocomplete-demo',
    options: books,
    getOptionLabel: (option) => option.name ,
    onOpen: () => SetFocus(true),
    onClose:()=>SetFocus(false),
    // onInputChange:(event,value)=>{
    //   if(value!=='')
    //   {
    //     searchBook(value).then((res)=>{
    //       if(value !== '')
    //       {
    //         console.log(res?.data?.result)
    //       }
    //     })
    //   }   
    // }
  });
  const[focus,SetFocus] = new useState(false);

    return (
        <div className='searchBar' >

          <div  {...getRootProps()}>
          <input {...getInputProps()} className='se' placeholder='search'/>
              {groupedOptions.length > 0 ? (
                <Listbox {...getListboxProps()}>
                  {groupedOptions.map((option, index) => (
                  
                    <div {...getOptionProps({ option, index })} style={{display:"block",margin:"15px"}}>
                    <div style={{display:"block",width:"100%"}}>
                      <div style={{display:"inline-block",width:"75%",fontSize:"17px",fontWeight:"500"}}>{option.name}</div>
                      <div style={{display:"inline-block",textAlign:"right",width:"25%" ,fontSize:"17px",fontWeight:"500"}}>{option.price}</div>
                    </div>
                    <div style={{display:"block",width:"100%"}}>
                      <div style={{display:"inline-block",width:"75%",fontSize:"14px",fontWeight:"300",color:"gray"}}>
                      {option.description.length > 45 ? option.description.slice(0,43)+'...' : option.description }
                      </div>
                      <div style={{display:"inline-block",textAlign:"right",width:"25%",fontSize:"15px",fontWeight:"300",color:"#f14d54"}}
                      onClick={()=>{addToCart({bookId: option.id,quantity:1})}}
                      >Add to cart</div>
                    </div>
                    {/* <li  style={{display:"block",width:"300px",fontSize:"14px",fontWeight:"300",color:"gray"}}>Description</li> */}
                    
                    </div>
                  ))}
                </Listbox>
              ) : focus? (<Listbox><li  style={{display:"block",width:"300px"}}>No Product Found</li></Listbox>) : null}
              
          </div>
           
          {/* <Button sx={styles.sea_b} variant="contained" className='nav_b' onClick={()=>{
            searchBook(inputValue).then((res)=>{
              console.log(res);
            })
          }} startIcon={<Search/>}>Search</Button> */}
          <Button {...getClearProps()} sx={styles.can_b} variant="contained" className='nav_b' >Cancel </Button>
        </div>
    );
}

export default SearchBar;
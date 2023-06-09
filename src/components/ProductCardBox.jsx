import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import ProductCardItem from './ProductCardItem';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import {GetPaginatedListBook} from '../service/book.service';
import {Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import { Search } from '@mui/icons-material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const styles = {
    can_b:{
        "&.MuiButton-root": {
            border: "1px solid #80be32",
            bgcolor: "#80be32",
            marginLeft:'10px'
          },
          "&.MuiButton-contained": {
            color: "white",
          }
    },
    input:
    {
        width: "200px",
    }
        
};



const theme = createTheme({
    palette: {
      primary: {
        main: '#f14d54',
      }
    },
  });

const ProductCardBox = () => {
    const [page, setPage] = React.useState(1);
    const [pageCount, setPageCount] = React.useState(1);
    const [pageItems,setPageItems] = React.useState();
    const [search,setSearch] = React.useState();
    const [searchValue,setSearchValue] = React.useState();
    const [sorting,setSorting] = React.useState(0);

    const handleChange = (event, value) => {
        setPage(value);
    };

    useEffect(()=>{
        let payload = '?pageSize=8&pageIndex='+ page
        if(search)
        {
            
            payload += '&keyword='+search
        }
        GetPaginatedListBook(payload).then((res)=>{
            console.log(res);
            setPageCount(res.totalPages)
            const item = res
            if(sorting !== 0)
            {
                item.sort((a, b) => {
                    let fa = a.name.toLowerCase(),
                        fb = b.name.toLowerCase();
                
                    if (fa < fb) {
                        return -1;
                    }
                    if (fa > fb) {
                        return 1;
                    }
                    return 0;
                })

                if(sorting === 2)
                {
                    item.reverse()
                }
            }
            setPageItems(res.items.map((item)=>{
                return <ProductCardItem id={item.id} img={item.base64image} category={item.category} name={item.name} price={item.price} description={item.description}/>
            }))
        })
    },[page,search,sorting])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <div className='productPageSearchBar'>
                <TextField sx={styles.input} size='small' placeholder='search' onChange={(event)=>{
                    setSearchValue(event.target.value)
                    }}/>
                <Button sx={styles.can_b} variant="contained" startIcon={<Search/>} onClick={()=>{
                    setSearch(searchValue)
                }}>Search </Button>
                <Select size='small' value={sorting} onChange={(event)=>{setSorting(event.target.value)}} sx={{marginLeft:"10px",width:"85px"}}>
                    <MenuItem value={0}>none</MenuItem>
                    <MenuItem value={1}>a-z</MenuItem>
                    <MenuItem value={2}>z-a</MenuItem>
                </Select>
            </div>
            <Grid container spacing={2}>
                {pageItems}
            </Grid>
            <div style={{display:"flex",justifyContent:"center",marginTop:"20px",marginBottom:"20px"}}>
            <ThemeProvider theme={theme}>
                <Pagination count={pageCount} page={page} onChange={handleChange} color='primary'/>
            </ThemeProvider>
            </div>
        </Box>
    );
};

export default ProductCardBox;
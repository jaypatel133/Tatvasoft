import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button} from '@mui/material';
import { GetPaginatedCategory,DeleteCategory } from '../service/category.service';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import ConfirmationDialog from './ConfirmationDialog';
import { toast } from 'react-toastify';



const columns = [
  { id: 'id', label: 'Id', minWidth: 100 },
  { id: 'name', label: 'Name', minWidth: 100 },
  {
    id: 'button',
    label: '',
    minWidth: 240,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

const styles = {
  can_b:{
      "&.MuiButton-root": {
          border: "1px solid #f14d54",
          bgcolor: "#f14d54",
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

export default function CategoryTabel() {
  const [page, setPage] = React.useState(0);
  const [open, setOpen] = React.useState(0);
  const [selectedId, setSelectedId] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState();
  const [totalRows, setTotalRows] = React.useState();
  const [search,setSearch] = React.useState();
  const navigate = useNavigate();


  React.useEffect(()=>{
    const page_no = page+1
    console.log('pn:',page_no)
    let payload = '?pageSize='+rowsPerPage+'&pageIndex='+page_no
    if(search)
        {
            payload += '&keyword='+search
            setPage(0)
        }
    GetPaginatedCategory(payload).then((res)=>{
      console.log(res)
      setTotalRows(res.totalItems)
      setRows(res.items)
    })
  },[search,page,rowsPerPage])


  const handleChangePage = (event, newPage) => {
    console.log('page: ',newPage)
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const onConfirmDelete = () => {
    DeleteCategory(selectedId).then((res)=>{
      toast.success("Category deleted")
      setOpen(false)
    })
}

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <div className='productPageSearchBar'>
        <TextField sx={styles.input} size='small' placeholder='search' onChange={(event)=>{setSearch(event.target.value)}}/>
        <Button sx={styles.can_b} variant="contained" onClick={()=>{
          navigate('/editCategory')
          }}>Add Category</Button>
      </div>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows && rows
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                            {column.id === 'button' && <ProducButton id={row['id']} setOpen={setOpen} setSelectedId={setSelectedId}/>}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={totalRows}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

        <ConfirmationDialog
          open={open}
          onClose={() => setOpen(false)}
          onConfirm={() => onConfirmDelete()}
          title="Delete User"
          description="Are you sure you want to delete this Category?"
        />
    </Paper>
  );
}


function ProducButton(props){
    
    const styles = {
        sea_b:{
            "&.MuiButton-root": {
                border: "1px solid #80be32",
                // bgcolor: "#80be32",
                margin: "10px"
              },
              "&.MuiButton-outlined": {
                color: "#80be32",
                
              }
        }
        ,can_b:{
            "&.MuiButton-root": {
                border: "1px solid #f14d54",
                // bgcolor: "#f14d54",
              },
              "&.MuiButton-outlined": {
                color: "#f14d54",
              }
        }
            
      };
    
    const navigate = useNavigate();

      
    return(
        <div>
            <Button sx={styles.sea_b} variant="outlined" className='nav_b' onClick={()=>{navigate("/editCategory",{ state: { id: props.id} })}}>Edit</Button>
            <Button sx={styles.can_b} variant="outlined" className='nav_b' onClick={()=>{props.setOpen(true); props.setSelectedId(props.id)}}>delete </Button>
        </div>
    );
}
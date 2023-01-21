import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import './AdminPage.scss';
import { Button } from '@mui/material';
const BaseUrl = "https://votingvv2.onrender.com/"



const AdminPage = () => {
    const [DataJS,setDataJS] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    
            React.useEffect(()=>{
                fetch(BaseUrl+'fetchall')
                .then(res=>res.json())
                .then(result=>{
                  setDataJS(result);
                  setLoading(false);
                })

                .catch(error=>console.log(error));
            },[]);

const handleDeleteHandler = () =>{
    fetch(BaseUrl+'DeleteAll',{
        method: 'DELETE'})
    .then(result=>{
        console.log(result)
        setDataJS([]);
    })
    .catch(error=>console.log(error));
}

  return (
    <div>
        
   {loading &&  <CircularProgress />}

  {!loading && 
      <TableContainer component={Paper} className="TableContainer" sx={{ maxHeight: 500 }}>
      <div className='BtnContainer' >
      <Button onClick={handleDeleteHandler} variant="outlined" color="error" className='Btn'>
          Clear All Data
          </Button>
      </div>
      <Table sx={{ minWidth: 100 }} aria-label="sticky table" stickyHeader>



      <TableHead sx={{ display: "table-header-group" }}>

        <TableRow>
          <TableCell>S.No</TableCell>
          <TableCell align="right">General Secretary</TableCell>
          <TableCell align="right">Join Secretary</TableCell>
        </TableRow>

      </TableHead>
      

          <TableBody>
          {DataJS.val?.map((row,index) => (
              <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
              <TableCell component="th" scope="row">
                {index+1}
              </TableCell>
              <TableCell align="right">{row.GeneralSec}</TableCell>
              <TableCell align="right">{row.JoinSec}</TableCell>
                
            </TableRow>
              
          ))}
        </TableBody>

        
      </Table>
      </TableContainer>
  }
      
      
    </div>
   
  );
}

export default AdminPage;


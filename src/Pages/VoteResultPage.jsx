import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import './VoteResult.styles.scss';
import { Grid } from '@mui/material';
const BaseUrl = "https://votingvv2.onrender.com/";



const VoteResult = () => {
    const [dataJS,setDataJS] = React.useState([]);
    const [dataGS,setDataGS] = React.useState([]);
    const [TotalCount,setTotalCount] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    // const TotalCount = VoteApi;


    React.useEffect(()=>{
        fetch(BaseUrl+'groupbyJoinSec')
        .then(res=>res.json())
        .then(result=>{

            setDataJS(result);
            setLoading(false);
        })
        .catch(error=>console.log(error));
    },[]);


    React.useEffect(()=>{
        fetch(BaseUrl+'groupbyGeneral')
        .then(res=>res.json())
        .then(result=>{
            setDataGS(result);
            setLoading(false);
        })
        .catch(error=>console.log(error));
    },[]);


    React.useEffect(() => {
        // Make a GET request to your API endpoint that returns the collection count
        fetch(BaseUrl+'collection-count')
          .then(res => res.json())
          .then(data => setTotalCount(data.count))
          .catch(error => console.log(error));
      }, []);


  return (
    <div>

<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="WinnerListContainer">

  <Grid item xs={6} >
        <h1 className='GSTitle'><span className='subTitleListGS'>General Secretary </span>List</h1>
        <div className='GSList'>

            {loading &&  <CircularProgress />}

            {!loading && 
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} className="WinnerList">
            {dataGS.map((item,index) => (
                <div key={item._id}>
                        <ListItem alignItems="flex-start">
                            <h1 className='TopList'>{index+1}</h1>
                            <ListItemText
                            primary={item._id}
                            secondary={
                                <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                   Vote count  : <span className='VotesCount'>{item.count}</span>
                                </Typography>
                                
                                </React.Fragment>
                            }
                            />
                        </ListItem>
                <Divider variant="inset" component="li" />
                </div>
                
            ))}
                
            
            </List>

            }
            
        </div>
        
        {!loading && <h3 className='TotalCounts'>Total voter participation: <span className='Counts'>{TotalCount}</span></h3>}

  </Grid>

  
  <Grid item xs={6}  className="WinnerListJS">
        <h1 className='JSTitle'><span className='subTitleListJS'>Joint Secretary </span>List</h1>
        <div className='GSList'>
        {loading &&  <CircularProgress />}

        {!loading && 
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} className="WinnerList">
                {dataJS.map((item,index)=>(
                    <div key={item._id}>
                    <ListItem alignItems="flex-start" >
                    <h1 className='TopList'>{index+1}</h1>
    
                        <ListItemText
                        primary={item._id}
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Vote count : <span className='VotesCount'>{item.count}</span>
                            </Typography>
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                   
                    </div>
                    
                ))}
                
                
              
            </List>
        }
        </div>
  </Grid>
</Grid>
      
    </div>
  );
}

export default VoteResult;
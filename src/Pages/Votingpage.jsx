import * as React from 'react';
import { Paper,FormControl,InputLabel,MenuItem,FormHelperText,Select,Button } from '@mui/material';
import './VotingResult.styles.scss'
import OutlinedInput from '@mui/material/OutlinedInput';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';


const VotingPage = () => {

  // Alert Box
  const [open, setOpen] = React.useState(false);
  const [alert, setalert] = React.useState(false);
  const [VotingFormContainer, setVotingFormContainer] = React.useState(true);


  const handleClickOpen = () => {
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
  };

  var beep = document.getElementById("myAudio"); 

  const handleSuccess = () => {
    
      beep.play();
    setTimeout(() => {
      beep.pause();
    }, 3000);


    setalert(true);
    setVotingFormContainer(false);
    setTimeout(() => {
      setalert(false);
    }, 5000); // 1 minute in milliseconds
  }

  


  const [candid, setCandid] = React.useState('');

  const handleChange = (event) => {
    setCandid(event.target.value);
  };

  return (
    <div>
      {

    alert ? <Alert variant="filled" severity="success"  className='AlertBox'>
        Thank you for participating in the voting process. Your vote has been recorded.
     </Alert> : null

      }


    <div>
      {
        VotingFormContainer ? 
      
        <div className='VotingFormContainer'>
      
              <h1 className='voteForm'><span className='subtitle'><span className='subLet'>V</span>oting</span><span className='subLet'>F</span>orm</h1>
            <Paper variant="outlined" className='Card'>
      
          <FormControl className='VoteForm'>
            <InputLabel id="demo-simple-select-label" className='label'>General Secretary</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="GS"
                input={<OutlinedInput label="General Secretary" />}
              >
                <MenuItem value={10}>THOUFEEQ</MenuItem>
                <MenuItem value={20}>JANA</MenuItem>
                <MenuItem value={30}>MEGAVANNAN</MenuItem>
                <MenuItem value={40}>ABHIRAJ SINGH</MenuItem>
      
              </Select>
      
              <FormHelperText className='label'>Please select general secretary</FormHelperText>
          </FormControl>
      
          <FormControl className='VoteForm'>
            <InputLabel id="demo-simple-select-label" className='label'>Join Secretary</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="JS" className='label'
                input={<OutlinedInput label="Join Secretary" />}
                >
                <MenuItem value={50}>CATHLYN JEBA GOLDY</MenuItem>
                <MenuItem value={60}>NIKITHA</MenuItem>
                <MenuItem value={70}>KAYALVIZHI</MenuItem>
                <MenuItem value={80}>ARIVUMATHI</MenuItem>
                <MenuItem value={90}>MADHUMITHA</MenuItem>
              </Select>
      
              <FormHelperText className='label'>Please select join secretary</FormHelperText>
          </FormControl>
      
      
          <Button variant="contained" endIcon={<HowToVoteIcon style={{marginBottom:"8px"}}/>} onClick={handleClickOpen} className="sumbitVote">Sumbit Vote </Button>
      
            </Paper>
      
      
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Are you sure you want to submit your vote?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                Once submitted, your vote cannot be changed.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>No</Button>
                <Button onClick={handleSuccess} autoFocus>
                  Yes
                </Button>
              </DialogActions>
            </Dialog>
      
            
        </div> : null
      } 

    </div>
 
    <audio id="myAudio">
              <source src="https://www.soundjay.com/misc/sounds/magic-chime-06.mp3" type="audio/mpeg"/>
            </audio>  


</div>
  );
}

export default VotingPage;
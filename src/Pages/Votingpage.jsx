import * as React from 'react';
import { Paper,FormControl,InputLabel,MenuItem,FormHelperText,Select,Button } from '@mui/material';
import './VotingForm.styles.scss'
import OutlinedInput from '@mui/material/OutlinedInput';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";
const BaseUrl = "https://votingvv2.onrender.com/"





const VotingPage = () => {
  const navigate = useNavigate();


  // Alert Box
  const [open, setOpen] = React.useState(false);
  const [alert, setalert] = React.useState(false);
  const [VotingFormContainer, setVotingFormContainer] = React.useState(true);
  const [GS, setGS] = React.useState('');
  const [JS, setJS] = React.useState('');
  


  var beep = document.getElementById("myAudio"); 

    
  const handleSuccess = async (e) => {
  

   // Playing the Beep Sound
     beep.play();
        setTimeout(() => {
          beep.pause();
        }, 5000);


   // Showing Success Alert 
   setalert(true);
   setVotingFormContainer(false);
   setTimeout(() => {
     
     setalert(false);
     navigate('/');
    
   }, 5000); // 1 minute in milliseconds


     // To store the data in backend
     e.preventDefault();
     console.log("Form Submitted");
     const data = { GeneralSec:GS, JoinSec:JS };
     try {
       const response = await fetch(BaseUrl+'store', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(data)
       });
       const json = await response.json();
       console.log(json);
       console.log("Succesully stored");
     } catch (error) {
       console.log("Error occured");
       console.log(error);
     }
 
 }


  const handleClickOpen = () => {
    if(GS != '' && JS != ''){
      setOpen(true);
    }
  };


  const handleClose = () => {
    setOpen(false);
  };



  // Select JS and GS listener
  const handleChangeGS = (event) => {
    setGS(event.target.value);
  };

  const handleChangeJS = (event) => {
    setJS(event.target.value);
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
            <form>
            <Paper variant="outlined" className='Card'>

          <FormControl className='VoteForm'>
            <InputLabel id="demo-simple-select-label" className='label'>General Secretary</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="GS"
                input={<OutlinedInput label="General Secretary" 
                value={GS}
                onChange = {handleChangeGS}
                />}
              >
                <MenuItem value={"THOUFEEQ"}>THOUFEEQ</MenuItem>
                <MenuItem value={"JANA"}>JANA</MenuItem>
                <MenuItem value={"MEGAVANNAN"}>MEGAVANNAN</MenuItem>
                <MenuItem value={"ABHIRAJ_SINGH"}>ABHIRAJ SINGH</MenuItem>
              </Select>
      
              <FormHelperText className='label'>Please select general secretary</FormHelperText>
          </FormControl>


      
          <FormControl className='VoteForm'>
            <InputLabel id="demo-simple-select-label" className='label'>Join Secretary</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="JS" className='label'
                input={<OutlinedInput label="Join Secretary"
                value={JS}
                onChange = {handleChangeJS}
                
                 />}
                >
                <MenuItem value={"CATHLYN JEBA GOLDY"}>CATHLYN JEBA GOLDY</MenuItem>
                <MenuItem value={"NIKITHA"}>NIKITHA</MenuItem>
                <MenuItem value={"KAYALVIZHI"}>KAYALVIZHI</MenuItem>
                <MenuItem value={"ARIVUMATHI"}>ARIVUMATHI</MenuItem>
                <MenuItem value={"MADHUMITHA"}>MADHUMITHA</MenuItem>
              </Select>

              <FormHelperText className='label'>Please select join secretary</FormHelperText>
          </FormControl>


          <Button  variant="contained" endIcon={<HowToVoteIcon style={{marginBottom:"8px"}}/>} disabled={GS === '' || JS === ''}  onClick={handleClickOpen} className="sumbitVote">Sumbit Vote </Button>
      

            </Paper>

            {/* Pop message box */}
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
                <Button type="submit" onClick={handleSuccess} autoFocus>
                  Yes
                </Button>
              </DialogActions>
            </Dialog>
        </form>
            
        </div> : null
      } 

    </div>
 
    <audio id="myAudio">
              <source src="https://www.soundjay.com/buttons/sounds/beep-02.mp3" type="audio/mpeg"/>
            </audio>  

{/*  */}
</div>
  );
}

export default VotingPage;
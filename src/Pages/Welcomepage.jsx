import React from 'react';
import Button from '@mui/material/Button';
import { Grid, Typography ,Avatar} from '@mui/material';
import './Welcomepage.style.scss'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import avatar1 from '../static/images/avatar/av1.jpg';
import avatar2 from '../static/images/avatar/av2.jpg';
import avatar3 from '../static/images/avatar/av3.jpg';
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/votingPage");
  };


  return (
    <div className='welContainer'>
    <Grid className='subContainer' container spacing={2}>
      <Grid item xs={4} className="title">
         <h1 className='WelHeading'>Welcome<br></br><span className='subHead'>Voting System Application</span></h1>
         <Button variant="contained" onClick={handleClick} className='GetStartBtn' endIcon={<KeyboardArrowRightIcon style={{fontSize:"24px",marginBottom: "3px"}}/>}>Ready to Vote</Button>
      </Grid>







      <Grid item xs={8} className="VoteCandid">
        <h2 className='RoleTitle'>General Secretary Candidates</h2>
     
     


     {/* 1 */}
        <Grid container  spacing={2} minHeight={160} className="CandidGrid1">

          <Grid xs={3} display="flex" justifyContent="center" alignItems="center" className='candidGrid'>
            <Avatar src={avatar1} size="lg" className='avt'/>
            <span  className='CandidIntro'>Hi Im <span className='candidName'> THOUFEEQ  </span></span>
          </Grid>

          <Grid xs={3} display="flex" justifyContent="center" alignItems="center" className='candidGrid'>
            <Avatar src={avatar2} size="lg" className='avt'/>
            <span  className='CandidIntro'>Hi Im <span className='candidName'>JANA</span></span>

          </Grid> 
          <Grid xs={3} display="flex" justifyContent="center" alignItems="center" className='candidGrid'>
            <Avatar src={avatar3}  size="lg" className='avt'/>
            <span className='CandidIntro'>Hi Im <span className='candidName'>ABHIRAJ SINGH</span></span>

          </Grid>

          <Grid xs={3} display="flex" justifyContent="center" alignItems="center" className='candidGrid'>
            <Avatar src={avatar3}  size="lg" className='avt'/>
            <span className='CandidIntro'>Hi Im <span className='candidName'>MEGAVANNAN</span></span>

          </Grid>
        </Grid>
      



      
         <h2 className='RoleTitle' >Join Secretary Candidates</h2>
  
      
      {/* 2 */}
        <Grid container spacing={2} minHeight={160} className="CandidGrid2">

          <Grid xs={4} display="flex" justifyContent="center" alignItems="center" className='candidGrid'>
            <Avatar src={avatar1} size="lg" className='avt'/>
            <span  className='CandidIntro'>Hi Im <span className='candidName'>CATHLYN JEBA GOLDY</span> </span>
          </Grid>
          <Grid xs={4} display="flex" justifyContent="center" alignItems="center" className='candidGrid'>
            <Avatar src={avatar2} size="lg" className='avt'/>
            <span  className='CandidIntro'>Hi Im <span className='candidName'>NIKITHA</span></span>

          </Grid> 
          <Grid xs={4} display="flex" justifyContent="center" alignItems="center" className='candidGrid'>
            <Avatar src={avatar3}  size="lg" className='avt'/>
            <span className='CandidIntro'>Hi Im <span className='candidName'>KAYALVIZHI</span></span>

          </Grid>
        </Grid>
        

        <Grid container spacing={2} minHeight={160} className="CandidGrid3">
        <Grid item xs={3}>
          {/* <Item>1</Item> */}
        </Grid>
          <Grid xs={3} display="flex" justifyContent="center" alignItems="center" className='candidGrid '>
            <Avatar src={avatar1} size="lg" className='avt'/>
            <span  className='CandidIntro'>Hi Im <span className='candidName'>ARIVUMATHI</span> </span>   
          </Grid>
          <Grid xs={4} display="flex" justifyContent="center" alignItems="center" className='candidGrid '>
            <Avatar src={avatar2} size="lg" className='avt'/>
            <span  className='CandidIntro'>Hi Im <span className='candidName'>MADHUMITHA</span></span>
          </Grid> 
          <Grid item xs={2}>
          {/* <Item>1</Item> */}
        </Grid>
        </Grid>
      </Grid>
    </Grid>

    </div>
  );
}

export default WelcomePage;
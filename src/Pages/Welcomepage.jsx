import React from 'react';
import Button from '@mui/material/Button';
import { Grid, Typography ,Avatar} from '@mui/material';
import './Welcomepage.style.scss'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import Candid1 from '../static/images/Candidates edited/Abiraj.png'
import Candid2 from '../static/images/Candidates edited/Arivu.png'
import Candid3 from '../static/images/Candidates edited/cathy.png'
import Candid4 from '../static/images/Candidates edited/Jana.png'
import Candid5 from '../static/images/Candidates edited/kayal.png'
import Candid6 from '../static/images/Candidates edited/Madhu.png'
import Candid7 from '../static/images/Candidates edited/megu.png'
import Candid9 from '../static/images/Candidates edited/Niki.png'
import Candid10 from '../static/images/Candidates edited/Thoufeeq.png'
import Typewriter from "typewriter-effect";

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


  {/* <div className="type1">
      <Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
       .typeString("Welcome to")
       .pauseFor(5000)
       .deleteAll()
       .typeString("Welcome to")
       .start();
       }}
       />
    </div> */}


         <h1 className='WelHeading'>Welcome <br/><span className='subHead'>Voting System Application</span></h1>
         

         <Button variant="contained" onClick={handleClick} className='GetStartBtn' endIcon={<KeyboardArrowRightIcon style={{fontSize:"24px",marginBottom: "3px"}}/>}>Ready to Vote</Button>
      </Grid>






      <Grid item xs={8} className="VoteCandid">
        

      <div className="type2">
      <Typewriter
       onInit={(typewriter)=> {
  
       typewriter
       .typeString("General Secretary Candidates")
       .pauseFor(1000)
       .deleteAll()
       .typeString("General Secretary Candidates")
       .start();
       }}
       />
    </div>

        {/* <h2 className='RoleTitle'>General Secretary Candidates</h2> */}
     
     


     {/* 1 */}
        <Grid container  spacing={2} minHeight={160} className="CandidGrid1">

          <Grid xs={3} display="flex" justifyContent="center" alignItems="center" className='candidGrid'>
            <Avatar src={Candid10} size="lg" className='avt'/>
            <span  className='CandidIntro'>Hi I'm <span className='candidName'> THOUFEEQ  </span></span>
          </Grid>

          <Grid xs={3} display="flex" justifyContent="center" alignItems="center" className='candidGrid'>
            <Avatar src={Candid4} size="lg" className='avt'/>
            <span  className='CandidIntro'>Hi I'm <span className='candidName'>JANA</span></span>

          </Grid> 
          <Grid xs={3} display="flex" justifyContent="center" alignItems="center" className='candidGrid'>
            <Avatar src={Candid1}  size="lg" className='avt'/>
            <span className='CandidIntro'>Hi I'm <span className='candidName'>ABHIRAJ SINGH</span></span>

          </Grid>

          <Grid xs={3} display="flex" justifyContent="center" alignItems="center" className='candidGrid'>
            <Avatar src={Candid7}  size="lg" className='avt'/>
            <span className='CandidIntro'>Hi I'm <span className='candidName'>MEGAVANNAN</span></span>

          </Grid>
        </Grid>
      


        <div className="type3">
      <Typewriter
       onInit={(typewriter)=> {
  
       typewriter
       .typeString("Join Secretary Candidates")
       .pauseFor(1000)
       .deleteAll()
       .typeString("Join Secretary Candidates")
       .start();
       }}
       />
    </div>
      
         {/* <h2 className='RoleTitle' >Join Secretary Candidates</h2> */}
  
      
      {/* 2 */}
        <Grid container spacing={2} minHeight={160} className="CandidGrid2">

          <Grid xs={4} display="flex" justifyContent="center" alignItems="center" className='candidGrid'>
            <Avatar src={Candid3} size="lg" className='avt'/>
            <span  className='CandidIntro'>Hi I'm <span className='candidName'>CATHLYN JEBA GOLDY</span> </span>
          </Grid>
          <Grid xs={4} display="flex" justifyContent="center" alignItems="center" className='candidGrid'>
            <Avatar src={Candid9} size="lg" className='avt'/>
            <span  className='CandidIntro'>Hi I'm <span className='candidName'>NIKITHA</span></span>

          </Grid> 
          <Grid xs={4} display="flex" justifyContent="center" alignItems="center" className='candidGrid'>
            <Avatar src={Candid5}  size="lg" className='avt'/>
            <span className='CandidIntro'>Hi I'm <span className='candidName'>KAYALVIZHI</span></span>

          </Grid>
        </Grid>
        

        <Grid container spacing={2} minHeight={160} className="CandidGrid3">
        <Grid item xs={3}>
          {/* <Item>1</Item> */}
        </Grid>
          <Grid xs={3} display="flex" justifyContent="center" alignItems="center" className='candidGrid '>
            <Avatar src={Candid2} size="lg" className='avt'/>
            <span  className='CandidIntro'>Hi I'm <span className='candidName'>ARIVUMATHI</span> </span>   
          </Grid>
          <Grid xs={4} display="flex" justifyContent="center" alignItems="center" className='candidGrid '>
            <Avatar src={Candid6} size="lg" className='avt'/>
            <span  className='CandidIntro'>Hi I'm <span className='candidName'>MADHUMITHA</span></span>
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
const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const parser = require('body-parser');
const vote = require('./db');
const mongoose = require('mongoose');
// Render Html File
const db = require('./db')

mongoose.connect("mongodb+srv://wahid:wahid2004@cluster0.hclog.mongodb.net/voting")

app.use(parser.urlencoded({extended:false}))
app.use(express.static('./'))
app.set('view engine','ejs')

app.get('/', function(req, res) {
  res.render(path.join(__dirname, 'index.ejs'));
});

app.post('/res', (req,res)=>{
  
  gSec = req.body.gs
  jSec = req.body.js
  
  db.create({ gs:gSec,js:jSec })  
	.then(()=>{console.log("saved")})

  res.render(path.join(__dirname, 'result.ejs'),{ gs: gSec , js: jSec })
})

app.get('/count',(req,res)=>{
	
	res.render(path.join(__dirname, 'count.ejs'),{data})
})



run()

app.listen(port, () => {
  // Code.....
})

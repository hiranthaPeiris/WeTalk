var express = require('express');
var router = express.Router();
const db = require('../config/db');
const collect = "nodeTest";


db.connect((err)=>{
  if(err){
    console.log("Unable to connect");
  }else{
    console.log("connected");
  }
});

// Get Home page
router.get('/',function (req,res,next) {
    res.render('mongo',{title:'We talk mongo'});
    console.log('con@mongo');
});

//MongoDB Testing route--Only for testing purposes
router.get('/getDocs', (req,res)=> {
    db.getDB().collection(collect).find({}).toArray((err,documents)=>{
      if(err){
        console.log(err);
      }else{
        console.log(documents);
        res.send("Hello Doc");
      }
    });
  });
  
module.exports = router;
var express = require('express');
var router = express.Router();

// Get Home page
router.get('/',function (req,res,next) {
    res.render('mongo',{title:'We talk mongo'});
    console.log('con@mongo');
});

module.exports = router;
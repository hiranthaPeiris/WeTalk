var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'We Talk' });
  console.log("con@index");
});


/*
//Basic curd test functions on in function array
const courses = [
  { id: 1, name: 'Sandy' },
  { id: 2, name: 'Rashi' },
  { id: 3, name: 'Hirantha' }
];
router.get('/api/courses', (req, res) => {
  res.send(courses);
});


router.get('/api/courses/:id', (req, res) => {
  const coures = courses.find(c => c.id == parseInt(req.params.id));
  if (!coures) {
    res.status(404).send("Not found");
  } else {
    res.send(coures)
  }
});

router.put('/api/courses/:id', (req, res) => {
  //get filtered
  const course = courses.find(c => c.id == parseInt(req.params.id));
  //check null
  if (!course) {
    res.status(404).send("Name not found");
    return;
  }

  //validation using Joi
  const result = validationCourse(req.body);

  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }
  //updating 
  course.name = req.body.name;
  res.send(course);

});


router.post('/api/courses', (req, res) => {

  const result = validationCourse(req.body);

  if (result.error) {
    //send 400 bad request
    res.status(400).send(result.error.details[0].message);
    return;
  }
  const coures = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(coures);
  res.send(courses);
});

router.get('/api/dates/:year/:month', (req, res) => {
  res.send(req.params);
});

router.delete('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id == parseInt(req.params.id));

  if (!course) {
    res.status(404).send("Name not found");
    return;
  }

  //get index of relevent id
  const index = courses.indexOf(course);

  //delete from the main array

  courses.splice(index, 1);
  res.send(course);
});

function validationCourse(course) {
  const schema = {
    name: Joi.string().min(3).required()
  };
  return Joi.validate(course, schema);
}*/
module.exports = router;

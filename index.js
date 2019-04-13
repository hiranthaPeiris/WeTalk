const express = require('express');
const app = express();

app.use(express.json());


const courses = [
    { id: 1, name: 'Sandy' },
    { id: 2, name: 'Rashi' },
    { id: 3, name: 'Hirantha'}
];

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.get('/api/courses/:id', (req, res) => {
    const coures = courses.find(c => c.id == parseInt(req.params.id));
    if (!coures) {
        res.status(404).send("Not found");
    } else {
        res.send(coures)
    }
});

app.post('/api/courses', (req, res) => {
    if (!req.body.name || req.body.name.length<3){
        //send 400 bad request
        res.status(400).send("Bad request");
        return;
    }
    const coures = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(coures);
    res.send(courses);
});

app.get('/api/dates/:year/:month', (req, res) => {
    res.send(req.params);
});

const port = process.env.port || 3000;

app.listen(port, () => console.log(`app listing to port ${port}`));
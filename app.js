const express = require("express");
const fs = require('fs');
const path = require("path");
const { render } = require("pug");
const port = 80;
const app = express();

// for serving static files
app.use("/static", express.static('static'));
app.use(express.urlencoded());
// pug setup
app.set('view engine', 'pug'); // set the template engien as pug
app.set('views', path.join(__dirname, 'views')); // set the views directory

//End points
app.get('/', (req, res) => {
    // const params=
    res.status(200).render('index.pug');
})
app.post('/', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const gender = req.body.gender;
    const address = req.body.address;
    const more = req.body.more;
    const outputtowrite = `The name of client is ${name}, ${age} old`;
    fs.writeFileSync('output.txt', outputtowrite);
    const con = 'this is the best';
    const params = { 'title': 'Your form submitted successfully', 'content': con }
    res.status(200).render('index.pug', params);
})
app.listen(port, (req, res) => {
    console.log(`application start at port ${port}`);
})
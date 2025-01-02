const express = require('express')
const ejs = require('ejs')
const app = express()

app.set('view engine', 'ejs');

const buzzed = ""
const queue = []

//Routing

app.get("/buzzIn", (req, res) => {
    const name = req.query.name;
    queue.push(name)
});

app.get("/nextQuestion", (req, res) => {
    queue.length = 0
});

app.get("/getQueue", (req, res) => {
    res.json({list: queue})
});

app.get('/', (req, res) => {
    res.render('players');
});

app.get('/master', (req, res) => {
    res.render('gameMaster');
})

//Port Listening
app.listen(50001, '0.0.0.0', () => {
    console.log("Server started on port 50001.");
});


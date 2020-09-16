const express = require('express');
const app = express();
const port = 3000;

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.post('/', function (req, res) {
    const address = req.body;
    console.log(address);
    res.send(address);
});

const http = require('http');
const express = require('express');

http
    .createServer((req, res) =>{
        console.log(req);
        return res.end('Hello word!!');
    }).listen(3000);

const app = express();

app.get('/',(req, res) => {
    return res.send(`Bem vindo, ${req.query.name}`);
});

app.get('/nome/:name',(req, res) => {
    //return res.send(`Bem vindo,  ${req.params.name}`);
    return res.json({
        message:`Bem vindo, ${req.params.name}`
    })
});
app.listen(3001);
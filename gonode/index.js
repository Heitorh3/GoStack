const http = require('http');
const express = require('express');

http
    .createServer((req, res) =>{
        console.log(req);
        return res.end('Hello word!!');
    }).listen(3000);

const app = express();

const logMiddleware = (req, res, next) => {
    console.log(
        `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`);
    req.appName = 'GoNode';

    return next();
}

app.use(logMiddleware);

app.get('/',logMiddleware, (req, res) => {
    return res.send(`Bem vindo ao ${req.appName}, ${req.query.name}`);
});

app.get('/nome/:name',(req, res) => {
    //return res.send(`Bem vindo,  ${req.params.name}`);
    return res.json({
        message:`Bem vindo, ${req.params.name}`,
        appName: req.appName
    })
});
app.listen(3001);
const http = require('http');
const express = require('express');
const nunjucks = require('nunjucks');
/*
http
    .createServer((req, res) =>{
        console.log(req);
        return res.end('Hello word!!');
    }).listen(3000);
*/
const app = express();

const logMiddleware = (req, res, next) => {
    console.log(
        `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`);
    req.appName = 'GoNode';

    return next();
}

//app.use(logMiddleware);

nunjucks.configure('views',{
    autoescape: true,
    express: app,
    watch:true,
});

app.set('view engine', 'njk');

app.get('/',logMiddleware, (req, res) => {
    //return res.send(`Bem vindo ao ${req.appName}, ${req.query.name}`);
    //Usando o nunjucks para renderizar o html
    return res.render('list', { name: req.appName});
});

app.get('/nome/:name',(req, res) => {
    //return res.send(`Bem vindo,  ${req.params.name}`);
    return res.json({
        message:`Bem vindo, ${req.params.name}`,
        appName: req.appName
    })
});
app.listen(3001);
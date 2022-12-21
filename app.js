const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'pug'); 

// define um middleware para fornecimento de arquivos estáticos
app.use(express.static('public'));
app.use(express.static('images'));


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/leitura', (req, res) => {
    res.render('leitura');
});

app.get('/videos', (req, res) => {
    res.render('videos');
});

app.get('/sobrenos', (req, res) => {
    res.render('sobrenos');
});
app.get('/cadastrarse', (req, res) => {
    res.render('cadastrarse');
});

app.use(function(req, res, next) {
    res.render('404', { url: req.url })
});


app.listen(3000, () => {
    console.log("Servidor rodando!");
});


const express = require('express')
const path = require('path')
const morgan = require('morgan')
const app = express()
const port = 3000
//http logger
app.use(morgan('tiny'))
//Loads the handlebars module
const { engine } = require ('express-handlebars');
app.engine('hbs', engine({
    extname : '.hbs'
}));

//Sets our app to use the handlebars engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))


app.get('/', (req, res) => {
res.render('home');
});

app.get('/news', (req, res) => {
res.render('news');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
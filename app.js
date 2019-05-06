const express = require ('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express()


 //set body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');




app.get('/', (req, res, next) => {
    res.render('homepage', {t_name: req.body.todo_name, t_body: req.body.todo_body});
})
app.post('/send', (req, res, next) =>{
    res.render('homepage', {t_name: req.body.todo_name, t_body: req.body.todo_body});
});

app.listen(8181);

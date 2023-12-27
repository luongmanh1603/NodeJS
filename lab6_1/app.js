const express = require('express')
const expressHandlebars = require('express-handlebars').engine;
const bodyParser = require('body-parser') 
const app = express()


app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


app.use(bodyParser.urlencoded({ extended: false }))

app.get('/thankyou', (req, res) => res.render('thankyou'))


app.get('*', (req, res) => res.render('register'))

app.post('/register', (req, res) => {
    console.log(`received contact from ${req.body.name} <${req.body.email}>`)
    res.redirect(303, '/thankyou')
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`\nnavigate to http://localhost:${port}\n`))
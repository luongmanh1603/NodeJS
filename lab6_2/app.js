const express = require('express')
const expressHandlebars = require('express-handlebars').engine;
const bodyParser = require('body-parser') 
const app = express()


app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


app.use(bodyParser.urlencoded({ extended: false }))

app.get('/thankyou', (req, res) => res.render('thankyou'))
app.get('/sorry', (req, res) => res.render('sorry'))




app.get('*', (req, res) => res.render('feedback'))

app.post('/feedback', (req, res) => {
    console.log(`received contact from ${req.body.name} <${req.body.email}>`)
    if (req.body.satisfaction == 'happy'){
        res.redirect(303,'/thankyou')
    } else {
        res.redirect(303, '/sorry')
    }
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`\nnavigate to http://localhost:${port}\n`))
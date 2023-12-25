const express = require('express')
const expressHandlebars = require('express-handlebars').engine;
const app = express()


//configure Handlebars view engine
app.engine('handlebars', expressHandlebars({
    defaultlayout: 'custom'
}))
app.set('view engine', 'handlebars')


app.get('/no-layout',(req, res)=>{
    res.render('no-layout', { layout: null})
})
app.get('/', (req, res)=> res.send('Check out our "<a href="/no-layout">layout</a>"page!'))





const port = process.env.port || 3000
app.listen(port, () => console.log(
    `\nnaviagte ti http://localhost:${port}/about\n`
))
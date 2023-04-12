const express = require(`express`)
const app = express()
const PORT = process.env.PORT || 3001
const session = require(`express-session`)

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(`${__dirname}/../client/build`))
app.use(session({
    secret: 'your-secret-key', 
    resave: false, 
    saveUninitialized: true, 
    cookie: { secure: true } 
  }))
app.use(require(`./routes`))


app.listen(PORT, ()=> {
    console.log(`Connected on localhost:${PORT}`)
})
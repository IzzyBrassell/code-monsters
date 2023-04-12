const express = require(`express`)
const app = express()
const PORT = process.env.PORT || 3001
const path = require('path')
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

const reactRoutes = ['/', '/Login', '/CC', '/DS', '/S1', '/S2a', '/S2b', '/S2c', '/S2d', '/S2e', '/S3a', '/S3b', '/S3c', '/S3d', '/S3e', '/S4a', '/S4b', '/S4c', '/S4d', '/S4e', '/S5a', '/S5b', '/S5c', '/S5d', '/S5e', '/S6a', '/S6b', '/S6c', '/S6d', '/S6e', '/S7a', '/S7b']; 
app.use(express.static(path.join(__dirname, '../client/build')));

app.get(reactRoutes, (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, ()=> {
    console.log(`Connected on localhost:${PORT}`)
})
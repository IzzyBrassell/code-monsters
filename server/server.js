const express = require(`express`)
const app = express()
const PORT = process.env.PORT || 3001
const path = require('path')
const session = require(`express-session`)
const withAuth = require(`./util/withAuth`)

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(`${__dirname}/../client/build`))
app.use(session({
    secret: 'your-secret-key', 
    resave: false, 
    saveUninitialized: true,
  }))
app.use(require(`./routes`))

app.get(`*`, withAuth, (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, ()=> {
    console.log(`Connected on localhost:${PORT}`)
})

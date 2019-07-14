
const express = require('express')
const http = require('http')
const path = require('path')
const bodyParser = require('body-parser');

const config =  require('./config')
const staticFRONT = path.join(__dirname, '../front/build')

const login = require(path.join(__dirname, './services/login'))
const getUser = require(path.join(__dirname, './services/getUser'))

const app = express()

app.use(bodyParser.urlencoded({extended: true}));

// serving the front, as you can see it's pretty simple
app.use(express.static(staticFRONT))
app.get('/', (req, res, next) => res.sendFile(staticFRONT))

// here you have every endpoint for all the apis
app.post('/login', login)
app.get('/get/user', getUser)

http.createServer(app).listen(config.server.port, () => {
    console.log('server started')
})

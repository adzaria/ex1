
const express = require('express')
const http = require('http')
const path = require('path')
const bodyParser = require('body-parser');

const config =  require('./config')
const staticFRONT = path.join(__dirname, '../front/build')

const login = require(path.join(__dirname, './services/login'))
const getUser = require(path.join(__dirname, './services/getUser'))

const app = express()


///////////////////////////////////////////////////////////////////
// ne pas toucher, ne sois pas perturbe par cet ajout
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({limit: '1mb'}));
// app.use(cookieParser());
app.use((req, res, next) => {
    const origin = req.get('origin') || '*';
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers',
        'X-Requested-With, ' +
        'X-HTTP-Method-Override, ' +
        'Content-Type, ' +
        'Accept,' +
        'Access-Control-Allow-Credentials,' +
        'Authorization');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});
////////////////////////////////////////////////////////////////////

// serving the front, as you can see it's pretty simple
app.use(express.static(staticFRONT))
app.get('/', (req, res, next) => res.sendFile(staticFRONT))

// here you have every endpoint for all the apis
app.post('/login', login)
app.get('/get/user', getUser)

http.createServer(app).listen(config.server.port, () => {
    console.log('server started')
})

// import json-server library to index.js

const jsonServer = require('json-server')

// create json server

const mediaPlayerServer = jsonServer.create()

//CREATE PATH TO JSON FILE

const  router = jsonServer.router('db.json')

// middleware - to convert json to js

const middleware = jsonServer.defaults()

// use middleware and router in server

mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

//setup port for running server

const port = 5000 || process.env.PORT // IF 5000 is occupied it will use other free port..

// to listen server for resolving request from client

mediaPlayerServer.listen(port,() => {
    console.log(`mediaplayer server started at ${port} and wait for the request`);
})





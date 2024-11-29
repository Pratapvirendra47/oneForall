const express = require('express');
const server = require('http').createServer();

const app = express();

app.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname});
})

server.on('request',app);

server.listen('3000',function() {
    console.log('server listening on port 3000');
}) 

process.on('SIGINT', () => {
    console.log("sigint");
    wss.clients.forEach(function each(client) {
        client.close();
    })
    server.close(() => {
        shutdownDB();
    })
})

/** Begin Websockets */
const WebsocketServer = require('ws').Server;

const wss = new WebsocketServer({ server: server });

wss.on('connection', function connection(ws) {
    const numClients = wss.clients.size;
    console.log('Clients connected', numClients);

    wss.broadcast(`Current visitors : ${numClients}`);

    if (ws.readyState === ws.OPEN) {
        ws.send('Welcome to server');
    }

    db.run(`INSERT INTO visitors (count, time) VALUES (${numClients}, datetime('now') )`);

    ws.on('close', function close() {
        console.log('A client has disconnected');
    })

})

wss.broadcast = function broadcast(data) {
    wss.clients.forEach((function each(clients) {
        clients.send(data);
    }))
}

/** end web sockets */

/** Begin database */
const sqlite = require('sqlite3');

const db  = new sqlite.Database(":memory:"); // when we restart the server it will be gone

db.serialize(() => {
    db.run(`
        CREATE TABLE visitors (
            count INTEGER,
            time TEXT

        )
    `)
})

function getCounts () {
    db.each("SELECT * from visitors", (err, row) => {
        console.log(row)
    })
}

function shutdownDB() {
    getCounts();
    console.log("shutting down");
    db.close();
}
var app = require('express')();
var http = require('http').createServer(app);
io = require('socket.io')(http)



app.get('/', (req, res) => {
    // res.send('<h1>Hello World</h1>')
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  });


http.listen(3000, () => {
    console.log('server started')
})
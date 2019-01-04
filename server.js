const io = require('socket.io')();
const clients = [];

io.on('connection', (client) => {
    client.on('subscribeToTimer', (interval) => {
        console.log(`client #${client.id} is subscribing to timer with interval ${interval}`);
        clients.forEach(c => {
            c.emit('timer', `A new client joined the team`);
        })
        clients.push(client);
        if (clients.length >= 5){
            io.close();
        }
/*        setInterval(() => {
            client.emit('timer', `Hello ${client.id} it is ${new Date()}`);
        }, interval);*/
  });
});


const port = 8000;
io.listen(port);
console.log('listening on port ', port);
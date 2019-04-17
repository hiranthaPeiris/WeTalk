//Front-end socket.io connections
var socket = io.connect('http://localhost:3000');
socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
});

//Query DOM
var handle = document.getElementById('handle'),
    message = document.getElementById('message'),
    sendBtn = document.getElementById('send'),
    output = document.getElementById('output');

//Emit event(event listner on btn to send message to the server)
sendBtn.addEventListener('click',function () {
    socket.emit('chat',{
        message : message.value,
        handle : handle.value
    });
    message.value="";
})

// Listen for events
socket.on('chat',function (data) {
    output.innerHTML+= '<p><strong>'+data.handle +': </strong>' + data.message +'</p>';
});
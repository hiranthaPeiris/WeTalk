//Front-end socket.io connections
var socket = io.connect('http://localhost:3000');
socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
});

//Query DOM //
var Hname = document.getElementById('handle'),
    message = document.getElementById('message'),
    sendBtn = document.getElementById('send'),
    clearBtn = document.getElementById('clear'),
    output = document.getElementById('output');

//Emit event(event listner on btn to send message to the server //
sendBtn.addEventListener('click',function () {
    socket.emit('chat',{
        name : Hname.value,
        message : message.value
    });
    message.value="";
});

//Handle clear event
clearBtn.addEventListener('click',function () {
    socket.emit('clear');
});

//clear messages
socket.on('cleared',function () {
    output.innerHTML='';
});

// Listen for events //
socket.on('chat',function (data) {
    console.log(data);
    if(data.length){
        for (let index = 0; index < data.length; index++) {
            output.innerHTML+= '<p><strong>'+data[index].name +': </strong>' + data[index].message +'</p>'; 
        }
    }
    
});
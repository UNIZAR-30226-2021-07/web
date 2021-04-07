function setupWebsockets(login_data) {
    fetch('http://localhost:81/data/login', {
      method: 'POST',
      body: login_data,
    })
    .then(response => response.json())
    .then(data => {
        if(data['error']) {
            console.error('Error:', data['error']);
            return;
        }

        let token = data['access_token'];
        console.log(token);
        //setup_socketio(token);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}




function setup_socketio(token) {
  var messages = document.getElementById('messages');
  var form = document.getElementById('form');
  var join_room_form = document.getElementById('join-room-form');
  var input = document.getElementById('input');
  var code_input = document.getElementById('code-input');
  var create_room = document.getElementById('create-room');
  var leave_room = document.getElementById('leave-room');
  var start_game = document.getElementById('start-game');

  var socket = io.connect("ws://localhost:81", {
          extraHeaders: {
              Authorization: "Bearer " + token,
          }
  });

  socket.on('connect', function() {
      console.log('connected')
  });

  socket.on('connect_error', function(e){
      console.error('not connected', e)
  });

  function callback(data) {
      if(data && data.error) {
          console.error(data.error);
      }
  }

  socket.on('chat', function({owner, msg}) {
      var item = document.createElement('li');
      item.textContent = owner + ":" + msg;
      messages.appendChild(item);
      window.scrollTo(0, document.body.scrollHeight);
  });

  socket.on('create_game', function({code}) {
      console.log(code);
      code_input.value = code;
  })

  socket.on('start_game', function() {
      alert('Game started');
  })

  socket.on('players_waiting', function(n) {
      code_input.value = n + "/6";
  })

  create_room.addEventListener('click', function(e) {
      e.preventDefault();
      socket.emit('create_game', callback);
  });

  leave_room.addEventListener('click', function(e) {
      e.preventDefault();
      socket.emit('leave', callback);
  });

  start_game.addEventListener('click', function(e) {
      e.preventDefault();
      socket.emit('start_game', callback);
  });

  form.addEventListener('submit', function(e) {
      e.preventDefault();
      if (input.value) {
          socket.emit('chat', input.value, callback);
          input.value = '';
      }
  });

  join_room_form.addEventListener('submit', function(e) {
      e.preventDefault();
      if (code_input.value) {
          socket.emit('join', {'game':code_input.value}, callback);
          code_input.value = '';
      }
  });
}

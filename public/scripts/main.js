var Main = (function(my){
  var socket = {};

  my.initSocketIo = function(){
    var ioUrl = 'http://'+Config.serverAdress+':'+Config.socketIoPort;
    socket = io.connect(ioUrl);
    socket.on('interval', function(data){
      document.body.style.background = data.color;
      document.getElementById('color').innerHTML = data.color;
    })
  };

  my.init = function(){
    console.log('init Main');
    my.initSocketIo();
  };
  return my;
}(Main || {}));
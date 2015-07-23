var five = require('johnny-five'),
  board = new five.Board();

board.on('ready', function(){
  console.log("Evento ready, RELP iniciada!");

  var led = new five.Led(13);

  this.repl.inject({
    on: function(){ // encender
      console.log('Encender');
      led.on();
    },
    off: function(){ // apagar
      console.log('Apagar');
      led.off();
    },
    blink: function(t){ // parpadear durante 't' milisegundos
      console.log('Parpadear durante ' + t + ' milisegundos');
      led.blink(t);
    },
    stop: function(){ // parar de parpadear
      console.log('Detener parpadeo');
      led.stop();
    }
  });
  
});

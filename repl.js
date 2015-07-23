var five = require('johnny-five'),
  board = new five.Board();

board.on('ready', function(){
  console.log("Evento ready, RELP iniciada!");

  var led = new five.Led(13);

  this.repl.inject({
    on: function(){ // encender
      led.on();
    },
    off: function(){ // apagar
      led.off();
    },
    blink: function(t){ // parpadear durant t milisegundos
      led.blink(t);
    },
    stop: function(){ // parar de parpadear
      led.stop();
    }
  });
  
});

var five = require("johnny-five"),
  board = new five.Board();
// usar este codigo en caso de que johnny-five no reconozca ningun dispositivo
//board = new five.Board({port: "/dev/ttyACM0"});

board.on("ready", function(){
  //crear un led en el pin 13
  var led = new five.Led(13);

  //parpadear cada segundo
  led.blink(1000);
});

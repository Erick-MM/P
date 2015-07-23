//Sensor de poximidad 
var five = require("johnny-five"),
  board = new five.Board();

board.on('ready', function(){
  var proximity = new five.Proximity({
    controller: "HCSR04",
    pin: 7
  });

  proximity.on('data', function(){
    console.log(this.cm + "cm", this.in + "in");
  });

  proximity.on("change", function() {
    console.log("La obstruccion se ha movido");
  });
});

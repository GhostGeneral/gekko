// Let's create our own strategy
var strat = {};

// Prepare everything our strat needs
strat.init = function() {
  // your code!
  console.log('init');
}


// Based on the newly calculated
// information, check if we should
// update or not.
strat.check = function(candle) {
  // your code!
  //console.log('check',candle.start.format('mmmmm'));
  this.advice('long');
  this.advice('short');
  // var day = candle.start.format('m');

  // if(day % 2 === 0){
  //   this.advice('long');
  // }else{
  //   this.advice('short');
  // }



}


module.exports = strat;

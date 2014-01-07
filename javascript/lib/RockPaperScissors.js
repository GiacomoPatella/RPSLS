function Pick(name) {
  this.name = name;
}

Pick.prototype.pairs = {
  scissors: { paper: 'cuts', lizard: 'decapitates'},
  paper:    { rock: 'covers', spock: 'disproves'},
  lizard:   { spock: 'poisons', paper: 'eats' },
  rock:     { scissors: 'smashes', lizard: 'crushes' },
  spock:    { rock: 'vaporizes', scissors: 'melts' }
}

Pick.prototype.beats = function(otherPick) {
  var verb = this.pairs[this.name][otherPick.name];

  if(verb) {
    return [this.name, verb, otherPick.name].join(' ');
  } else {
    return false;
  }
}

Pick.prototype.random = function(){
  var randomnumber = Math.floor(Math.random()*5);
  return Object.keys(this.pairs)[randomnumber];
}

// Player class
function Player(name) {
  this.name = name;
}

Player.prototype.picks = function(playerPick) {
  this.pick = new Pick(playerPick);
}

Player.prototype.randomPick = function() {
  this.picks(Pick.prototype.random());
}

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

Game.prototype.winner = function() {
  var p1Wins = this.player1.pick.beats(this.player2.pick);
  var p2Wins = this.player2.pick.beats(this.player1.pick);

  // console.log(p1Wins || p2Wins || 'draw');
  if(p1Wins) return p1Wins;
  if(p2Wins) return p2Wins;
  
  return 'Draw';
}



// ======== This below is me and Koomy's code on the first day of Js at Maker's ========
// ======== For ease of use we're copied Alex's code above to style a simple web app with 
// ======== extra feature of adding verbs to our .winner() method, e.g. "Spock vaporizes rock" =======

// function Player(name) {
//   this.name = name;
//   // console.log("New player created")
// }

// Player.prototype.picks = function(pick) {
//   this.pick = pick;
// //   console.log()
// }

// Game.prototype.samepick = function() {
//   return this.player1.pick === this.player2.pick;
// }

// function Game(player1, player2) {
//   this.player1 = player1;
//   this.player2 = player2;
// }

// Game.prototype.PAIRS = {
//   rock: ["scissors", "lizard"],
//   paper: ["spock", "rock"],
//   scissors: ["paper", "lizard"],
//   lizard: ["spock", "paper"],
//   spock: ["scissors", "rock"]
// }

// Game.prototype.winner = function() {
//   if (this.samepick())
//   {
//     return null;
//   }

//   if(this.PAIRS[this.player1.pick].indexOf(this.player2.pick) > -1 )
//   {
//     return this.player1;
//   }
//   else
//   {
//     return this.player2;
//   }
// }
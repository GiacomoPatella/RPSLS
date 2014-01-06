function Player(name) {
  this.name = name;
  // console.log("New player created")
}

Player.prototype.picks = function(pick) {
  this.pick = pick;
//   console.log()
}

Game.prototype.samepick = function() {
  return this.player1.pick === this.player2.pick;
}

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

Game.prototype.PAIRS = {
  rock: {beats : "scissors"},
  paper: {beats : "rock"},
  scissors: {beats : "paper"}
}

Game.prototype.winner = function() {
  if (this.samepick())
  {
    return null;
  }

  if(this.PAIRS[this.player1.pick]['beats'] === this.player2.pick)
  {
    return this.player1;
  }
  else
  {
    return this.player2;
  }

}
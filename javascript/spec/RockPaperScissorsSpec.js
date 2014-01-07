describe("Rock-Paper-Scissors", function() {
  var player1, player2, game;
  
  beforeEach(function() {

    player1 = new Player('Player 1');
    player2 = new Player('Player 2');
    game = new Game(player1, player2);

  });

  describe('winning and losing', function() {

    describe('rock', function() {

      it('should beat scissors', function() {

        player1.picks('rock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);

      });

      it('should lose to paper', function() {

        player1.picks('rock');
        player2.picks('paper');
        expect(game.winner()).toBe(player2);

      });

    });

    describe('paper', function() {

      it('should beat rock', function() {

        player1.picks('paper');
        player2.picks('rock');
        expect(game.winner()).toBe(player1);

      });

      it('should lose to scissors', function() {

        player1.picks('paper');
        player2.picks('scissors');
        expect(game.winner()).toBe(player2);

      });

    });

    describe('scissors', function() {

      it('should beat paper', function() {

        player1.picks('scissors');
        player2.picks('paper');
        expect(game.winner()).toBe(player1);

      });

      it('should lose to rock', function() {

        player1.picks('scissors');
        player2.picks('rock');
        expect(game.winner()).toBe(player2);

      });

    });

  });

  describe('draws', function() {

    describe('any identical picks', function() {

      it('should result in no winner', function() {

        var drawGameResults = ['rock', 'paper', 'scissors'].map(function(x) {
          player1.picks(x);
          player2.picks(x);
          return game.winner();
        });

        expect(drawGameResults).toEqual([null, null, null]);

      });

    });

  });

});



// ======== This below is me and Koomy's code on the first day of Js at Maker's ========
// ======== For ease of use we're copied Alex's code above to style a simple web app with 
// ======== extra feature of adding verbs to our .winner() method, e.g. "Spock vaporizes rock" =======




// describe("Rock-Paper-Scissors", function() {
//   var player1, player2, game;
  
//   beforeEach(function() {

//     player1 = new Player('Player 1');
//     player2 = new Player('Player 2');
//     game = new Game(player1, player2);

//   });

//   describe('winning and losing', function() {

//     describe('rock', function() {

//       it('should beat scissors', function() {

//         player1.picks('rock');
//         player2.picks('scissors');
//         expect(game.winner()).toBe(player1);

//       });

//       it('should beat lizard', function() {

//         player1.picks('rock');
//         player2.picks('lizard');
//         expect(game.winner()).toBe(player1);

//       });

//       it('should lose to paper', function() {

//         player1.picks('rock');
//         player2.picks('paper');
//         expect(game.winner()).toBe(player2);

//       });

//       it('should lose to Spock', function() {

//         player1.picks('rock');
//         player2.picks('Spock');
//         expect(game.winner()).toBe(player2);

//       });

//     });



//     describe('paper', function() {

//       it('should beat rock', function() {

//         player1.picks('paper');
//         player2.picks('rock');
//         expect(game.winner()).toBe(player1);

//       });

//       it('should beat Spock', function() {

//         player1.picks('paper');
//         player2.picks('spock');
//         expect(game.winner()).toBe(player1);

//       });

//       it('should lose to scissors', function() {

//         player1.picks('paper');
//         player2.picks('scissors');
//         expect(game.winner()).toBe(player2);

//       });

//       it('should lose to lizard', function() {

//         player1.picks('paper');
//         player2.picks('lizard');
//         expect(game.winner()).toBe(player2);

//       });

//     });



//     describe('scissors', function() {

//       it('should beat paper', function() {

//         player1.picks('scissors');
//         player2.picks('paper');
//         expect(game.winner()).toBe(player1);

//       });

//       it('should beat lizard', function() {

//         player1.picks('scissors');
//         player2.picks('lizard');
//         expect(game.winner()).toBe(player1);

//       });

//       it('should lose to rock', function() {

//         player1.picks('scissors');
//         player2.picks('rock');
//         expect(game.winner()).toBe(player2);

//       }); 

//       it('should lose to Spock', function() {

//         player1.picks('scissors');
//         player2.picks('spock');
//         expect(game.winner()).toBe(player2);

//       });

//     }); 



//     describe('lizard', function() {

//       it('should beat Spock', function() {

//         player1.picks('lizard');
//         player2.picks('spock');
//         expect(game.winner()).toBe(player1);

//       });

//       it('should beat paper', function() {

//         player1.picks('lizard');
//         player2.picks('paper');
//         expect(game.winner()).toBe(player1);

//       });

//       it('should lose to scissors', function() {

//         player1.picks('lizard');
//         player2.picks('scissors');
//         expect(game.winner()).toBe(player2);

//       }); 

//       it('should lose to rock', function() {

//         player1.picks('lizard');
//         player2.picks('rock');
//         expect(game.winner()).toBe(player2);

//       });

//     });



//     describe('spock', function() {

//       it('should beat scissors', function() {

//         player1.picks('spock');
//         player2.picks('scissors');
//         expect(game.winner()).toBe(player1);

//       });

//       it('should beat rock', function() {

//         player1.picks('spock');
//         player2.picks('rock');
//         expect(game.winner()).toBe(player1);

//       });

//       it('should lose to paper', function() {

//         player1.picks('spock');
//         player2.picks('paper');
//         expect(game.winner()).toBe(player2);

//       }); 

//       it('should lose to lizard', function() {

//         player1.picks('spock');
//         player2.picks('lizard');
//         expect(game.winner()).toBe(player2);

//       });

//     });

//   });



//   describe('draws', function() {

//     describe('any identical picks', function() {

//       it('should result in no winner', function() {

//         var drawGameResults = ['rock', 'paper', 'scissors'].map(function(x) {
//           player1.picks(x);
//           player2.picks(x);
//           return game.winner();
//         });

//         expect(drawGameResults).toEqual([null, null, null]);

//       });

//     });

//   });

// });
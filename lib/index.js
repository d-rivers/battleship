const Player = require('./player');

const player1 = require('./player1');
const player2 = require('./player2');

const Battleship = class Battleship {
  constructor(props) {
    const t = this;

    t.title = props.title || 'The Game';
  }

  start() {
    const t = this;
    const p1 = new Player(player1);
    const p2 = new Player(player2);
    const players = [p1, p2];

    console.log(`Welcome to ${t.title}`);
    console.log('Positioning ships and setting up grid...');

    players.map((player) => player.setup());

    console.log('Who will go first...');

    players.map((player, index) => {
      players[index].dice = Player.rollDice();
      return true;
    });

    while (p1.dice === p2.dice) {
      console.log(`${p1.name} rolled a ${p1.dice}`);
      console.log(`${p2.name} rolled a ${p2.dice}`);
      console.log('Rolling again...');

      players.map((player, index) => {
        players[index].dice = Player.rollDice();
        return true;
      });
    }

    players.map((player) => console
      .log(`${player.name} rolled a ${player.dice}`));

    if (p1.dice > p2.dice) {
      console.log(`${p1.name} will go first.`);
    } else {
      console.log(`${p2.name} will go first.`);
    }
  }
};

module.exports = Battleship;

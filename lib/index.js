const Player = require('./player');

const player1 = require('./player1');
const player2 = require('./player2');

const BattleMyShip = class BattleMyShip {
  constructor(props) {
    const t = this;

    t.title = props.title || 'Game';
  }

  start() {
    const t = this;

    console.log(`Welcome to ${t.title}`);

    t.player1 = new Player(player1);
    t.player2 = new Player(player2);

    t.player1.setup();
    t.player2.setup();

    console.log('Who will go first...');
  }
};

module.exports = BattleMyShip;

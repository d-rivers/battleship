const Player = require('./player');

const BattleMyShip = class BattleMyShip {
  constructor(props) {
    const t = this;

    t.title = props.title || 'Game';
  }

  start() {
    const t = this;

    console.log(`Welcome to ${t.title}`);

    const player1 = new Player({
      name: 'Bob',
      destroyer: {
        orientation: 'horizontal',
        x: 0,
        y: 0,
      },
      submarine: {
        orientation: 'horizontal',
        x: 0,
        y: 2,
      },
      cruiser: {
        orientation: 'horizontal',
        x: 0,
        y: 4,
      },
      battleship: {
        orientation: 'horizontal',
        x: 0,
        y: 6,
      },
      carrier: {
        orientation: 'horizontal',
        x: 0,
        y: 8,
      },
    });

    player1.setup();
  }
};

module.exports = BattleMyShip;

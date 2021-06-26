const Grid = require('./grid');

const BattleMyShip = class BattleMyShip extends Grid {
  constructor(props) {
    super();
    const t = this;

    t.title = props.title || 'Game';
  }

  start() {
    const t = this;

    console.log(`Welcome to ${t.title}`);

    const p1ships = [{
      id: 'destroyer',
      size: 2,
      orientation: 'horizontal',
      x: 0,
      y: 0,
    }, {
      id: 'submarine',
      size: 3,
      orientation: 'horizontal',
      x: 0,
      y: 2,
    }, {
      id: 'cruiser',
      size: 3,
      orientation: 'horizontal',
      x: 0,
      y: 4,
    }, {
      id: 'battleship',
      size: 4,
      orientation: 'horizontal',
      x: 0,
      y: 6,
    }, {
      id: 'carrier',
      size: 5,
      orientation: 'horizontal',
      x: 1,
      y: 8,
    }];

    p1ships.map((ship) => {
      [...Array(ship.size)].map((foo, bar) => {
        t.grid[ship.y].splice(ship.x + bar, 1, ship.id);

        return true;
      });

      return true;
    });

    console.log('t.grid', t.grid);
  }
};

module.exports = BattleMyShip;

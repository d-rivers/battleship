const Grid = require('./grid');
const Destroyer = require('./ships/destroyer');
const Submarine = require('./ships/submarine');
const Cruiser = require('./ships/cruiser');
const Battleship = require('./ships/battleship');
const Carrier = require('./ships/carrier');

const Player = class Player extends Grid {
  constructor(props) {
    super();
    const t = this;

    const destroyer = new Destroyer(props.destroyer);
    const submarine = new Submarine(props.submarine);
    const cruiser = new Cruiser(props.cruiser);
    const battleship = new Battleship(props.battleship);
    const carrier = new Carrier(props.carrier);

    t.name = props.name;

    t.ships = [destroyer, submarine, cruiser, battleship, carrier];
  }

  setup() {
    const t = this;

    t.ships.map((ship) => {
      [...Array(ship.size)].map((size, index) => {
        t.grid[ship.y].splice(ship.x + index, 1, ship.id);

        return true;
      });

      return true;
    });

    console.log('t.grid', t.grid);
  }
};

module.exports = Player;

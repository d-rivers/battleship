const Grid = require('./grid');
const Destroyer = require('./ships/destroyer');
const Submarine = require('./ships/submarine');
const Cruiser = require('./ships/cruiser');
const Battleship = require('./ships/battleship');
const Carrier = require('./ships/carrier');
const Helpers = require('./helpers');

const Player = class Player extends Grid {
  constructor(props) {
    super();
    const t = this;

    const destroyer = new Destroyer(props.destroyer);
    const submarine = new Submarine(props.submarine);
    const cruiser = new Cruiser(props.cruiser);
    const battleship = new Battleship(props.battleship);
    const carrier = new Carrier(props.carrier);

    t.dice = undefined;
    t.name = props.name;

    t.ships = [destroyer, submarine, cruiser, battleship, carrier];
  }

  roll() {
    const t = this;
    t.dice = Helpers.randomNumber(6) + 1;
  }

  /**
   * Todo: Optimise
   */
  setup() {
    const t = this;

    t.ships.map((ship) => {
      [...Array(ship.size)].map((size, index) => {
        switch (ship.orientation) {
          case 'horizontal':
            if (ship.x + index > 9 || ship.x < 0) {
              throw new Error(`ship.x ${ship.x} is out of bounds.`);
            }

            if (t.grid[ship.y][ship.x + index] !== 0) {
              throw new Error('You cannot place a ship on top of another.');
            }

            t.grid[ship.y].splice(ship.x + index, 1, ship.id);
            break;
          case 'vertical':
            if (!t.grid[ship.y + index]) {
              throw new Error(`ship.y ${ship.y} is out of bounds.`);
            }

            if (t.grid[ship.y + index][ship.x] !== 0) {
              throw new Error('You cannot place a ship on top of another.');
            }

            t.grid[ship.y + index].splice(ship.x, 1, ship.id);
            break;
          default:
            throw new Error(`${ship.orientation} isn't a valid value.`);
        }

        return true;
      });

      return true;
    });

    console.log(`t.grid ${t.name}`, t.grid);
  }
};

module.exports = Player;

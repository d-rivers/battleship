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

    t.dice = null;
    t.name = props.name;
    t.ships = [destroyer, submarine, cruiser, battleship, carrier];
  }

  /**
   * @description
   * Returns a number between 1 & 6
   *
   * @returns {number}
   */
  static rollDice() {
    return Helpers.randomNumber(6) + 1;
  }

  /**
   * @description
   * Sets up a player grid by placing ships.
   */
  setup() {
    const t = this;

    /**
     * @description
     * Error when out of bounds.
     * Error when ships collide.
     * Insert ship into grid.
     *
     * @param ship
     * @param x
     * @param y
     */
    const fn = function fn(ship, x, y) {
      if (x > 9 || ship.x < 0 || !t.grid[y]) {
        throw new Error('The ship is out of bounds.');
      } else if (t.grid[y][x] !== 0) {
        throw new Error('You cannot place a ship on top of another.');
      }

      t.grid[y].splice(x, 1, ship.id);
    };

    /**
     * @description
     * For each ship, iterate ship.size number of times.
     *
     * @param item
     * @param index
     */
    const mapped = function mapped(item, index) {
      const ship = this;

      if (ship.orientation === 'horizontal') {
        fn(ship, ship.x + index, ship.y);
      } else if (ship.orientation === 'vertical') {
        fn(ship, ship.x, ship.y + index);
      } else {
        throw new Error(`${ship.orientation} isn't a valid orientation.`);
      }
    };

    t.ships.map((ship) => [...Array(ship.size)]
      .map(mapped.bind(ship)));

    // console.log(`${t.name}'s Grid:`, t.grid);
  }
};

module.exports = Player;

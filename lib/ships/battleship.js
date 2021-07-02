const Ship = require('../ship');

const Battleship = class Battleship extends Ship {
  constructor(props) {
    super({
      orientation: props.orientation,
      x: props.x,
      y: props.y,
    });

    const t = this;

    t.id = 'battleship';
    t.size = 4;
  }
};

module.exports = Battleship;

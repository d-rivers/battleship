const Ship = require('../ship');

const Cruiser = class Cruiser extends Ship {
  constructor(props) {
    super({
      orientation: props.orientation,
      x: props.x,
      y: props.y,
    });

    const t = this;

    t.id = 'cruiser';
    t.size = 3;
  }
};

module.exports = Cruiser;

const Ship = require('../ship');

const Carrier = class Carrier extends Ship {
  constructor(props) {
    super({
      orientation: props.orientation,
      x: props.x,
      y: props.y,
    });

    const t = this;

    t.id = 'carrier';
    t.size = 5;
  }
};

module.exports = Carrier;

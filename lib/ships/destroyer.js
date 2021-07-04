const Ship = require('../ship');

const Destroyer = class Destroyer extends Ship {
  constructor(props) {
    super({
      orientation: props.orientation,
      x: props.x,
      y: props.y,
    });

    const t = this;

    t.id = 'destroyer';
    t.size = 2;
  }
};

module.exports = Destroyer;

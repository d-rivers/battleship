const Ship = require('../ship');

const Submarine = class Submarine extends Ship {
  constructor(props) {
    super({
      orientation: props.orientation,
      x: props.x,
      y: props.y,
    });

    const t = this;

    t.id = 'submarine';
    t.size = 3;
  }
};

module.exports = Submarine;

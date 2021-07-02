const Helpers = require('./helpers');

const Ship = class Ship {
  constructor(props) {
    const t = this;

    t.orientation = props.orientation
      || ['horizontal', 'vertical'][Helpers.randomNumber(3)];

    t.x = props.x;
    t.y = props.y;
  }
};

module.exports = Ship;

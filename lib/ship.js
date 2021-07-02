const Ship = class Ship {
  constructor(props) {
    const t = this;

    t.orientation = props.orientation;
    t.x = props.x;
    t.y = props.y;
  }
};

module.exports = Ship;

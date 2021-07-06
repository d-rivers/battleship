const Helpers = class Helpers {
  /**
   * @description
   * Returns a random number.
   *
   * @param max
   * @returns {number}
   */
  static randomNumber(max) {
    return Math.floor(Math.random() * max);
  }
};

module.exports = Helpers;

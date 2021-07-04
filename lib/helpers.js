const Helpers = class Helpers {
  /**
   * @param max
   * @returns {number}
   */
  static randomNumber(max) {
    return Math.floor(Math.random() * max);
  }
};

module.exports = Helpers;

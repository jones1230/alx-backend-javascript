/* eslint-disable no-underscore-dangle */

export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  /**
   * @param {any} code
   */
  set code(code) {
    this._code = code;
  }

  get name() {
    return this._name;
  }

  /**
   * @param {string} name
   */
  set name(name) {
    this._name = name;
  }

  /**
   * Creates the full string representation of this Currency.
   * @returns {String}
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

/* eslint-disable no-underscore-dangle */

export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  get getCode() {
    return this._code;
  }

  set setCode(code) {
    this._code = code;
  }

  get getname() {
    return this._name;
  }

  set setName(name) {
    this._name = name;
  }
}

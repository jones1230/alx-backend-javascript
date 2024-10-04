/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = amount;
  }

  get currency() {
    return this.currency;
  }

  set currency(currency) {
    if (typeof currency !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._currency = currency;
  }

  /**
    * Function combines and amount, currency name and currency code and returns
    * @returns {string}
    */
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }
}

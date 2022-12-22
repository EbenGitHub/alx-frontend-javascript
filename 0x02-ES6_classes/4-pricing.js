import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Setter
  set amount(newAmount) {
    this._amount = newAmount;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) throw TypeError('current must be an instance of Currency');
    this._currency = newCurrency;
  }

  // Getter
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // Methods
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return `${amount * conversionRate}`;
  }
}

export default Pricing;

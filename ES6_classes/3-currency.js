export default class Currency {
  constructor(code, name) {
    // Conditions
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }

    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    this._code = code;
    this._name = name;
  }

  // Getter de code
  get code() {
    return this._code;
  }

  // Setter de code + conditions
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  // Getter de name
  get name() {
    return this._name;
  }

  // Setter de name + conditions
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // nouvelle methode
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}

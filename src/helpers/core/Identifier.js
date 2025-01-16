
/**
 * @desc Um identificador pode ser uma string, numero, uuid, objectId...
 */
class Identifier {
  constructor(value) {
    this.value = value;
  }

  equals(id) {
    if (id === null || id === undefined) {
      return false;
    }
    if (!(id instanceof this.constructor)) {
      return false;
    }
    return id.toValue() === this.value;
  }

  toString() {
    return String(this.value);
  }

  /**
   * Retorna o valor real de um identificador
   */
  toValue() {
    return this.value;
  }
}

module.exports = { Identifier };
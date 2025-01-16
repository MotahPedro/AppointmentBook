
const { ObjectId } = require('bson');
const { Identifier } = require('./Identifier');
const AppError = require('../errors/AppError');

/**
 * @desc Este "UniqueEntityID" serve como identificador único de entidade.
 * Neste caso abaixo ele é um uuid e não nesseriamente único identificador do
 * sistema podem ser criadas outros tipos de identificadores, caso haja
 * necessidade, a única exigência é que esse identificador, seja filho da classe
 * "Identifier"
 */

class UniqueEntityID extends Identifier {
  constructor(id) {
    super(new ObjectId(id));
  }

  static isValid(id) {
    return ObjectId.isValid(id);
  }

  static create(id) {
    if (id && !this.isValid(id)) {
      throw new AppError('', '400', 'Id invalido');
    }

    return new UniqueEntityID(id);
  }

  equals(id) {
    if (id === null || id === undefined) {
      return false;
    }
    if (!(id instanceof this.constructor)) {
      return false;
    }
    return id.toString() === this.toString();
  }
}

module.exports = { UniqueEntityID };
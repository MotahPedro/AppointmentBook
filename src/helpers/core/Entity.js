
const { UniqueEntityID } = require("./UniqueEntityID");

const isEntity = (v) => {
  return v instanceof Entity;
};

/**
 * @desc Uma entidade representa algo que deve possuir um identificador único
 * e também possui regras de negócio
 */

class Entity {
  constructor(props, id) {
    this._id = id ? id : UniqueEntityID.create().toString();
    this.props = props;
  }

  get id() {
    return this._id;
  }

  equals(object) {
    if (object == null || object == undefined) {
      return false;
    }

    if (this === object) {
      return true;
    }

    if (!isEntity(object)) {
      return false;
    }

    return this._id === object._id;
  }
}

module.exports = { Entity };
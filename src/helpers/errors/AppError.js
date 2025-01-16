
const { StringUtils } = require('../utils/StringUtils');
const { BaseError } = require('./BaseError');

class AppError extends BaseError {
  constructor(message, status, reason, err = {}) {
    super(message);
    if (!StringUtils.hasLength(message))
      message = 'Oops, algo deu errado! Tente novamente mais tarde.';

    this.status = status || "500";
    this.message = message;
    this.reason = reason;

    if (StringUtils.isEmpty(this.message) && err) {
      this.message = this.buildErrors(err);
      // this.printError(err);
    } else {
      // this.errors = [customError || ''];
      this.printMessages();
    }
  }

  printMessages() {
    console.log('\n');
    console.log('------------------------ERRO------------------------');
    console.log(`status: ${this.status}`);
    console.log(`message: ${this.message}`);
    console.log('------------------------ERRO------------------------');
    console.log('\n');
  }
}

module.exports = AppError;
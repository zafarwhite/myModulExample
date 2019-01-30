var Converter = function(baseCurrency) {
    this.baseCurrencyUs = baseCurrencyUs
}

Converter.prototype.roundTwoDecimal = function(amount) {
    return Math.round(amount * 100) / 100;
}

Converter.prototype.converterToUa = function(currency) {
    return this.roundTwoDecimal(currency * this.baseCurrencyUs);
};

Converter.prototype.converterToUs = function(currency) {
    return this.roundTwoDecimal(currency / this.baseCurrencyUs);
}

module.exports = Converter;
var baseCurrency = 28;

//  helper
function roundTwoDecimal(amount) {
    return Math.round(amount * 100) / 100;
};

module.exports.converttoUa = function(currency) {
    return roundTwoDecimal(currency * baseCurrency);
};

module.exports.converttoUs = function(currency) {
    return roundTwoDecimal(currency / baseCurrency);
};
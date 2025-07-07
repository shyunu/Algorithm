/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    let arr = date.split('-');
    let bins = arr.map((item) => parseInt(item).toString(2));

    return bins.join('-');
};
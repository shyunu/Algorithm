/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let wealth = [];
    let sum = 0;

    for(let i = 0; i < accounts.length; i++) {
        for(let j = 0; j < accounts[i].length; j++) {
            sum += accounts[i][j];
        }
        
        wealth.push(sum);
        sum = 0;
    }

    return Math.max(...wealth);
};
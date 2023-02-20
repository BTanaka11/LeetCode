/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let neg = x < 0 ? -1 : 1;
    if (n === 0) {
        return 1;
    }
    x = Math.abs(x);
    let powHalved = myPow(x*neg, (n>=0 ? 1:-1) * Math.floor(Math.abs(n)/2));
    powHalved **= 2;
    if (n%2 !== 0) {
        if (n >= 0) {
            powHalved *= x * neg;
        } else {
            powHalved /= x * neg;
        }
    }
    return powHalved;
};
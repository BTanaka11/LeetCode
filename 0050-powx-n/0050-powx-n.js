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
    let powHalved
    if (n >= 0) {
        powHalved = myPow(x*neg, Math.floor(n/2));
        powHalved = powHalved * powHalved ;
        if (n%2 !== 0) {
            powHalved *= x  * neg;
        }
        return powHalved;
    } else {
        powHalved = myPow(x*neg, - Math.floor(Math.abs(n)/2));
        powHalved = powHalved * powHalved;
        if (n%2 !== 0) {
            powHalved /= x  * neg;
        }
        return powHalved;
    }
};
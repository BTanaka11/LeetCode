/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0;
    let neg;
    if (x < 0) {
        neg = -1;
        x = Math.abs(x)
    } else {
        neg = 1;
    }
    let upperRange = 2**31 - 1;
    let lowerRange = (-2)**31;
    while (x != 0) {
        let firstDig = x % 10;
        result += (x % 10) * (10 ** Math.floor(Math.log10(x)));
        x = Math.floor(x / 10);
        if (result < lowerRange || result > upperRange) {
            return 0
        }
    }
    return result * neg;
    
};

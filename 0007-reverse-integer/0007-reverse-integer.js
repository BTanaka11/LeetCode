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

    while (x != 0) {
        let firstDig = x % 10;
        result += (x % 10) * (10 ** Math.floor(Math.log10(x)));
        x = Math.floor(x / 10);
    }
    
    return (result < ((-2)**31) || result > (2**31 - 1)) ? 0 : result * neg;
    
};

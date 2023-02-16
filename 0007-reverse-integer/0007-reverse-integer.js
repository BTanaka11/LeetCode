/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev = 0;

    while (x != 0) {
        rev = rev * 10 + x % 10
        x = ~~(x / 10);
    }
    
    return (rev < ((-2)**31) || rev > (2**31 - 1)) ? 0 : rev;
    
};
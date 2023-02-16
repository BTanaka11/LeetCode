/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {

    let rev = 0;
    let neg;
    let i = 0;
    while (s[i] === ' ') {
        i ++;
    }
    
    if (s[i] === '-') {
        neg = -1;
        i++;
    } else if (s[i] === '+') {
        neg = 1;
        i++;
    } else {
        neg = 1;
    }
    
    while (!isNaN(parseInt(s[i]))) {
        rev = rev * 10 + parseInt(s[i]) ;
        i ++;
    }
    rev *= neg;
    
    if (rev < (-2)**31) {
        return (-2)**31
    }
    if (rev > 2**31 - 1) {
        return (2**31 - 1)
    }
    return rev;
};
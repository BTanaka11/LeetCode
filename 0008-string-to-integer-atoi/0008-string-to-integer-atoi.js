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
    let numb = parseInt(s[i]);
    while (!isNaN(numb)) {
        rev = rev * 10 + numb * neg;
        i ++;
        numb = parseInt(s[i]);
    }
    if (rev < (-2)**31) {
        return (-2)**31
    }
    if (rev > 2**31 - 1) {
        return (2**31 - 1)
    }
    return rev;
};
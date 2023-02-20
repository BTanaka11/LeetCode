/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {

    let neg = (dividend < 0 && divisor < 0) || (dividend >=0 && divisor >= 0) ? 1 : -1;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    let result = 0;
    let factor = 1;
    let tempSum = divisor;
    let tempdivisor = divisor;
    while (tempSum <= dividend) {
        result += factor;
        factor ++;
        tempdivisor += divisor;
        tempSum += tempdivisor;
    }

    if (factor > 1) {
        dividend = dividend - (tempSum - tempdivisor);
        tempSum = divisor;
        while (tempSum <= dividend) {
            result ++;
            tempSum += divisor;
        }
    }

    result = neg * result;
    if (result < (-2)**31) {
        return (-2)**31
    } else if (result > 2**31 - 1) {
        return 2**31 - 1;
    } else {
        return result;
    }
    
};
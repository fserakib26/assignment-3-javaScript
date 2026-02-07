// Problem 2 (OTP Validation)
function validOtp(otp) {
    if (typeof otp === 'string') {
        if (otp.length === 8 && otp.startsWith("ph-") ) {
            return true;
        } else {
            return false;
        }
    } else {
        return 'Invalid';
    }
}

let output = validOtp("ph-1234");
console.log(output);



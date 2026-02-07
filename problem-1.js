// problem-1 (Discount Calculation)
function newPrice(currentPrice , discount ) {
    if (typeof currentPrice !== 'number' || typeof discount !== 'number' || discount < 0 || discount > 100 ) {
        return 'Invalid';
    } else {
        let discontAmount = currentPrice * discount / 100;
        let totalAfterDiscount = currentPrice - discontAmount;
        return totalAfterDiscount.toFixed(3);
    }
}

let output = newPrice(2000, 15);
console.log(output);




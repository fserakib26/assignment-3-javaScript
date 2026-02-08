// problem-1 (Discount Calculation)
function newPrice(currentPrice , discount ) {
    if (typeof currentPrice !== 'number' || typeof discount !== 'number' || discount < 0 || discount > 100 ) {
        return 'Invalid';
    } else {
        let discountAmount = currentPrice * discount / 100;
        let totalAfterDiscount = currentPrice - discountAmount;
        return totalAfterDiscount.toFixed(3);
    }
}



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



// Problem-3 BCS OMR Score Calculator

function finalScore(omr) {  
    let totalScore = 0;
    for(let key in omr){
        totalScore = totalScore + omr[key];        
    }    

    if (totalScore === 100 && typeof omr === 'object') {        
        let wrong = omr.wrong;
        let skip = omr.skip;
        let wrongDeduct = wrong/2;
        let finalScoreIs = totalScore-(skip+wrong+wrongDeduct);
        return Math.round(finalScoreIs);        
                
    } else {
        return 'Invalid';
    }
    
}



// Problem-4 Gonovote
function gonoVote(array) {    
    

    if(Array.isArray(array) === true){

        let haCount = 0;
        let naCount = 0;

        for(let item of array){

            if (item === 'ha') {
                haCount = haCount + 1;                               
            } else if (item === 'na'){
                naCount = naCount + 1;               
            }
        } 
        

        if (haCount === naCount) {
           return 'equal';
        } else if (haCount > naCount){
            return true;
        } else if(haCount < naCount){
            return false;
        }
            

    } else {
        return 'Invalid';
    }
}




// Problem-5 (Long words length and character count without space using split() & joint() methode)
function  analyzeText(str) {
    
    if (typeof str !== 'string' || str.trim()==='') {
        return 'Invalid'
    } else {

        let strArrayWord = str.split(" ");
        let longwords = "";

        for(let word of strArrayWord){
            if(word.length > longwords.length ){
                longwords = word;
            }
        }

        let characterCount = strArrayWord.join("");
        let token = characterCount.length;

        return { longwords: longwords, token: token };
        
    }
    
}
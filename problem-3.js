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

let output = finalScore(["Raj"]);
console.log(output);



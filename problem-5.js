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

let output = analyzeText("Keep coding keep shining")
console.log(output);

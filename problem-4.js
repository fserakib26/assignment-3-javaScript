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
            return 'true';
        } else if(haCount < naCount){
            return 'false';
        }
            

    } else {
        return 'Invalid';
    }
}

let output = gonoVote(12345);
console.log(output);



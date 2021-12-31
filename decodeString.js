// Write your code below this line
const decodeString = string => {
    let shift = Number(string.match(/\d+/)[0]);
    let letters = string.match(/[a-zA-Z]+/)[0];
    let newString = "";

    for(let i=0; i<letters.length; i++){

        let code = letters.charCodeAt(i);
        let newCode = 0;
 
        if(code >= 97 && code <= 122) {
            newCode = (code - 97 + shift) % 26 + 97;
        } else if (code >= 65 && code <= 90) {
            newCode = (code - 65 + shift) % 26 + 65;
        }
        
        let newLetter = String.fromCharCode(newCode);
        newString+=newLetter;
    }
    return newString
}

testArr = ["1a", "3ce", "2fcjjm", "1A", "3CE", "2FCJJM","15opnzop","15OPNZOP"]

for(let i=0; i<testArr.length; i++){
    console.log(decodeString(testArr[i]));
}


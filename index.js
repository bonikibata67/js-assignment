//1. password validation

// check if password is blank/empty
function strongPassword(password) {
    if (password.trim() === '') {
        console.log(" empty");
    } else {
        return "not empty";
    }
}
// let password = "weeek"
// let result = strongPassword(password)
// console.log(result);
//password does not contain repeated characters in a row

function noRepeatPassword(passwords) {
    for (let password of passwords) {
        for (let i = 0; i < password.length - 1; i++) {
            if (password[i] === password[i + 1]) {
                return false;
            }
        }
    }
    return true;
}
// let passwords = "weeek"
// let result = noRepeatPassword(passwords)
// console.log(result);

//password generation
 function generatedPassword(name1, name2){
    let pass1 = name1.slice(0,3)
    let pass2 = name2.slice(-3)
    let password =pass1 + pass2 + "@2024"
    return password
}
// let name1 = "john"
// let name2 = "doe"
// let password = generatedPassword(name1, name2)
// console.log(password);


//sum
const item=[{price: 10.99}, {price: 5.99}, {price: 29.99}]
function totalItemCost(item){
     let total = 0;
    for(let i=0; i<item.length; i++) {
        total += item[i].price
    }
    return total

}
let total = totalItemCost(item)
// console.log(total);


function firstLetterCapital(words) {    
    let capitalWords = words.split(' ');   
    for (let i = 0; i < capitalWords.length; i++) {        
        capitalWords[i] = capitalWords[i].charAt(0).toUpperCase() + capitalWords[i].slice(1);
    }    
    let result = capitalWords.join(' ');

    return result;
}

// let words = "john doe"
// let finalWord = firstLetterCapital(words)
// console.log(finalWord);
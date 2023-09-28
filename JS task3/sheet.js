// 1
function input(numb1,numb2) {
    if (numb1 + numb2 == 15){
        return true
    }
    else if (numb1 = 15){
        return true
    }
    else if (numb2 = 15){
        return true
    }
    else {
        false
    }
}
console.log(input(7,8));

// 2
function isSquare(numb) {
    if (Math.squrt(numb)) {
        return true
    }
    else {
        return false
    }
}
console.log(isSquare(6));

// 3
var arr
var x1 = 1, x2 = 2 , x3 = 3, x4 = 0, x5 = 5;
function findzero (x1, x2, x3, x4, x5){
    arr=[1, 2, 3, 4, 5]; }

for (var i = 0; i < arr.length; i++)
    if (arr[i] === 0) {
       return arr + (i+1); }
console.log(findzero());
var replaced = findzero(x1, x2, x3, x4, x5);
console.log(replaced);
console.log(arr);


// 4

function str(letter) {
    if (letter.toUpperCase()){
        return letter.LowerCase()
    }
    else if (letter.toLowerCase()){
        return letter.UpperCase()
    }
}
console.log(str("A"));

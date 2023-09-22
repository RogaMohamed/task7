// for (var  i = 0 ; i < 10; i+= 2) {
//     console.log("hello");
// }
// var arr = [ "a" ,"b" , "c" , "d"];
// for (var i=0 ; i<arr.length ; i+=1){
//     console.log(i);
// }

// var x = 15;
// var y = 12;
// if (x <= y) {
//     console.log("y is grater");
// }
// else if (x == y) {
//     console.log("They are Equal");
// }
// else {
//     console.log("x is grater");
// }



// var isAdmin = "Admin";
// var isAdmin = "sales";
// var isAdmin = "marketer";
// if (isAdmin == "Admin") {
//     console.log("you can edit, delete, update,review");
// }
// else if (isAdmin == "sales"){
//     console.log("you can update review");
// }
// else if (isAdmin =="marketer"){
//     console.log("you can review");
// }
// else {
//     console.log("sorry");
// }


// var numb1 = +prompt("Enter number1")
// var operation = +prompt ("Enter the Operation")
// var numb2 = +prompt("Enter number2")
// if (operation = "+") {
//     console.log(numb1 + numb2);
// }
// else if (operation = "-") {
//     console.log(numb1 - numb2);
// }
// else if (operation = "*") {
//     console.log(numb1 * numb2);
// }
// else if (operation = "/") {
//     if (numb2 == 0) {
//         console.log("numer can not be divisioned by zero");
//     }
//     console.log(numb1 / numb2);
// }
// else {
//     console.log("operation not found");
// }



// switch (operation){
//     case "+":
//     console.log(numb1 + numb2);
//     break
//     case "-":
//         console.log(numb1 - numb2);
//     break
//     case "*":
//         console.log(numb1 * numb2);
//     break
//     case "/":
//         console.log(numb1 / numb2);
//         if (numb2 == 0) {
//             console.log("numer can not be divisioned by zero");
//         }
//     break
//     default :
//         console.log("operation not found);
// }


// function summition(numb1 , numb2) {
//     return numb1 + numb2;
// }
//     console.log(summition(20,15));


//  function convertToSeconds (min) {
//     return `${min * 60}seconds`;
//  }
//  console.log(convertToSeconds(100));


//  function triArea (base , height) {
//     return (base * height) / 2
//  }
//  console.log(triArea(100,20));


//  function calcAge(age) {
//     return age * 365
//  }
//  console.log(calcAge(24));


//  function cubes(numb) {
//     return numb * numb * numb
//  }
//  console.log(cubes(25));


//  function firstValue(element) {
//     return element[0]
//  }
//  console.log(firstValue([1,2,3,4]));


//  function power (voltage , current) {
//     return voltage * current
//  }
//  console.log(230,10);


//  function howManySec(hours) {
//     return hours * 60 * 60
//  }
//  console.log(howManySec(24));


//  function nextEdge(side1 , side2) {
//     return (side1 + side2) - 1
//  }
//  console.log(nextEdge(4,6));


//  function modelous(numb1 , numb2) {
//     return numb1 % numb2
//  }
//  console.log(modelous(10,3));


//  function rectangle(length , width) {
//     return (length + width) * 2
//  }
//  console.log(rectangle(8,7));

//  function squared(numb) {
//     return numb * numb
//  }
//  console.log(squared(9));


//  function lessOrEqu(numb) {
//     if (numb <= 0) {
//         return true 
//  }
// else if (numb >= 0) {
//         return false
//     } 
// }


// function sumPolygon(numb) {
//     return (numb - 2) * 180
// }
// console.log(sumPolygon(10));


// function basketball(numb1 , numb2) {
//     return (numb1 *2) + (numb2 *3)
// }
// console.log(basketball(3,4));


// function firstName(name) {
//     return `${name} Edabit`
// }
// console.log(firstName("mobashir"));


// function result(numb1 , numb2) {
//     if (numb1 + numb2 <= 100){
//         return true
//     }
//     else if (numb1 + numb2 >= 100) {
//         return false
//     }
// }


function arr (Mubashir){
    var x = []
    var index = 0
    for (var i =1 ;i<=Mubashir ;i++){
        x[index++] = x[i]
    }
    return x
}
console.log(arr(4));


function swap(a, b) {
    var x = a
    a = b
    b = x
	return [b, a]
}
console.log(100,200);


function animals(chickens, cows, pigs) {
	return chickens*2+(cows+pigs)*4;
}
console.log(animals(4,5,3));


function operator (a , b) {
    if (a && b) {
        return true
    }
    else {
        return false
    }
}
console.log(operator(true,false));


function isSameNum(numb1, numb2) {
    if (numb1 = numb2) {
        return true
    }
    else {
        return false
    }
}
console.log(isSameNum(8,8));


function footballPoints(wins , loses , draws) {
    return (wins*3)+(loses*0)+(draws*1)
}
console.log(footballPoints(3,2,4));


function convert(hours , minutes) {
    return (hours * 60 * 60) + (minutes * 60)
}
console.log(convert(1,3));


function Code (x) {
    if (x = 7){
        return true
    }
    else {
        return false
    }
}
console.log(Code(7));


function checkEquality(a , b) {
    if (a === b) {
        return true
    }
    else {
        return false
    }
}
console.log(checkEquality(9,9));


function profitableGamble(prob ,prize, pay) {
    if (prob * prize > pay) {
        return true
    }
    else {
        return false
    }
}
console.log(10,8,5);


function boolToString(flag) {
    if (flag == true) {
        return flag += "true"
    } else {
        return flag += "false"
    }
}
console.log(boolToString("true"));


arrowFunc=(numb1,numb2) => {
    return numb1 + numb2
}
console.log(arrowFunc(3,4));


function frames (minutes,FPS ) {
    return (minutes* 60)*(FPS)
}
console.log(frames(1,1));


function calculator(string) {
    return `${string}`
}
console.log(calculator(2+3*7));


function Mubashir(name) {
    return `Hello, ${name}`
}
console.log(Mubashir("My love!"));



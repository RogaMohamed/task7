// Two Makes Ten
function makesTen(a, b) {
	if (a + b == 10) {
        return true
    }
    else if (a == 10) {
        return true
    }
    else if (b == 10) {
        return true
    }
    else {
        return false
    }
}
console.log(makesTen(5,5));

function cubes(a) {
	return a ** a
}
console.log(cubes(5));

// Let's Fuel Up!
function calculateFuel(distance) {
    if (distance <= 10) 
		return 100;
	else 
		return distance * 10;
}
console.log(calculateFuel(10));

// Buggy Code (Part 2)
function maxNum(num1,num2) {
	if (num1 > num2) {
	  return num2
	}
  else {
	return num1
  }
}
console.log(maxNum(5,3));

// Pair Management
function makePair(num1, num2) {
	return [num1, num2]
}
console.log(makePair(3,6));

// Compare Strings by Count of Characters
function comp(str1, str2) {
	if (str1.length() == str2.length()){
        return true
    }
    else {
        false
    }
}
console.log(comp("ab","cd"));

// Is the String Empty?
function isEmpty(s) {
	if (s = ("")){
        return true
    }
    else if (s = (" ")) {
        return false
    }
    else {
        return false
    }
}
console.log(s(""));

// Check if an Integer is Divisible By Five
function divisibleByFive(n) {
	if(n % 5===0){
		return true;
	}
	else{
		return false;
	}
}
console.log(divisibleByFive(4));

// Multiple of 100
function divisible(numb) {
	if(numb % 100===0){
		return true;
	}
	else{
		return false;
	}
}
console.log(divisible(8));

// Recursion: Length of a String
function length(str) {
	return str.length()
}
console.log(str("Rogachan"));

// Divides Evenly
function dividesEvenly(a, b) {
	if (a % b===0) {
        return true
    }
    else {
        return false
    }
}
console.log(dividesEvenly(8));

// Return a String as an Integer
function stringInt(str) {
	return parseInt(str)
}
console.log(stringInt("45"));

// Area of a Rectangle
function area(h, w) {
    if(h <=0 || w <= 0) {
		return -1;
	}
    else {
    return h * w}
}
console.log(area(7,9));

// Concatenate First and Last Name into One String
function concatName(firstName, lastName) {
	return `${lastName}, ${firstName}`;
}
console.log(concatName("Naruto","Uzumaki"));

// Buggy Code
function has_bugs(buggy_code) {
	if (buggy_code) {
		return `sad days`
	} else{
		return `it's a good day`
	}
}
console.log(has_bugs());

// Evaluate an Equation
function eq(evaluate) {
	return eq(evaluate)
}
console.log(eq("6/(9-7)"));

// Solve the Equation
function equation(s) {
	return parseInt(s)
}
console.log(equation("1+1+1+1+1"));



//Homework-3

//Ex.1
//Start Here
let character = "a";

if (typeof character === 'string') {
    if (character === "a" || character === "A" || character === "e" || character === "E" || character === "i" || character === "I" || character === "o" || character === "O" || character === "u" || character === "U") {
        console.log("Vowel")
    } else {
        console.log("Consonant")
    }
} else {
    console.log("Invalid Character")
}
//Ends Here

//Ex.2
//Start Here
let a = 12;
let b = 10;
let c = 3;

if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
    if (a + b > c && a + c > b && b + c > a) {
        console.log("This is a possible triangle")
    } else {
        console.log("This is not a possible triangle")
    }
} else {
    console.log("Invalid variables")
}
//Ends Here

//Ex.3
//Start Here
let points = 2;

switch (typeof points === "number") {
    case (points >= 0 && points < 50):
        console.log("Not enought points");
        break;
    case (points >= 50 && points <= 59):
        console.log("6");
        break;
    case (points >= 60 && points <= 69):
        console.log("7");
        break;
    case (points >= 70 && points <= 79):
        console.log("8");
        break;
    case (points >= 80 && points <= 89):
        console.log("9");
        break;
    case (points >= 90 && points <= 100):
        console.log("10");
        break;
    default:
        console.log("Invalid Points");
}
//Ends Here

//Ex.4
//Start Here
let x = "k";

switch (x) {
    case x = "c":
    case x = "k":
        console.log("circle")
        break;
    case x = "p":
    case x = "m":
    case x = "n":
        console.log("square")
        break;
    default:
        console.log("triangle")
}
//Ends Here

//Ex.5
//Start Here
let q = 10;
let w = 2;
let operator = "*";

switch (typeof q === 'number' && typeof w === 'number') {
case true:
    switch(operator) {
    case '+':
        console.log(q + w);
        break;
    case '-':
        console.log(q - w);
        break;
    case '/':
        switch(w === 0){
            case true:
                console.log("Devided by 0");
                break;
            case false:
                console.log(q / w);
        }
        break;
    case '*':
        console.log(q * w);
        break;
    default:
        console.log("Invalid operator");
}
break;
case false:
    console.log("Invalid Number")
}
//Ends Here
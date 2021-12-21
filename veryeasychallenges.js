//1.Boolean to string

function boolToString(flag) {
  return flag.toString();
}

console.log(boolToString(true));

//2.Mins to seconds

function convert(mins) {
  return mins * 60;
}
console.log(convert(5));

//3.return next number

function addition(num) {
  return num + 1;
}
console.log(addition(-2));

//4.Area of triangle

function triArea(base, height) {
  return (base * height) / 2;
}
console.log(triArea(10, 10));

//5.Calculate days from Age (consider only 365 for a year)

function calcAge(age) {
  return age * 365;
}
console.log(calcAge(65));

//6.Buggy code

function cubes(a) {
  return a ** 3;
}

console.log(cubes(5));

//7.get first value of array

function getFirstValue(arr) {
  return arr[0];
}
console.log(getFirstValue([80, 5, 100]));

//8.Calculate circuit power

function circuitPower(vol, cur) {
  return vol * cur;
}
console.log(circuitPower(230, 10));

//9. Hours to seconds

function toSeconds(hour) {
  return hour * 60 * 60;
}
console.log(toSeconds(2));

//10.Next Edge

function nextEdge(s1, s2) {
  return s1 + s2 - 1;
}
console.log(nextEdge(9, 2));

//11. remainder

function remainder(a, b) {
  return a % b;
}
console.log(remainder(-9, 45));

//12.Perimeter of rectangle :

function findPerimeter(l, w) {
  return 2 * (l + w);
}
console.log(findPerimeter(10, 20));

//13.givemesomething

function giveMeSomething(str) {
  return "something" + " " + str;
}
console.log(giveMeSomething("Lavanya"));

//14.buggy square

function squared(a) {
  return a * a;
}
console.log(squared(5));

//15.less than or equals

function lessThanOrEquals(a) {
  return a <= 0 ? true : false;
}
console.log(lessThanOrEquals(-2));

//16. sumPolygon

function sumPolygon(n) {
  return (n - 2) * 180;
}
console.log(sumPolygon(3));

//17. Basket points

function points(twoP, threeP) {
  return twoP * 2 + threeP * 3;
}
console.log(points(38, 8));

//18. concatenate Edabit

function nameString(str) {
  return str + "edabit";
}
console.log(nameString("Muktha"));

//19. less than 100

function lessThan100(a, b) {
  return a + b < 100 ? true : false;
}
console.log(lessThan100(100, 7));

//20.buggy code

function printArray(number) {
  var newArray = [];

  for (var i = 1; i <= number; i++) {
    newArray.push(i);
  }

  return newArray;
}

console.log(printArray(5));

//21. buggy code fix

function swap(a, b) {
  [a, b] = [b, a];
  return [a, b];
}
swap(2, 3);

//22. leg count

function animals(ch, c, p) {
  return ch * 2 + c * 4 + p * 4;
}
animals(2, 3, 5);
animals(1, 2, 3);

//23.and

function and(a, b) {
  return a && b;
}
and(false, true);
and(true, true);

//24. isSame

function isSameNum(a, b) {
  return a == b ? true : false;
}
isSameNum(4, 8);

//25. football points

function footballPoints(w, d, l) {
  return w + 3 + (d + 1) + l;
}
footballPoints(3, 4, 2);

//26. hours and mins to seconds

function convert(h, m) {
  return h * 60 * 60 + m * 60;
}
convert(2, 2);

//27.buggy code

function isSeven(x) {
  return x == "7" ? true : false;
}
isSeven(7);

//28.Gamble game

function profitableGamble(prob, size, pay) {
  return prob * size > pay ? true : false;
}
profitableGamble(0.9, 1, 2);

//29.bool to string

function boolToString(bool) {
  return bool.toString();
}
boolToString(true);

//30. arrow function

arrowFunc = (arg) => {
  return arg;
};
arrowFunc(3);
arrowFunc("3");
arrowFunc(true);

//31.return number of frames

function frames(minutes, fps) {
  return minutes * (fps * 60);
}
frames(1, 1);
frames(10, 1);
frames(10, 25);

//32.eval

function calculator(exp) {
  return eval(exp);
}
calculator("23+4");
calculator("49/7*2-3");
calculator("13+2-5*2");

//33.buggy code:

function greeting(name) {
  if (name == "Mubashir") {
    return "Hello, my Love!";
  }
  return "Hello, " + name + "!";
}
greeting("Mubashir");

//34. makesTen

makesTen = (a, b) => {
  return a + b >= 10 || a == 10 || b == 10 ? true : false;
};
makesTen(9, 10);
makesTen(2, 1);

//35.calculate fuel

function calculateFuel(dis) {
  if (dis < 10) {
    return 100;
  } else {
    return dis * 10;
  }
}

calculateFuel(3);
calculateFuel(23.5);

//36. buggy code

function maxNum(n1, n2) {
  if (n1 > n2) {
    return n1;
  } else {
    return n2;
  }
}
maxNum(3, 7);

//37. make pair of array

makePair = (...args) => {
  return args;
};
makePair(1, 2);

//38. compare string length

comp = (str1, str2) => {
  return str1.length === str2.length ? true : false;
};

comp("hello", "edabit");

//39. isEmpty string

isEmpty = (str) => {
  return str == "" ? true : false;
};
isEmpty("a");
isEmpty(" ");
isEmpty("");

//40.divisible by five.

divisbleByFive = (num) => {
  return num % 5 == 0 ? true : false;
};
divisbleByFive(-55);

//41. divisibleBy100

function divisibleBy100(num) {
  return num % 100 === 0 ? true : false;
}
divisibleBy100(1000);
divisibleBy100(678); //41

//42. strlength

function length(str) {
  var count = 0;
  for (let i = 0; i < str.length; i++) {
    count += 1;
  }
  return count;
}
console.log(length("hellos")); //42

//43. dividesevenly

function dividesEvenly(a, b) {
  return a % b == 0 ? true : false;
}
dividesEvenly(85, 4);
dividesEvenly(16, 2); //43

//44. str to int

function stringInt(str) {
  return parseInt(str);
}
stringInt("10"); //44

//45. area of rectangle

function area(l, b) {
  return l < 0 || b < 0 ? -1 : l * b;
}
area(3, 4);
area(-1, 5); //45

//46. isEven

function isEven(n) {
  return n % 2 === 0 ? true : false;
}
isEven(3); //46

//47. leapyear

function leapYear(year) {
  return year % 4 === 0 ? true : false;
}
leapYear(2021);
leapYear(1992);
leapYear(1956); //47

//48.concat name

function concatName(str1, str2) {
  let c = str2 + "," + str1;
  return c;
}
concatName("lav", "hello"); //48

//49.hasbugs
function has_bugs(buggyCode) {
  if (buggyCode) {
    return "sad days";
  } else {
    return "it's a good day";
  }
}
has_bugs(true);
has_bugs(false); //49

//50.eval
function eq(exp) {
  return eval(exp);
}
eq("1+2");
eq("6/(9-7)");
eq("3+2-4"); //50

//51.equation

function equation(exp) {
  return eval(exp);
}
equation("1+1");
equation("7*4-2");
equation("1+1+1+1+1"); //51

//52.Century crisis

function futurePeople(population, n) {
  return 30 * 12 + n + population;
}
futurePeople(256, 2);
futurePeople(3248, 6);
futurePeople(5240, 3);

//53. vote count

function getVoteCount(obj) {
  return obj.upvotes - obj.downvotes;
}

getVoteCount({ upvotes: 13, downvotes: 0 });
getVoteCount({ upvotes: 2, downvotes: 33 });
getVoteCount({ upvotes: 132, downvotes: 132 });

//54. return negative

function returnNegative(num) {
  return num < 0 ? num : -num;
}
returnNegative(4);
returnNegative(15);
returnNegative(-4);

//55. function reverse

function reverse(a) {
  return a.reverse();
}
reverse([1, 2, 3, 4]);
reverse([9, 9, 2, 3, 4]);
reverse([]); //55

//56. movie admission

function acceptIntoMovie(age, isSupervised) {
  if (age > 15) {
    return true;
  } else if (age < 15 && isSupervised == true) {
    return true;
  } else {
    return false;
  }
}
acceptIntoMovie(14, true);
acceptIntoMovie(14, false);
acceptIntoMovie(16, false);
acceptIntoMovie(12, false); //56

//57.buggy code

function incrementItems(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 1;
  }
  return arr;
}
incrementItems([0, 1, 2, 3, 4]); //57

//58. burglary series 19

const obj = { noChanges: true };
function preventChanges(obj) {
  Object.freeze(obj);
  obj.noChanges = false;
  obj.signature = "whatever";
  return obj;
}
console.log(obj); //58

//59.Lodash drop

function drop(arr, val) {
  return arr.slice(val);
}
drop([1, 2, 3], 1);
drop([1, 2, 3], 2);
drop([1, 2, 3], 5);
drop([1, 2, 3], 0); //59

//60. Drinks allowed

function shouldServeDrinks(age, status) {
  return age >= 18 && status === false ? true : false;
}
shouldServeDrinks(17, true);
shouldServeDrinks(19, false);
shouldServeDrinks(30, true); //60

//61. template string

function format(a, b, c) {
  const template = `Their names were: ${a},${b},${c}`;
  return template;
}
format("john", "joe", "jack"); //61

//62.adder oneliner

const add2 = (x) => x + 2;
const add3 = (x) => x + 3;
const add5 = (x) => x + 5;
const add7 = (x) => x + 7;
const add11 = (x) => x + 11;
add11(2); //62

//63. boolean

const yeah_nope = (val) => {
  return val === true ? "yeah" : "nope";
};
yeah_nope(true); //63

//64. convert to one liner

function equilbrium(x) {
  if (x > 0) return "positive";
  if (x < 0) return "negative";
  return true;
}
equilbrium(2); //64

//65. string length odd or even

const oddOrEven = (str) => {
  let length = str.length;
  return length % 2 == 0 ? true : false;
};
oddOrEven("cherry");
oddOrEven("pears"); //65

//66. destructuring

function destructureIt(arr) {
  const [a, b, ...arg] = arr;
  console.log(a, b);
}
destructureIt([1, 2, 3, 4, 5, 6]); //66

//67. how many walls

const howManyWalls = (n, w, h) => {
  return Math.round(n / (w * h));
};
howManyWalls(100, 4, 5);
howManyWalls(10, 15, 12);
howManyWalls(41, 3, 6); //67

//68. int string conversion without parseint toString

const intToString = (num) => {
  return String(num);
};
const stringToInt = (str) => {
  return Number(str);
};
intToString(4);
stringToInt(4); //68

//69. inch to feet

const inchesToFeet = (inch) => {
  return inch < 12 ? 0 : inch / 12;
};
inchesToFeet(324);
inchesToFeet(12);
inchesToFeet(36);
inchesToFeet(11); //69

//70. years in one house

const yearsInOneHouse = (age, moves) => {
  return moves === 0 ? 0 : Math.round(age / (moves + 1));
};
yearsInOneHouse(30, 1);
yearsInOneHouse(15, 2);
yearsInOneHouse(80, 0); //70

//71. array items type

const arrayValuesTypes = (arr) => {
  let typeArr = arr.map((item) => typeof item);
  return typeArr;
};
arrayValuesTypes([1, 2, "null", []]);
arrayValuesTypes(["214", true, false, 2, 2.15, [], null]);
arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]); //71

//72. power function

const calculateExponent = (base, pow) => {
  return Math.pow(base, pow);
};
calculateExponent(10, 10);
calculateExponent(5, 5); //72

//73. operations using eval

const operate = (num1, num2, op) => {
  return eval(num1 + op + num2);
};
operate(1, 2, "+");
operate(7, 10, "-");
operate(20, 10, "/"); //73

//74.pop

const getLastItem = (arr) => {
  return arr.pop();
};
getLastItem([1, 2, 3]);
getLastItem(["cat", "dog", "duck"]);
getLastItem([true, false, true]); //74

//75.slice repeat

const frontThree = (str) => {
  return str.slice(0, 3).repeat(3);
};
frontThree("Python");
frontThree("cat"); //75

//76.switch sum

const posCom = (n) => {
  return Math.pow(2, n);
};
posCom(1);
posCom(3);
posCom(10); //76

//77. imposter

const imposterFormula = (i, p) => {
  return Math.round(100 * (i / p)) + "%";
};
imposterFormula(1, 10);
imposterFormula(2, 5);
imposterFormula(1, 8); //77

//78.substring problem

const newWord = (str) => {
  str = str.substring(1);
  return str;
};
newWord("apple");
newWord("cherry");
newWord("plum"); //78

//79. flip boolean

const flipBool = (val) => {
  return val === 1 ? 0 : 1;
};
flipBool(1);
flipBool(0); //79

//80. nth even

const nthEven = (n) => {
  return n === 0 ? 1 : 2 * n - 2;
};

nthEven(0);
nthEven(101);
nthEven(2); //80

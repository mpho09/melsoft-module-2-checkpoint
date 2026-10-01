/* CHALLENGE 1 */

// The datatype is String and i chose const because name does not change
const name = "Mpho";

// The datatype is Number and i chose let because age does change and can be reassigned
let age = 23;

// The datatype is Boolean and i chose let because that can change
let  enjoyJavascript = true;

// the datatype is Number.i chose let because temperature does change
let temperature = 30;

// The datatype is Number and it can be reassigned so i chose let
let notNumber = Number('hello');

// The datatype is Number and const is used because the value will not be reassigned
const infinityValue = Infinity;

// The datatype is Number and  const is used because the value will not be reassigned.
const number = Number.MAX_SAFE_INTEGER;

// The datatype is null
const num = null;

/* In your own words, what is the single most important difference between var and let?
the difference has to be the scope of the variable.With var the variable is function scoped 
meaning it can be used within a function and with let the variable is block scoped 
meaning you can use it within a block. 

Why should you default to const, and only use let when you know a value must change?
Const is used when the value will not be changed. Therefore should you know that
the value should not change use const.

Why is naming a variable usrNm bad? What would you rename it to, and why does naming
matter for a professional codebase?
It is bad becouse it not clear or specific enough. a team member would not understand 
what the variable is for. I would rename it to userName to make colleques understand
 what the variable store and used for
*/

/* CHALLENGE 2 */

console.log("name:", typeof name);
console.log("age:", typeof age); 
console.log("enjoyJavascript:", typeof enjoyJavascript); 
console.log("temperature:", typeof temperature); 
console.log("notNumber:", typeof notNumber); 
console.log("infinityValue:", typeof infinityValue);
console.log("number:", typeof number); 
console.log("num:", typeof num);

console.log("undefined:", typeof undefined);
console.log("null:", typeof null); console.log("NaN:", typeof NaN); 
console.log('"42":', typeof "42"); console.log("typeof 42:", typeof (typeof 42)); 
console.log("[1, 2, 3]:", typeof [1, 2, 3]); 
console.log("function:", typeof function() {});

/*typeof NaN returns number. NaN means "Not a Number". It represents the result of an invalid numeric operation.
  Number("hello") returns NaN. Even though the value means "Not a Number", JavaScript stores it as part of the Number type.  
*/


/* CHALLENGE 3 */

let a = "123";

console.log("Number:", Number(a), typeof Number(a));
console.log("parseInt:", parseInt(a), typeof parseInt(a));
console.log("parseFloat:", parseFloat(a), typeof parseFloat(a)); 
console.log("Boolean:", Boolean(a), typeof Boolean(a));
console.log("String:", String(a), typeof String(a));

let b = "3.14";
console.log("Number:", Number(b), typeof Number(b));
console.log("parseInt:", parseInt(b), typeof parseInt(b)); 
console.log("parseFloat:", parseFloat(b), typeof parseFloat(b)); 
console.log("Boolean:", Boolean(b), typeof Boolean(b)); 
console.log("String:", String(b), typeof String(b));

let c = "hello";
console.log("Number:", Number(c), typeof Number(c));
console.log("parseInt:", parseInt(c), typeof parseInt(c)); 
console.log("parseFloat:", parseFloat(c), typeof parseFloat(c)); 
console.log("Boolean:", Boolean(c), typeof Boolean(c)); 
console.log("String:", String(c), typeof String(c));

let d = "42abc";
console.log("Number:", Number(d), typeof Number(d));
console.log("parseInt:", parseInt(d), typeof parseInt(d)); 
console.log("parseFloat:", parseFloat(d), typeof parseFloat(d)); 
console.log("Boolean:", Boolean(d), typeof Boolean(d)); 
console.log("String:", String(d), typeof String(d));

let e = "";
console.log("Number:", Number(e), typeof Number(e));
console.log("parseInt:", parseInt(e), typeof parseInt(e)); 
console.log("parseFloat:", parseFloat(e), typeof parseFloat(e)); 
console.log("Boolean:", Boolean(e), typeof Boolean(e)); 
console.log("String:", String(e), typeof String(e));

let f = 0;
console.log("Number:", Number(f), typeof Number(f));
console.log("parseInt:", parseInt(f), typeof parseInt(f)); 
console.log("parseFloat:", parseFloat(f), typeof parseFloat(f)); 
console.log("Boolean:", Boolean(f), typeof Boolean(f)); 
console.log("String:", String(f), typeof String(f));

let g = null;
console.log("Number:", Number(g), typeof Number(g));
console.log("parseInt:", parseInt(g), typeof parseInt(g)); 
console.log("parseFloat:", parseFloat(g), typeof parseFloat(g)); 
console.log("Boolean:", Boolean(g), typeof Boolean(g)); 
console.log("String:", String(g), typeof String(g));

let h = undefined;
console.log("Number:", Number(h), typeof Number(h));
console.log("parseInt:", parseInt(h), typeof parseInt(h)); 
console.log("parseFloat:", parseFloat(h), typeof parseFloat(h)); 
console.log("Boolean:", Boolean(h), typeof Boolean(h)); 
console.log("String:", String(h), typeof String(h));


/*follow-up Questions
What is the exact difference between Number('42abc') and parseInt('42abc')? What does
each return?
number('42abc') nothing becouse it is not a number and parseInt('42abc') returns 42 
because after 42 there are letter and so it stops there.

When would you reach for parseFloat instead of parseInt in real code?
When you have a number is a decimal

What does Number('') return, and why is that a common source of bugs?
Zero becouse variable that is empty is 0 in Javascript.
*/

/* CHALLENGE 4 */

// It will print 53 mainly becouse the 5 is a string plus the number 3 it ill concatenate
let num1 ="5"+ 3 ;
console.log(num1);

// It will print 53 mainly becouse the 5 is a string plus the number 3 it ill concatenate
"5" - 3
let num2 ="5"- 3 ;
console.log(num2);
// the correct answer is 2. the 5 will change to number not string becouse of the subtraction operator

// it will print 52 becouse they are both strings and it will concatenate them
let num3 = "5" * "2";
console.log(num3);
// it printed 10 becouse the operator is multiplication the numbers will change to numbers

// it will give an error
let num4 = true + 1;
console.log(num4);
// javascript changes true to be one. it printed 2

//it will print true1
let num5 = true + "1";
console.log(num5);

// it will print 0 mainly becouse it empty
let num6 = false + null;
console.log(num6);

//it will print 0
let num7 = null + undefined;
console.log(num7);
// it printed NaN becouse undefined is not a number

// it will print infinity becouse i saw it in the first challenge. 1/0 is infinity
let num8 = 1 / 0;
console.log(num8);


let num9 = 0 / 0;
console.log(num9);
// it printed NaN

//it will print not a numberbecouse of the letters
let num10 = "abc" - 1;
console.log(num10);

//it wont print anything becouse they both empty
let num11 = [] + [];
console.log(num11);

//it will print 3
let num12=[1] + [2];
console.log(num12);
// it printer 12 becouse the numbers are in an array and it will concatenate them


/*CHALLENGE 5 */

//initialized variables to have valuesh
var userName = "Sarah"
var userAge = "25"
var userScore = 85.5
var scoreAdjustment = "10"
//adding the userScore and scoreAdjustment to get the new score
var newScore = userScore + scoreAdjustment
//it will print out the new score
console.log("New score: " + newScore)
//initialized the salary
var salary = "50000"
//initialized the TAX_RATE
var TAX_RATE = 0.15
//multiplying the salary and TAX_RATE to get the tax
var tax = salary * TAX_RATE
//it will print out the tax
console.log("Tax: R" + tax)
//subtracting the userAge from 65 to get the years until retirement
var yearsUntilRetirement = 65 - userAge
//it will print out the years until retirement
console.log("Years until retirement: " + yearsUntilRetirement)
//adding the userAge and userScore
var totalAgeAndScore = userAge + userScore
//it will print out the totalAgeAndScore
console.log(totalAgeAndScore)
//initialized the isAdmin variable to false 
var isAdmin = "false"
//it will print out the isAdmin
console.log("Admin: " + Boolean(isAdmin))


/*correct code*/
var userName = "Sarah";
var userAge = 25;
var userScore = 85.5;
var scoreAdjustment = 10;
var newScore = userScore + scoreAdjustment;
console.log("New score: " + newScore);
var salary = "50000";
var TAX_RATE = 0.15;
var tax = salary * TAX_RATE;
console.log("Tax: R" + tax);
var yearsUntilRetirement = 65 - userAge;
console.log("Years until retirement: " + yearsUntilRetirement);
var totalAgeAndScore = userAge + userScore;
console.log(totalAgeAndScore);
var isAdmin = "false";
console.log("Admin: " + Boolean(isAdmin));

/* I have cadded semi colon in every line of code.
changed the the scoreAdjustment and userAge from string to number.*/ 

/* CHALLENGE 6 */

let results = 0.1 + 0.2;
console.log(results); // 0.3

let results2 = 0.3 - 0.1;
console.log(results2); // 0.1

let results3=0.1 * 3;
console.log(results3); //0.3

let results4= 0.1 + 0.2 === 0.3;
console.log(results4); // false because 0.1 + 0.2 is not exactly equal to 0.3 becouse to floating-point issues in JavaScript.

/* CHALLENGE 7 */

var p = "199.99"
var q = "3"
var t = 0.15
var sub = p * q
var tax = sub * t
var tot = sub + tax
var r = "Total: " + tot
console.log(r)
/* the code is not readable and the variable names are not descriptive. 
    there are no semi colons at the end of the code*/

/*changed code*/
const price = 199.99;
let numberOfProducts = 3;
let tax = 0.15;
let total = price * numberOfProducts;
let taxAmount = total * tax;
let tot = sub + taxAmount;
let r = "Total: " + tot;
console.log(r);
/* its an improvement becouse the variable name are more descriptive and the code is
 more readable.*/

 /* CHALLENGE 8 */

 let  productName = "Phone";
 let  unitPrice = 5000;
 let quantityInput = "5";
 const taxRate =0.15;
 let quantity = Number(quantityInput);
 let subTotal = unitPrice * quantity;
const taxAmount1 = subTotal * taxRate;

 /* CHALLENGE 9 */

 /* The result will be type of number and it will be print 2 since the 10 string changes
 to a number becouse of the divide operator*/ 
let mystery = "10";
let count = 5;
let result = mystery / count; 
console.log(typeof result); 
console.log(result); //2

/* the console for result2 will print NaN for type of number.
result3 will be NaN because even though it changed from string to number
string becouse of the devide operator it is not a number*/
let mystery2 = "10a"; 
let count2 = 5;
let result2 = mystery2 / count2;
console.log(typeof result2); 
console.log(result2); 
console.log(result2 + 1); 

/*result3will be 1055 and result4 will be 5510 mainly becouse it is 
addition and 10 is a string will others will automatically be strings too and concatenate */
let mystery3 = "10";
let result3 = mystery3 + 5 + 5; //1055
let result4 = 5 + 5 + mystery3; //5510
console.log(result3);
console.log(result4); 


/* CHALLENGE 10 */

/*What is the SINGLE most important thing you understood about JavaScript's type system
from this project?
The most important thing I understood is that variables can change types based on the operators,
especially when dealing with strings and numbers. Also got to understand how typeof works and 
how to use it to check the type of a variable. 

Explain the difference between typeof and Number.isNaN, and give an example of when you
would use each.
typeof checks the type of a variable.isNaN checks if a value is NaN (Not-a-Number) 
and returns a boolean. For example I would use typeof to check if a variable is a string
or number before performing operations on it and I would use Number.isNaN to check if
a calculation are NaN.


Describe a realistic scenario in production code where forgetting to cast a value would
cause a bug that a developer might not notice for a long time.
It would have to be a users age from a form since it comes as a string. if you forget to
change it to a string and use it in a calculation it will concatenate instead of adding.



In your own words: what is the difference between IMPLICIT and EXPLICIT type coercion?
Give one example of each from your own work in this project.
IMPLICIT is when Javascript just changes the variable type on it own without you telling it eg. 
let age = "30";
age = age - 1;
console.log(age); //29
EXPLICIT is when you tell it manually to change the variable type eg. 
let age = "30";
age = Number(age) - 1;
console.log(age); //29


If you had to teach Module 2 to another beginner tomorrow, which ONE concept would you
emphasise as most easy to misunderstand? Why?

I would emphasize the difference between addition and concatenation becouse they are two
different things and can be confusing. Addition is when you add two numbers together and
concatenation is when you join two strings together. If you are not careful, you can end
up with unexpected results if you are not aware of the difference between the two.
*/

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


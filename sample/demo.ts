/** @type {String} [Demo for string] */
let fullName: string = `Kapil`;
let lastName: any = "Chhabra";
let age: number = 30;
let sentence: string = "Hello, my name is " + fullName + ' ' + lastName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month." + ".\n\n";
// console.log(sentence);

/** Array */
let list: Array<number> = [1, 2, 3];
// console.log(sentence + list);

/** @type {Array} [with multiple types] */
let x: [string, number, boolean];
x = ["Hello", 20, false];

// console.log(x[0], x[1], x[2]);
// console.log(x[0].substr(1));

/** Emums */
enum Color {
    Red,
    Green,
    Blue
}
var col = Color.Red;
col = 1; // Effectively same as Color.Red
console.log(col);
/** @type {String} [Demo for string] */
var fullName = "Kapil";
var lastName = "Chhabra";
var age = 30;
var sentence = "Hello, my name is " + fullName + ' ' + lastName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month." + ".\n\n";
// console.log(sentence);
/** Array */
var list = [1, 2, 3];
// console.log(sentence + list);
/** @type {Array} [with multiple types] */
var x;
x = ["Hello", 20, false];
// console.log(x[0], x[1], x[2]);
// console.log(x[0].substr(1));
/** Emums */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var col = Color.Red;
col = 1; // Effectively same as Color.Red
console.log(col);

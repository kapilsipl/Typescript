var n = 1;
/** @type {Correct type} [number] */
n = 1;
/** @type {Wrong type} [it should be number] */
// n = "Rob";
/** Boolean */
var winter = false;
/** @type {Wrong type} [it should be number] */
// winter = 1;
/** Number */
var count = 1;
/** String */
var name = "Kapil";
/** Array with same string data*/
var names = ["John", "Rob", "Bob"];
/** Array with same string data*/
var numbers = [1, 2, 3];
/** Array with any*/
var anything = ["John", "Rob", "Bob", 1, 2, 3];
/** enum property */
/** Store built in variable */
var Kapil;
(function (Kapil) {
    Kapil[Kapil["jon"] = 0] = "jon";
    Kapil[Kapil["Bran"] = 1] = "Bran";
    Kapil[Kapil["Eddard"] = 2] = "Eddard";
    Kapil[Kapil["Catlyn"] = 3] = "Catlyn";
})(Kapil || (Kapil = {}));
;
var test = Kapil.jon;
/** [Function which return string] */
function getNames() {
    return "World";
}
/** [Function which return number] */
function getNumbers() {
    return 1;
}

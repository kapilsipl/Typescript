var n: number = 1;

/** @type {Correct type} [number] */
n = 1;

/** @type {Wrong type} [it should be number] */
// n = "Rob";

/** Boolean */
var winter: boolean = false;
/** @type {Wrong type} [it should be number] */
// winter = 1;

/** Number */
var count: number = 1;

/** String */
var name: string = "Kapil";

/** Array with same string data*/
var names: string[] = ["John", "Rob", "Bob"];

/** Array with same string data*/
var numbers: number[] = [1, 2, 3];

/** Array with any*/
var anything: any[] = ["John", "Rob", "Bob", 1, 2, 3];

/** enum property */

/** Store built in variable */
enum Kapil { jon, Bran, Eddard, Catlyn };
var test: Kapil = Kapil.jon;

/** [Function which return string] */
function getNames() : string{
	return "World";
}

/** [Function which return number] */
function getNumbers(): number {
	return 1
}

/** [Function which return anything] */
function getAnything(): any {
	return 1
}

/** [Function which return nothing] */
function getNothing(): void {
	console.log("Rain is coming!!")
}

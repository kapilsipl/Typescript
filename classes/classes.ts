/** Create new class */
class DemoApp{
	/** @type {Property} [define in class] */
	name: string;
	saying: string;
	/** static property can accesable from the class blueprint, see console bottom*/
	static castle: string = "Rain coming this week";

	/** Constructor is the function when class run */
	constructor (){
		this.saying = "Winterfell";
	} 
	/** functions */
	hello(person: string){
		console.log("Hello, " + person);
	}
}

/** [Create an object] */
var demoApp = new DemoApp();
demoApp.saying = "Hello world";
/** [Call static property from anywhere] */
console.log(DemoApp.castle);

/** call function from outside with class name */
demoApp.hello("Kapil");
class Person {
	name: string;
/** [Object created] */
	constructor(name:string) {
		this.name = name;
	}
	/** [Function] */
	dance(){
		console.log(this.name + " is Dancing");
	}
}
var user = new Person("Kapil");
/** [Initilize function] */
user.dance();


class AwsomePerson extends Person {
	dance(){
		console.log(this.name + "So Awsome");
		/** [Overwrite function of above one, super for overwrite the function] */
		super.dance();
	}
}

var robb = new AwsomePerson("Raj");
robb.dance();
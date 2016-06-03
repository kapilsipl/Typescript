/** Interface is a blueprint for an object */
// interface stark{
// 	name: string;
// }
interface UserDemo{
	name: string;
	age: number;
}

function printLabel(stark: UserDemo) {
	console.log(stark.name);
	console.log(stark.age);
}
printLabel({name: "Kapil",age: 30 });
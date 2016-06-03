/** Create new class */
var DemoApp = (function () {
    /** Constructor is the function when class run */
    function DemoApp() {
        this.saying = "Winterfell";
    }
    /** functions */
    DemoApp.prototype.hello = function (person) {
        console.log("Hello, " + person);
    };
    /** static property can accesable from the class blueprint, see console bottom*/
    DemoApp.castle = "Rain coming this week";
    return DemoApp;
}());
/** [Create an object] */
var demoApp = new DemoApp();
demoApp.saying = "Hello world";
/** [Call static property from anywhere] */
console.log(DemoApp.castle);
/** call function from outside with class name */
demoApp.hello("Kapil");

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    /** [Object created] */
    function Person(name) {
        this.name = name;
    }
    /** [Function] */
    Person.prototype.dance = function () {
        console.log(this.name + " is Dancing");
    };
    return Person;
}());
var user = new Person("Kapil");
/** [Initilize function] */
user.dance();
var AwsomePerson = (function (_super) {
    __extends(AwsomePerson, _super);
    function AwsomePerson() {
        _super.apply(this, arguments);
    }
    AwsomePerson.prototype.dance = function () {
        console.log(this.name + "So Awsome");
        /** [Overwrite function of above one, super for overwrite the function] */
        _super.prototype.dance.call(this);
    };
    return AwsomePerson;
}(Person));
var robb = new AwsomePerson("Raj");
robb.dance();

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var header_component_1 = require('./header.component');
var footer_component_1 = require('./footer.component');
// import { MyStoryDetails } from './storydetails.component';
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Kapil Chhabra';
        this.employees = [
            {
                name: 'App 1',
                age: 30
            },
            {
                name: 'App 2',
                age: 31
            },
            {
                name: 'App 3',
                age: 32
            },
            {
                name: 'App 4',
                age: 33
            }
        ];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            // template: '<h1>My First Angular 2 App Ready</h1>'
            templateUrl: 'story.html',
            styles: ["\n\t\tdiv{\n\t\t\tcolor:#545454;\n\t\t    background:#02A8F4;\n\t\t    padding:15px;\n\t\t    box-shadow:2px 2px 2px 0 rgba(0, 0, 0, 0.3);\n\t\t}\n\t "],
            directives: [header_component_1.ApplicationHeader, footer_component_1.ApplicationFooter]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
// @Component({
// 	selector: 'demo-header',
// 	template:'<h1>Header goes here</h1>'
// })
// class AppHeader {
// } 
//# sourceMappingURL=app.component.js.map
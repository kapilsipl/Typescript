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
var MyStoryDetails = (function () {
    function MyStoryDetails() {
        this.stories = {
            name: 'My Book 1',
            copies: 100,
            instock: 'yes'
        };
    }
    MyStoryDetails = __decorate([
        core_1.Component({
            selector: 'story-details',
            templateUrl: 'story-details.html'
        }), 
        __metadata('design:paramtypes', [])
    ], MyStoryDetails);
    return MyStoryDetails;
}());
exports.MyStoryDetails = MyStoryDetails;
// @Component({
// 	selector: 'app-header',
// 	template: '<h5>Header shoing!!</h5>'
// })
// export class AppHeader {} 
//# sourceMappingURL=storydetails.component.js.map
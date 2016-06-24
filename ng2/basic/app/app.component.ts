import { Component } from '@angular/core';
import { ApplicationHeader } from './header.component';
import { ApplicationFooter } from './footer.component';
// import { MyStoryDetails } from './storydetails.component';
@Component({
	selector: 'my-app',
	// template: '<h1>My First Angular 2 App Ready</h1>'
	 templateUrl: 'story.html',
	 styles: [`
		div{
			color:#545454;
		    background:#02A8F4;
		    padding:15px;
		    box-shadow:2px 2px 2px 0 rgba(0, 0, 0, 0.3);
		}
	 `],
	 directives: [ApplicationHeader, ApplicationFooter]
})
export class AppComponent {
	name = 'Kapil Chhabra';
	employees = [
	{
		name: 'App 1',
		age: 30
	},
	{
		name: 'App 2',
		age:31
	},
	{
		name: 'App 3',
		age:32
	},
	{
		name: 'App 4',
		age:33
	}
	]
}

// @Component({
// 	selector: 'demo-header',
// 	template:'<h1>Header goes here</h1>'
// })

// class AppHeader {
// }
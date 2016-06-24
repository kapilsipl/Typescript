import { Component } from '@angular/core';

@Component({
	selector:'story-details',
	templateUrl: 'story-details.html'
})

export class MyStoryDetails {
	stories = {
		name: 'My Book 1',
		copies: 100,
		instock:'yes'
	}
}

// @Component({
// 	selector: 'app-header',
// 	template: '<h5>Header shoing!!</h5>'
// })
// export class AppHeader {}
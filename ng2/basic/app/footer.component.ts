import { Component } from '@angular/core';

@Component({
	selector: 'app-footer',
	template: '<h5>{{title}} Footer showing here</h5>'
})
export class ApplicationFooter { 
	title = 'Hello world';
}

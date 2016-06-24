import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	template: '<h5>{{title}} Header showing here</h5>'
})
export class ApplicationHeader{
	title: string = 'My';
}

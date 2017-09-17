import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-pokeball-loader',
	templateUrl: './pokeball-loader.component.html',
	styleUrls: ['./pokeball-loader.component.scss']
})
export class PokeballLoaderComponent {
	@Input()
	loaderTitle: string;

	constructor() { }

}

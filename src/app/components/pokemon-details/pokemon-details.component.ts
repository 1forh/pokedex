import { Component, OnChanges, Input } from '@angular/core';

@Component({
	selector: 'app-pokemon-details',
	templateUrl: './pokemon-details.component.html',
	styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnChanges {
	@Input()
	pokemon: any;

	constructor() {}

	ngOnChanges(changes) {
		if (changes && changes.pokemon && changes.pokemon.currentValue) {
			console.log('Pokemon: ', changes.pokemon.currentValue);
		}
 	}

}

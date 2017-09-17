import { Component, OnInit } from '@angular/core';

import { PokemonService } from './services/pokemon.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	providers: [PokemonService]
})
export class AppComponent implements OnInit {
	pokemon: any;
	id: number;
	isLoading: boolean;

	constructor(private pokemonService: PokemonService) {}

	ngOnInit() {
		this.id = null;
		this.isLoading = false;
	}

	async getPokemon(id: any): Promise<any> {
		this.toggleLoadingIndicator();
		const response = await this.pokemonService.getPokemon(id);
		this.pokemon = JSON.parse(response._body);
		this.toggleLoadingIndicator();
		console.log(this.pokemon);
	}

	private toggleLoadingIndicator() {
		this.isLoading = !this.isLoading;
	}
}

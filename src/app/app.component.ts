import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { PokemonService } from './services/pokemon.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	providers: [PokemonService]
})
export class AppComponent implements OnInit {
	pokemon: any;
	pokemonList: any;
	id: number;
	isLoading: boolean;

	constructor(private pokemonService: PokemonService) {}

	ngOnInit() {
		this.getPokemonList();
		this.id = null;
		this.isLoading = false;
	}

	public getPokemonList() {
		this.pokemonService.getPokemonList()
			.subscribe((response) => {
				this.pokemonList = response;
			});
	}

	public async getPokemon(id) {
		this.pokemonService.getPokemon(id)
		.subscribe((response) => {
			this.pokemon = response;
		});
	}

	// private toggleLoadingIndicator() {
	// 	this.isLoading = !this.isLoading;
	// }
}

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
	isFetchingPokemon: boolean;

	constructor(private pokemonService: PokemonService) {}

	ngOnInit() {
		this.getPokemonList();
	}

	public getPokemonList() {
		this.pokemonService.getPokemonList()
			.subscribe((response) => {
				this.pokemonList = response;
			});
	}

	public async getPokemon(id) {
		this.isFetchingPokemon = true;
		this.pokemonService.getPokemon(id)
			.subscribe((response) => {
				this.pokemon = response;
				this.isFetchingPokemon = false;
			});
		this.pokemonService.getPokemonSpeciesDetails(id)
			.subscribe((response) => {
				console.log(response);
			});
	}
}

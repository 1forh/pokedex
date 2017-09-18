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
		this.getPokemonList(0);
	}

	public next(event) {
		event = parseInt(event.replace('https://pokeapi.co/api/v2/pokemon/?offset=', ''));
		this.getPokemonList(event);
	}

	public previous(event) {
		event = parseInt(event.replace('https://pokeapi.co/api/v2/pokemon/?offset=', ''));
		this.getPokemonList(event);
	}

	public async getPokemon(id) {
		this.isFetchingPokemon = true;
		this.pokemonService.getPokemon(id)
			.subscribe((response) => {
				this.pokemon = response;
				this.isFetchingPokemon = false;
				console.log(this.pokemon);
			});
	}

	private getPokemonList(offset: number) {
		this.pokemonService.getPokemonList(offset)
			.subscribe((response) => {
				console.log(response);
				this.pokemonList = response;
			});
	}
	
}

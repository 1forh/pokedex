import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-pokemon-list',
	templateUrl: './pokemon-list.component.html',
	styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnChanges {
	@Input()
	pokemonList: any;

	@Output()
	getPokemon: EventEmitter<string> = new EventEmitter();

	@Output()
	getPreviousInList: EventEmitter<string> = new EventEmitter();

	@Output()
	getNextInList: EventEmitter<string> = new EventEmitter();
	
	id: string;
	name: string;

	isLoading: boolean;

	constructor() {
		this.isLoading = true;
	}

	ngOnChanges(changes) {
		if (changes && changes.pokemonList && changes.pokemonList.currentValue) {
			this.isLoading = false;
		}
	}

	public get(id: string) {
		this.getPokemon.emit(id);
	}

	public previous(offset: string) {
		this.getPreviousInList.emit(offset);
	}

	public next(offset: string) {
		this.getNextInList.emit(offset);
	}
	
}

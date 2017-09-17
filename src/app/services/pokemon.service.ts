import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class PokemonService {
	constructor(private http: Http) {}

	public getPokemonList(): Observable<any> {
		return this.http.get('http://pokeapi.co/api/v2/pokemon')
			.map((response: Response) => response.json())
			.catch((error: any) => Observable.throw(error.json()));
	}

	public getPokemon(id: number): Observable<any> {
		return this.http.get(`http://pokeapi.co/api/v2/pokemon/${id}`)
			.map((response: Response) => response.json())
			.catch((error: any) => Observable.throw(error.json()));
	}
}
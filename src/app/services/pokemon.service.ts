import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = 'https://pokeapi.co/api/v2';

@Injectable()
export class PokemonService {
	constructor(private http: Http) {}

	public getPokemonList(): Observable<any> {
		return this.http.get(`${API_URL}/pokemon`)
			.map((response: Response) => response.json())
			.catch((error: any) => Observable.throw(error.json()));
	}

	public getPokemon(id: number): Observable<any> {
		return this.http.get(`${API_URL}/pokemon/${id}`)
			.map((response: Response) => response.json())
			.catch((error: any) => Observable.throw(error.json()));
	}
}
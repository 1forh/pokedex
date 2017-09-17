import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PokemonService {
  constructor(private http: Http) {}

  getPokemon(id: number): Promise<any> {
    return this.http.get(`http://pokeapi.co/api/v2/pokemon/${id}/`).toPromise();
  }
}
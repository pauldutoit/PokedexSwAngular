import { Injectable } from '@angular/core';
import { of, Observable, pipe } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Pokemon } from '../models/pokemon.model';
import { PagedData } from '../models/paged-data.model';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemonUrl = 'http://51.75.122.159:3000/pokemons';

  constructor(private http: HttpClient) { }

  getPokemons(offset = 0){
    const params = new HttpParams().set('offset',`${offset}`).set('limit','20');

    return this.http.get<PagedData<Pokemon>>(this.pokemonUrl,{params});
  }

  getPokemon(id){
    return this.http.get<Pokemon>(this.pokemonUrl+'/'+id);
  }

}

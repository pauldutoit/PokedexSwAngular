import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PagedData } from 'src/app/models/paged-data.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons: PagedData<Pokemon> = {data:[],limit:20,offset:0};
  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons(){
    // this.pokemonService.getPokemons().subscribe(POKEMONS => this.pokemons = POKEMONS);
    this.pokemonService.getPokemons(this.pokemons.offset).subscribe(pokemons =>{this.pokemons.data = this.pokemons.data.concat(pokemons.data);
      this.pokemons.offset = pokemons.offset+20;
      });
  }

  onScroll() {
    this.getPokemons();
  }

}

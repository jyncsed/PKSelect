import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Generation } from 'src/app/enums/generation.enum';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }


  selectedPokemon = [];
  pokemonGen1 = this.pokemonService.getPokemon(Generation.generationOne);
  pokemonGen2 = this.pokemonService.getPokemon(Generation.generationTwo);
  pokemonGen3 = this.pokemonService.getPokemon(Generation.generationThree);
  pokemonGen4 = this.pokemonService.getPokemon(Generation.generationFour);
  pokemonGen5 = this.pokemonService.getPokemon(Generation.generationFive);
  pokemonGen6 = this.pokemonService.getPokemon(Generation.generationSix);
  pokemonGen7 = this.pokemonService.getPokemon(Generation.generationSeven);
  pokemonGen8 = [];

  minIV = 100;
  maxIV = 100;

  command: string;

  ngOnInit() {
    this.buildCommand();
  }

  get iv() {
    if (this.minIV === 100 && this.maxIV === 100) {
      return 'iv' + this.minIV;
    } else {
      return 'iv' + this.minIV + ' maxiv' + this.maxIV;
    }
  }

  buildCommand() {
    this.command = '!track';
    this.selectedPokemon.forEach(
      pokemon => {
        this.command += ' ' + pokemon;
      }
    );
    this.command += ' ' + this.iv;
  }

  toggle(event) {
    const pokemon = event.name;
    if (event.checked) {
      this.selectedPokemon.push(pokemon);
    } else {
      if (this.selectedPokemon.find(x => x = pokemon)) {
        this.selectedPokemon.splice(this.selectedPokemon.indexOf(pokemon), 1);
      }
    }
    this.buildCommand();
  }
}

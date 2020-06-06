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
  maxAtk = 15;
  maxDef = 15;
  maxSta = 15;

  command: string;

  usePvPBuilder = false;

  ngOnInit() {
    this.buildCommand();
  }

  get iv() {
    if (!this.usePvPBuilder) {
      if (this.minIV === 100 && this.maxIV === 100) {
        return 'iv' + this.minIV;
      } else {
        return 'iv' + this.minIV + ' maxiv' + this.maxIV;
      }
    } else {
      return 'iv' + this.maxIV;
    }
  }

  get stats() {
    if (this.usePvPBuilder) {
      const attack = `maxAtk${this.maxAtk}`;
      const defense = `maxAtk${this.maxDef}`;
      const stanima = `maxAtk${this.maxSta}`;
      return attack + ' ' + defense + ' ' + stanima;
    }
    return '';
  }

  buildCommand() {
    this.command = '!track';
    this.selectedPokemon.forEach(
      pokemon => {
        this.command += ' ' + pokemon;
      }
    );
    this.command += ' ' + this.iv + ' ' + this.stats;
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

  ivValidation() {
    if (this.minIV > this.maxIV) {
      this.minIV = this.maxIV;
    }

    if (this.usePvPBuilder) {
      const calculateIV = Math.round((this.maxSta + this.maxAtk + this.maxDef) / 45 * 100);
      this.maxIV = calculateIV;
    }
    this.buildCommand();
  }

  toggleUsePvPBuilder(event) {
    if (event.checked) {
      this.usePvPBuilder = true;
    } else {
      this.usePvPBuilder = false;
    }
  }
}

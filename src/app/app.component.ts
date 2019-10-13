import { Component, OnInit } from '@angular/core';
import { Generation1 } from './data/generation1';
import { Generation2 } from './data/generation2';
import { Generation4 } from './data/generation4';
import { Generation3 } from './data/generation3';
import { Generation5 } from './data/generation5';
import { Generation6 } from './data/generation6';
import { Generation7 } from './data/generation7';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  selectedPokemon = [];
  pokemonGen1 = Generation1.pokemon;
  pokemonGen2 = Generation2.pokemon;
  pokemonGen3 = Generation3.pokemon;
  pokemonGen4 = Generation4.pokemon;
  pokemonGen5 = Generation5.pokemon;
  pokemonGen6 = Generation6.pokemon;
  pokemonGen7 = Generation7.pokemon;
  pokemonGen8 = [];

  minIV = 100;
  maxIV = 100;
  get iv() {
    if (this.minIV === 100 && this.maxIV === 100) {
      return 'iv' + this.minIV;
    } else {
      return 'iv' + this.minIV + ' maxiv' + this.maxIV;
    }
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
  }
}

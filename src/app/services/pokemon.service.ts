import { Injectable } from '@angular/core';
import { Generation } from '../enums/generation.enum';
import { Generation1 } from '../data/generation1';
import { Generation2 } from '../data/generation2';
import { Generation3 } from '../data/generation3';
import { Generation4 } from '../data/generation4';
import { Generation5 } from '../data/generation5';
import { Generation6 } from '../data/generation6';
import { Generation7 } from '../data/generation7';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

 getPokemon(generation: Generation)  {
    switch (generation) {
     case Generation.generationOne : {
       return Generation1.pokemon;
     }
     case Generation.generationTwo : {
      return Generation2.pokemon;
    }
    case Generation.generationThree : {
      return Generation3.pokemon;
    }
    case Generation.generationFour : {
      return Generation4.pokemon;
    }
    case Generation.generationFive : {
      return Generation5.pokemon;
    }
    case Generation.generationSix : {
      return Generation6.pokemon;
    }
    case Generation.generationSeven : {
      return Generation7.pokemon;
    }
    case Generation.generationEight : {
      return null;
    }
  }

 }
}

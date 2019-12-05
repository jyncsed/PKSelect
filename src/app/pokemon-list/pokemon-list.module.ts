import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonSliderComponent } from './components/pokemon-slider/pokemon-slider.component';
import { PokemonGridListComponent } from './components/pokemon-grid-list/pokemon-grid-list.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [
    PokemonSliderComponent,
    PokemonGridListComponent,
    PokemonComponent,
  ],
  exports: [
    PokemonComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    FormsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
  ]
})
export class PokemonListModule { }

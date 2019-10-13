import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { PokemonSliderComponent } from './pokemon-slider/pokemon-slider.component';
import { PokemonGridListComponent } from './pokemon-grid-list/pokemon-grid-list.component';
@NgModule({
  declarations: [
    AppComponent,
    PokemonSliderComponent,
    PokemonGridListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    FormsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatCheckboxModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

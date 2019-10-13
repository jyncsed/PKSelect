import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { PokemonSliderComponent } from './pokemon-slider/pokemon-slider.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { CoreModule, SwitchModule } from 'truly-ui'; // CoreModule
@NgModule({
  declarations: [
    AppComponent,
    PokemonSliderComponent
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
    CoreModule.forRoot({theme: 'deeppurple'}), // Configurations
    SwitchModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

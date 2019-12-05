import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './pokemon-list/pages/pokemon/pokemon.component';
import { AboutComponent } from './shared/pages/about/about.component';

const routes: Routes = [
  { path: '', component: PokemonComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

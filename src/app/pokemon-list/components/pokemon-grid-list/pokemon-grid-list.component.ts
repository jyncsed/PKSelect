import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon-grid-list',
  templateUrl: './pokemon-grid-list.component.html',
  styleUrls: ['./pokemon-grid-list.component.scss']
})
export class PokemonGridListComponent implements OnInit {
  @Input() pokemon: any;
  @Output() OnChange: EventEmitter<any> =  new EventEmitter<any>();

  searchFor: string;
  get pokemonFiltered() {
    if (this.searchFor) {
      const lowercaseQuery = this.searchFor.toLowerCase();
      return this.pokemon.filter(item => item.name.toLowerCase().indexOf(this.searchFor) > -1);
    }
    return this.pokemon;
  }

  constructor() { }
  gridRowHeight = '150px';
  breakpoint = 10;  // to adjust to screen

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 800) ? 3 : 10;
  }
  onResize(event) { // to adjust to screen size
    this.breakpoint = (event.target.innerWidth <= 800) ? 3 : 10;
  }

  toggle(event) {
    this.OnChange.emit({checked: event.checked, name: event.name});
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { constructor } from 'q';

@Component({
  selector: 'app-pokemon-slider',
  templateUrl: './pokemon-slider.component.html',
  styleUrls: ['./pokemon-slider.component.scss']
})
export class PokemonSliderComponent implements OnInit {
  @Input() name: string;
  @Input() image: string;
  @Output() OnChange: EventEmitter<any> =  new EventEmitter<any>();
  color = 'primary';


  constructor() { }

  ngOnInit() {
      console.log(name);
    }


  toggle(event) {
    this.OnChange.emit({event, name: this.name});
    }
}

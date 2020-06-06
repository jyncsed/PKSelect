import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { constructor } from 'q';

@Component({
  selector: 'app-pokemon-slider',
  templateUrl: './pokemon-slider.component.html',
  styleUrls: ['./pokemon-slider.component.scss']
})
export class PokemonSliderComponent implements OnInit {


  constructor() { }
  @Input() name: string;
  @Input() image: string;
  @Input() checked: boolean;
  @Output() OnChange: EventEmitter<any> = new EventEmitter<any>();
  color = 'primary';
  controlChange = (window.innerWidth <= 800);

  ngOnInit() {
    console.log(name);
  }
  toggle(event) {
    this.OnChange.emit({ checked: event.source.checked, name: this.name });
  }
}

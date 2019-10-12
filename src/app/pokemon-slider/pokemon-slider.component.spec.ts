import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSliderComponent } from './pokemon-slider.component';

describe('PokemonSliderComponent', () => {
  let component: PokemonSliderComponent;
  let fixture: ComponentFixture<PokemonSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

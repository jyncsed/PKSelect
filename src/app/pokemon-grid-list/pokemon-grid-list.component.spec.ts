import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonGridListComponent } from './pokemon-grid-list.component';

describe('PokemonGridListComponent', () => {
  let component: PokemonGridListComponent;
  let fixture: ComponentFixture<PokemonGridListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonGridListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

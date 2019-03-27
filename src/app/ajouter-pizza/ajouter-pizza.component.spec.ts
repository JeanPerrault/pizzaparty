import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPizzaComponent } from './ajouter-pizza.component';

describe('AjouterPizzaComponent', () => {
  let component: AjouterPizzaComponent;
  let fixture: ComponentFixture<AjouterPizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterPizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

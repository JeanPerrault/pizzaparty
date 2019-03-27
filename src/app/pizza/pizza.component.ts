import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from '../models/pizza';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent {
  @Input() pizza: Pizza;
  total: number = 1;

  constructor(private pizzaService: PizzaService){}

  OnIncrement(event){
    this.total += event;
  }
  OnDecrement(event){
    this.total -= event;
  }
  edit(pizza: Pizza){
    this.pizzaService.updatePizza(pizza);
  }
}

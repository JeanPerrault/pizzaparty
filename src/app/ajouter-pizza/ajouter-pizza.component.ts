import { Component, OnInit } from '@angular/core';
import { Pizza } from '../models/pizza';
import { PizzaService } from '../services/pizza.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-pizza',
  templateUrl: './ajouter-pizza.component.html',
  styleUrls: ['./ajouter-pizza.component.scss']
})
export class AjouterPizzaComponent {

  images: string[] = [
    '..//assets/pizza-1.png','..//assets/pizza-2.png','..//assets/pizza-3.png','..//assets/pizza-4.png'
  ];

  pizza: Pizza = new Pizza()

  constructor(
    private pizzaService: PizzaService,
    private router: Router
  ){ }

  create() {
    console.log(this.pizza);
    this.pizzaService.createPizza(this.pizza).then(
      ()=> this.router.navigate(['/pizzas'])
    );
  }
}

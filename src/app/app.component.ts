import { Component, OnInit } from '@angular/core';
import { Pizza } from './models/pizza';
import { PizzaService } from './services/pizza.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PizzaParty';
  selectedPizza: Pizza;
  pizzaList: Pizza[];

  constructor(private pizzaService: PizzaService) {}

  ngOnInit(){
    console.log('je suis initialisé');
    // var self = this;
    // this.pizzaService.getPizzas().then(function(pizzas){
    //   self.pizzaList = pizzas;
    // });

    this.pizzaService.getPizzas().then(pizzas => this.pizzaList = pizzas);
  }

  onSelect(pizza: Pizza): void {
    console.log(pizza);
    this.selectedPizza = pizza;
  }
  
}
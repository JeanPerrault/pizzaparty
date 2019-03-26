import { Component } from '@angular/core';
import { Pizza } from './models/pizza';

const PIZZAS : Pizza[] = [
  { id: 1, name: 'Reine', price: 12.99, picture: '..//assets/pizza-1.png' },
  { id: 2, name: '4 fromages', price: 13.99, picture: '..//assets/pizza-2.png' },
  { id: 3, name: 'Orientale', price: 11.99, picture: '..//assets/pizza-3.png' },
  { id: 4, name: 'Cannibale', price: 9.99, picture: '..//assets/pizza-4.png' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
    
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pizzaparty';
  selectedPizza: Pizza;
  pizzaList = PIZZAS;
  onSelect(pizza: Pizza): void {
    console.log(pizza);
    this.selectedPizza = pizza;
}
}


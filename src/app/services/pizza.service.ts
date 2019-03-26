import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza';

const PIZZAS: Pizza[] = [
  { id: 1, name: 'Reine', price: 12.99, picture: '..//assets/pizza-1.png' },
  { id: 2, name: '4 fromages', price: 13.99, picture: '..//assets/pizza-2.png' },
  { id: 3, name: 'Orientale', price: 11.99, picture: '..//assets/pizza-3.png' },
  { id: 4, name: 'Cannibale', price: 9.99, picture: '..//assets/pizza-4.png' }
];

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  getPizzas(): Promise<Pizza[]>{
    return Promise.resolve(PIZZAS);
  }

  getPizzasSlowly(): Promise<Pizza[]>{
    return new Promise(resolve => {
      setTimeout(()=>resolve(this.getPizzas()),2000);
    })
  }

}


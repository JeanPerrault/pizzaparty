import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private http: HttpClient) { }
/**
 * permet de recuperer un tableau de pizzas
 */
  getPizzas(): Promise<Pizza[]> {
    return this.http.get('api/pizzas').toPromise().then(
      response => response as Pizza[]
    );
  }
  /**
   * Recuperer une pizza par son id
   * 
   */
  getPizza(id: number): Promise<Pizza>{
    // return this.getPizzas().then(pizzas => {
    //   return pizzas.find(pizza => {
    //     return pizza.id === id;

    // return this.getPizzas().then(
    //   pizzas => pizzas.find(pizza =>  pizza.id === id)
    //   );

    return this.http.get('api/pizzas/'+id).toPromise().then(
      response => response as Pizza
    )
  }

  /**
   * recuperer le nombre de pizzas
   */
  countPizza(): Promise<number> {
    //return Promise.resolve(PIZZAS.length);

    return this.http.get('api/total/').toPromise().then(
      response => response as number
    );
  }

  /**
   * creer une pizza
   */
  createPizza(pizza: Pizza): Promise<Pizza> {
      return this.http.post('api/pizzas',pizza).toPromise().then(
        response => response as Pizza
      )
  }

  /**
   * permet de simuiler une mauvaise connection
   */ 
  getPizzasSlowly(): Promise<Pizza[]>{
    return new Promise(resolve => {
      setTimeout(()=>resolve(this.getPizzas()),2000);
    })
  }

}


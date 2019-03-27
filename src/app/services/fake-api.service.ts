import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pizza } from '../models/pizza';

export class FakeApi implements InMemoryDbService {
    createDb(): Object {
        const pizzas: Pizza[] = [
            { id: 1, name: 'Reine', price: 12.99, picture: '..//assets/pizza-1.png' },
            { id: 2, name: '4 fromages', price: 13.99, picture: '..//assets/pizza-2.png' },
            { id: 3, name: 'Orientale', price: 11.99, picture: '..//assets/pizza-3.png' },
            { id: 4, name: 'Cannibale', price: 9.99, picture: '..//assets/pizza-4.png' }
          ];

        return {
            pizzas: pizzas,
            total: pizzas.length
        };
    }
}
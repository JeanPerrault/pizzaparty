import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { PizzasRouteComponent } from './pizzas-route/pizzas-route.component';
import { HomeRouteComponent } from './home-route/home-route.component';
import { CounterComponent } from './counter/counter.component';
import { PizzaSingleComponent } from './pizza-single/pizza-single.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeApi} from './services/fake-api.service';
import { AjouterPizzaComponent } from './ajouter-pizza/ajouter-pizza.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    FooterComponent,
    MenuComponent,
    PizzasRouteComponent,
    HomeRouteComponent,
    CounterComponent,
    PizzaSingleComponent,
    AjouterPizzaComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'pizzas',component: PizzasRouteComponent },
      { path: 'home',component: HomeRouteComponent },
      { path: 'pizza/:id',component: PizzaSingleComponent},
      { path: 'ajout',component: AjouterPizzaComponent}
    ]),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(FakeApi)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

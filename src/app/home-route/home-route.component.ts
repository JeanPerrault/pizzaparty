import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-route',
  templateUrl: './home-route.component.html',
  styleUrls: ['./home-route.component.scss']
})
export class HomeRouteComponent  {

  title = 'PizzaParty';
  total: number = 0;

  OnIncrement(event){
    this.total += event;
  }
  OnDecrement(event){
    this.total -= event;
  }
}

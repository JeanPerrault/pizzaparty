import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent  {
  @Input() value: number = 0;

  @Output() increase = new EventEmitter();
  @Output() decrease = new EventEmitter();

  plus(){
    if(this.value < 9){
      this.value++;  
      this.increase.emit(1);
    }
  }
  moins(){
    if(this.value > 0){
      this.value--;  
      this.decrease.emit(1);
    }
  }
}

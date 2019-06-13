import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-counter1',
	template: `
    <div>
      <button (click)="decrement()"> </button>  {{counterValue}}  <button (click)="increment()"> </button>
    </div>
  `,
	styles: [ `div {text-align: center;}` ]
})
export class Counter2Component implements OnInit {
	counterValue: number = 5;

	@Input() counter: number;

	@Output() counterChange = new EventEmitter<number>();

	constructor() {}

	ngOnInit() {
		this.counter=this.counterValue ;
	}

	decrement() {
		this.counterValue--;
		this.counter = this.counterValue;
		this.counterChange.emit(this.counterValue);
	}

	increment() {
		this.counterValue++;
		this.counter = this.counterValue;
		this.counterChange.emit(this.counterValue);
	}
}

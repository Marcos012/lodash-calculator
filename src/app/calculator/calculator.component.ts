import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { debug } from 'util';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html'
})
export class CalculatorComponent implements OnInit {

  public numbers: any[] = [];
  public result: any;

  constructor() { }

  ngOnInit() {
  }

  addNumber(number: number) {
    this.numbers.push(number);
  }

  sum(): number {
    for (let i = 0; i < this.numbers.length; i++) {
      this.numbers[i] = parseInt(this.numbers[i], this.numbers.length);
    }

    return this.result = _.sum(this.numbers);
  }

  subtract(minuend: number, subtrahend: number): number {
    return this.result = _.subtract(minuend, subtrahend);
  }

  divide(dividend: number, divisor: number): number {
    return this.result = _.divide(dividend, divisor);
  }

  multiply(multiplier: number, multiplicand: number): number {
    return this.result = _.multiply(multiplier, multiplicand);
  }
}

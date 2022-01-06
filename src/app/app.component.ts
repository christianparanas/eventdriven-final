import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'eventdriven-final';
  inputVar: any | string = '';

  btnArray: any = [
    'clear',
    '/',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
    '=',
  ];
  operator: any;
  isOperatorSet = false;
  operand1: number = 0;
  operand2: number = 0;

  clickKey($event: any) {
    let key = $event.key;

    if (key === '/' || key === 'x' || key === '-' || key === '+') {
      const lastKey = this.inputVar[this.inputVar.length - 1];

      // if the the user inserted or click operator button means you gonna set the isOperatorSet to true, so you can hinder the user to enter another operator
      if (
        lastKey === '/' ||
        lastKey === 'x' ||
        lastKey === '-' ||
        lastKey === '+'
      ) {
        this.isOperatorSet = true;
      }

      // if the inputVar already has operator or the inputVar is empty, return
      if (this.isOperatorSet || this.inputVar === '') {
        return;
      }

      this.operand1 = parseFloat(this.inputVar);
      this.operator = key;
      this.isOperatorSet = true;
    }

    if (key === '=') {
      this.calculate();
      this.isOperatorSet = false;
      return;
    }

    this.inputVar += key;

    if ($event.key == 'clear') {
      this.clear();
    }
  }

  clear() {
    this.inputVar = '';
    this.isOperatorSet = false;
  }

  calculate() {
    // console.log(this.inputVar.match(/[^\d()]+|[\d.]+/g));

    this.operand2 = parseFloat(this.inputVar.split(this.operator)[1]);

    if (this.operator === '/') {
      this.inputVar = this.operand1 / this.operand2;
    } else if (this.operator === 'x') {
      this.inputVar = this.operand1 * this.operand2;
    } else if (this.operator === '-') {
      this.inputVar = this.operand1 - this.operand2;
    } else if (this.operator === '+') {
      this.inputVar = this.operand1 + this.operand2;
    }
  }
}

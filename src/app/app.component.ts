import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'asmr-calculator';

  calValue: number = 0;
  funcT: any = 'noFunction';

  calNumber: string = 'anyvalue';

  firstNumber: number = 0;
  secondNumber: number = 0;

  onClickValue(val: string, type: 'number' | 'function') {
    switch (type) {
      case 'number':
        this.onNumberClick(val);
        break;
      case 'function':
        this.onFunctionClick(val);
        break;
    }
  }
  
  onNumberClick(val: string) {
    if (this.calNumber != 'anyvalue') {
      this.calNumber = this.calNumber + val;
    } else {
      this.calNumber = val;
    }
    this.calValue = parseFloat(this.calNumber);
  }
  onFunctionClick(val: string) {
    if (this.funcT == 'c') {
      this.clearAll();
    } else if (this.funcT == 'noFunction') {
      this.firstNumber = this.calValue;
      this.calValue = 0;
      this.calNumber = 'anyvalue';
      this.funcT = val;
    } else if (this.funcT != 'noFunction') {
      this.secondNumber = this.calValue;
      //? let's do the calculation
      this.valueCalculate(val);
    }
  }
  valueCalculate(val: string) {
    if (this.funcT == '+') {
      const total = this.firstNumber + this.secondNumber;
      this.totalAssignedValues(total, val);
      if (this.funcT == '=') {
        this.onEqualPress();
      }
    }
    if (this.funcT == '-') {
      const total = this.firstNumber - this.secondNumber;
      this.totalAssignedValues(total, val);
      if (this.funcT == '=') {
        this.onEqualPress();
      }
    }
    if (this.funcT == '*') {
      const total = this.firstNumber * this.secondNumber;
      this.totalAssignedValues(total, val);
      if (this.funcT == '=') {
        this.onEqualPress();
      }
    }
    if (this.funcT == '/') {
      const total = this.firstNumber / this.secondNumber;
      this.totalAssignedValues(total, val);
      if (this.funcT == '=') {
        this.onEqualPress();
      }
    }
    if (this.funcT == '%') {
      const total = this.firstNumber % this.secondNumber;
      this.totalAssignedValues(total, val);
      if (this.funcT == '=') {
        this.onEqualPress();
      }
    }
  }
  totalAssignedValues(total: number, val: string) {
    this.calValue = total;
    this.firstNumber = total;
    this.secondNumber = 0;
    this.calNumber = 'anyvalue';
    this.funcT = val;
  }
  onEqualPress() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funcT = 'noFunction';
    this.calNumber = 'anyvalue';
  }
  clearAll() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calValue = 0;
    this.funcT = 'noFunction';
    this.calNumber = 'anyvalue;';
  }
}

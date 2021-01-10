import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public isCollapsed = true;
  public numbDisplay: String = "0";
  public dataDisplay: String = "0";
  public dataOperator: String;

  constructor() { }

  ngOnInit(): void {
  }

  calcBackEnd(firstNumb, secNumb, operator){
    let first = parseInt(firstNumb);
    let second = parseInt(secNumb);
   
    let result;

    switch (operator) {
      case '+':
        result = first + second;
        break;
      case '-':
        result = first - second;
        break;
      case 'x':
        result = first * second;
        break;
      case '/':
        result = first / second;
        break;

    }

    this.numbDisplay = result.toString(); //trocar quando for no back-end

  }

  clickButtonNumb(number): void {
    if(this.numbDisplay == "0"){
      this.numbDisplay = "";

    }

    this.numbDisplay = this.numbDisplay + number;
  }

  operation(operator): void {
    this.dataOperator = operator;
    this.dataDisplay = this.numbDisplay;
    this.numbDisplay = "0";
    
  }

  clearDisplay(): void {
    this.numbDisplay = "0";
    this.dataOperator = "";
  }

  equal(): void {
    if(this.dataDisplay != ""){
      this.calcBackEnd(this.dataDisplay, this.numbDisplay, this.dataOperator);
      this.dataOperator = "";
    }

  }

}

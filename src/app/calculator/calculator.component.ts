import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  
  public showHist = false;
  public numbDisplay: String = "0";
  public dataDisplay: String = "0";
  public dataOperator: String;
  public arrayHistoric: any = [];

  constructor(private _snackBar: MatSnackBar) { }

  durationInSeconds = 5;

  ngOnInit(): void {
  }

  openSnackBar(message): void {
    this._snackBar.open(message, 'ok', {
      duration: 2000,
      verticalPosition: 'top',
    });
  }

  historicShow(): void {
    this.showHist = !this.showHist;
  }

  calcBackEnd(firstNumb, secNumb, operator){
    let first = firstNumb.replace(",", ".");
    let second = secNumb.replace(",", ".");
    first = parseFloat(first);
    second = parseFloat(second);

    console.log('sec - ', second)
   
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
      case '÷':
        result = first / second;
        break;

      default:
  
        return this.openSnackBar('Escolha um valor!');
       
    }

    console.log("result - ", result)

    if(!Number.isInteger(result)){
      let arrayNum;
      let numb;
      let decimal;
      let clearZero;

      let decimalResult = result.toFixed(2); //fixa apenas duas casas depois da virgula
      console.log("resulteeee - ", decimalResult)
      
      arrayNum = decimalResult.split('.'); //separa numero e decimal
      numb = arrayNum[0];
      decimal = parseInt(arrayNum[1]);


      clearZero = numb + ',' + decimal; //limpa os zeros depois da vírgula
      console.log("resultaaaa - ", clearZero)
      result = clearZero;
    }
   
    result = result.toString();

    this.arrayHistoric.push(
      {
        firstNumb: first,
        secondNumb:second,
        operation: operator,
        result: result
      }
    );
    console.log('array = ', this.arrayHistoric);
    this.numbDisplay =  result//trocar quando for no back-end

  }

  clickButtonNumb(number): void {
    if(this.numbDisplay.length <= 11){

      if(this.numbDisplay == "0"){
        this.numbDisplay = "";

      }

      if(this.numbDisplay == "÷" || this.numbDisplay == "+" || this.numbDisplay == "-" || this.numbDisplay == "x") {
        this.numbDisplay = "";

      }

      this.numbDisplay +=  number;
    }
  }

  operation(operator): void {
    this.dataOperator = operator;
    this.dataDisplay = this.numbDisplay;
    this.numbDisplay = operator;
    //this.numbDisplay = "0";
    
  }

  clearDisplay(): void {
    this.numbDisplay = "0";
    this.dataOperator = "";
  }

  equal() {
    if(this.dataDisplay != ""){
      console.log('1111 - ', this.dataDisplay)
      console.log('1111 - ', this.dataOperator)
      console.log('1111 - ', this.numbDisplay)
      if(this.numbDisplay == "÷" || this.numbDisplay == "+" || this.numbDisplay == "-" || this.numbDisplay == "x") {
        return this.openSnackBar('Esolha outro valor!');

      }else if(this.dataOperator == ""){
        return  this.openSnackBar('Esolha uma operação!');
      }
     
      this.calcBackEnd(this.dataDisplay, this.numbDisplay, this.dataOperator);
      this.dataOperator = "";
    }

  }

  comma(): void {
    if(this.numbDisplay.indexOf(',',0) < 0){
      console.log('textp --- ' , this.numbDisplay.indexOf(',',0))
      this.numbDisplay += "," 
    }
    
  }

}


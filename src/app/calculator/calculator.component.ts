import { Component, OnInit} from '@angular/core';

import {MatSnackBar} from '@angular/material/snack-bar';

import { OperacaoService } from '../shared/operacao.service';


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

  constructor(private _snackBar: MatSnackBar, 
              private service: OperacaoService,
              ) { 
               
              }

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
    this.service.getBd().subscribe(resp =>{
      this.arrayHistoric = resp;
    });

    this.showHist = !this.showHist;
  }

  cleanHistoric(): void {
    this.service.clearBd();
    this.showHist = false;
  }

  calculate(firstNumb, secNumb, operator){
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

    if(!Number.isInteger(result)){
      let arrayNum;
      let numb;
      let decimal;
      let clearZero;

      let decimalResult = result.toFixed(2); //fixa apenas duas casas depois da virgula
      
      arrayNum = decimalResult.split('.'); //separa numero e decimal
      numb = arrayNum[0];
      decimal = parseInt(arrayNum[1]);

      clearZero = numb + ',' + decimal; //limpa os zeros depois da vírgula

      result = clearZero;
    }
   
    result = result.toString();

    let sendOperation = [{
      'primeiro_num': first, 
      'operador': operator, 
      'segundo_num': second, 
      'resultado': result
    }];

    this.service.saveBd(sendOperation);
    
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
    
  }

  clearDisplay(): void {
    this.numbDisplay = "0";
    this.dataOperator = "";
  }

  equal() {
    if(this.dataDisplay != ""){

      if(this.numbDisplay == "÷" || this.numbDisplay == "+" || this.numbDisplay == "-" || this.numbDisplay == "x") {
        return this.openSnackBar('Esolha outro valor!');

      }else if(this.dataOperator == ""){
        return  this.openSnackBar('Esolha uma operação!');
      }
     
      this.calculate(this.dataDisplay, this.numbDisplay, this.dataOperator);
      this.dataOperator = "";
    }

  }

  comma(): void {
    if(this.numbDisplay.indexOf(',',0) < 0){
      this.numbDisplay += "," 
    }
    
  }

}


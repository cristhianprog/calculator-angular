# Calculator

This is a calculator project developed in [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5 with Bootstrap and Material Design. The application allows you to perform basic mathematical operations (addition, subtraction, multiplication, division), calculate percentages and even keeps a history of the last operations performed, storing the data in Firebase.

<h1>Funcionalidades</h1>
<b>Operações Básicas:</b> Soma, Subtração, Multiplicação e Divisão.
<b>Porcentagem:</b> Cálculos de porcentagem.
<b>Histórico de Operações:</b> Armazenamento das últimas operações realizadas com a possibilidade de visualizá-las.
<b>Limpar Histórico:</b> Limpeza do histórico de operações com um clique.
<b>Design Responsivo:</b> A aplicação é responsiva, utilizando o Bootstrap e Material Design para uma interface agradável.

- <b>Firebase</b>: v8.2.4<br>
Foi ultilizado o Firebase para manter os dados do historico de calculas realizados e fazer o CRUD.<br>

- <b>Bootstrap</b> v4.5.0 :<br>
Foram ultilizados esses frameworks para manipular a criaçao do layout e cores do projeto.<br>

- <b>RxJx</b> v6.6.0:<br>
Foi usado para compor, manipular e combinar fluxos de dados assíncronos, de maneira declarativa e funcional.<br>

## Running locally

(version NodeJs recommended > v16)<br><br>
Download de project through `git clone repository-path` or .zip<br>
Run `npm install` to install dependences.<br>
Run `npm start` or `ng serve`.<br>
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

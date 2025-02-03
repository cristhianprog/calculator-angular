# Calculator
This is a calculator project developed in [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5 with Bootstrap and Material Design. The application allows you to perform basic mathematical operations (addition, subtraction, multiplication, division), calculate percentages and even keeps a history of the last operations performed, storing the data in Firebase.

### Features<br>
  <b>Basic Operations:</b> Addition, Subtraction, Multiplication, and Division.<br>
  <b>Percentage:</b> Percentage calculations.<br>
  <b>Operation History:</b> Stores the last performed operations with the ability to view them.<br>
  <b>Clear History:</b> Clear the operation history with a single click.<br>
  <b>Responsive Design:</b> The application is responsive, using Bootstrap and Material Design for a sleek interface.<br>
<br>

## Technologies Used
<b>Angular 11</b> Framework for building the application. <br>
<b>Bootstrap:</b> CSS framework for making the interface responsive and modern.<br>
<b>Angular Material:</b> Rich, responsive interface components to enhance usability.<br>
<b>Firebase:</b> Backend-as-a-Service platform for storing the operation history in real-time.<br>
<br>

## Prerequisites
Before running the project locally, you need to have the following installed:<br>

Node.js (v16 recommended)<br>
Angular CLI (v11 or higher)<br>
Firebase account to configure the operation history storage<br>
<br>

## Installation

### 1. Clone the repository<br>

In your folder run: `git clone https://github.com/your-username/calculadora-angular.git`<br>
### 2. Install dependencies<br>
Navigate to the project folder and run the following command to install the dependencies:<br>
`cd calculadora-angular`<br>
`npm install`<br>

### 3. Firebase Configuration
To integrate Firebase with your project, follow these steps:<br>

1. Go to the Firebase console.<br>
2. Create a new project.<br>
3. In the left sidebar, click on Firestore Database and then on Create database. Set it up in test mode.<br>
4. Go to your Project Settings and copy the Firebase credentials (the config keys).<br>
5. In your Angular project, create a file src/environments/firebase-config.ts and add the following content, replacing the values with your Firebase credentials:<br>

        export const firebaseConfig = {
            apiKey: "YOUR_API_KEY",
            authDomain: "YOUR_AUTH_DOMAIN",
            projectId: "YOUR_PROJECT_ID",
            storageBucket: "YOUR_STORAGE_BUCKET",
            messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
            appId: "YOUR_APP_ID",
            measurementId: "YOUR_MEASUREMENT_ID"
        };


### 4. Running the Application
Now you can run the application locally with the following command: <br>

Run `npm start` or `ng serve`.<br>
<br>

## How to Use
<b>Performing Operations:</b> Use the buttons in the interface to perform mathematical operations.<br>
<b>Viewing History:</b> The history of the last operations is displayed at the bottom of the page.<br>
<b>Clearing History:</b> To clear the operation history, simply click on the Clear History button.<br>
<br>

## Contributing
If you'd like to contribute to this project, follow these steps:<br>

<b>Fork</b> the repository.<br>
Create a new branch for your changes.<br>
Submit a <b>pull request</b> describing the changes you made.<br>
<br>

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
<br>

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
<br>

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
<br>

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

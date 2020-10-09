/// <reference types="cypress" />

import { initEnv, mount } from 'cypress-angular-unit-test';
import { AppComponent } from './app.component';
// This 👇 is a dependency needed for router-outlet located in our app.component.html
import { RouterTestingModule } from '@angular/router/testing';
// This 👇 is for testing addNumbers function
import { addNumbers } from './app.service';

beforeEach(() => {
  // Init Angular stuff
  initEnv(AppComponent, { imports: [ RouterTestingModule ] });
});

describe('AppComponent', () => {
  it('Test welcome message', () => {
    const welcomeMessage = 'blog-angular-cypress-example';
    // component + any inputs object
    mount(AppComponent, {title: welcomeMessage});
    // use any Cypress command afterwards
    cy.contains(`${welcomeMessage} app is running!`);
  });

  it('Test addNumbers() function', () => {
    // Validate if it is a function
    expect(addNumbers, 'addNumbers()').to.be.a('function');
    // Test the function
    const number1 = 10;
    const number2 = 20;
    const correctAddition = 30;
    expect(addNumbers(number1, number2), `addNumbers(${number1}, ${number2})`).to.eq(correctAddition);
    // Make sure it returns value of type number
    expect(addNumbers(number1, number2)).to.be.a
  });
});

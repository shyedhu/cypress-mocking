/* eslint-disable  import/no-unresolved,no-unused-vars,no-undef */
import './commands';

const addContext = require('mochawesome/addContext');

// ignore uncaught exceptions
Cypress.on('uncaught:exception', (err) => false);

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`;
    addContext({ test }, `assets/${Cypress.spec.name}/${screenshotFileName}`);
  }
});

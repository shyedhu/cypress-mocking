# cypress-mocking

This repo contains Mocking tests using cypress.io with javascript

![](https://github.com/shyedhu/images/blob/main/cypress-test-run.gif)

## Prerequisites

Install Node.js (together with the NPM tool) by following instructions available on nodejs.org.

## Install

npm (or)

yarn

**1. ** Clone this repo locally:
```console
cd - 

git clone https://github.com/shyedhu/cypress-mocking.git

```
navigate into the project folder

cd cypress-mocking

and run the following command

```console

npm install

(or)

yarn install --force

```
This will install all of the necessary packages to get cypress installed on your local machine.

## Writing mock tests 
Let's see the Mock Data Approaches using cypress. Most of the web applications have a backend API that serves data. Setting up the data is essential to write more tests and is often a painful task. Let us explore a different options to set up mock data for testing using cypress.

There are two ways we could be mocking, 1. Inline code Mocking 2. Fixtures

Let’s see mocking data using Fixtures approach which is essentially the same as Inline code Mocking but instead of having the response as JavaScript code we point to a JSON file .

Make sure add following products.json in fixtures folder 

```console
[
    {
      "id": 1,
      "name": "Mango",
      "image": "mango.png",
      "available_quantity": 50,
      "price": 7,
      "description": "This is Mango"
    }
  ]
```
we can now instruct cypress to use the above JSON file like so:

```console
cy.fixture('products.json').as('productsData');

// mocking the products api response data
cy.route('GET', 'https://nodes-api-demo.vercel.app/api/products', '@productsData').as('productsapi');
```

Here's one of mocking test using cypress

```console
/**
 * @description Test class to  mock products api response data
 * @author Shyedhu
 *
 */
describe('Validate the macking response', () => {
  beforeEach(() => {
    cy.fixture('users.json').as('usersData');
    cy.fixture('products.json').as('productsData');
    cy.server();
    // mocking the products api response data
    cy.route('GET', 'https://nodes-api-demo.vercel.app/api/products', '@productsData').as('productsapi');
    custom.navigateTo(Cypress.env('ENV'));
  });
  it('test mocking response', () => {
    cy.get('@usersData').then((usersData) => {
      // validate the login
      cy.login(usersData.username, usersData.pass);
      cy.wait('@productsapi');
      // Assert on XHR
      cy.get('@productsapi').then((xhr) => {
        // Assert status code
        expect(xhr.status).to.eq(200);
        // Assert request method
        expect(xhr.method).to.eq('GET');
        // Assert request url
        expect(xhr.url).to.match(/\/products$/);
        // Assert response Body
        const response = xhr.responseBody;
        expect(response[0]).to.have.property('available_quantity', 50);
        expect(response[0]).to.have.property('price', 7);
        expect(response[0]).to.have.property('description', 'This is Mango');
      });
    });
  });
})

```

## Running mocking tests on chrome browser

```console

npm run cy:run:chrome

(or)

yarn cy:run:chrome

```

## Running mocking tests on firefox browser

```console

npm run cy:run:firefox

(or)

yarn cy:run:firefox

```

## Running mocking tests on chrome headless browser

```console

npm run cy:run:headless

(or)

yarn cy:run:headless

```

## Running mocking tests on docker 

```console

docker build -t cypress-react .

```

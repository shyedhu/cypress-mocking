/* eslint-disable  no-undef,import/extensions */
import Custom from '../utils/custom.js';

const custom = new Custom();
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
    custom.navigateTo(Cypress.env('ENV')+'');
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
});

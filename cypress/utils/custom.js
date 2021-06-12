/* eslint-disable  no-undef,class-methods-use-this */
export default class Custom {
  /**
 * @description Method to navigate to web page
 * @param url
 * @author Shyedhu
 */
  navigateTo(url) {
    cy.visit(url);
  }

  /**
 * @description Method to click on the web element
 * @param selector
 * @author Shyedhu
 */
  clickElement(selector) {
    cy.get(selector).click({ force: true });
  }

  /**
 * @description Method to click on the web element text
 * @param selectorTxt
 * @author Shyedhu
 */
  clickElementTxt(selectorTxt) {
    cy.contains(selectorTxt).click();
  }

  /**
 * @description Method to get the web element
 * @param selector
 * @author Shyedhu
 */
  getElement(selector) {
    cy.get(selector);
  }

  /**
 * @description Method to select the drop down value from web page
 * @param optionValue
 * @author Shyedhu
 */
  getSelect(optionValue) {
    cy.get('select').select(optionValue).should('have.value', optionValue);
  }

  /**
 * @description Method to click first element on web page
 * @param selector
 * @author Shyedhu
 */
  clickFirstElement(selector) {
    cy.get(selector).first().click({ force: true });
  }

  /**
 * @description Method to click last element on web page
 * @param selector
 * @author Shyedhu
 */
  clickLastElement(selector) {
    cy.get(selector).last().click({ force: true });
  }

  /**
 * @description Method to enter the value on web element
 * @param selector
 * @param value
 * @author Shyedhu
 */
  enterValue(selector, value) {
    cy.get(selector).type(value);
  }

  /**
 * @description Method to check element's text should be present
 * @param selector
 * @param selectorTxt
 * @author Shyedhu
 */
  txtContains(selector, selectorTxt) {
    cy.get(selector).should('contain', selectorTxt);
  }

  /**
 * @description Method to check element's text should be visible
 * @param txtValue
 * @author Shyedhu
 */
  elementTxtVisible(txtValue) {
    cy.contains(txtValue).should('be.visible');
  }

  /**
 * @description Method to check element's selector should be visible
 * @param selector
 * @author Shyedhu
 */
  selectorVisible(selector) {
    cy.get(selector).should('be.visible');
  }

  /**
 * @description Method to verify the window Alert message
 * @param selectorTxt
 * @author Shyedhu
 */
  windowAlert(selectorTxt) {
    cy.on('window:alert', (str) => {
      expect(str).to.equal(selectorTxt);
    });
  }
}

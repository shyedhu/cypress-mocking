/* eslint-disable  import/extensions,no-undef */
import { loginpage } from '../pages/login.page';
import { homepage } from '../pages/home.page';
import { cartpage } from '../pages/cart.page';
import { checkoutpage } from '../pages/checkout.page';
import Custom from '../utils/custom.js';

const custom = new Custom();

Cypress.Commands.add('login', (user, password) => {
  custom.selectorVisible(loginpage.txtUsername);
  custom.selectorVisible(loginpage.txtPassword);
  custom.selectorVisible(loginpage.btnLogin);
  custom.enterValue(loginpage.txtUsername, user);
  custom.enterValue(loginpage.txtPassword, password);
  custom.clickElement(loginpage.btnLogin);
  custom.elementTxtVisible(homepage.txtBody);
  custom.selectorVisible(homepage.lnkLogout);
});
Cypress.Commands.add('logout', () => {
  custom.selectorVisible(homepage.lnkLogout);
  custom.clickElement(homepage.lnkLogout);
  custom.selectorVisible(homepage.lnkLogin);
});
Cypress.Commands.add('addtocart', () => {
  custom.selectorVisible(homepage.btnAddtoCart);
  custom.clickFirstElement(homepage.btnAddtoCart);
  custom.selectorVisible(homepage.btnViewCart);
});
Cypress.Commands.add('viewcart', () => {
  custom.clickElement(homepage.btnViewCart);
  custom.elementTxtVisible(cartpage.txtCart);
  custom.elementTxtVisible(cartpage.txtPrice);
  custom.elementTxtVisible(cartpage.txtCurrency);
  custom.selectorVisible(cartpage.btnRemoveCart);
  custom.selectorVisible(cartpage.btnCheckout);
});
Cypress.Commands.add('viewcheckout', () => {
  custom.clickElement(cartpage.btnCheckout);
  custom.elementTxtVisible(checkoutpage.txtCheckout);
  custom.elementTxtVisible(checkoutpage.txtQuantity);
  custom.elementTxtVisible(checkoutpage.txtCurrency);
  custom.selectorVisible(checkoutpage.btnCancel);
  custom.selectorVisible(checkoutpage.btnPay);
});
Cypress.Commands.add('gotopay', () => {
  custom.clickElement(checkoutpage.btnPay);
  custom.windowAlert(checkoutpage.txtPay);
});
Cypress.Commands.add('clearcart', () => {
  custom.selectorVisible(cartpage.btnClearCart);
  custom.clickElement(cartpage.btnClearCart);
  custom.elementTxtVisible(cartpage.txtEmptyCart);
});

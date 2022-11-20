import {
  getFooter,
  getHomeButton,
  getLoadingSpinner,
  getLocation,
  getName,
  getNextPageButton,
  getPosts,
  getPreviousPageButton
} from '../support/home.po';

describe('home page', () => {
  beforeEach(() => {
    cy.visit('/');
    getLoadingSpinner().should('be.visible');
    getLoadingSpinner().should('not.exist');
  });

  it('should display name and location', () => {
    getName().contains('Kevin Kulp');
    getLocation().contains('Durham, NC');
  });

  it('should display 5 posts', () => {
    getPosts().should('have.length', 5);
  });

  it('should not display the previous page button', () => {
    getFooter().scrollIntoView();
    getPreviousPageButton().should('not.exist');
  });

  it('should not display the home page button', () => {
    getHomeButton().should('not.be.visible');
  });

  it('should display the next page button', () => {
    getFooter().scrollIntoView();
    getNextPageButton().should('exist');
  });

  it('should go to page 2 on click of the next page button', () => {
    getFooter().scrollIntoView();
    getNextPageButton().click();

    cy.url().should('include', '/page/2');
    cy.window().its('scrollY').should('equal', 0);
  });

  it('should show home button on page 2 and take back to home page', () => {
    getFooter().scrollIntoView();
    getNextPageButton().click();
    getHomeButton().click();

    cy.url().should('not.include', '/page');
    cy.window().its('scrollY').should('equal', 0);
  });

  it('should display previous button on page 2 and take back to page 1', () => {
    getFooter().scrollIntoView();
    getNextPageButton().click();
    getFooter().scrollIntoView();
    getPreviousPageButton().click();

    cy.url().should('include', '/page/1');
    cy.window().its('scrollY').should('equal', 0);
  });
});

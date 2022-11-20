export const getLoadingSpinner = () => cy.get('.default-template-loading');
export const getName = () => cy.get('.avatar-name');
export const getLocation = () => cy.get('.avatar-location');
export const getPosts = () => cy.get('.single-post');
export const getPreviousPageButton = () => cy.get('a').contains('Previous');
export const getNextPageButton = () => cy.get('a').contains('Next');
export const getFooter = () => cy.get('footer');
export const getHomeButton = () => cy.get('a > i.fa-home');

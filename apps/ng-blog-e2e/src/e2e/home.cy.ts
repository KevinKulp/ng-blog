import { getName } from '../support/home.po';

describe('home page', () => {
  beforeEach(() => cy.visit('/'));

  it('should display name', () => {
    getName().contains('Kevin Kulp');
  });
});

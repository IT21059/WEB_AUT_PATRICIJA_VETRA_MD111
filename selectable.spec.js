// cypress/e2e/selectable.spec.js

describe('DemoQA Selectable Grid Test', () => {
  it('validates highlighted grid items', () => {
    // Step a: Open the URL
    cy.visit('https://demoqa.com/selectable');

    // Step b: Click Grid tab
    cy.contains('Grid').click();

    // Verify grid container is visible
    cy.get('#gridContainer').should('be.visible');

    // Step c: Click target numbers
    const selectedItems = ['Two', 'Four', 'Six', 'Eight'];
    selectedItems.forEach(item => {
      cy.contains('#gridContainer .list-group-item', item).click();
    });

    // Step d: Validate selected items are highlighted
    selectedItems.forEach(item => {
      cy.contains('#gridContainer .list-group-item', item)
        .should('have.class', 'active')
        .and('have.css', 'background-color', 'rgb(0, 123, 255)'); // Bootstrap primary color
    });

    // Step e: Validate unselected items are not highlighted
    const unselectedItems = ['One', 'Three', 'Five', 'Seven', 'Nine'];
    unselectedItems.forEach(item => {
      cy.contains('#gridContainer .list-group-item', item)
        .should('not.have.class', 'active')
        .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)'); // Default background
    });
  });
});
describe('DemoQA Selectable Grid Validation', () => {
  it('verifies highlighted and non-highlighted items', () => {
    // Open the page
    cy.visit('https://demoqa.com/selectable');

    // Switch to Grid tab
    cy.contains('Grid').click();
    
    // Verify grid container exists
    cy.get('#gridContainer').should('be.visible');

    // Items to select and validate
    const selectedItems = ['Two', 'Four', 'Six', 'Eight'];
    const unselectedItems = ['One', 'Three', 'Five', 'Seven', 'Nine'];

    // Select items
    selectedItems.forEach(item => {
      cy.contains('#gridContainer .list-group-item', item)
        .click()
        .should('have.class', 'active');
    });

    // Validate selected items
    selectedItems.forEach(item => {
      cy.contains('#gridContainer .list-group-item', item)
        .should('have.css', 'background-color', 'rgb(0, 123, 255)') // Blue color
        .and('have.css', 'color', 'rgb(255, 255, 255)'); // White text
    });

    // Validate unselected items
    unselectedItems.forEach(item => {
      cy.contains('#gridContainer .list-group-item', item)
        .should('not.have.class', 'active')
        .and('have.css', 'background-color', 'rgba(0, 0, 0, 0)') // Transparent
        .and('have.css', 'color', 'rgb(73, 80, 87)'); // Dark text
    });
  });
});

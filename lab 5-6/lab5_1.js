describe('Reg', () => {
  it('automatized registration', () => {
    cy.visit('http://suninjuly.github.io/math.html');

    cy.get('#input_value').then(($element) => {
      const x = parseFloat($element.text());
      const result = Math.log(Math.abs(12 * Math.sin(x)));
      return result;
    }).as('result');

    cy.get('@result').then((result) => {
      cy.get('#answer').type(result);
    });

    cy.get('#robotCheckbox').check();

    cy.get('[for="robotsRule"]').click();

    cy.get('[type="submit"]').click();
  });
});

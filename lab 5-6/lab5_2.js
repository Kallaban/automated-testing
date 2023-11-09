describe('Demo Store Tests', () => {
    it('should navigate through the site, register a new user, and perform custom actions', () => {

      cy.visit('http://demo-store.seleniumacademy.com/chelsea-tee-703.html');

      cy.get('#option20').click();
      cy.get('#option78').click();
    cy.get('#product_addtocart_form').submit();


    cy.get('[title="Proceed to Checkout"]').eq(1).click();

        cy.get('#onepage-guest-register-button').click();

    cy.get('[title="First Name"]').eq(0).type('Yakiv');
    cy.get('[title="Last Name"]').eq(0).type('Yavdoshchen');
    cy.get('[title="Company"]').eq(0).type('Lunch.co');
    cy.get('[title="Email Address"]').eq(0).type('jacobs@example.com');
    cy.get('[title="Street Address"]').eq(0).type('Jukovsokogo street');
    cy.get('[title="City"]').eq(0).type('Zaporizhzha');
    cy.get('[title="State/Province"]').eq(0).select('Zaporizhzha');
    cy.get('[title="Zip/Postal Code"]').eq(0).type('70030');
    cy.get('[title="Telephone"]').eq(0).type('1234567890');
    cy.get('[title="Ship to this address"]').check();

    cy.get('[title="Continue"]').eq(1).click();

    cy.get('#shipping-method-buttons-container .button').click();

    cy.get('#payment-buttons-container .button').click();

    cy.get('.success-msg').should('contain', 'Your order has been received.');

    cy.get('.order-number').invoke('text').then((orderNumber) => {
      cy.log(`Order Number: ${orderNumber}`);
    });
    });
  });
  
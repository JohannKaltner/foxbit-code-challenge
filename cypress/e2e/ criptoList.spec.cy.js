describe("Main page assertions", () => {
  const sizes = ["macbook-15", "iphone-x", "ipad-mini"];

  sizes.forEach((size) => {
    // make assertions on the list using
    // an array of different viewports
    it("should render main page and the crypto currencies list on desktop", () => {
      cy.viewport(size);
      /**
       *   let's first render the page and check for static titles
       *   and the skeleton list
       */

      cy.visit("http://localhost:3000");
      cy.contains("Acesse sua conta").should("exist");
      cy.contains("Loading...").should("exist");

      /**
       *  wait until render is complete
       */
      cy.wait(1500, { timeOut: 1000 });

      /**
       *  Look for login page input fields
       */
      cy.get("input[name=email]").should("exist");
      cy.get("input[name=password]");

      /**
       *  considering the list won't return more than 79 crypto currencies
       *  let's check if the length is accurate. (> 1 | < 80)
       */

      cy.get("[data-cy=crypto-item]").should("have.length.above", 1);
      cy.get("[data-cy=crypto-item]").should("have.length.below", 80);

      /**
       *   should Display de currency symbol
       */

      cy.get("[data-cy=crypto-item] [data-cy=crypto-item-symbol]")
        .first()
        .should("have.text", "BTC/BRL");

      /**
       *   should show badge with price variation
       */
      cy.get(
        "[data-cy=crypto-item] [data-cy=crypto-item-badge] [data-cy=crypto-item-badge-text]"
      )
        .first()
        .invoke("text")
        .should("exist");

      /**
       *   should show currency icon
       */
      cy.get("[data-cy=crypto-item] img").first().should("exist");
    });
  });
});

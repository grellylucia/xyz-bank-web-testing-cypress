export function shouldContaintText(selector, ...args){
    return cy.get(selector).should('contain', ...args);
};

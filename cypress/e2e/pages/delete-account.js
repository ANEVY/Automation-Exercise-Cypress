class DeleteAccount {
  getHeader() {
    return cy.get("h2[data-qa='account-deleted']");
  }
  getContinueLink() {
    return cy.get('[data-qa="continue-button"]');
  }
}
export default DeleteAccount;

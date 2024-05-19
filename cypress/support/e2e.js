// Import commands.js using ES2015 syntax:
import './commands'
import './assertions'

Cypress.on('uncaught:exception', (err, runnable) => {
  // Prevent Cypress from failing the test on uncaught exceptions
  console.error('Uncaught exception:', err);
  return false;
});

Cypress.on('fail', (error, runnable) => {
  // Custom error handling logic
  console.error('Test failed:', error);
  throw error; // Re-throw to fail the test
});

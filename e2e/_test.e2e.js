Feature('Home page');

Scenario('Start page display', (I) => {
    I.amOnPage('http://localhost:3000/');
    I.see('Test');
});
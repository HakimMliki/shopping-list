Feature('Home page');

Scenario('Start page display', (I) => {
    I.amOnPage('http://0.0.0.0');
    I.see('Test');
});

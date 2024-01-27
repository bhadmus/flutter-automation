const allureReporter = require('@wdio/allure-reporter').default
const Screen = require('../pageobjects/screens.page')
describe('Launch app and search', () => {
    it('Click button and Type', async () => {
        allureReporter.addFeature('Shopping');
        await Screen.clickGetStartedButton();
        await Screen.searchForJeans();
    });
});


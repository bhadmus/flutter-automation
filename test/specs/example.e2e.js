const Screen = require('../pageobjects/screens.page')
describe('Launch app and search', () => {
    it('Click button and Type', async () => {
        await Screen.clickGetStartedButton();
        await Screen.searchForJeans();
    });
});


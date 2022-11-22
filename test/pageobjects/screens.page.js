const find = require('appium-flutter-finder');
const assert = require('assert');

class ScreenPage {

    async clickGetStartedButton(){
        const button = find.byText('Get Started')
        assert.strictEqual(await driver.getElementText(find.byText('Get Started')), 'Get Started')
        await driver.elementClick(button)

    }

    async searchForJeans(){
        await driver.execute('flutter:waitFor', find.byType('TextFormField'))
        await driver.elementSendKeys(find.byType('TextFormField'), 'Jeans')
    }
}
module.exports = new ScreenPage();
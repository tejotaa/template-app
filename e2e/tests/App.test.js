describe('App - ', () => {
    beforeAll(async () => {
        await device.launchApp();
    });

    test('should show the page one', () => {
        element(by.text('Home'));

        element(by.id('home'));
        element(by.id('settings'));
    });

    test('should show the page two when click on the tab two icon', () => {
        element(by.id('settings')).tap();
        element(by.text('Settings'));

        element(by.id('home'));
        element(by.id('settings'));
    });
});

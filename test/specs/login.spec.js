describe('Login', () => {
    const email = 'TwistedClaudia@yahoo.com';
    const password = 'Eminem1984!';

    it('should open my movies', () => {
        browser.url('/');
        browser.waitUntil(() => {
            return $$('.card').length > 0;
        })
    });
    it('should open login page', () => {
        $('.nav-link=Login').click();
        $('.card-body').waitForDisplayed();
    });
    it('should check if username is filled in', () => {
        $('#input-1').addValue(email);
        expect($('#input-1').getValue()).toBe(email);
    });
    it('should check if password is filled in', () => {
        $('#input-3').addValue(password);
        expect($('#input-3').getValue()).toBe(password);
    });
    it('should be able to login', () => {
        $('.btn-primary').click();
        $('.nav-link=Add movie').waitForDisplayed();
    });
});
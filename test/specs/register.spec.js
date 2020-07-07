import NavBar from '../pageObjects/navbar';
import Register from '../pageObjects/register';

describe('Register', () => {
    const register = new Register();
    const navbar = new NavBar();
    const username = 'dastesttest';
    const email = 'email2021@yahoo.com';
    const password = 'Password!23';

    it('should open my movies', () => {
        browser.url('/');
        browser.waitUntil(() => {
            return $$('.card').length > 0;
        })
    });
    it('should open register.js page', () => {
        navbar.registerLink.click();
        register.container.waitForDisplayed();
    });
    it('should check if username is filled in', () => {
        register.usernameInput.addValue(username);
        expect(register.usernameInput.getValue()).toBe(username);
    });
    it ('should check if e-mail is filled in', () => {
        register.emailInput.addValue(email);
        expect(register.emailInput.getValue()).toBe(email);
    });
    it('should check if password is filled in', () => {
        register.passwordInput.addValue(password);
        expect(register.passwordInput.getValue()).toBe(password);
    });
    it('should check if the retyped password is same to password', () => {
        register.passwordReTypeInput.addValue(password);
        expect(register.passwordReTypeInput.getValue()).toBe(password);
    });
    it('should check if checkbox is checked', () => {
        register.checkboxLabel.click();
        expect(register.checkboxInput.isSelected()).toBeTruthy();
    });
    it('should click create button', () => {
        register.createButton.click();
        navbar.addMovieLink.waitForDisplayed();
    })

});
import NavBar from '../pageObjects/navbar';
import Login from '../pageObjects/login';

describe('Login', () => {
    const navbar = new NavBar();
    const login = new Login();
    const email = 'email2021@yahoo.com';
    const password = 'Password!23';

    it('should open my movies', () => {
        browser.url('/');
        browser.waitUntil(() => {
            return $$('.card').length > 0;
        })
    });
    it('should open login page', () => {
        navbar.loginLink.click();
        login.container.waitForDisplayed();
    });
    it('should be able to login', () => {
        login.login(email,password);
        navbar.addMovieLink.waitForDisplayed();
    });
    it('should open My Movies page', () => {
        navbar.myMoviesLink.click();
        $('.card-body').waitForDisplayed();
    });
    it('should display Add first movie button', () => {
        expect($('.btn.btn-primary')).toBeTruthy();
    });
    it('should send user to Add Movie Page', () => {
        $('.btn.btn-primary').click();
        browser.waitUntil(() => {
            return $('.card-title').getText() === 'Add Movie';
        });
        expect(browser.getUrl()).toContain('/add-movie');
    })
});
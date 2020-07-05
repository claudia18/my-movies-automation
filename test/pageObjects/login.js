class Login {
    constructor () {
        this.mainSelector = '.card';
    }
    get container () {
        return $(this.mainSelector);
    }
    get emailInput () {
        return this.container.$('#input-1');
    }
    get passwordInput () {
        return this.container.$('#input-3');
    }
    get loginButton () {
        return this.container.$('.btn-primary');
    }
}

export default Login;
class Register {
    constructor() {
        this.mainSelector = '.container';
    }
    get container() {
        return $(this.mainSelector);
    }
    get usernameInput () {
        return this.container.$('#input-1');
    }
    get emailInput () {
       return this.container.$('#input-2');
    }
    get passwordInput () {
        return this.container.$('#input-3');
    }
    get passwordReTypeInput () {
        return this.container.$('#input-4');
    }
    get checkboxLabel () {
        return this.container.$('[for="checkbox-1"]');
    }
    get checkboxInput () {
        return this.container.$('#checkbox-1');
    }
    get createButton () {
        return this.container.$('.btn');
    }
}

export default Register;
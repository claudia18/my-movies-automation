class NavBar {
    constructor () {
        this.mainSelector = '.navbar';
    }
    get container () {
        return $(this.mainSelector);
    }
    get loginLink () {
        return this.container.$('.nav-link=Login');
    }
    get registerLink () {
        return this.container.$('.nav-link=Register');
    }
    get addMovieLink () {
        return this.container.$('.nav-link=Add movie');
    }
    get myMoviesLink () {
        return this.container.$('.nav-link=My movies');
    }
}

export default NavBar;
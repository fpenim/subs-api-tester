class Errors {

    constructor() {
        this.errors = [];
        this.hasErrors = false;
    }

    addError(error) {
        this.errors.push(error);
        this.hasErrors = true;
    }
}

let errors = new Errors();
module.exports = errors;
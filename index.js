
class InvalidArgumentError extends Error {
    constructor(argument, message) {
        super(message);
        this.argument = argument;
    }
}

class LoginFailError extends Error {
    constructor(message) {
        super(message);
    }
}



module.exports = {
    InvalidArgumentError: InvalidArgumentError,
}
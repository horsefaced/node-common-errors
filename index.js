
class InvalidArgumentError extends Error {
    constructor(argument, message) {
        super(message);
        this.argument = argument;
    }
}



module.exports = {
    InvalidArgumentError: InvalidArgumentError,
}
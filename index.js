
class InvalidArgumentError extends Error {
    constructor(argument, message) {
        super(message);
        this.argument = argument;
    }
}

class LoginFailError extends Error {
    constructor(ip, user, password, message = 'login failed') {
        super(message);
        this.ip = ip;
        this.user = user;
        this.password = password;
    }
}



module.exports = {
    InvalidArgumentError: InvalidArgumentError,
    LoginFailError: LoginFailError,
}
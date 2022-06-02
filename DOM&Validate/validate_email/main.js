function isValidEmail(email) {
    let regex = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/
    if (regex.test(email)) {
        return true;
    }
    return false;
}
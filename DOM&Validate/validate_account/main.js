function isValidAccount(account) {
    let regex = /^[_a-z0-9]{6,}$/
    if (regex.test(account)) {
        return true;
    }
    return false;
    
}
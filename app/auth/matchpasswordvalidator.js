"use strict";
function matchingPasswords(passwordKey, confirmPasswordKey) {
    return function (group) {
        var password = group.controls[passwordKey];
        var confirmPassword = group.controls[confirmPasswordKey];
        if (password.value !== confirmPassword.value) {
            return {
                mismatchedPasswords: true
            };
        }
    };
}
exports.matchingPasswords = matchingPasswords;
//# sourceMappingURL=matchpasswordvalidator.js.map
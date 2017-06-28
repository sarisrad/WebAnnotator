"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User(data) {
        if (data != null) {
            this._id = data._id;
            this.name = data.name;
            this.family_name = data.family_name;
            this.password = data.password;
            this.email = data.email;
            this.affiliation = data.affiliation;
            this.role = data.role;
        }
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map
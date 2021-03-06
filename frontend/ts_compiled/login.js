"use strict";

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator.throw(value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var pageController = require("./page");
var pageUtils = require("./page_utils");
var jQuery = $;
function doLogin() {
    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
        var resultStr, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return new Promise(function (callback) {
                            jQuery.post("authenticate.php", JSON.stringify({
                                "username": pageController.app.$data.loginUserName,
                                "password": pageController.app.$data.loginPassword
                            }), function (resp) {
                                callback(resp);
                            });
                        });

                    case 2:
                        resultStr = _context.sent;
                        result = null;
                        _context.prev = 4;

                        result = JSON.parse(resultStr);
                        _context.next = 12;
                        break;

                    case 8:
                        _context.prev = 8;
                        _context.t0 = _context["catch"](4);

                        pageUtils.showAlert("Login failed: Unable to parse response");
                        return _context.abrupt("return");

                    case 12:
                        if (result.err !== 0) {
                            pageUtils.showAlert("Error " + result.err.toString() + ": " + result.msg);
                        } else {
                            pageUtils.showAlert("Logged in");
                            location.replace(result.location);
                        }

                    case 13:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this, [[4, 8]]);
    }));
}
exports.doLogin = doLogin;
function loadLoginPage() {
    pageController.app.$data.pageTitle = "Login";
    pageController.app.$data.showLoginForm = true;
    pageController.app.$data.mainAlertIsShowed = false;
}
exports.loadLoginPage = loadLoginPage;
//# sourceMappingURL=login.js.map
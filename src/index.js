"use strict";
exports.__esModule = true;
var dotenv_1 = require("dotenv");
var express_1 = require("express");
var path_1 = require("path");
dotenv_1["default"].config();
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.get("/", function (req, res) {
    res.sendFile(path_1["default"].join(__dirname, "../../public/index.html"));
});
app.use(express_1["default"].static(path_1["default"].join(__dirname, "../../public")));
app.get("/signin", function (req, res) {
    res.sendFile(path_1["default"].join(__dirname, "../../public/index.html"));
});
app.get("/signup", function (req, res) {
    res.sendFile(path_1["default"].join(__dirname, "../../public/index.html"));
});
// This will catch all the routes and return index.html, and React Router will handle serving the correct page
app.get("*", function (req, res) {
    res.sendFile(path_1["default"].join(__dirname, "../../public/index.html"));
});
var PORT = 3000;
app.listen(PORT, function () {
    console.log("App listening on port ".concat(PORT));
});
//# sourceMappingURL=index.js.map
"use strict";
exports.__esModule = true;
var myWork_module_css_1 = require("../myWork/myWork.module.css");
function ProjectCap(proj) {
    return (React.createElement("div", { className: myWork_module_css_1["default"].capture },
        React.createElement("h2", { className: myWork_module_css_1["default"].projTitle }, proj.title),
        React.createElement("p", { className: myWork_module_css_1["default"].desc }, proj.description),
        React.createElement("button", { className: myWork_module_css_1["default"].btn, onClick: function () { return window.open(proj.url); } }, "Visit")));
}
exports["default"] = ProjectCap;

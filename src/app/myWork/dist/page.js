'use client';
"use strict";
exports.__esModule = true;
var portfolio_json_1 = require("../data/portfolio.json");
var projectCap_1 = require("../projectCaption/projectCap");
var myWork_module_css_1 = require("./myWork.module.css");
var the_cappa_png_1 = require("../data/images/the cappa.png");
var bakery_png_1 = require("../data/images/bakery.png");
var tic_tac_toe_png_1 = require("../data/images/tic-tac-toe.png");
var fokir_png_1 = require("../data/images/fokir.png");
var wedding_company_png_1 = require("../data/images/wedding-company.png");
var angular_task_png_1 = require("../data/images/angular-task.png");
var Todo_List_png_1 = require("../data/images/Todo-List.png");
var monkey_pox_png_1 = require("../data/images/monkey-pox.png");
var react_bootstrap_1 = require("react-bootstrap");
function myWork() {
    var renderPortfolio = function (data) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7;
        return (React.createElement("div", { className: myWork_module_css_1["default"].allProjects + " row g-3" },
            React.createElement("div", { className: "col-md-4 col-sm-6" },
                React.createElement("div", { className: myWork_module_css_1["default"].project + " " },
                    React.createElement(react_bootstrap_1.Image, { src: the_cappa_png_1["default"].src, alt: (_a = data[0]) === null || _a === void 0 ? void 0 : _a.title, width: '100%', height: '100%' }),
                    React.createElement(projectCap_1["default"], { title: (_b = data[0]) === null || _b === void 0 ? void 0 : _b.title, description: (_c = data[0]) === null || _c === void 0 ? void 0 : _c.description, url: (_d = data[0]) === null || _d === void 0 ? void 0 : _d.url }))),
            React.createElement("div", { className: "col-md-4 col-sm-6" },
                React.createElement("div", { className: myWork_module_css_1["default"].project + " " },
                    React.createElement(react_bootstrap_1.Image, { src: wedding_company_png_1["default"].src, alt: (_e = data[4]) === null || _e === void 0 ? void 0 : _e.title, width: '100%', height: '100%' }),
                    React.createElement(projectCap_1["default"], { title: (_f = data[4]) === null || _f === void 0 ? void 0 : _f.title, description: (_g = data[4]) === null || _g === void 0 ? void 0 : _g.description, url: (_h = data[4]) === null || _h === void 0 ? void 0 : _h.url }))),
            React.createElement("div", { className: "col-md-4 col-sm-6" },
                React.createElement("div", { className: myWork_module_css_1["default"].project + " " },
                    React.createElement(react_bootstrap_1.Image, { src: bakery_png_1["default"].src, alt: (_j = data[5]) === null || _j === void 0 ? void 0 : _j.title, width: '100%', height: '100%' }),
                    React.createElement(projectCap_1["default"], { title: (_k = data[5]) === null || _k === void 0 ? void 0 : _k.title, description: (_l = data[5]) === null || _l === void 0 ? void 0 : _l.description, url: (_m = data[5]) === null || _m === void 0 ? void 0 : _m.url }))),
            React.createElement("div", { className: "col-md-4 col-sm-6" },
                React.createElement("div", { className: myWork_module_css_1["default"].project + " " },
                    React.createElement(react_bootstrap_1.Image, { src: tic_tac_toe_png_1["default"].src, alt: (_o = data[1]) === null || _o === void 0 ? void 0 : _o.title, width: '100%', height: '100%' }),
                    React.createElement(projectCap_1["default"], { title: (_p = data[1]) === null || _p === void 0 ? void 0 : _p.title, description: (_q = data[1]) === null || _q === void 0 ? void 0 : _q.description, url: (_r = data[1]) === null || _r === void 0 ? void 0 : _r.url }))),
            React.createElement("div", { className: "col-md-4 col-sm-6" },
                React.createElement("div", { className: myWork_module_css_1["default"].project + " " },
                    React.createElement(react_bootstrap_1.Image, { src: fokir_png_1["default"].src, alt: (_s = data[3]) === null || _s === void 0 ? void 0 : _s.title, width: '100%', height: '100%' }),
                    React.createElement(projectCap_1["default"], { title: (_t = data[3]) === null || _t === void 0 ? void 0 : _t.title, description: (_u = data[3]) === null || _u === void 0 ? void 0 : _u.description, url: (_v = data[3]) === null || _v === void 0 ? void 0 : _v.url }))),
            React.createElement("div", { className: "col-md-4 col-sm-6" },
                React.createElement("div", { className: myWork_module_css_1["default"].project + " " },
                    React.createElement(react_bootstrap_1.Image, { src: angular_task_png_1["default"].src, alt: (_w = data[2]) === null || _w === void 0 ? void 0 : _w.title, width: '100%', height: '100%' }),
                    React.createElement(projectCap_1["default"], { title: (_x = data[2]) === null || _x === void 0 ? void 0 : _x.title, description: (_y = data[2]) === null || _y === void 0 ? void 0 : _y.description, url: (_z = data[2]) === null || _z === void 0 ? void 0 : _z.url }))),
            React.createElement("div", { className: "col-md-4 col-sm-6" },
                React.createElement("div", { className: myWork_module_css_1["default"].project + " " },
                    React.createElement(react_bootstrap_1.Image, { src: monkey_pox_png_1["default"].src, alt: (_0 = data[6]) === null || _0 === void 0 ? void 0 : _0.title, width: '100%', height: '100%' }),
                    React.createElement(projectCap_1["default"], { title: (_1 = data[6]) === null || _1 === void 0 ? void 0 : _1.title, description: (_2 = data[6]) === null || _2 === void 0 ? void 0 : _2.description, url: (_3 = data[6]) === null || _3 === void 0 ? void 0 : _3.url }))),
            React.createElement("div", { className: "col-md-4 col-sm-6" },
                React.createElement("div", { className: myWork_module_css_1["default"].project + " " },
                    React.createElement(react_bootstrap_1.Image, { src: Todo_List_png_1["default"].src, alt: (_4 = data[7]) === null || _4 === void 0 ? void 0 : _4.title, width: '100%', height: '100%' }),
                    React.createElement(projectCap_1["default"], { title: (_5 = data[7]) === null || _5 === void 0 ? void 0 : _5.title, description: (_6 = data[7]) === null || _6 === void 0 ? void 0 : _6.description, url: (_7 = data[7]) === null || _7 === void 0 ? void 0 : _7.url })))));
    };
    return (React.createElement("div", { className: myWork_module_css_1["default"].fullScreen + " m-auto py-5" },
        React.createElement("div", { className: myWork_module_css_1["default"].title + " pb-4" },
            React.createElement("div", { className: myWork_module_css_1["default"].sentence },
                React.createElement("div", { className: myWork_module_css_1["default"].word },
                    React.createElement("div", { className: myWork_module_css_1["default"].wrapper },
                        React.createElement("h1", { className: myWork_module_css_1["default"].letter }, "M"),
                        React.createElement("h1", { className: myWork_module_css_1["default"].shadow }, "M")),
                    React.createElement("div", { className: myWork_module_css_1["default"].wrapper },
                        React.createElement("h1", { className: myWork_module_css_1["default"].letter }, "y"),
                        React.createElement("h1", { className: myWork_module_css_1["default"].shadow }, "y"))),
                React.createElement("div", { className: myWork_module_css_1["default"].word },
                    React.createElement("div", { className: myWork_module_css_1["default"].wrapper },
                        React.createElement("h1", { className: myWork_module_css_1["default"].letter }, "W"),
                        React.createElement("h1", { className: myWork_module_css_1["default"].shadow }, "W")),
                    React.createElement("div", { className: myWork_module_css_1["default"].wrapper },
                        React.createElement("h1", { className: myWork_module_css_1["default"].letter }, "o"),
                        React.createElement("h1", { className: myWork_module_css_1["default"].shadow }, "o")),
                    React.createElement("div", { className: myWork_module_css_1["default"].wrapper },
                        React.createElement("h1", { className: myWork_module_css_1["default"].letter }, "r"),
                        React.createElement("h1", { className: myWork_module_css_1["default"].shadow }, "r")),
                    React.createElement("div", { className: myWork_module_css_1["default"].wrapper },
                        React.createElement("h1", { className: myWork_module_css_1["default"].letter }, "k"),
                        React.createElement("h1", { className: myWork_module_css_1["default"].shadow }, "k"))))),
        React.createElement("div", { className: 'container' }, renderPortfolio(portfolio_json_1["default"].portfolio))));
}
exports["default"] = myWork;

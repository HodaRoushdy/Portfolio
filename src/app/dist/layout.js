"use strict";
exports.__esModule = true;
require("animate.css");
require("bootstrap/dist/css/bootstrap.min.css");
var google_1 = require("next/font/google");
var react_1 = require("react");
var react_helmet_1 = require("react-helmet");
var page_1 = require("./drawer/page");
require("./globals.css");
var page_module_css_1 = require("./page.module.css");
var inter = google_1.Inter({ subsets: ['latin'] });
function RootLayout(_a) {
    var children = _a.children;
    return (react_1["default"].createElement("html", { lang: "en" },
        react_1["default"].createElement("head", null,
            react_1["default"].createElement("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }),
            react_1["default"].createElement("link", { rel: "preconnect", href: "https://fonts.gstatic.com" }),
            react_1["default"].createElement("link", { href: "https://fonts.googleapis.com/css2?family=Spectral:ital,wght@1,200&display=swap", rel: "stylesheet" })),
        react_1["default"].createElement("body", { className: inter.className },
            react_1["default"].createElement("div", { className: page_module_css_1["default"].navaya },
                react_1["default"].createElement(page_1["default"], null)),
            children,
            react_1["default"].createElement(react_helmet_1.Helmet, null,
                react_1["default"].createElement("script", { async: true, src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" }),
                react_1["default"].createElement("script", { async: true, src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js" }),
                react_1["default"].createElement("script", { async: true, src: "https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js" })))));
}
exports["default"] = RootLayout;

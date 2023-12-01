'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var Box_1 = require("@mui/material/Box");
var Button_1 = require("@mui/material/Button");
var Divider_1 = require("@mui/material/Divider");
var Drawer_1 = require("@mui/material/Drawer");
var List_1 = require("@mui/material/List");
var ListItem_1 = require("@mui/material/ListItem");
var ListItemButton_1 = require("@mui/material/ListItemButton");
var ListItemText_1 = require("@mui/material/ListItemText");
var image_1 = require("next/image");
var link_1 = require("next/link");
var React = require("react");
var ai_1 = require("react-icons/ai");
var bi_1 = require("react-icons/bi");
var fa_1 = require("react-icons/fa");
var fa6_1 = require("react-icons/fa6");
var hi2_1 = require("react-icons/hi2");
var io5_1 = require("react-icons/io5");
var md_1 = require("react-icons/md");
var logo_svg_1 = require("../../../assets/logo.svg");
var drawer_module_css_1 = require("./drawer.module.css");
function AppDrawer() {
    var _a = React.useState({ left: false }), state = _a[0], setState = _a[1];
    var toggleDrawer = function (anchor, open) {
        return function (event) {
            var _a;
            if (event.type === 'keydown' &&
                (event.key === 'Tab' ||
                    event.key === 'Shift')) {
                return;
            }
            setState(__assign(__assign({}, state), (_a = {}, _a[anchor] = open, _a)));
        };
    };
    var list = function (anchor) { return (React.createElement(Box_1["default"], { className: drawer_module_css_1["default"].navbar, role: "presentation", onClick: toggleDrawer(anchor, false), onKeyDown: toggleDrawer(anchor, false) },
        React.createElement(List_1["default"], { className: 'd-flex flex-column align-items-center' }, [React.createElement(image_1["default"], { key: 0, src: logo_svg_1["default"].src, alt: 'logo', width: '50', height: '100' }),
            React.createElement(link_1["default"], { key: 1, href: "/" },
                React.createElement(hi2_1.HiOutlineHome, { style: { color: 'black', width: '100%' } })),
            React.createElement(link_1["default"], { key: 2, href: "/about" },
                React.createElement(io5_1.IoPersonOutline, { style: { color: 'black', width: '100%' } })),
            React.createElement(link_1["default"], { key: 3, href: "/skills" },
                React.createElement(io5_1.IoSettingsOutline, { style: { color: 'black', width: '100%' } })),
            React.createElement(link_1["default"], { key: 4, href: "/tips" },
                React.createElement(md_1.MdOutlineTipsAndUpdates, { style: { color: 'black', width: '100%' } })),
            React.createElement(link_1["default"], { key: 5, href: "/myWork" },
                React.createElement(hi2_1.HiOutlineEye, { style: { color: 'black', width: '100%' } })),
            React.createElement(link_1["default"], { key: 6, href: "/contact" },
                React.createElement(bi_1.BiMessageDetail, { style: { color: 'black', width: '100%' } }))
        ].map(function (text, index) { return (React.createElement(ListItem_1["default"], { key: index, disablePadding: true },
            React.createElement(ListItemButton_1["default"], null,
                React.createElement(ListItemText_1["default"], { primary: text })))); })),
        React.createElement(Divider_1["default"], null),
        React.createElement(List_1["default"], null, [React.createElement("a", { key: 0, href: "https://www.linkedin.com/in/huda-roushdy-87362a228/" },
                React.createElement(ai_1.AiFillLinkedin, { style: { color: 'black' }, className: 'my-3' })),
            React.createElement("a", { key: 1, href: "https://github.com/HodaRoushdy" },
                React.createElement(fa6_1.FaGithub, { style: { color: 'black' }, className: 'my-3' })),
            React.createElement("a", { key: 2, href: 'Huda CV.pdf', target: "_blank", download: "Huda-Roushdy" },
                React.createElement(fa_1.FaDownload, { style: { color: 'black' } }))].map(function (text, index) { return (React.createElement(ListItem_1["default"], { key: index, disablePadding: true },
            React.createElement(ListItemButton_1["default"], null,
                React.createElement(ListItemText_1["default"], { primary: text })))); })))); };
    return (React.createElement("div", null, ['left'].map(function (anchor) { return (React.createElement(React.Fragment, { key: anchor },
        React.createElement(Button_1["default"], { onClick: toggleDrawer(anchor, true), className: drawer_module_css_1["default"].toggleBtn },
            React.createElement(io5_1.IoReorderThree, { className: drawer_module_css_1["default"].iconaya })),
        React.createElement(Drawer_1["default"], { anchor: anchor, open: state[anchor], onClose: toggleDrawer(anchor, false) }, list(anchor)))); })));
}
exports["default"] = AppDrawer;

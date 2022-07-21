"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("react-dom/client");
const react_1 = require("react");
const App_1 = require("./App");
const react_router_dom_1 = require("react-router-dom");
const rootElement = document.getElementById('root');
const root = (0, client_1.createRoot)(rootElement);
root.render(react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
    react_1.default.createElement(App_1.default, null)));
//# sourceMappingURL=index.js.map
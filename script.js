import { renderTable } from "./utils.js";
import { CARS } from "./const.js";

var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);

var Header = function Header() {
    return React.createElement(
        "h1",
        null,
        "Car Specs"
    );
};

var Table = function Table() {
    return React.createElement(
        "table",
        null,
        renderTable(CARS)
    );
};

var App = function App() {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(Header, null),
        React.createElement(Table, null)
    );
};

root.render(React.createElement(App, null));
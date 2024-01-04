import { renderObject, renderArray } from "./utils.js";
import { CARS } from "./const.js";

var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);

var Header = function Header() {
    return React.createElement(
        "caption",
        null,
        "Car Specs"
    );
};

var Body = function Body() {
    return renderArray(CARS);
};

var Table = function Table() {
    return React.createElement(
        "table",
        null,
        React.createElement(Header, null),
        React.createElement(Body, null)
    );
};

var App = function App() {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(Table, null)
    );
};

root.render(React.createElement(App, null));
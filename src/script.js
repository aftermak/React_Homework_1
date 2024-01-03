import { renderObject, renderArray } from "./utils.js";
import { CARS } from "./const.js";

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

const Header = () => {
    return <caption>
        Car Specs
    </caption>
}

const Body = () => {
    return <tbody>
        {renderArray(CARS)}
    </tbody>
}

const Table = () => {
    return <table>
        <Header />
        <Body />
    </table>
}

const App = () => {
    return <React.Fragment>
        <Table />
    </React.Fragment>
}


root.render(<App />);

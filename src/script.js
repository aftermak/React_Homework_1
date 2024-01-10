import { renderTable } from "./utils.js";
import { CARS } from "./const.js";

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

const Header = () => {
    return <h1>Car Specs</h1>
}

const Table = () => {
    return <table>
        {renderTable(CARS)}
    </table>
}

const App = () => {
  return <React.Fragment>
      <Header />
      <Table />
  </React.Fragment>
};

root.render(<App />);

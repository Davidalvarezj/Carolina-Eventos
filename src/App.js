import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <header className="App-header">
          <p>Hello there !!!</p>
          <button className="btn btn-primary">Press me!</button>
        </header>
      </div>
    </>
  );
}

export default App;

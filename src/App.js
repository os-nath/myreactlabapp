import "../src/css/App.css";
import SubHeader from "./components/Hearts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          <code>
            Edita a <span className="editable">vida</span>, atualiza e segue o
            baile!
          </code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ p: 100 }}
        >
          Ongoing learning
        </a>
        <br />
        <SubHeader />
      </header>
    </div>
  );
}

export default App;

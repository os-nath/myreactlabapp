import "../src/css/App.css";
import SubHeader from "./Hearts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          <code>
            Edit <span className="editable">life</span>, reload and keep going!
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

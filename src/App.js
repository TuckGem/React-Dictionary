import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="dictionary-title">Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="book" />
        </main>
        <footer>
          <a
            className="gitLink"
            href="https://github.com/TuckGem/React-Dictionary/tree/main"
            target="_blank"
            rel="noreferrer"
          >
            Open-source
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;

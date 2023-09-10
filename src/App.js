import logo from './logo-pix.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my personal domain for a instant payment tool.
          <br />
          Since the ".com.br" is unavailable, i bought this one.
        </p>
        contact me:
        <a
          className="App-link"
          href="mailto:webmaster@nomeupix.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          webmaster@nomeupix.com .
        </a>
        <br />
      </header>
      <footer>
        <p>
          Copyright TZL Info - 2023.
        </p>
      </footer>
    </div>
  );
}

export default App;

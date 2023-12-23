import logo from './images/logo.svg';
import './css/App.css';
import Navbar from './components/Navbar';
import Opener from './components/Opener';

function App() {
  return (
    <div>
      <body>
        <div>
          <Opener/>
        </div>
        <div>
          <Navbar/>
        </div>
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </body>
    </div>
  );
}

export default App;

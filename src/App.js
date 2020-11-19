import logo from './logo.svg';
import './App.css';

const OPTION_1 = 1;
const OPTION_2 = 2;
const OPTION_3 = 3;

function App() {
  let bottomText;
  switch(2) {case OPTION_1: bottomText = 'option 1'; case OPTION_2: bottomText = 'option 2'; case OPTION_3: bottomText = 'option 3'}
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;

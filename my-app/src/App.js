import './Styling.css';
import Header from './page_components/header.js';

function App() {
  return (
  <div className="Dark-theme">
      <br/>
      <Header/>
      <br/>
      <div className="Content">

        <p>
          Wow, what a first commit for <code>Méabh</code> the website!
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
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Book from './Book/Book';

function App() {
  return (
   
    <div className="row App">
      <header className="App-header">
       
       <div className="App-box">
       <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          title="Learn React"
        >
           <img src={logo} className="App-logo" alt="logo" />
        
        </a>
       </div>
      </header>
      <Book  />

    </div>
  );
}

export default App;

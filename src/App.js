import logo from './logo.svg';
import './App.css';
import Book from './Components/Book/Book';
import UserCC8 from './Components/Users_C8/User_c8'; 
import UserCC9 from './Components/Users_C9/User_c9'; 

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
      <UserCC8 /> 
      <UserCC9 /> 
    </div>
  );
}

export default App;

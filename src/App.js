import './App.css';
import Book from './Components/Book/Book';
import UserCC8 from './Components/Users_C8/User_c8'; 
import UserCC9 from './Components/Users_C9/User_c9'; 
import PageCh10 from './Components/testCh10/pageCh10'
function App() {
  return (
   
    <div className="row App">
      <Book  />
      <UserCC8 /> 
      <UserCC9 />  
      <PageCh10 />


      <div><hr/> </div>
    </div>
  );
}

export default App;

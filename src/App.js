import './App.css';
import Book from './Components/Book/Book';
import UserCC8 from './Components/Users_C8/User_c8'; 
import UserCC9 from './Components/Users_C9/User_c9'; 
import PageCh10 from './Components/testCh10/pageCh10'
import PageCh12 from './Components/testCh12/pageCh12';  
import PageCh13 from './Components/testCh13/pageCh13';
function App() {
  return (
   
    <div className="row App">
      <Book  />
      <UserCC8 /> 
      <UserCC9 />  
      <PageCh10 />
      <PageCh12 />
      <PageCh13 />
      
      <div><hr/> </div>
    </div>
  );
}

export default App;

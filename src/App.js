import './App.css';
import Book from './Components/Book/Book';
import UserCC8 from './Components/Users_C8/User_c8'; 
import UserCC9 from './Components/Users_C9/User_c9'; 
import PageCh10 from './Components/testCh10/pageCh10'
import PageCh12 from './Components/testCh12/pageCh12';  
import PageCh13 from './Components/testCh13/pageCh13';
import PageCh15 from './Components/testCh15/pageCh15';
import PageCh16 from './Components/testCh16/pageCh16';
function App() {
  return (
   
    <div className="row App">
      <Book  />
      <UserCC8 /> 
      <UserCC9 />  
      <PageCh10 />
      <PageCh12 />
      <PageCh13 />
      <PageCh15 />
      <PageCh16 />
      <div><hr/> </div>
    </div>
  );
}

export default App;

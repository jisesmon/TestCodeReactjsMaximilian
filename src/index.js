import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 import { Provider  } from "react-redux";//of ch18 redux test 1,2,3
//import { storet1 } from './Components/testCh18/redux-store-t1/storet1';//of ch18  redux test 1
//import { storet2 } from './Components/testCh18/reduxjs-toolkit-store-t2/storet2'; //of ch18  redux test 2 ,3
import { store} from './Components/testCh19/store/index'; //ch19
import { BrowserRouter  } from 'react-router-dom';  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
     <Provider    store={store}>
     <BrowserRouter>
     <App />
    </BrowserRouter>
     </Provider >
    //  </React.StrictMode>  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

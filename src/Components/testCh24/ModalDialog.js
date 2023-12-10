import React from "react";
import   ReactDOM   from "react-dom";
import "./ModalDialog.css";
import { Transition } from "react-transition-group";

const Backdorp24 = (props) => {
 // return (<>{ props.show && <div className="backdorp24 " onClick={props.onClose}></div>} </>)
let cssclass =['backdorp24' ,
props.show ?'backdorp24Open' :'backdorp24Close'
];
 return (   <div className={cssclass.join(' ')} onClick={props.onClose}></div> )
}


const  Modal24= (props) => {
  let cssclass =['Modal24' ,
     props.show ?'Modal24Open' :'Modal24Close'
  ];
  return (  
    
      <div className={cssclass.join(' ')}>
        <div className="Modal24-dialog">
          <div className="Modal24-content">
            <div className="Modal24-header">
              <h5 className="Modal24-title">{props.title}</h5>
            </div>
            <div className="Modal24-body">
              <p>{props.message}</p>
            </div>
            <div className="Modal24-footer">
              <button
                type="button"
                className="btn btn-danger"
                onClick={props.onClose}
                data-bs-dismiss="Modal24"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div> 
     
    ) 
    //!! <Transition in createPortal not work
/*  return (  <Transition  in={props.show}   timeout={1000} >
      {state=>{
          const cssclass =['Modal24' ,
          state ==='entering' ?'Modal24Open' :(state==='exiting' || state ==='exited') ?'Modal24Close' :'Modal24Open'
          ]; 
<div className={cssclass.join(' ')}>
        <div className="Modal24-dialog">
          <div className="Modal24-content">
            <div className="Modal24-header">
              <h5 className="Modal24-title">{props.title}</h5>
            </div>
            <div className="Modal24-body">
              <p>{props.message}</p>
            </div>
            <div className="Modal24-footer">
              <button
                type="button"
                className="btn btn-danger"
                onClick={props.onClose}
                data-bs-dismiss="Modal24"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>  
}}
       </Transition>  )*/
 
}

const  ModalDialog = (props) => {
  return (
    <>
     {
      ReactDOM.createPortal(
        <Backdorp24  onClose={props.onClose} show={props.show}/>
        ,document.getElementById('root--backdorp9'))

     }
     {
      ReactDOM.createPortal(
        <Modal24   title={props.title} 
        message={props.message}  onClose={props.onClose} show={props.show}/>
        ,document.getElementById('root--ModelOverlay9'))

     }
     </>
  );
};

export default ModalDialog;

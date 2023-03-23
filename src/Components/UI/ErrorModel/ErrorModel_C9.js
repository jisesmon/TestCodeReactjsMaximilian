import React from "react";
import   ReactDOM   from "react-dom";
import "./ErrorModel_C9.css";

const Backdorp9 = (props) => {
  return ( <div className="backdorp9 " onClick={props.onClose}></div>)
}

const ModelOverlay9 = (props) => {
  return ( 
    <div className={`modeloverlay9`}>
        <div className="modeloverlay9-dialog">
          <div className="modeloverlay9-content">
            <div className="modeloverlay9-header">
              <h5 className="modeloverlay9-title">{props.title}</h5>
            </div>
            <div className="modeloverlay9-body">
              <p>{props.message}</p>
            </div>
            <div className="modeloverlay9-footer">
              <button
                type="button"
                className="btn btn-danger"
                onClick={props.onClose}
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
  
    )
}

const ErrorModelCC9 = (props) => {
  return (
    <>
     {
      ReactDOM.createPortal(
        <Backdorp9 onClose={props.onClose}/>
        ,document.getElementById('root--backdorp9'))

     }
     {
      ReactDOM.createPortal(
        <ModelOverlay9   title={props.title} 
        message={props.message}  onClose={props.onClose}/>
        ,document.getElementById('root--ModelOverlay9'))

     }
     </>
  );
};

export default ErrorModelCC9;

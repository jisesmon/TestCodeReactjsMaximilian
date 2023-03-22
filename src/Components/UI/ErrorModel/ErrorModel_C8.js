import React from "react";
import "./ErrorModel_C8.css";

const ErrorModelCC8 = (props) => {
  return (
    <div className="ErrorModel_C8   ">
      <div className="backdorp " onClick={props.onClose}></div>
      <div className={`ErrorModel_C8-model`}>
        <div className="ErrorModel_C8-model-dialog">
          <div className="ErrorModel_C8-model-content">
            <div className="ErrorModel_C8-model-header">
              <h5 className="ErrorModel_C8-model-title">{props.title}</h5>
            </div>
            <div className="ErrorModel_C8-model-body">
              <p>{props.message}</p>
            </div>
            <div className="ErrorModel_C8-model-footer">
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
    </div>
  );
};

export default ErrorModelCC8;
